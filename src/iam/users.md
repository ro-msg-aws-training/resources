# Users

IAM users represent entities that interact with the AWS resources under your account. They are basically a set of credentials (username/password or access keys) that offer access to the AWS APIs/console. Each user is given a certain set of permissions adhering to the least privilege principle.  
For example in our case:  
- someone created an AWS account
- authenticated using the root credentials
- created an admin user (all permissions)
- switched to that user
- created your user and assigned the required permissions to interact with the VMs, DBs, logs and other services covered during thi training (by default a user cannot do anything)
- downloaded and sent you the generated credentials

:::warning Exercise
Do users expire? How about passwords?
:::
