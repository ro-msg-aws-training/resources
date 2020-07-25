# Serverless

First of all, what does serverless really mean? It has been a hot topic for the past few years and for good reasons.

Usually serverless refers to serverless computing, but it comes in many flavors like computing, storage, database etc. One of the first serverless services was S3 launched in 2006. A service can be considered serverless if and only if:

- you don't have to setup any infrastructure
- you don't have to provision/scale capacity
- you pay only for what you use
- the service can scale down to 0

You can see what AWS has to say about serverless together with their offer [here](https://aws.amazon.com/serverless/).

Should you go serverless? As anything else, it depends, but chances are the answer is affirmative.
The promise of serverless is that it is more cost-effective, scales to match any load and you get to focus on actual features rather than operational details. This does indeed hold true in many scenarios like for example [this story](https://www.serverless.com/blog/building-a-better-australian-census-site) of how a $10 million failed project was re-implemented using serverless services for 500\$.

Of course there also downsides. Pay-per-use, for example, is really a double-edged sword. You can save a lot, but you can also end up paying a lot. When you have a more traditional approach, your system simply slows down (or maybe goes down) in case of a huge traffic spike (which can genuine, DDoS or due to a software bug/unfortunate approach). You can find some stories [here](https://github.com/cristim/serverless-failure-stories) and, of course, there is the well-known [\$30k Firebase story](https://hackernoon.com/how-we-spent-30k-usd-in-firebase-in-less-than-72-hours-307490bd24d) (as a result of a poor data model). On the bright, cloud providers are usually helpful and understanding in most situations.

In the context of AWS, serverless architectures usually rely on **Lambda, API Gateway, DynamoDB, S3 and Cognito**. They even created a framework for implementing such systems, [**SAM**](https://aws.amazon.com/serverless/sam/) (**S**erverless **A**pplication **M**odel). It is really an abstraction over CloudFormation (see more [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html)) together with a CLI. There are other frameworks such as the well known [Serverless](https://www.serverless.com/) Framework. **[Level 200]** If AWS starts to get confusing with all their CLIs and framework checkout [this blog post](https://www.devalias.net/devalias/2018/09/15/forming-serverless-clouds-aws-cloudformation-sam-cdk-amplify/).

:::warning Exercise
**[Level 200]** Follow [this](https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/) tutorial. It's a great starting point
.
:::

**[Level 300]** You can find a good compilation of resources for developing AWS serverless systems [here](https://aws.amazon.com/blogs/architecture/ten-things-serverless-architects-should-know/).
