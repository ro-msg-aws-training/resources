(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{356:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"infrastructure-as-code-iac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-as-code-iac"}},[e._v("#")]),e._v(" Infrastructure as Code (IaC)")]),e._v(" "),a("p",[e._v("When you interact with the cloud providers for the first time, you will most likely use the web interface to provision and setup the infrastructure (e.g. launch a VM). This is a good option at the beginning since it helps you to get used to the available services and what options they offer (e.g. you see a nice list with the available AMIs and instance types when launching an EC2 instance).")]),e._v(" "),a("p",[e._v("While it might be fun for the first few times, it will become just some other repetitive and time-consuming task (and overhead) as time goes by. Additionally, manual work always imposes the risk of human error (we might forget to tick some checkbox or miss-click some instance type). Large projects can quickly add up to tens of thousands of infrastructure resources that have to be configured and provisioned.")]),e._v(" "),a("p",[e._v("These issues can be addressed by being able to declare/write the infrastructure in some text files and have cloud platforms interpret the files and automatically setup the required infrastructure for us or, in other words, infrastructure as code.")]),e._v(" "),a("p",[e._v("Other (huge) benefits of having the infrastructure declared in text files include the capability to "),a("strong",[e._v("version control")]),e._v(" your infrastructure and to "),a("strong",[e._v("review changes")]),e._v(" (just like any other piece of code).")]),e._v(" "),a("p",[e._v("In AWS, the service responsible for managing resources based on the code you provide ("),a("strong",[e._v("template")]),e._v(") is called "),a("strong",[e._v("CloudFormation")]),e._v(".")]),e._v(" "),a("p",[e._v("One important characteristic of CloudFormation is that it works with "),a("strong",[e._v("stacks")]),e._v(". These basically group all resources created by CloudFormation for a given template. This makes cleaning-up infrastructure a breeze since it is reduced down to deleting the stack (i.e. when you delete a stack, all the created EC2 instances, security groups, load balancers and so on are deleted automatically) (there are some resources that cannot/will not be deleted automatically, but we will not worry about those for now).")]),e._v(" "),a("p",[e._v("We will see more CloudFormation in the following chapters. For now it is enough if you understand its basic structure. Moreover, AWS also offers its "),a("strong",[e._v("CDK")]),e._v(" (Cloud Development Kit). With it, we can write actual code in several languages (spoiler: we will use TypeScript) (using actual programming paradigms) and let the CLI generate the corresponding CloudFormation.")]),e._v(" "),a("p",[e._v("First of all, templates are written in JSON or YAML. We (and the rest of the world) will use yaml since it is considerably easier to read and understand.If you are not familiar with yaml, take a few minutes to get a grasp of it. "),a("a",{attrs:{href:"https://dev.to/paulasantamaria/introduction-to-yaml-125f",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post"),a("OutboundLink")],1),e._v(" should be more than enough for now.")]),e._v(" "),a("p",[e._v("Templates can contain 5 main types of definitions: resources, parameters, mappings, conditions and outputs.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("This is the only mandatory type for a CloudFormation template. As the name says, "),a("strong",[e._v("resources")]),e._v(" describe the infrastructure resources that will be provisioned, such as VMs (EC2 instances), networks (VPCs), security groups, databases and many more (the complete list can be found "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("A very basic example of defining an ec2 instance is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Resources:\n  ExampleEC2Instance:\n    Type: AWS::EC2::Instance\n    Properties:\n      ImageId: ami-0ff8a91507f77f867\n      InstanceType: t2.micro\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("Most projects have different environments (dev, staging, prod etc.). While the services used to compose these environments might be the same (they should be), the amount of resources is not necessarily the same. One of the most important factors when building systems is cost optimization (this is also one of the 5 pillars of the "),a("a",{attrs:{href:"https://wa.aws.amazon.com/wat.pillars.wa-pillars.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Well-Architected Framework"),a("OutboundLink")],1),e._v(" proposed by AWS). In case of a production environment we need a certain amount of resources (to handle our users) while for the development environment, most of the times, we will need much fewer resources, for example, smaller ec2 instances.")]),e._v(" "),a("p",[e._v("We could, of course, have separate templates for each environment or we could leverage "),a("strong",[e._v("parameters")]),e._v(" to customize the resulting stack based on the same template.")]),e._v(" "),a("p",[e._v("For example, we can define a parameter to customize the ec2 instance as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Parameters:\n  InstanceTypeParameter:\n    Type: String\n    Default: t2.micro\n    AllowedValues:\n      - t2.micro\n      - m1.small\n      - m1.large\n    Description: Enter t2.micro, m1.small, or m1.large. Default is t2.micro.\n")])])]),a("p",[e._v("This parameter can then be used in the "),a("strong",[e._v("resources")]),e._v(" section:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Resources:\n  ExampleEC2Instance:\n    Type: AWS::EC2::Instance\n    Properties:\n      ImageId: ami-0ff8a91507f77f867\n      InstanceType: !Ref InstanceTypeParameter\n")])])]),a("h2",{attrs:{id:"mappings-conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mappings-conditions"}},[e._v("#")]),e._v(" Mappings & Conditions")]),e._v(" "),a("p",[e._v("If parameters are intended for customizing based on outside/user (developer) input, mappings and conditions are used to customize the resulting stack based on other factors, for example the region where the stack is being launched. They can also be used together with parameters since it is possible to define the allowed values for each parameter (e.g. the AllowedValues from above). A nice example of using mappings and conditions can be found "),a("a",{attrs:{href:"https://www.singlestoneconsulting.com/blog/cloudformation-mapping-and-conditionals-making-your-templates-more-universal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("p",[e._v("The primary usage of the outputs is to act as the input of another template. Of course we can also display them once our template is executed.")]),e._v(" "),a("h2",{attrs:{id:"further-exercise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-exercise"}},[e._v("#")]),e._v(" Further Exercise")]),e._v(" "),a("p",[a("strong",[e._v("[Level 200]")]),e._v(" As mentioned above, there is also the CDK option. In practice, CloudFormation templates tend to get quite large and hard to maintain, which is why we recommend using the CDK (it can be quite an enjoyable experience). Once you've got a feeling of the other services (especially serverless ones), tryout the "),a("a",{attrs:{href:"https://cdkworkshop.com/15-prerequisites.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CDK Workshop"),a("OutboundLink")],1),e._v(" (we recommend the TypeScript flavor).")])])}),[],!1,null,null,null);t.default=r.exports}}]);