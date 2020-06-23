(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(e,t,a){"use strict";a.r(t);var s=a(43),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview-of-the-main-aws-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-the-main-aws-services"}},[e._v("#")]),e._v(" Overview of the Main AWS Services")]),e._v(" "),a("p",[e._v("In the following chapters we will cover each service in greater detail however, since most services are intended to work together with other services, we will take a quick glance at the main ones and what they do.")]),e._v(" "),a("p",[e._v("There are two main types of resources: "),a("strong",[e._v("computing")]),e._v(" and "),a("strong",[e._v("storage")]),e._v(". AWS offers various services for each of them and many other integration services (used to glue them).")]),e._v(" "),a("h2",{attrs:{id:"compute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compute"}},[e._v("#")]),e._v(" Compute")]),e._v(" "),a("h3",{attrs:{id:"ec2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ec2"}},[e._v("#")]),e._v(" EC2")]),e._v(" "),a("p",[e._v("Starting with the computing services, the main one here is "),a("strong",[e._v("EC2")]),e._v(" ("),a("strong",[e._v("E")]),e._v("lastic "),a("strong",[e._v("C")]),e._v("ompute "),a("strong",[e._v("C")]),e._v("loud). This is AWS' offering for spinning up virtual machines. We can choose the instance type (which is part of an instance family - e.g. general purpose or compute optimized) (you can check the catalogue "),a("a",{attrs:{href:"https://aws.amazon.com/ec2/instance-types/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(") which gives us certain resources (e.g. number of vCPUs and RAM).")]),e._v(" "),a("p",[e._v("EC2 provides tons of features and options making it a lot more than just a service used to spin up instances. We can secure the instances ("),a("strong",[e._v("Security Groups")]),e._v("), we can configure the networking ("),a("strong",[e._v("VPC")]),e._v("), we can scale them vertically (choose a more powerful instance type) and horizontally ("),a("strong",[e._v("Auto-Scaling Groups")]),e._v(", "),a("strong",[e._v("Load Balancers")]),e._v(") and a lot more. This is also why it is considerably more expensive than more tranditional/simpler hosting offerings like Linode or Digitalocean (this holds true for other cloud providers).")]),e._v(" "),a("p",[e._v("The virtual machines (ec2 instances) are based on "),a("strong",[e._v("AMI")]),e._v("s (more info "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(") which basically are snapshots (providing the operating system and certain software, for example the AWS CLI) used to quickly create the instance.")]),e._v(" "),a("h3",{attrs:{id:"lambda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[e._v("#")]),e._v(" Lambda")]),e._v(" "),a("p",[e._v("If, in case of EC2, we had to take care of the virtual machine (e.g. choose the right configuration, scaling, software updates etc.), lambda brings us to the other extreme. We don't have to configure and maintain anything other than our codebase. Lambda was the first "),a("strong",[e._v("FaaS")]),e._v(" (Functions as a Service) offering comming from the big cloud providers. It is considerably cheaper than EC2 since we pay only when our code is being executed. Of course there is room for both EC2 and Lambda since each of them excels at certain tasks.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),a("p",[e._v("How would you categorize EC2 and Lambda from a service model perspective?")])]),e._v(" "),a("h2",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),a("h3",{attrs:{id:"block-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-storage"}},[e._v("#")]),e._v(" Block Storage")]),e._v(" "),a("p",[e._v("Again, we have a variety of options to choose from based on our needs. If we want to store the EC2 data locally and/or need an usual file system, we would choose "),a("strong",[e._v("EBS")]),e._v(" (Elastic Block Storage) - this is also where the operating system and the rest of the software of the EC2 instance is stored. If we would need to be able to access the file system from multiple instances, we would go for "),a("strong",[e._v("EFS")]),e._v(" (Elastic File System).")]),e._v(" "),a("h3",{attrs:{id:"object-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-storage"}},[e._v("#")]),e._v(" Object Storage")]),e._v(" "),a("p",[e._v("However, if we need object storage (e.g. to store images), we would go for "),a("strong",[e._v("S3")]),e._v(" (Simple Storage Service). Compared to EBS or EFS, we interact with S3 through HTTP(S) rather than by mounting it to the instance. Besides features like versioning, encryption and tiering, conveniently S3 allows us to quickly host a static website (i.e. html, js, css files). On top of S3 we might add "),a("strong",[e._v("CloudFront")]),e._v(", Amazon's CDN, which will cache our assets/objects at edge locations thus greatly reducing the latency (since data is closer to the user).")]),e._v(" "),a("h3",{attrs:{id:"databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[e._v("#")]),e._v(" Databases")]),e._v(" "),a("p",[e._v("Most of the times we will also need a database. We might choose to install MySQL or PostgreSQL on an EC2 instance or we might choose to go for the managed alternatives offered by AWS:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("RDS")]),e._v(" ("),a("strong",[e._v("Relational")]),e._v(" Database Service) (which includes the main RDBMS' like MySQL and Postgres and Amazon's own RDBMS, Aurora).")]),e._v(" "),a("li",[a("strong",[e._v("DynamoDB")]),e._v(" (Key-Value/Document Database)")]),e._v(" "),a("li",[e._v("Many more. You can check them out "),a("a",{attrs:{href:"https://aws.amazon.com/products/databases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),a("p",[e._v("Why would we choose a managed database instead of setting it up on our own?")])]),e._v(" "),a("h2",{attrs:{id:"other-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-services"}},[e._v("#")]),e._v(" Other Services")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("SQS")]),e._v(" (Simple Queue Service) - We strive to make our systems as decoupled as possible, mainly to increase fault tolerance (e.g. micro-services architecture). SQS helps us sending messages between services.")]),e._v(" "),a("li",[a("strong",[e._v("SNS")]),e._v(' (Simple Notification Service) - As the name says, it\'s a notification system. We can use it for "external" notifications (e.g. emails and push notifications) and/or for "internal" notifications (e.g. notify other services when something happens).')]),e._v(" "),a("li",[a("strong",[e._v("API Gateway")]),e._v(" - We can use it build the interface with our client applications and forward the requests to the right service. For example, if we would have some lambda functions which read and write data to some database, we can create a REST interface to expose these functions to the world. It provides tons of features like authentication, throttling and "),a("a",{attrs:{href:"https://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI"),a("OutboundLink")],1),e._v(" support.")]),e._v(" "),a("li",[a("strong",[e._v("Cognito")]),e._v(" - Remember the authentication mentioned at the previous point? This is what cognito is for. It's a service for managing users. You can store common fields (email, username, password etc) and custom fields (shoe size?) in it and you can easily integrate third-party authentication (google, facebook etc.).")]),e._v(" "),a("li",[a("strong",[e._v("CloudWatch")]),e._v(" - Having a system built out of so many services might lead to various challenges like monitoring and logging. This is where CloudWatch comes in. It is the central service to monitor your applications.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);