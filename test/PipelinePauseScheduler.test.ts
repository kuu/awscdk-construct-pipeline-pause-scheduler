import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Lambda, EventBridgeSchedule, PipelinePauseScheduler } from '../src';

test('Create Lambda', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new Lambda(stack, 'Lambda', {
    channelId: '12345',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
});

test('Create EventBridgeSchedule', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new EventBridgeSchedule(stack, 'EventBridgeSchedule', {
    func: new Lambda(stack, 'Lambda', {
      channelId: '12345',
    }).func,
    intervalInSeconds: 60,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Events::Rule', 1);
});

test('Create ScteScheduler', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new PipelinePauseScheduler(stack, 'PipelinePauseScheduler', {
    channelId: '12345',
    intervalInMinutes: 1,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::Events::Rule', 1);
});