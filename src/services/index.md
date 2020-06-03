# Overview of the Main AWS Services

In the following chapters we will cover each service in greater detail however, since most services are intended to work together with other services, we will take a quick glance at the main ones and what they do.

There are two main types of resources: **computing** and **storage**. AWS offers various services for each of them and many other integration services (used to glue them).

## Compute

### EC2

Starting with the computing services, the main one here is **EC2** (**E**lastic **C**ompute **C**loud). This is AWS' offering for spinning up virtual machines. We can choose the instance type (which is part of an instance family - e.g. generale purpose or compute optimized) (you can check the catalogue [here](https://aws.amazon.com/ec2/instance-types/)) which gives us certain resources (e.g. number of vCPUs and RAM).

EC2 provides tons of features and options making it a lot more than just a service used to spin up instances. We can secure the instances (**Security Groups**), we can configure the networking (**VPC**), we can scale them vertically (choose a more powerful instance type) and horizontally (**Auto-Scaling Groups**, **Load Balancers**) and a lot more. This is also why it is considerably more expensive than more tranditional/simpler hosting offerings like Linode or Digitalocean (this holds true for other cloud providers).

The virtual machines (ec2 instances) are based on **AMI**s (more info [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)) which basically are snapshots (providing the operating system and certain software, for example the AWS CLI) used to quickly create the instance.

### Lambda

If, in case of EC2, we had to take care of the virtual machine (e.g. choose the right configuration, scaling, software updates etc.), lambda brings us to the other extreme. We don't have to configure and maintain anything other than our codebase. Lambda was the first **FaaS** (Functions as a Service) offering comming from the big cloud providers. It is considerably cheaper than EC2 since we pay only when our code is being executed. Of course there is room for both EC2 and Lambda since each of them excels at certain tasks.

:::warning Exercise
How would you categorize EC2 and Lambda from a service model perspective?
:::

## Storage

### Block Storage

Again, we have a variety of options to choose from based on our needs. If we want to store the EC2 data locally and/or need an usual file system, we would choose **EBS** (Elastic Block Storage) - this is also where the operating system and the rest of the software of the EC2 instance is stored. If we would need to be able to access the file system from multiple instances, we would go for **EFS** (Elastic File System).

### Object Storage

However, if we need object storage (e.g. to store images), we would go for **S3** (Simple Storage Service). Compared to EBS or EFS, we interact with S3 through HTTP(S) rather than by mounting it to the instance. Besides features like versioning, encryption and tiering, conveniently S3 allows us to quickly host a static website (i.e. html, js, css files). On top of S3 we might add **CloudFront**, Amazon's CDN, which will cache our assets/object at edge locations thus greatly reducing the latency (data is closer to the user).

### Databases

Most of the times we will also need a database. We might choose to install MySQL or PostgreSQL on an EC2 instance or we might choose to go for the managed alternatives offered by AWS:

1. **RDS** (**Relational** Database Service) (which includes the main RDBMS' like MySQL and Postgres and Amazon's own RDBMS, Aurora).
2. **DynamoDB** (Key-Value/Document Database)
3. Many more. You can check them out [here](https://aws.amazon.com/products/databases/).

:::warning Exercise
Why would we choose a managed database instead of setting it up on our own?
:::

## Other Services

1. **SQS** (Simple Queue Service) - We strive to make our systems as decoupled as possible, mainly to increase fault tolerance (e.g. micro-services architecture). SQS helps us sending messages between services.
2. **SNS** (Simple Notification Service) - As the name says, it's a notification system. We can use it for "external" notifications (e.g. emails and push notifications) and/or for "internal" notifications (e.g. notify other services when something happens).
3. **API Gateway** - We can use it build the interface with our client applications and send the requests to the right service. For example, if we would have some lambda functions which read and write data to some database, we can create a REST interface to expose these functions to the world. It provides tons of features like authentication, throttling and [OpenAPI](https://swagger.io/specification/) support.
4. **Cognito** - Remember the authentication mentioned at the previous point? This is what cognito is for. It's a service for managing users. You can store common fields (email, username, password etc) and custom fields (shoe size?) in it and you can easily integrate third-party authentication (google, facebook etc.).
5. **CloudWatch** - Having a system built out of so many services might lead to various challenges like monitoring and logging. This is where CloudWatch comes in. It is the central service to monitor your applications.
