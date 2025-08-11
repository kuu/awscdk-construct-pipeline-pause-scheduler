import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { Lambda } from './Lambda';

export interface PipelinePauseSchedulerProps {
  readonly channelId: string; // MediaLive channel ID
  readonly intervalInMinutes: number; // Interval in minutes to switch inputs
}

export class PipelinePauseScheduler extends Construct {
  public readonly lambda: Lambda;
  public readonly schedule: EventBridgeSchedule;

  constructor(scope: Construct, id: string, props: PipelinePauseSchedulerProps) {
    super(scope, id);

    const { channelId, intervalInMinutes } = props;

    // Create Lambda function to insert SCTE message using the MediaLive schedule API
    this.lambda = new Lambda(this, 'LambdaFunction', {
      channelId,
    });

    // Create EventBridge rule to invoke the Lambda function every N minutes
    this.schedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
      func: this.lambda.func,
      intervalInSeconds: intervalInMinutes * 60,
    });
  }
}