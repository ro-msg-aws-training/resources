# Roles

Roles do not respresent an entity, but they can be assumed by an entity. You can use roles to provide temporary access to AWS resources of your account to your applications or to external users (from another AWS account or outside of AWS - e.g. identified by Google). When you create a role, you define who/what can assume it and what permissions it provides.  
**This is the preferred way to provide permissions to your applications**. If we wouldn't have roles, we would have to provide credentials to our applications (i.e. store the username and password on the VM where the app is running).

:::warning Exercise
Why are roles a better approach than users to provide permissions to your application?
:::
