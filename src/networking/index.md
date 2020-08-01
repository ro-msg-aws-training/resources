# Networking

Before we dive into the AWS services, let's have a quick recap of some networking concepts.

## **IP Addresses**

An IP address is an identifier issued to each device connected to a network. Can be private or public.
**Private** IP addresses are always in one of the ranges:

- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

Private means that an IP address is valid (exists only once) only within the given network (i.e. not the whole internet). This means that we can have the same private IP in different networks without having collisions.

On the other hand, a public IP address is unique across the whole internet. Its value is in the ranges outside of the private ranges (and some other reserved ranges).

A device can both a private and a public IP address.

Another important characteristic of IP addresses is that they can be static and dynamic.

- **Static** - The device is guaranteed to have the same IP address.
- **Dynamic** - The device is **not** guaranteed (and very unlikely) to have the same IP address.

Static means more work than dynamic because someone has to actually configure and reserve it, whereas the dynamic address is assigned automatically by a DHCP.

And finally, there are the 2 versions of IP addresses:

- **IPv4** (~4 billion addresses, we are close to running out of): e.g. 10.120.70.1 (is this a public IP address?)
- **IPv6** (many orders of magnitude more addresses): e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334.

We will work with **IPv4**.

## **Subnets**

When we create a network, for example, a company could have a single network, we might decide to divide it into several subnetworks - one subnetwork for each department of the company. Even if we decide to create multiple subnets, each device must still be assigned a unique IP address across the whole network. This means that each subnet must take a distinct range of IPs.

While we can refer to a range by its interval, we usually identify it by using the **CIDR** notation. For example, the interval **172.16.0.0 – 172.16.255.255** is represented using CIDR as **127.16.0.0/16**. The **/16** tells us how many bits (out of **32**) identify the network - in this case we know that 127.16 (the first 16 bits) will be the same for all devices part of the same (sub)network.

:::warning Exercise
How many IP addresses are available in 10.1.1.0/24? Which is the first and the last IP address?
:::

## Routing

Routing simply means figuring out how to reach a certain IP address. Here we commonly use routing tables in a very simplified form. E.g. if our device is trying to reach a public IP address, we tell it to talk to the network (default) gateway.

## (Network) Address Translation (NAT)

Considering our company example from above, our internet service provider might give us only one IP address. Since we still want internet access from all of our devices, we need a way to send data (packets) from a device through that single IP address and to receive data through the same IP address and forward it to the right device (the device that requested the data).

That's all NAT is - a way to communicate over the internet without assigning a unique public IP address to each device of a given network.

## AWS

When it comes to AWS, our instances will have **private static** IP addresses and, optionally (based on how our network is configured), public IP addresses. We can choose to assign a static public IP address by using an [Elastic IP Address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (we won't, but it can be helpful when you need just a simple server).

For creating and managing networks, AWS provides the **VPC** (Virtual Private Cloud) service (it is also the name of the resulting resource). A VPC is an isolated section of the entire AWS cloud network spanning a certain region. Then, a VPC is divided into one or more subnets which are created in a specific AZ (taking a specific IP range/CIDR of the VPC).

**Instances are deployed in a specific subnet. This is how we choose in which AZ to run our instance and whether the instance has a public IP address or not. Each subnet has a route table assigned which tells instances where to find other IPs. A subnet is considered public if it has a route to an Internet Gateway (another AWS resource). Furthermore, each subnet has its own NACL.**

In general, we deploy instances in private subnets and expose them through a Load Balancer (which is deployed in public subnets). In case we still want access to the internet from our instances, we can setup a **NAT Gateway** and point the instances to it.

:::warning Exercise
Navigate to the VPC service and take a look at the default VPC. How many subnets does it have and how many of them are public? Does it restrict traffic with any IP?
:::

### VPC & Managed AWS Services

If EC2 instances run in a VPC, other AWS services don't. This is relevant since you will most likely use other AWS services such as S3. If your app running on EC2 wants to access some objects from S3, the traffic would leave your VPC and go through the public internet. This can vary from totally irrelevant (unlikely; if your application layer is in a private subnet, you already face an issue) to a total show stopper (e.g. due to legal restrictions not allowing public internet traffic). For this, AWS introduced [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html). Endpoints can also drastically reduce costs as presented [here](https://medium.com/nubego/how-to-save-money-with-aws-vpc-endpoints-9bac8ae1319c).
