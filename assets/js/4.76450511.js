(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(e,t,a){e.exports=a.p+"assets/img/simple_arch.39522b1c.png"},349:function(e,t,a){e.exports=a.p+"assets/img/ha_arch.5a05e634.png"},356:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"elatic-compute-cloud-ec2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elatic-compute-cloud-ec2"}},[e._v("#")]),e._v(" Elatic Compute Cloud (EC2)")]),e._v(" "),s("p",[e._v("EC2 is the workhorse of AWS and it's a good one. Lately, other services which abstract EC2 tend to be used/recommended more (Elastic Beanstalk, Lightsail, Fargate and others) however, having some experience with it will help you tremendously when working with other services and to better understand your architecture.")]),e._v(" "),s("p",[e._v("The service ranges from very simple, where we just launch an instance and perform all the tasks manually by ssh-ing into it, to highly sophisticated where we can configure auto scaling groups based on custom AMIs behind load balancers while reducing costs by leveraging spot instances and savings plans (which supersed reserved instances in some ways, but not in others).")]),e._v(" "),s("h2",{attrs:{id:"ec2-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ec2-instances"}},[e._v("#")]),e._v(" EC2 Instances")]),e._v(" "),s("p",[e._v("Before we launch our own instance, let's discuss some important factors:")]),e._v(" "),s("h4",{attrs:{id:"_1-instance-type-how-big-for-what-and-of-course-how-much"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-instance-type-how-big-for-what-and-of-course-how-much"}},[e._v("#")]),e._v(" 1. Instance type (how big, for what and, of course, how much)")]),e._v(" "),s("p",[e._v("We can choose from a huge range of instance types. These types are just various pre-configured virtual machines.")]),e._v(" "),s("p",[e._v("If all we want is a server to handle usual web requests (CRUD operations, some business logic) we can start from the T family (t2/t3, called burstable. Don't worry too much about the bursting aspect unless you plan to have long-running CPU-intensive tasks) or from M family (medium) and choose a certain configuration based on the load we expect. We can start small, e.g. t2.micro, and upgrade it when needed - this is called "),s("strong",[e._v("vertical scaling")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"_2-networking-private-or-public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-networking-private-or-public"}},[e._v("#")]),e._v(" 2. Networking (private or public?)")]),e._v(" "),s("p",[e._v("When creating an EC2 instance, we choose in which VPC it will reside. Also, based on the VPC, we can choose the subnet. This is what dictates the AZ where the instance will be and whether the instance is public or not (of course we can assign it to a public subnet and choose not to give it any public IP).")]),e._v(" "),s("p",[e._v("Just like with any other computer, the networking is handled by a (virtual) networking card called ENI (Elastic Networking Interface). So, if we want an instance with multiple IP addresses, we can simply attach multiple ENIs to it.")]),e._v(" "),s("h4",{attrs:{id:"_3-launch-type-related-usually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-launch-type-related-usually"}},[e._v("#")]),e._v(" 3. Launch type ($$$ related usually)")]),e._v(" "),s("p",[e._v("The default launch type is "),s("strong",[e._v("on-demand")]),e._v(". You launch your instance whenever you want, stop/terminate it whenever you want and pay for the time you had it running (in seconds). We recommend it when getting started as choosing anything else would be premature optimization.")]),e._v(" "),s("p",[e._v("Then once, we get a feeling of our workloads and traffic, we can try to reduce the costs. For example we can commit to using the instance for the next 1 or 3 years and get a massive price cut (over 50%).")]),e._v(" "),s("p",[e._v("Also, there might be cases in which we have to run our system in a physically isolated environment (due to certain legal requirements maybe). In this case we would choose dedicated hosts launch type.")]),e._v(" "),s("h4",{attrs:{id:"_4-instance-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-instance-state"}},[e._v("#")]),e._v(" 4. Instance State")]),e._v(" "),s("p",[e._v("An instance can be in one of several states. The most important states are:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("started")]),e._v(" - Your instance is up and running and you are getting billed for every second")]),e._v(" "),s("li",[s("strong",[e._v("stopped")]),e._v(" - Your instance is shut down (i.e. it doesn't have any CPU or RAM assigned). You are paying only for the storage (OS, your app etc.).")]),e._v(" "),s("li",[s("strong",[e._v("terminated")]),e._v(" - You are done with the instance. You can choose what happens to the storage attached to the instance before it gets destroyed (do you want to keep it or also destroy it?)")])]),e._v(" "),s("h2",{attrs:{id:"storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),s("p",[e._v("An instance is basically just some virtual CPU and memory. If we want to do anything with it, we need some storage. Of course, all of them are documented "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Storage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the AWS documentation"),s("OutboundLink")],1),e._v(", but in short we have the following options:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("EBS")]),e._v(" - You can see as an SSD/HDD (or even USB stick) that you can attach to an instance. It comes in "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple options"),s("OutboundLink")],1),e._v(", but in most cases GP2 (general purpose) is enough. This is where the OS will be installed.")]),e._v(" "),s("li",[e._v("Instance Store - Blazing fast storage that is phisically attached to the host running the instance. It is intended only for temporary storage ("),s("strong",[e._v("ephemeral")]),e._v(" storage).")]),e._v(" "),s("li",[s("strong",[e._v("EFS")]),e._v(" - You can see as a network attached storage. Multiple instances from multiple AZs can connect to it (the connection is handled by an ENI).")])]),e._v(" "),s("h2",{attrs:{id:"user-data-and-amis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-data-and-amis"}},[e._v("#")]),e._v(" User Data and AMIs")]),e._v(" "),s("p",[e._v("Whenever you launch an EC2 instance, you get a bare VM (it only has the OS and some other common tools installed). Of course, you can always ssh into the instance and setup your application and the other tools you need.")]),e._v(" "),s("p",[e._v("Even better, you can use "),s("strong",[e._v("User Data")]),e._v(". It allows you to specify what to do when creating the instance (e.g. install nginx).")]),e._v(" "),s("p",[e._v("Once your machine is in the state that you want, you can create an "),s("strong",[e._v("AMI")]),e._v(" (Amazon Machine Image) from it which then can be used to create other identical instances without waiting for the initial installation. This is usually referred to as the Golden AMI.")]),e._v(" "),s("h2",{attrs:{id:"auto-scaling-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-scaling-groups"}},[e._v("#")]),e._v(" Auto Scaling Groups")]),e._v(" "),s("p",[e._v("They can be seen as managers of your instances. You tell them what kind of instance you want and how many, and the ASG handles the rest. In practice, it is always recommended to use auto scaling groups even if you have just one instance.")]),e._v(" "),s("h2",{attrs:{id:"load-balancers-elbs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-balancers-elbs"}},[e._v("#")]),e._v(" Load Balancers (ELBs)")]),e._v(" "),s("p",[e._v("The load balancer is usually the service that exposes our servers. We configure an ASG with a certain capacity (number of instances) and let the load balancer split the traffic between the instances. There are 2 types of ELBs:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Application")]),e._v(" - This is an actual proxy between the internet and your application. It receives a request from a client and makes another request (with the same data) to your application. It offers tons of features and it suits very well most cases. One important tip about it is that since the ALB creates another request, but, for some reason, you need the IP address of the original client, you can look at the request header "),s("em",[e._v("x-forwarded-for")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("Network")]),e._v(" - You can look at it like at a (very sophisticated) network router. While the ALB operates at layer 7 (HTTP, Websockets) of the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/OSI_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSI model"),s("OutboundLink")],1),e._v(", the NLB handles traffic at layer 4 (TCP/UDP) thus working with packets. You loose some features of the ALB, but gain massive performance ("),s("strong",[e._v("and scalability")]),e._v(") and the request looks like it came directly from the original client. Also, interestingly enough, it is (slightly) cheaper than an ALB (mostly because you have to configure it more).")]),e._v(" "),s("li",[e._v("There is a third option, classic, but it's deprecated.")])]),e._v(" "),s("p",[e._v("ELBs offer tons of features which are great, but we won't go over them since setting up an ELB is such a rare task. However here are a few aspects to keep in mind:")]),e._v(" "),s("ul",[s("li",[e._v("The ELB offers a static DNS name that you are supposed to use (as opposed to an IP address).")]),e._v(" "),s("li",[e._v("It can be internet facing or internal (we might need load balancing between various tiers or services of our system).")]),e._v(" "),s("li",[e._v("The ELB can check the health of your instances and forward the traffic only if the instance seems to be running (in practice, your application would have an endpoint responsible for responding to health checks - only the status code of the response is relevant, usually HTTP 200).")]),e._v(" "),s("li",[e._v("In case of an ALB, you can route traffic to different targets based on several URL components such as the hostname ("),s("em",[s("strong",[e._v("a")]),e._v(".example.com")]),e._v("), path ("),s("em",[e._v("example.com/"),s("strong",[e._v("a")])]),e._v(") and query strings ("),s("em",[e._v("example.com?"),s("strong",[e._v("service=a")])]),e._v(").")]),e._v(" "),s("li",[e._v("If, for some reason, requests must go to exactly the same instance, you can use sticky session (it shouldn't happen).")])]),e._v(" "),s("p",[e._v("If you want to get a better understanding of how to setup up a load balancer, you can follow the "),s("a",{attrs:{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getting started guide"),s("OutboundLink")],1),e._v(" and, for an event deeper understanding, you can go through some "),s("a",{attrs:{href:"https://exampleloadbalancer.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("examples"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"architecture-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture-samples"}},[e._v("#")]),e._v(" Architecture Samples")]),e._v(" "),s("p",[e._v("The simplest architecture (that still follows some principles) is the following:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(348),alt:"Simple EC2 Architecture"}})]),e._v(" "),s("p",[e._v("In many cases this might be enough. However, if we wanted make our system highly available (i.e. reduce the chance it goes down due to various reasons) and/or improve its scalability ("),s("strong",[e._v("horizontal scalability")]),e._v("), our architecture might look like the following image:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(349),alt:"Highly Available Architecture"}})]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Question 1")]),e._v(" "),s("p",[e._v("How would you compare the architectures from a networking perspective? What is different?")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Question 2")]),e._v(" "),s("p",[e._v("Do you see any potential issue with our second architecture? (Think from a functional point of view)")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("Your task is to get a web application running on your own EC2 instance while following the simple architecture from above. If you completed the "),s("a",{attrs:{href:"https://github.com/ro-msg-spring-training/resources",target:"_blank",rel:"noopener noreferrer"}},[e._v("spring training"),s("OutboundLink")],1),e._v(", you can try with that (you might have install additional software like the jdk or the RDMS). The aim is to be able to call your application from your browser/postman.")]),e._v(" "),s("p",[e._v("Tips: use git to pull the source code, use the connect button from the AWS console (you don't need to worry about the keypair - launch the instance without it) to ssh into your instance, don't forget about the security group for ssh and the port of your application.")]),e._v(" "),s("p",[e._v("Feel free to consult the "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Guide"),s("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);