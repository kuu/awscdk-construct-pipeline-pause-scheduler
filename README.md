# awscdk-construct-pipeline-pause-scheduler
[![View on Construct Hub](https://constructs.dev/badge?awscdk-construct-pipeline-pause-scheduler)](https://constructs.dev/packages/awscdk-construct-pipeline-pause-scheduler)

CDK Construct for toggling MediaLive pipeline pause status
* Input:
  * MediaLive channel id
  * Switch interval (minutes)
* Output:
  * Lambda function for calling MediaLive schedule API
  * EventBridge rule for periodically invoking the function

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-pipeline-pause-scheduler.png?mini=true)](https://nodei.co/npm/awscdk-construct-pipeline-pause-scheduler/)

## Usage
```ts
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';
import { PipelinePauseScheduler } from 'awscdk-construct-pipeline-pause-scheduler';

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a live channel (MediaLive + MediaPackage)
    const {eml, empv2} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      source:'s3ssl://example_bucket/test.mp4',
      autoStart: true,
    });

    // Toggle 3 states (Both -> Pause Pipeline-0 -> Pause Pipeline-1) every 5 minutes
    new PipelinePauseScheduler(this, 'PipelinePauseScheduler', {
      channelId: eml.channel.ref,
      intervalInMinutes: 5,
    });

    // Print MediaPackage V2 endpoint URL (HLS)
    if (empv2?.endpointUrls.hls) {
      new cdk.CfnOutput(this, "MediaPackageV2HlsEndpoint", {
        value: empv2.endpointUrls.hls,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2HlsEndpoint",
        description: "MediaPackage V2 HLS endpoint URL",
      });
    }
  }
}
```
