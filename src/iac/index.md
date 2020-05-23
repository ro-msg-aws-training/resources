# Infrastructure as Code (IaC)

When you interact with the cloud providers for the first time, you will most likely use the web interface to provision and setup the infrastructure (e.g. launch a VM). This is a good option at the beginning since it helps you to get used to the available services and what options they offer (e.g. you see a nice list with the available AMIs and instance types when launching an EC2 instance).

While it might be fun for the first few times, it will become just some other repetitive and time-consuming task (and overhead) as the time goes by. Additionally, manual work always imposes the risk of human error (we might forget to tick some checkbox or miss-click some instance type). Large projects can quickly add up to tens of thousands of infrastructure resources that have to be configured and provisioned.

These issues can be addressed by being able to declare/write the infrastructure in some text files and have cloud platforms interpret the files and automatically setup the required infrastructure for us or, in other words, infrastructure as code.

Other (huge) benefits of having the infrastructure declared in text files include the capability to **version control** your infrastructure and to **review changes** (just like any other piece of code).

In AWS, the service responsible for managing resources based on the code you provide (**template**) is called **CloudFormation**.

One important characteristic of CloudFormation is that it works with **stacks**. These basically group all resources created by CloudFormation for a given template. This makes cleaning-up infrastructure a breeze since it is reduced down to deleting the stack (i.e. when you delete a stack, all the created EC2 instances, security groups, load balancers and so on are deleted automatically) (there some resources that cannot/will not be deleted automatically, but we will not worry about those for now).

We will use CloudFormation in the following chapters. For now it is enough if you understand its basic structure. First of all, templates are written in JSON or YAML. We (and the rest of the world) will use yaml since it is considerably easier to read and understand.

If you are not familiar with yaml, take a few minutes to get a grasp of it. [This post](https://dev.to/paulasantamaria/introduction-to-yaml-125f) should be more than enough for now.

Templates can contain 5 main types of definitions: resources, parameters, mappings, conditions and outputs.
