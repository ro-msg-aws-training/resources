# Hands-On

Let's take a quick glance at the IAM service. For this, open the AWS console and go to the IAM service. You should be able to see the users, groups and roles (besides the rest of the stuff).

### Creating a New User

Let's try to create a new user.

- Go to the **Users** page and press the blue button (usually in the AWS console the blue button does the thing that you want).
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
