# Lambda

Lambda is AWS's offering for serverless computing (aka Functions as a Service, **FaaS**). It was the first public offering of such a service and the adoption kept rising since then. It is the simplest way to run your code.

AWS does a pretty good job with their documentation and the lambda section is no exception. Check it out [here](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

## Design Considerations

The easiest way to work with lambda is to consider functions as event handlers. You don't build an app with a set of features - you build a set of functions that respond to certain events (e.g. a client requests a certain resource, a file was uploaded, user registered).

So theoretically, all you have to do is choose a language from [the supported ones](https://aws.amazon.com/lambda/faqs/#:~:text=AWS%20Lambda%20natively%20supports%20Java,%2C%20C%23%2C%20Go%20and%20PowerShell.), write your event handler, decide how much [RAM](https://dev.to/byrro/how-to-optimize-lambda-memory-and-cpu-4dj1) (**CPU is proportional to RAM**) to allocate to it and [deploy it](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html). Of course, your code should be designed to work in such evironment mainly by making sure it is **stateless**. There is really no control over how the code is executed (e.g. is a function instance reused or not) so you shouldn't make any assumptions (like storing temporary files).

Besides making your functions stateless, it should also be **idempotent**. This means that if, for some reason, your function is executed multiple times for the same event/input, the state of the system (data) should be same. This need comes from the fact that certain triggers have a chance of firing twice (usually queue based triggers) and that lambda will retry in case the execution failure. The usual way of making a function idempotent is by adding a request ID and checking wether it was already processed - see [here](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-idempotent/).

Another important consideration is the **unit of deployment**. If in case of the other approaches (EC2, ECS/Fargate, Elastic Beanstalk) you deploy the entire application, with Lambda you deploy one function. Of course, it's up to you how much responsibility your function has. You can squeeze in an entire RESTful service or you can deploy the code responsible for one operation of the service within a function. We recommend the latter: this is what lambda was designed for and its [limits](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) clearly show it. A potentially important consideration for this approach is the [cold start](https://read.acloud.guru/cold-starting-lambdas-2c663055589e).

And finally, the horizontal scaling capabilities of lambda can be a double-edged sword. Being able to handle all requests is great, but will the downstream resources be able to accept all those parallel streams of data? Probably the most common issue is running out of connections to RDS. For this, AWS came up with [RDS Proxy](https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/).

## Triggers

The most common triggers include:

- **API Gateway** (or even **Application Load Balancer**) which forwards requests to lambda (lambda acts as a backend). Additionally, you can integrate API Gateway with Lambda to [handle access control](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) (i.e. check the identity and permission of the request).
- **S3** - do something when a file is uploaded (e.g. optimize an image - be careful when uploading the image back; you don't want to run in an infinite loop).
- **DynamoDB** (DynamoDB Streams actually) - this can be especially helpful for noSQL databases since we might need to handle duplicated data (e.g. if product's name changes, we might need to update that in all open orders).
- **SDK** - we can invoke lambda functions from any program using the AWS SDK. People even use this to bypass the need of API Gateway - example [here](https://www.cloudreach.com/en/resources/blog/serverless-aws-no-api-gateway/).

The full list can be found [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html).

## Useful Lambda Features

- **Aliases**

We can minize the impact of a breaking change and make sure that our system is always available by leveraging [aliases](https://aws.amazon.com/blogs/compute/implementing-canary-deployments-of-aws-lambda-functions-with-alias-traffic-shifting/). They basically point to different co-existent versions of a function allowing you to shift traffic (gradually) between them.

- **Layers**

Usually, you would deploy your entire application, with all its dependencies, bundled in a zip file. You can leverage lambda layers to store dependencies separately.

- **Lambda in VPC**

You can deploy lambda in a VPC if you need it to interact with certain resources such as an RDS instance deployed in a private subnet. THe function will be able to access the internet through a NAT Gateway (even for public subnets).

- **Destinations**

You can configure lambda to send results to a destination (other lambda function, SQS queue, SNS topic or EventBridge bus). See more [here](https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/). This feature supersedes dead-letter queues.

- **Environmental Variables**

You can define environmental variables which can be accessed through the usual way (e.g. _process.env_ for Node.js functions). They can be encrypted and are defined per function version.
