# Integration Services

## SQS (Simple Queue Service)

- Intended for one type of producers and one type of consumers
- No way to pick a certain message
- No guaranteed ordering
- Possibly duplicated messages (idempotent systems, can leverage the timestamp)
- Messages should self-sufficient (shouldn't depend on another message)
- Message is read by one client
- Visibility timeout

## SNS (Simple Notification Service)

- Can be used to notify other services when data changes in RDS
- Fanout architecture

## Kinesis

- Basically an append-only file
- Somewhat similar to SQS, can be used for same purposes, can be considerably cheaper, but requires more setup.

**[Level 300] Checkout [this video](https://www.youtube.com/watch?v=4-JmX6MIDDI) on how to choose the right service(s).**
