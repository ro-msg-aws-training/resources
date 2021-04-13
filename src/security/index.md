# Security

An important part of our duty is to ensure the security and confidentiality of our users' data. This is more crucial than ever given that we tend to do more and more things online (while providing more data) and that laws and regulations start to embrace the era that we live in.

First of all, what really is security (in IT)? In simple terms, it refers to the protection of information systems from harm, theft, and unauthorized access/use. At the heart of cybersecurity stands the **CIA** triad:

- **Confidentiality**: only the authorized entities (people and/or systems) have access to the data.
- **Integrity**: only the authorized entities can modify the data through well-defined procedures.
- **Availability**: there is no point in having a well-guarded system if no one can use it. Also, earthquakes tend to overrule highly sophisticated security measures.

Before we jump into the AWS services, remember that **systems must be secure by design**. This means that we cannot just design a system that performs the tasks that we want and hope to make it secure after. We must consider from the beginning aspects like authentication (who is the user), authorization (what the user can do), communication between various components (e.g. only our application should be able to access our database), and which data should be public and which must be private and accessible only to certain users.

In this chapter, we will focus mainly on controlling access to our systems by leveraging certain AWS services. We saw in the IAM chapter how we, the developers, and other services gain access to the AWS resources. That's important of course for the integrity of your infrastructure (and wallet), but once our app is out into the wild, how do we protect it? How can we ensure that only our servers can access our database? How can we ensure that we don't make our clients' crazy spending habits public?

## Policies

This term was mentioned briefly in the IAM chapter as the way permissions are set for the IAM identities. At a high level, policies are documents (JSON) describing what an entity can or cannot do. There are 2 main types of policies (these are the most relevant for developers):

- **Identity-based**: what we used in the previous chapter. They specify what the entity having it attached can do.
- **Resource-based**: they are attached to resources (most commonly to S3 buckets) and describe who/what has access to it and to what extent - the who/what is called the principal.

There are other policy types like policies to define permission boundaries which are like policies for policies.

Of course, you can always check the AWS documentation [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html). Besides some intimidating blocks of texts and diagrams, it has pretty good [example policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html) to cover certain scenarios.

:::warning Exercise
Using the [policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html), create a policy that allows you (your user) to read and write objects in the S3 bucket identified by arn:aws:s3:::getting-productive-with-aws.
:::

## Security Groups

You can think of a security group as a firewall that can be attached to almost any part of the system. Through it, we can specify what can access our component and to what our component can send data - i.e. **inbound** and **outbound** traffic. They were designed to be attached to EC2 instances, but since a lot of services use EC2 under the hood they can be used across multiple services.

You can use security groups to restrict network access based on the following properties:

- **IP**: you can allow traffic only for certain IP addresses. For example, this is helpful if you have a server outside of AWS with a static IP.
- **CIDR**: similar to the previous option, but it applies to a range of IP addresses. (we will discuss CIDR in the networking chapter).
- **Security Group**: the first 2 options are definitely helpful, but they are also somewhat rigid. Using this option, you can limit access to only components that have a certain security group attached. For example, if our application runs on some VMs (with a certain security group) and we have a separate VM hosting our database, we can specify in the security group of the DB VM that only our application VMs can access it.

By default, a security group blocks all inbound traffic (e.g. you cannot connect to your server) and allows all outbound traffic (e.g. your server can check for update). When creating the security group, you will **whitelist** certain sources like the IP address of your computer through the SSH **protocol** on **port** 22 (this is the usual port for SSH) (SSH basically allows a terminal on our computer to execute commands on the VM).

Another important aspect to remember is that security groups are stateful. In this context, stateful means that we don't have to specifically allow traffic for both inbound and outbound. For example, if your security group doesn't allow any inbound traffic, but allows all outbound traffic, your instance can still download software updates even though this is inbound traffic (but the request for the updates was initiated by your instance).

Also a small tip, timeouts usually indicate security group issues.

:::warning Exercise
How should we configure our security group if our instance is supposed to be an application serving traffic through standard HTTP and HTTPS?
:::

## Access Control Lists (ACLs)

They can provide an additional security layer for our cloud network. If security groups control the traffic to/from an instance, a network (N)ACL controls the traffic to/from the network that instance is part of.

You will likely not have to worry too much about them, but take a quick look at the comparison between security groups and NACLs from the [AWS docs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison).
