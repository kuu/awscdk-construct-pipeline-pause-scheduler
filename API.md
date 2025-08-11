# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-pipeline-pause-scheduler'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-pipeline-pause-scheduler'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### Lambda <a name="Lambda" id="awscdk-construct-pipeline-pause-scheduler.Lambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'awscdk-construct-pipeline-pause-scheduler'

new Lambda(scope: Construct, id: string, props: LambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-pipeline-pause-scheduler.LambdaProps">LambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-pipeline-pause-scheduler.Lambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-pipeline-pause-scheduler.LambdaProps">LambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-pipeline-pause-scheduler.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-pipeline-pause-scheduler.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'awscdk-construct-pipeline-pause-scheduler'

Lambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-pipeline-pause-scheduler.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-pipeline-pause-scheduler.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-pipeline-pause-scheduler.Lambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


### PipelinePauseScheduler <a name="PipelinePauseScheduler" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer"></a>

```typescript
import { PipelinePauseScheduler } from 'awscdk-construct-pipeline-pause-scheduler'

new PipelinePauseScheduler(scope: Construct, id: string, props: PipelinePauseSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps">PipelinePauseSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps">PipelinePauseSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.isConstruct"></a>

```typescript
import { PipelinePauseScheduler } from 'awscdk-construct-pipeline-pause-scheduler'

PipelinePauseScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.lambda">lambda</a></code> | <code><a href="#awscdk-construct-pipeline-pause-scheduler.Lambda">Lambda</a></code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.schedule">schedule</a></code> | <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule">EventBridgeSchedule</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.lambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* <a href="#awscdk-construct-pipeline-pause-scheduler.Lambda">Lambda</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseScheduler.property.schedule"></a>

```typescript
public readonly schedule: EventBridgeSchedule;
```

- *Type:* <a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeSchedule">EventBridgeSchedule</a>

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-pipeline-pause-scheduler'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="awscdk-construct-pipeline-pause-scheduler.EventBridgeScheduleProps.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

### LambdaProps <a name="LambdaProps" id="awscdk-construct-pipeline-pause-scheduler.LambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-pipeline-pause-scheduler.LambdaProps.Initializer"></a>

```typescript
import { LambdaProps } from 'awscdk-construct-pipeline-pause-scheduler'

const lambdaProps: LambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.LambdaProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-pipeline-pause-scheduler.LambdaProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

### PipelinePauseSchedulerProps <a name="PipelinePauseSchedulerProps" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps.Initializer"></a>

```typescript
import { PipelinePauseSchedulerProps } from 'awscdk-construct-pipeline-pause-scheduler'

const pipelinePauseSchedulerProps: PipelinePauseSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-pipeline-pause-scheduler.PipelinePauseSchedulerProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---



