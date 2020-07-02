# Infrastructure as Code (IaC)

When you interact with the cloud providers for the first time, you will most likely use the web interface to provision and setup the infrastructure (e.g. launch a VM). This is a good option at the beginning since it helps you to get used to the available services and what options they offer (e.g. you see a nice list with the available AMIs and instance types when launching an EC2 instance).

While it might be fun for the first few times, it will become just some other repetitive and time-consuming task (and overhead) as the time goes by. Additionally, manual work always imposes the risk of human error (we might forget to tick some checkbox or miss-click some instance type). Large projects can quickly add up to tens of thousands of infrastructure resources that have to be configured and provisioned.

These issues can be addressed by being able to declare/write the infrastructure in some text files and have cloud platforms interpret the files and automatically setup the required infrastructure for us or, in other words, infrastructure as code.

Other (huge) benefits of having the infrastructure declared in text files include the capability to **version control** your infrastructure and to **review changes** (just like any other piece of code).

In AWS, the service responsible for managing resources based on the code you provide (**template**) is called **CloudFormation**.

One important characteristic of CloudFormation is that it works with **stacks**. These basically group all resources created by CloudFormation for a given template. This makes cleaning-up infrastructure a breeze since it is reduced down to deleting the stack (i.e. when you delete a stack, all the created EC2 instances, security groups, load balancers and so on are deleted automatically) (there are some resources that cannot/will not be deleted automatically, but we will not worry about those for now).

We will see more CloudFormation in the following chapters. For now it is enough if you understand its basic structure. Moreover, AWS also offers its **CDK** (Cloud Development Kit). With it, we can write actual code in several languages (spoiler: we will use TypeScript) (using actual programming paradigms) and let the CLI generate the corresponding CloudFormation.

First of all, templates are written in JSON or YAML. We (and the rest of the world) will use yaml since it is considerably easier to read and understand.If you are not familiar with yaml, take a few minutes to get a grasp of it. [This post](https://dev.to/paulasantamaria/introduction-to-yaml-125f) should be more than enough for now.

Templates can contain 5 main types of definitions: resources, parameters, mappings, conditions and outputs.

## Resources

This is the only mandatory type for a CloudFormation template. As the name says, **resources** describe the infrastructure resources that will be provisioned, such as VMs (EC2 instances), networks (VPCs), security groups, databases and many more (the complete list can be found [here](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)).

A very basic example of defining an ec2 instance is:

```
Resources:
  ExampleEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0ff8a91507f77f867
      InstanceType: t2.micro
```

## Parameters

Most projects have different environments (dev, staging, prod etc.). While the services used to compose these environments might be the same (they should be), the amount of resources is not necessarily the same. One of the most important factors when building systems is the cost optimization (this is also one of the 5 pillars of the [Well-Architected Framework](https://wa.aws.amazon.com/wat.pillars.wa-pillars.en.html) proposed by AWS). In case of a production environment we need a certain amount of resources (to handle our users) while for the development environment, most of the times, we will need much less resources, for example smaller ec2 instances.

We could, of course, have separate templates for each environment or we could leverage **parameters** to customize the resulting stack based on the same template.

For example, we can define a parameter to customize the ec2 instance as follows:

```
Parameters:
  InstanceTypeParameter:
    Type: String
    Default: t2.micro
    AllowedValues:
      - t2.micro
      - m1.small
      - m1.large
    Description: Enter t2.micro, m1.small, or m1.large. Default is t2.micro.
```

This parameter can then be used in the **resources** section:

```
Resources:
  ExampleEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0ff8a91507f77f867
      InstanceType: !Ref InstanceTypeParameter
```

## Mappings & Conditions

If parameters are intended for customizing based on outside/user (developer) input, mappings and conditions are used to customize the resulting stack based on other factors, for example the region where the stack is being launched. They can also be used together with parameters since it is possible to define the allowed values for each parameter (e.g. the AllowedValues from above). A nice example of using mappings and conditions can be found [here](https://www.singlestoneconsulting.com/blog/cloudformation-mapping-and-conditionals-making-your-templates-more-universal/).

## Outputs

The primary usage of the outputs is to act as the input of another template. Of course we can also display them once our template is executed.

## Further Exercise

**[Level 200]** As mentioned above, there is also the CDK option. In practice, CloudFormation templates tend to get quite large and hard to maintain, reason for which we recommend using the CDK (it can be quite an enjoyable experience). Once you've got a feeling of the other services (especially serverless ones), tryout the [CDK Workshop](https://cdkworkshop.com/15-prerequisites.html) (we recommend the TypeScript flavour).
