import {
  MediaLiveClient,
  DescribeScheduleCommand,
  BatchUpdateScheduleCommand,
  BatchScheduleActionCreateRequest,
  DeleteScheduleCommand,
  PipelinePauseStateSettings,
} from '@aws-sdk/client-medialive';

const client = new MediaLiveClient({ region: process.env.REGION });

const CHANNEL_ID = process.env.CHANNEL_ID as string;
const OFFSET = 30;

// Lambda function to toggle pause state using the MediaLive schedule API
export async function handler() {
  const currentPauseState = await getCurrentPauseState();
  const nextPauseState = getNextPauseState(currentPauseState);
  await deleteSchedules();
  const startTime = new Date(Date.now() + (OFFSET * 1000));
  await scheduleEvent(Math.floor(startTime.getTime() / 1000), startTime, nextPauseState);
}

async function getCurrentPauseState(): Promise<PipelinePauseStateSettings[] | undefined> {
  const command = new DescribeScheduleCommand({ ChannelId: CHANNEL_ID });
  const response = await client.send(command);
  if (!response.ScheduleActions?.length) {
    return undefined;
  }
  return response.ScheduleActions[response.ScheduleActions.length - 1]
    .ScheduleActionSettings?.PauseStateSettings?.Pipelines;
}

function getNextPauseState(current: PipelinePauseStateSettings[] | undefined): PipelinePauseStateSettings[] {
  if (!current || current.length === 0) {
    return [{ PipelineId: 'PIPELINE_0' }];
  } else if (current[0].PipelineId === 'PIPELINE_0') {
    return [{ PipelineId: 'PIPELINE_1' }];
  }
  return [];
}

function deleteSchedules() {
  const command = new DeleteScheduleCommand({ ChannelId: CHANNEL_ID });
  return client.send(command);
}

async function scheduleEvent(eventId: number, start: Date, pauseState: PipelinePauseStateSettings[]) {
  const pauseStateToggle = createPauseStateToggleCommand(eventId, start, pauseState);
  const command = new BatchUpdateScheduleCommand({ ChannelId: CHANNEL_ID, Creates: pauseStateToggle });
  const response = await client.send(command);
  console.log(JSON.stringify(response, null, 2));
}

function createPauseStateToggleCommand(eventId: number, start: Date, pauseState: PipelinePauseStateSettings[]): BatchScheduleActionCreateRequest {
  return {
    ScheduleActions: [
      {
        ActionName: `PauseStateToggle_${eventId}`,
        ScheduleActionSettings: {
          PauseStateSettings: {
            Pipelines: pauseState,
          },
        },
        ScheduleActionStartSettings: {
          FixedModeScheduleActionStartSettings: {
            Time: start.toISOString(),
          },
        },
      },
    ],
  };
}


