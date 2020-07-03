(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{355:function(e,t,s){"use strict";s.r(t);var a=s(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"identity-and-access-management-iam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identity-and-access-management-iam"}},[e._v("#")]),e._v(" Identity and Access Management (IAM)")]),e._v(" "),s("p",[e._v("This is the central service/place to manage everything related to access across all AWS services.\nThis is the first service you should interact with after creating a new AWS account."),s("br"),e._v("\nYour first account is called the "),s("strong",[e._v("root")]),e._v(" account. This is similar to Internet Explorer; you should use it only to create other 'accounts' (users). The main reason/concern is security of course - if someone gains access to your root account there is no quick way to stop him/her which could lead to considerable expenses.")]),e._v(" "),s("h2",{attrs:{id:"users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[e._v("#")]),e._v(" Users")]),e._v(" "),s("p",[e._v("IAM users represent entities that interact with the AWS resources under your account. They are basically a set of credentials (username/password or access keys) that offer access to the AWS APIs/console. Each user is given a certain set of permissions adhering to the least privilege principle."),s("br"),e._v("\nFor example in our case:")]),e._v(" "),s("ul",[s("li",[e._v("someone created an AWS account")]),e._v(" "),s("li",[e._v("authenticated using the root credentials")]),e._v(" "),s("li",[e._v("created an admin user (all permissions)")]),e._v(" "),s("li",[e._v("switched to that user")]),e._v(" "),s("li",[e._v("created your user and assigned the required permissions to interact with the VMs, DBs, logs and other services covered during this training (by default a user cannot do anything)")]),e._v(" "),s("li",[e._v("downloaded and sent you the generated credentials")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("Do users expire? How about passwords?")])]),e._v(" "),s("h2",{attrs:{id:"groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),s("p",[e._v("Groups are what you probably expect to be - groups of users. The main benefit is that groups allow us to maintain permissions of multiple users (the members of a group). In the previous example about how your user was created, the administrator did not specify each permission individually (even though it is possible); he/she just assigned your user to the 'training' group from where your user inherited the permissions."),s("br"),e._v("\nThere are no pre-defined groups. In our case, the admin created the 'training' group.")]),e._v(" "),s("p",[e._v("The permissions of the group are assigned through so called policies. We will cover them in the security chapter.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("Can you think of some commonly used groups? Name a few.")])]),e._v(" "),s("h2",{attrs:{id:"roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[e._v("#")]),e._v(" Roles")]),e._v(" "),s("p",[e._v("Roles do not respresent an entity, but they can be assumed by an entity. You can use roles to provide temporary access to AWS resources of your account to your applications or to external users (from another AWS account or outside of AWS - e.g. identified by Google). When you create a role, you define who/what can assume it and what permissions it provides."),s("br"),e._v(" "),s("strong",[e._v("This is the preferred way to provide permissions to your applications")]),e._v(". If we wouldn't have roles, we would have to provide credentials to our applications (i.e. store the username and password on the VM where the app is running).")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Exercise")]),e._v(" "),s("p",[e._v("Why are roles a better approach than users to provide permissions to your application?")])]),e._v(" "),s("h2",{attrs:{id:"hands-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hands-on"}},[e._v("#")]),e._v(" Hands-On")]),e._v(" "),s("p",[e._v("Let's take a quick glance at the IAM service. For this, open the AWS console and go to the IAM service. You should be able to see the users, groups and roles (besides the rest of the stuff).")]),e._v(" "),s("h3",{attrs:{id:"creating-a-new-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-user"}},[e._v("#")]),e._v(" Creating a New User")]),e._v(" "),s("p",[e._v("Let's try to create a new user.")]),e._v(" "),s("ul",[s("li",[e._v("Go to the "),s("strong",[e._v("Users")]),e._v(" page and press the blue button (usually in the AWS console the blue button does the thing that you want - recently AWS started revamping their UI. The new main button color is orange).")]),e._v(" "),s("li",[e._v("Give your user a meaningful name (e.g. append '-practice' to your current user).")]),e._v(" "),s("li",[e._v("Give it access to both the API and the console (you can leave the default password settings).")]),e._v(" "),s("li",[e._v("Going to the next step, the permissions of your new user, you can see the various ways to set them. Choose the Training group and go to the next step.")]),e._v(" "),s("li",[e._v("Tag your user with "),s("strong",[e._v("project: CareerStart")]),e._v(" and go to the next step.")]),e._v(" "),s("li",[e._v("Click the blue button.")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("You (your user) are not authorized to create new users (or any other IAM resource for the matter) (the console allowing you to perform all the steps only to tell you that you cannot really do that is questionable indeed). However, because we are in a special situation and really have to create a new user, you can elevate your privileges by assuming a "),s("strong",[e._v("role")]),e._v(".")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"assuming-a-role"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assuming-a-role"}},[e._v("#")]),e._v(" Assuming a Role")]),e._v(" "),s("ul",[s("li",[e._v("Click on the top-right menu where your username is displayed.")]),e._v(" "),s("li",[e._v("Copy the "),s("strong",[e._v("account ID")]),e._v(" (the 12 digits separated by dashes)")]),e._v(" "),s("li",[e._v("Press "),s("strong",[e._v("Switch Role")])]),e._v(" "),s("li",[e._v("Remember the remark about the blue button?")]),e._v(" "),s("li",[e._v("In the account field paste what you copied and remove the dashes.")]),e._v(" "),s("li",[e._v("In the role field type iam-admin")]),e._v(" "),s("li",[e._v("Feel free to change the display name and color.")]),e._v(" "),s("li",[e._v("Switch to the new role.")]),e._v(" "),s("li",[e._v("When you are done with the special task, you should go back to your user. (top-right menu again)")])])])}),[],!1,null,null,null);t.default=o.exports}}]);