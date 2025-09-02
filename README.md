# SMS OTP Sender

This project demonstrates how to send one-time passcodes (OTPs) via SMS using Amazon Simple Notification Service (SNS). It includes a Node.js script that generates a random 6-digit OTP and sends it to a specified phone number.

## Prerequisites

Before running the script, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- An AWS account with appropriate permissions to use the Simple Notification Service (SNS).
- AWS credentials (access key and secret key) stored as environment variables or in an AWS configuration file.
- A `.env` file containing necessary configuration, including phone number and AWS region.

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/adanzweig/nodejs-aws-sns.git
   cd nodejs-aws-sns
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following:

   ```env
   REGION=us-east-1   # Replace with your desired AWS region
   AWS_ACCESS_KEY=your-access-key
   AWS_SECRET_KEY=your-secret-key
   ```

## Usage

Run the script to send an OTP via SMS:

```bash
npm start
```

The script will generate a random 6-digit OTP and send it to the specified phone number.

## Configuration

Adjust the parameters in the `.env` file to customize the SMS message, recipient phone number, and AWS region.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# -----------------------------------------------------------------------------------------------------------------------------------

1. You are working on a file
   git checkout -b feature-login

You create a new branch and edit login.js but don’t commit yet.

login.js

console.log("Working on login feature...");

2. Boss says: "Switch to main branch"

But if you try:

git checkout main

Git says ❌ “you have uncommitted changes.”

3. Use stash
   git stash

👉 Your unfinished work is now saved in a hidden stash.
👉 Your working directory becomes clean (as if you never touched it).

4. Switch branch and fix bug
   git checkout main

# Fix the bug

git commit -m "Fixed urgent bug"

5. Come back to your work
   git checkout feature-login
   git stash pop

👉 Boom 💥 Your unfinished login.js changes are back!
👉 Continue coding like nothing happened.

📦 Useful Stash Commands

git stash → stash your changes

git stash list → see all stashed items

git stash pop → bring back and remove from stash

git stash drop → delete a stash item and remove the last entry of queue

6. we can also stash the untracked the file --> git stash --include-untracked
7. git stash apply → bring back but keep stash copy using this command we can back the previous any stash data
   mongoose@mongoose-H110:~/projects/raj-express-server/email-and-otp-code$ git stash list
   stash@{0}: WIP on master: 5637aee feat: add stash file
   stash@{1}: WIP on master: 5637aee feat: add stash file
   mongoose@mongoose-H110:~/projects/raj-express-server/email-and-otp-code$
8. git stash apply stash@{1} this return the last stash data
9. git store the stash just like the queue first stash store on 0 index and second stash store 1 index and want back any previous stash
   so run the git stash apply stash@{1} so that we got the second stash

10. git stash pop → bring back and remove from stash --> this command bring back the changes and delete the stash entry from queue also
11. git stash clear --> want to remove all stash entry from queue
12. mongoose@mongoose-H110:~/projects/raj-express-server/email-and-otp-code$ git stash list
    stash@{0}: On master: save readme..md file
    mongoose@mongoose-H110:~/projects/raj-express-server/email-and-otp-code$ git stash apply stash@{0}
    for giving the lable of the stash

13. git commit --amend --> this command add the data and changes on list commit we dont need to create the new commit for any changes we can do this

# Branch

Head --> head tell like what branch u are working on and what is the current commit
commit 71fc128a72b72204da27c4b111c6cb3f6cf1c2f3 (HEAD -> new_feture) here head pointing to current branch which is new_feature
Author: shubhammongoosetech <shubhammahatma.mongoosetech@gmail.com>
Date: Tue Sep 2 13:36:19 2025 +0530

    feat: update readme.md

commit cac9caa6f15f323542aba1cd45aa2445068772e8 (master) this commit done by this branch is master
Author: shubhammongoosetech <shubhammahatma.mongoosetech@gmail.com>
Date: Tue Sep 2 12:32:16 2025 +0530

13. if we do commit and just after create the branch so now head pointing to the new branch
14. commit 71fc128a72b72204da27c4b111c6cb3f6cf1c2f3 (HEAD -> login, new_feture)
    | Author: shubhammongoosetech <shubhammahatma.mongoosetech@gmail.com>
    | Date: Tue Sep 2 13:36:19 2025 +0530
    |
    | feat: update readme.md
    |

- commit cac9caa6f15f323542aba1cd45aa2445068772e8 (master)
  | Author: shubhammongoosetech <shubhammahatma.mongoosetech@gmail.com>
  | Date: Tue Sep 2 12:32:16 2025 +0530

15. if we create new commit so head going with the current branch either it is login branch and master and new_feature branch
    git merge branch-name Merge given branch into current branch
    git merge --abort Cancel ongoing merge
    git merge --no-ff branch-name Always create a merge commit (even if fast-forward possible)
    git log --graph --oneline --all Visualize merges

# Perfect 👍 I understand now:

You had two branches → main and feature-login (example).

You merged feature-login into main.

Now you want to remove that merge from main and make main look like it was before the merge.

This is a very common situation in real projects. Let’s go step by step 🚀

🔹 Option 1: Undo the Merge (Go back to before merge)

If you want to completely undo the merge commit:

Step 1: Find commit before merge
git log --oneline

Example:

abc123 (HEAD -> main) Merge branch 'feature-login'
789456 Added bug fix
456789 Initial commit

Here, abc123 is the merge commit, and 789456 is the commit before merge.

Step 2: Reset main back

👉 If you want to remove the merge completely:

git reset --hard 789456

Now main is exactly as it was before merging.

👉 If you already pushed to GitHub:

git push origin main --force

⚠️ Warning: Force push rewrites history. Safe only if you are working alone (or your team agrees).

🔹 Option 2: Revert the Merge (Safer for Teams)

Instead of deleting history, you can revert the merge commit.
This way, git log still shows the merge happened, but its changes are undone.

Step 1: Find merge commit ID
git log --oneline

Example:

abc123 (HEAD -> main) Merge branch 'feature-login'

Step 2: Revert merge
git revert -m 1 abc123

-m 1 means keep the main branch as the parent.

This creates a new commit that undoes all the changes from the merge.

Step 3: Push to remote
git push origin main

Now the merge code is removed, but history is clean (no force push needed).

🔹 Which One Should You Use?

Working alone (personal project) → git reset --hard + force push is fine.

Working with team (shared repo) → git revert -m 1 <merge-commit> (safer, keeps history).

✅ Summary:

To completely erase the merge → git reset --hard <commit-before-merge>

To undo merge but keep history safe → git revert -m 1 <merge-commit>

👉 Do you want me to make a step-by-step demo with real commit history diagram showing how reset vs revert will look in Git log? That will make it crystal clear.

# git reset --hard 789456 --> so it move the code on that particular commit id amd we got the all code base based on that commit id

# git revert -m 1 abc123 --> -m 1 means keep the main branch as the parent and This all the changes from the merge.
