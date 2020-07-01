(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"networking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),s("p",[e._v("Before we dive into the AWS services, let's have a quick recap of some networking concepts.")]),e._v(" "),s("h2",{attrs:{id:"ip-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-addresses"}},[e._v("#")]),e._v(" "),s("strong",[e._v("IP Addresses")])]),e._v(" "),s("p",[e._v("An IP address is an identifier issued to each device connected to a network. Can be private or public.\n"),s("strong",[e._v("Private")]),e._v(" IP addresses are always in one of the ranges:")]),e._v(" "),s("ul",[s("li",[e._v("10.0.0.0 – 10.255.255.255")]),e._v(" "),s("li",[e._v("172.16.0.0 – 172.31.255.255")]),e._v(" "),s("li",[e._v("192.168.0.0 – 192.168.255.255")])]),e._v(" "),s("p",[e._v("Private means that an IP address is valid (exists only once) only within the given network (i.e. not the whole internet). This means that we can have the same private IP in different networks withput having collisions.")]),e._v(" "),s("p",[e._v("On the other hand, a public IP address is unique across the whole internet. Its value is in the ranges outside of the private ranges (and some other reserved ranges).")]),e._v(" "),s("p",[e._v("A device can both a private and a public IP address.")]),e._v(" "),s("p",[e._v("Another important characteristic of IP addresses is that they can be static and dynamic.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Static")]),e._v(" - The device is guaranteed to have the same IP address.")]),e._v(" "),s("li",[s("strong",[e._v("Dynamic")]),e._v(" - The device is "),s("strong",[e._v("not")]),e._v(" guaranteed (and very unlikely) to have the same IP address.")])]),e._v(" "),s("p",[e._v("Static means more work than dynamic because someone has to actually configure and reserve it, whereas the dynamic address is assigned automatically by an DHCP.")]),e._v(" "),s("p",[e._v("And finally, there are the 2 versions of IP addresses:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("IPv4")]),e._v(" (~4 billion addresses, we are close to running out of): e.g. 10.120.70.1 (is this a public IP address?)")]),e._v(" "),s("li",[s("strong",[e._v("IPv6")]),e._v(" (many orders of magnitude more addresses): e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334.")])]),e._v(" "),s("p",[e._v("We will work with "),s("strong",[e._v("IPv4")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"subnets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subnets"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Subnets")])]),e._v(" "),s("p",[e._v("When we create a network, for example, a company could have a single network, we might decide to divide it into several subnetworks - one subnetwork for each department of the company. Even if we decide to create multiple subnets, each device must still be assigned an unique IP address across the whole network. This means that each subnet must take a distinct range of IPs.")]),e._v(" "),s("p",[e._v("While we can refer to a range by its interval, we usually identify it by using the "),s("strong",[e._v("CIDR")]),e._v(" notation. For example, the interval "),s("strong",[e._v("172.16.0.0 – 172.16.255.255")]),e._v(" is represented using CIDR as "),s("strong",[e._v("127.16.0.0/16")]),e._v(". The "),s("strong",[e._v("/16")]),e._v(" tells us how many bits (out of "),s("strong",[e._v("32")]),e._v(") identify the network - in this case we know that 127.16 (the first 16 bits) will be the same for all devices part of the same (sub)network.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("How many IP addresses are available in 10.1.1.0/24? Which is the first and the last IP address?")])]),e._v(" "),s("h2",{attrs:{id:"routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),s("p",[e._v("Routing simply means figuring out how to reach a certain IP address. Here we commonly use routing tables in a very simplified form. E.g. if our device is trying to reach a public IP address, we tell it to talk to the network (default) gateway.")]),e._v(" "),s("h2",{attrs:{id:"network-address-translation-nat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-address-translation-nat"}},[e._v("#")]),e._v(" (Network) Address Translation (NAT)")]),e._v(" "),s("p",[e._v("Considering our company example from above, our internet service provider might give us only one IP address. Since we still want internet access from all of our devices, we need a way to send data (packets) from a device through that single IP address and to receive data through the same IP address and forward it to the right device (the device that requested the data).")]),e._v(" "),s("p",[e._v("That's all NAT is - a way to communicate over the internet without assigning a unique public IP address to each device of a given network.")]),e._v(" "),s("h2",{attrs:{id:"aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[e._v("#")]),e._v(" AWS")]),e._v(" "),s("p",[e._v("When it comes to AWS, our instances will have "),s("strong",[e._v("private static")]),e._v(" IP addresses and, optionally (based on how our network is configured), public IP addresses. We can choose to assign a static public IP address by using an "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic IP Address"),s("OutboundLink")],1),e._v(" (we won't, but it can be helpful when you need just a simple server).")]),e._v(" "),s("p",[e._v("For creating and managing networks, AWS provides the "),s("strong",[e._v("VPC")]),e._v(" (Virtual Private Cloud) service (it is also the name of resulting resource). A VPC is an isolated section of the entire AWS cloud network spanning a certain region. Then, a VPC is divided into one or more subnets which are created in a specific AZ (taking a specific IP range/CIDR of the VPC).")]),e._v(" "),s("p",[s("strong",[e._v("Instances are deployed in a specific subnet. This is how we choose in which AZ to run our instance and whether the instance has a public IP address or not. Each subnet has a route table assigned which tells instances where to find other IPs. A subnet is considered public if it has a route to an Internet Gateway (another AWS resource). Furthermore, each subnet has its own NACL.")])]),e._v(" "),s("p",[e._v("In general, we deploy instances in private subnets and expose them through a Load Balancer (which is deployed in public subnets). In case we still want access to the internet from our instances, we can setup a "),s("strong",[e._v("NAT Gateway")]),e._v(" and point the instances to it.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("Navigate to the VPC service and take a look at the default VPC. How many subnets does it have and how many of them are public? Does it restrict traffic with any IP?")])])])}),[],!1,null,null,null);t.default=n.exports}}]);