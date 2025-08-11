import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.210.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.2',
  name: 'awscdk-construct-pipeline-pause-scheduler',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-pipeline-pause-scheduler.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaLive',
  ],
  license: 'MIT',
  licensed: true,
  majorVersion: 1,

  deps: [
    'aws-cdk-lib',
    'constructs',
    'awscdk-construct-medialive-channel',
  ],
  bundledDeps: [
    '@aws-sdk/client-medialive',
  ],
  description: 'CDK Construct for toggling MediaLive pipeline pause/unpause',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();

