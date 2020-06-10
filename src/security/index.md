# Security

First of all, what really is security (in IT)? In simple terms it refers to the protection of information systems from harm, theft and unauthorized access/use. At the heart of the cybersecurity stands the **CIA** triad:

- **Confidentiality**: only the authorized entities (people and/or systems) have access to the data.
- **Integrity**: only the authorized entities can modify the data through well-defined procedures.
- **Availability**: there is no point in having a well guarded system if no one can use it. Also, earthquakes tend to overrule highly sophisticated security measures.

In this chapter we will focus mainly on controlling the access to our systems by leveraging certain AWS services. We saw in the IAM chapter how we, the developers, and other services gain access to the AWS resources. That's important of course for the integrity of your infrastructure (and wallet), but once our app is out into the wild how do we protect it? How can we ensure that only our servers can access our database? How can we ensure that we don't make our clients' crazy spending habits public?

## Policies

This term was mentioned briefly in the IAM chapter as the way permissions are set for the IAM identities. At a high level, policies are documents (json) describing what an entity can or cannot do. There are 2 main types of policies (these are the most relevant for developers):

- **Identity-based**: what we used at the previous chapter. They specify what the entity having it attached can do.
- **Resource-based**: they are attached to resources (most commonly to S3 buckets) and describe who/what has access to it and to what extent - the who/what is called the principal.

There are other policy types like policies to define permission boundaries which are like policies for policies.

Of course you can always check the AWS documentation [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html). Besides some intimidating blocks of texts and diagrams, it has pretty good [example policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html) to cover certain scenarios.

:::warning Exercise
Using the [policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html), create a policy which allows you (your user) to read and write objects in the S3 bucket identified by arn:aws:s3:::getting-productive-with-aws.
:::

## Security Groups
