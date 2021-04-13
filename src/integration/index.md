# Integration Services

## SQS (Simple Queue Service)

- (Fully managed) Message queue.
- First AWS service (2006).
- One common use case is to avoid overwhelming the servers. Instead of sending all the requests to the servers, put them in a queue and let the servers process them at their own rate.
- Another important benefit is retention - in case the server is down, the request is not lost.
- Intended for one type of producer and one type of consumer.
- Intended for small messages (up to 256kb).
- No way to pick a certain message.
- No guaranteed ordering.
- Possibly duplicated messages (idempotent systems, can leverage the timestamp).
- Messages should self-sufficient (shouldn't depend on another message).
- One message is read (pulled) by one client.
- [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html).
- The consumer is responsible for deleting the message after processing it (otherwise it will be back in the queue after the visibility timeout).
- Consumers can use [long-polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) - mainly to reduce costs.
- There is also the FIFO variant of SQS which ensures message ordering and avoids duplication but doesn't scale as much (max 300 messages per second - still a lot).
- [Level 250] More details [here](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-how-it-works.html).

## SNS (Simple Notification Service)

- (Fully managed) Pub/sub system
- A message is published on a certain topic. All subscribers of that topic receive it.
- Messages are not retained.
- Can be used for email, SMS, push notifications.
- Can be used to send messages between services.
- Can be used to notify other services when data changes in RDS.
- Can be used to implement webhooks (can be configured to call HTTP endpoints).
- Fanout architecture (SNS + SQS) (multiple consumers + message retention).
- [Level 250] More info [here](https://docs.aws.amazon.com/sns/latest/dg/welcome.html).

## Kinesis

- Basically an append-only file.
- Somewhat similar to SQS, can be used for the same purposes, can be considerably cheaper, but requires more setup.
- Usually used for large streams of data (e.g. IoT, clickstreams, logs).
- AWS alternative to Apache Kafka (however, can store data permanently).
- There are several Kinesis services, but we usually refer to Kinesis Data Streams. See all variants [here](https://docs.aws.amazon.com/kinesis/?id=docs_gateway).
- Unlike SQS, with Kinesis you have to provision capacity (**shards**). One shard can handle writing 1MB/s or 1000 messages/s and reading 2MB/s.
- Records are ordered per shard.
- The number of shards can be adjusted.
- Works with partition keys. It determines in which shard the record goes (based on the hash of the key). The partition keys should be distributed (to distribute the load across shards).
- For consumption, it is recommended to use KCL (Kinesis Client Library).
- [Level 250] More info [here](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).

**[Level 300] Checkout [this video](https://www.youtube.com/watch?v=4-JmX6MIDDI) on how to choose the right service(s).**
