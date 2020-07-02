# Relational Database Service (RDS)

If your answer to the second question from the previous chapter is related to the database, good job. When working with a single server, we might choose to run the database on the same VM. While this might be enough for a while, we might quickly run into scalability issues.

One possible solution would be to deploy the RDBMS into a separate instance. This would add a clear separation between your application layer and the data layer thus allowing us to scale our application much easier, but we would still be responsible for managing the database (monitoring, updates etc.).

Of course, AWS already thought about this so they came up with RDS. It is a service that enables us to create and run various RDBMS' (e.g. MySQL, Postgres), while not having to worry about operational aspects. Internally, it is just an RDBMS running on an EC2 instance with sophisticated scripts. Of course, it is more expensive than running our own DB, but in the long run it is the way to go.

Our architecture would look like this:

![Highly Available Architecture with RDS](./rds_arch.png)

For a complete tutorial on how to setup an RDS instance and a webserver which connects to it together with all the networking and security that is involved, you can check [this one](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/TUT_WebAppWithRDS.html) (**use t2.micro instead of the suggested t2.small to stay in the free tier**).
