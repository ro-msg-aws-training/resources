# Identity and Access Management (IAM)

This is the central service/place to manage everything related to access across all AWS services.
This is the first service you should interact with after creating a new AWS account.  
Your first account is called the **root** account. This is similar to Internet Explorer; you should use it only to create other 'accounts' (users). The main reason/concern is security of course - if someone gains access to your root account there is no quick way to stop him/her which could lead to considerable expenses.

## Users

IAM users represent entities that interact with the AWS resources under your account. They are basically a set of credentials (username/password or access keys) that offer access to the AWS APIs/console. Each user is given a certain set of permissions adhering to the least privilege principle.  
For example in our case:

- someone created an AWS account
- authenticated using the root credentials
- created an admin user (all permissions)
- switched to that user
- created your user and assigned the required permissions to interact with the VMs, DBs, logs and other services covered during this training (by default a user cannot do anything)
- downloaded and sent you the generated credentials

:::warning Exercise
Do users expire? How about passwords?
:::

## Groups

Groups are what you probably expect to be - groups of users. The main benefit is that groups allow us to maintain permissions of multiple users (the members of a group). In the previous example about how your user was created, the administrator did not specify each permission individually (even though it is possible); he/she just assigned your user to the 'training' group from where your user inherited the permissions.  
There are no pre-defined groups. In our case, the admin created the 'training' group.

The permissions of the group are assigned through so called policies. We will cover them in the security chapter.

:::warning Exercise
Can you think of some commonly used groups? Name a few.
:::

## Roles

Roles do not respresent an entity, but they can be assumed by an entity. You can use roles to provide temporary access to AWS resources of your account to your applications or to external users (from another AWS account or outside of AWS - e.g. identified by Google). When you create a role, you define who/what can assume it and what permissions it provides.  
**This is the preferred way to provide permissions to your applications**. If we wouldn't have roles, we would have to provide credentials to our applications (i.e. store the username and password on the VM where the app is running).

:::warning Exercise
Why are roles a better approach than users to provide permissions to your application?
:::

## Hands-On

Let's take a quick glance at the IAM service. For this, open the AWS console and go to the IAM service. You should be able to see the users, groups and roles (besides the rest of the stuff).

### Creating a New User

Let's try to create a new user.

- Go to the **Users** page and press the blue button (usually in the AWS console the blue button does the thing that you want - recently AWS started revamping their UI. The new main button color is orange).
- Give your user a meaningful name (e.g. append '-practice' to your current user).
- Give it access to both the API and the console (you can leave the default password settings).
- Going to the next step, the permissions of your new user, you can see the various ways to set them. Choose the Training group and go to the next step.
- Tag your user with **project: CareerStart** and go to the next step.
- Click the blue button.

---

You (your user) are not authorized to create new users (or any other IAM resource for the matter) (the console allowing you to perform all the steps only to tell you that you cannot really do that is questionable indeed). However, because we are in a special situation and really have to create a new user, you can elevate your privileges by assuming a **role**.

---

### Assuming a Role

- Click on the top-right menu where your username is displayed.
- Copy the **account ID** (the 12 digits separated by dashes)
- Press **Switch Role**
- Remember the remark about the blue button?
- In the account field paste what you copied and remove the dashes.
- In the role field type iam-admin
- Feel free to change the display name and color.
- Switch to the new role.
- When you are done with the special task, you should go back to your user. (top-right menu again)
