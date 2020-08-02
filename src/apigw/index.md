# API Gateway

API Gateway is AWS's implementation of the [architectural pattern](https://freecontent.manning.com/the-api-gateway-pattern/) with the same name. There can be multiple reasons to use it, but most commonly we use it to have a single point of entry for our backend services. It can serve similar purposes to an ALB, however it offers much more features.

We recommend using it if you:

- adopted a microservices/lambda architecture
- are running a SaaS product
- want to reduce as much as possible non-business code from your backend (e.g. authentication/authorization)

In practice, it tends to get quite costly even though, at first, the pricing might seem a bargain. In fact, it is usually the main cost driver for (common) serverless approaches.

## Main Features
- AuthN/Z
- Consumption control
- OpenAPI
- SDK generation
- Caching
- Transforms


## REST APIs

## HTTP APIs
