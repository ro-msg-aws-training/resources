(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(e,t,o){"use strict";o.r(t);var s=o(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"security"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),o("p",[e._v("An important part of our duty is to ensure the security and confidentiality of our users' data. This is more crucial than ever given that we tend to do more and more things online (while providing more data) and that laws and regulations start to embrace the era that we live in.")]),e._v(" "),o("p",[e._v("First of all, what really is security (in IT)? In simple terms it refers to the protection of information systems from harm, theft and unauthorized access/use. At the heart of the cybersecurity stands the "),o("strong",[e._v("CIA")]),e._v(" triad:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Confidentiality")]),e._v(": only the authorized entities (people and/or systems) have access to the data.")]),e._v(" "),o("li",[o("strong",[e._v("Integrity")]),e._v(": only the authorized entities can modify the data through well-defined procedures.")]),e._v(" "),o("li",[o("strong",[e._v("Availability")]),e._v(": there is no point in having a well guarded system if no one can use it. Also, earthquakes tend to overrule highly sophisticated security measures.")])]),e._v(" "),o("p",[e._v("Before we jump into the AWS services, remember that "),o("strong",[e._v("systems must be secure by design")]),e._v(". This means that we cannot just design a system that performs the tasks that we want and hope to make it secure after. We must consider from the beginning aspects like authentication (who is the user), authorization (what the user can do), communication between various components (e.g. only our application should be able to access our database) and which data should be public and which must be private and accessible only to certain users.")]),e._v(" "),o("p",[e._v("In this chapter we will focus mainly on controlling the access to our systems by leveraging certain AWS services. We saw in the IAM chapter how we, the developers, and other services gain access to the AWS resources. That's important of course for the integrity of your infrastructure (and wallet), but once our app is out into the wild, how do we protect it? How can we ensure that only our servers can access our database? How can we ensure that we don't make our clients' crazy spending habits public?")]),e._v(" "),o("h2",{attrs:{id:"policies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#policies"}},[e._v("#")]),e._v(" Policies")]),e._v(" "),o("p",[e._v("This term was mentioned briefly in the IAM chapter as the way permissions are set for the IAM identities. At a high level, policies are documents (json) describing what an entity can or cannot do. There are 2 main types of policies (these are the most relevant for developers):")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Identity-based")]),e._v(": what we used at the previous chapter. They specify what the entity having it attached can do.")]),e._v(" "),o("li",[o("strong",[e._v("Resource-based")]),e._v(": they are attached to resources (most commonly to S3 buckets) and describe who/what has access to it and to what extent - the who/what is called the principal.")])]),e._v(" "),o("p",[e._v("There are other policy types like policies to define permission boundaries which are like policies for policies.")]),e._v(" "),o("p",[e._v("Of course you can always check the AWS documentation "),o("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". Besides some intimidating blocks of texts and diagrams, it has pretty good "),o("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("example policies"),o("OutboundLink")],1),e._v(" to cover certain scenarios.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),o("p",[e._v("Using the "),o("a",{attrs:{href:"https://awspolicygen.s3.amazonaws.com/policygen.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("policy generator"),o("OutboundLink")],1),e._v(", create a policy which allows you (your user) to read and write objects in the S3 bucket identified by arn:aws:s3:::getting-productive-with-aws.")])]),e._v(" "),o("h2",{attrs:{id:"security-groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[e._v("#")]),e._v(" Security Groups")]),e._v(" "),o("p",[e._v("You can think of a security group as a firewall that can be attached to almost any part of the system. Through it we can specify what can access our component and to what our component can send data - i.e. "),o("strong",[e._v("inbound")]),e._v(" and "),o("strong",[e._v("outbound")]),e._v(" traffic. They were designed to be attached to EC2 instances, but since a lot of services use EC2 under the hood they can be used across multiple services.")]),e._v(" "),o("p",[e._v("You can use security groups to restrict network access based on the following properties:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("IP")]),e._v(": you can allow traffic only for certain ip addresses. For example, this is helpful if you have a server outside of AWS with a static IP.")]),e._v(" "),o("li",[o("strong",[e._v("CIDR")]),e._v(": similar to the previous option, but it applies to a range of ip addresses. (we will discuss about CIDR in the networking chapter).")]),e._v(" "),o("li",[o("strong",[e._v("Security Group")]),e._v(": the first 2 options are definitely helpful, but they are also somewhat rigid. Using this option, you can limit the access to only components that have a certain security group attached. For example, if our application runs on some VMs (with a certain security group) and we have a separate VM hosting our database, we can specify in the security group of the DB VM that only our application VMs can access it.")])]),e._v(" "),o("p",[e._v("By default, a security group blocks all inbound traffic (e.g. you cannot connect to your server) and allows all outbound traffic (e.g. your server can check for update). When creating the security group, you will "),o("strong",[e._v("whitelist")]),e._v(" certain sources like the IP address of your computer through the SSH "),o("strong",[e._v("protocol")]),e._v(" on "),o("strong",[e._v("port")]),e._v(" 22 (this is the usual port for SSH) (SSH basically allows a terminal on our computer to execute commands on the VM).")]),e._v(" "),o("p",[e._v("Another important aspect to remember is that security groups are stateful. In this context, stateful means that we don't have to specifically allow traffic for both inbound and outbound. For example, if your security group doesn't allow any inbound traffic, but allows all outbound traffic, your instance can still download software updates even though this is inbound traffic (but the request for the updates was initiated by your instance).")]),e._v(" "),o("p",[e._v("Also a small tip, timeouts usually indicate security groups issues.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),o("p",[e._v("How should we configure our security group if our instance is supposed to be an application serving traffic through standard HTTP and HTTPS?")])]),e._v(" "),o("h2",{attrs:{id:"access-control-lists-acls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#access-control-lists-acls"}},[e._v("#")]),e._v(" Access Control Lists (ACLs)")]),e._v(" "),o("p",[e._v("They can provide an additional security layer for our cloud network. If security groups control the traffic to/from an instance, a network (N)ACL controls the traffic to/from the network that instance is part of.")]),e._v(" "),o("p",[e._v("You will likely not have to worry too much about them, but take a quick look at the comparison between security groups and NACLs from the "),o("a",{attrs:{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS docs"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);