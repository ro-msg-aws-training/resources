# Containers

Containers are great for several reasons (i.e. they help us solve the following problems):

- They enable us to achieve [environment parity](https://12factor.net/dev-prod-parity) with relative ease
- They are a great tool for running systems or other tools locally, even complex ones
- They enable us to create [self-contained](https://12factor.net/dependencies) applications

You can think of containers as a combination between a simple OS process and an entire virtual machine. Running them is as simple as running a process, yet they contain an entire environment in which our actual application can run. If you want to learn more, check out the [explanation from IBM](https://www.ibm.com/cloud/blog/containers-vs-vms) (they do an excellent job in general).

Containers are the concept (think of an OOP interface). There are several implementations of them, by far the most encountered one being [Docker](https://docs.docker.com/get-started/overview/).

## Docker

Docker already provides excellent documentation for [getting started](https://docs.docker.com/get-started/) (also checkout the new language-specific section).

Besides running a single container, docker also enables us to run and manage multi-container systems through **docker-compose**. Moreover, it is able to work with:

- [**Volumes**](https://docs.docker.com/storage/volumes/) so we can persist - containers should be **ephemeral**, anything we want to store should be outside of them - and share data between containers
- [**Networks**](https://docs.docker.com/network/) so we can configure how containers can talk to each other. There is also a built-in DNS enabling them to communicate using the container/service name instead of the IP address.
- And even [**secrets**](https://docs.docker.com/engine/swarm/secrets/) for storing and sharing sensitive information such as API keys and connection strings.

Once we have our application in a decent state, we probably want to run it somewhere. The first step would be to make the images (describing how to create the containers) available (so we or the hosting service can pull them). For this, we need a docker registry/repository.

## ECR

Elastic Container Registry - an alternative to [Docker Hub](https://hub.docker.com/) that's deeply integrated with other AWS services and provides fine-grained access control through **IAM**. See [this guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html) on how to work with ECR using the Docker CLI.

## ECS

Now that our application is ready and the images are published, we can run it. The simplest option would probably be to spin up a server (EC2 instance), install docker on it, pull the images, and run the containers.

Since the steps are clear, we could automate them or just use [ECS](https://aws.amazon.com/ecs/getting-started/) (Elastic Container Service) (checkout [this guide](https://aws.amazon.com/getting-started/hands-on/deploy-docker-containers/) for a basic intro) which already handles all of this for us.

Moreover, ECS integrates well with the docker CLI and even docker-compose. You can find out more [here](https://docs.docker.com/cloud/ecs-integration/).

:::warning Exercise
**[Level 300]** Follow [this guide](https://aws.amazon.com/blogs/containers/deploy-applications-on-amazon-ecs-using-docker-compose/) to deploy a multi-tier web application on ECS. (Use ECS on EC2 instead of Fargate)
:::

:::tip
Note that this process of running and managing containers is known as **container orchestration**. Docker Compose, Docker Swarm, Kubernetes, ECS, and others ultimately serve this purpose.
:::

ECS knows how to run containers, but it doesn't know how to provision the resources on which these containers will be running. This is something we have to take care of.

We can either set up an EC2 cluster (can be with just one instance), preferably using an ASG, and tell ECS to run on it (a.k.a. use EC2/ASG as the capacity provider). This even enables us to experiment for free if we are still within the free tier (ECS itself doesn't cost anything).

## Fargate

Another capacity provider ECS can use is Fargate. Basically, it abstracts EC2 away (AWS calls it serverless compute for containers, but it doesn't really tick all the boxes since you cannot scale it down to zero).

## EKS
