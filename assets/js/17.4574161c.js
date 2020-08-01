(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{365:function(e,s,t){"use strict";t.r(s);var i=t(42),r=Object(i.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"integration-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integration-services"}},[e._v("#")]),e._v(" Integration Services")]),e._v(" "),t("h2",{attrs:{id:"sqs-simple-queue-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqs-simple-queue-service"}},[e._v("#")]),e._v(" SQS (Simple Queue Service)")]),e._v(" "),t("ul",[t("li",[e._v("(Fully managed) Message queue.")]),e._v(" "),t("li",[e._v("First AWS service (2006).")]),e._v(" "),t("li",[e._v("One common use case is to avoid overwhelming the servers. Instead of sending all the requests to the servers, put them in a queue and let the servers process them at their own rate.")]),e._v(" "),t("li",[e._v("Another important benefit is the retention - in case the server is down, the request is not lost.")]),e._v(" "),t("li",[e._v("Intended for one type of producer and one type of consumer.")]),e._v(" "),t("li",[e._v("Intended for small messages (up to 256kb).")]),e._v(" "),t("li",[e._v("No way to pick a certain message.")]),e._v(" "),t("li",[e._v("No guaranteed ordering.")]),e._v(" "),t("li",[e._v("Possibly duplicated messages (idempotent systems, can leverage the timestamp).")]),e._v(" "),t("li",[e._v("Messages should self-sufficient (shouldn't depend on another message).")]),e._v(" "),t("li",[e._v("One message is read (pulled) by one client.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visibility timeout"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("The consumer is responsible for deleting the message after processing it (otherwise it will be back in the queue after the visibility timeout).")]),e._v(" "),t("li",[e._v("Consumers can use "),t("a",{attrs:{href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("long-polling"),t("OutboundLink")],1),e._v(" - mainly to reduce costs.")]),e._v(" "),t("li",[e._v("There is also the FIFO variant of SQS which ensures message ordering and avoid duplication, but doesn't scale as much (max 300 messages per second - still a lot).")]),e._v(" "),t("li",[e._v("[Level 250] More details "),t("a",{attrs:{href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-how-it-works.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"sns-simple-notification-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sns-simple-notification-service"}},[e._v("#")]),e._v(" SNS (Simple Notification Service)")]),e._v(" "),t("ul",[t("li",[e._v("(Fully managed) Pub/sub system")]),e._v(" "),t("li",[e._v("A message is published on a certain topic. All subscribers of that topic receive it.")]),e._v(" "),t("li",[e._v("Messages are not retained.")]),e._v(" "),t("li",[e._v("Can be used for email, SMS, push notifications.")]),e._v(" "),t("li",[e._v("Can be used to send messages between services.")]),e._v(" "),t("li",[e._v("Can be used to notify other services when data changes in RDS.")]),e._v(" "),t("li",[e._v("Can be used to implement webhooks (can be configured to call HTTP endpoints).")]),e._v(" "),t("li",[e._v("Fanout architecture (SNS + SQS) (multiple consumers + message retention).")]),e._v(" "),t("li",[e._v("[Level 250] More info "),t("a",{attrs:{href:"https://docs.aws.amazon.com/sns/latest/dg/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"kinesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kinesis"}},[e._v("#")]),e._v(" Kinesis")]),e._v(" "),t("ul",[t("li",[e._v("Basically an append-only file.")]),e._v(" "),t("li",[e._v("Somewhat similar to SQS, can be used for the same purposes, can be considerably cheaper, but requires more setup.")]),e._v(" "),t("li",[e._v("Usually used for large streams of data (e.g. IoT, clickstreams, logs).")]),e._v(" "),t("li",[e._v("AWS alternative to Apache Kafka (however, can store data permanently).")]),e._v(" "),t("li",[e._v("There are several Kinesis service, but we usually refer to Kinesis Data Streams. See all variants "),t("a",{attrs:{href:"https://docs.aws.amazon.com/kinesis/?id=docs_gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Unlike SQS, with Kinesis you have to provision capacity ("),t("strong",[e._v("shards")]),e._v("). One shard can handle writing 1MB/s or 1000 messages/s and reading 2MB/s.")]),e._v(" "),t("li",[e._v("Records are ordered per shard.")]),e._v(" "),t("li",[e._v("The number of shards can be adjusted.")]),e._v(" "),t("li",[e._v("Works with partition keys. It determines in which shard the record goes (based on the hash of the key). The partition keys should be distributed (to distribute the load across shards).")]),e._v(" "),t("li",[e._v("For consuming, it is recommended to use KCL (Kinesis Client Library).")]),e._v(" "),t("li",[e._v("[Level 250] More info "),t("a",{attrs:{href:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[t("strong",[e._v("[Level 300] Checkout "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=4-JmX6MIDDI",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),t("OutboundLink")],1),e._v(" on how to choose the right service(s).")])])])}),[],!1,null,null,null);s.default=r.exports}}]);