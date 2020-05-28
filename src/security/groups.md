# Security Groups

You can think of a security group as a firewall that can be attached to almost any part of the system. Through it we can specify what can access our component and to what our component can send data - i.e. **inbound** and **outbound** traffic. They were designed to be attached to EC2 instances, but since a lot of services use EC2 under the hood they can be used across multiple services.

You can use security groups to restrict network access based on the following properties:

- **IP**: you can allow traffic only for certain ip addresses. For example, this is helpful if you have a server outside of AWS with a static IP.
- **CIDR**: similar to the previous option, but it applies to a range of ip addresses. (we will discuss about CIDR in the networking chapter).
- **Security Group**: the first 2 options are definitely helpful, but they are also somewhat rigid. Using this option, you can limit the access to only components that have a certain security group attached. For example, if our application runs on some VMs (with a certain security group) and we have a separate VM hosting our database, we can specify in the security group of the DB VM that only our application VMs can access it.

By default, a security group blocks all inbound traffic (e.g. you cannot connect to your server) and allows all outbound traffic (e.g. your server can check for update). When creating the security group, you will **whitelist** certain sources like the IP address of your computer through the SSH **protocol** on **port** 22 (this is the usual port for SSH) (SSH basically allows a terminal on our computer to execute commands on the VM).

Another important aspect to remember is that security groups are stateful. In this context, stateful means that we don't have to specifically allow traffic for both inbound and outbound. For example, if your security group doesn't allow any inbound traffic, but allows all outbound traffic, your instance can still download software updates even though this is inbound traffic (but the request for the updates was initiated by your instance).

Also a small tip, timeouts usually indicate security groups issues.

:::warning Exercise
How should we configure our security group if our instance is supposed to be an application serving traffic through standard HTTP and HTTPS?
:::
