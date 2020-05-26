# Regions and Availability Zones

Hosting a cloud is not the same as hosting a website. AWS cannot just build a data center, let users run their programs in it and call it a cloud. It would violate some of the main characteristics of the cloud like performance and reliability. If there was just one data center located somewhere in the US, then end users from all around the world would have to connect to it leading to high latency and bottlenecks. In addition, if a natural disaster would destroy the data center, no insurance would be able to cover all the business disruptions.

The AWS cloud is actually several independant clouds running in different **regions**. They have independent infrastructure, independent services (some regions get new features sooner than the others. Usually North Virginia then Ohio, Ireland and Tokyo) and independent pricing (most of the times very very similar). You can choose any of those, but we will work in **Ireland (eu-west-1)**.

Additionally, each region consists of several **availability zones (AZs)**. When you run a service, most of the times you run it in a specific availability zone. You can think of them as separate data centers, even though an AZ can contain multiple data centers. An example of AZ is **eu-west-1a**.

Check out [this](https://www.infrastructure.aws/) cool interactive map to get a clearer picture. Of course, you can always check the [official website](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/).
