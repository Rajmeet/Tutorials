# What is GIT
Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people
It is a <b>Distributed Version Control System</b>, i.e. it relies on the server to store all the history/versions of the project and very system can have a copy/clone of the project or the repository.
There are multiple organizations/companies use this tool which are widely used such as Github, Gitlab etc.

# Why use GIT
- Undo Mistakes
- Distributed Development
- Don't mix things u
- Community support

# Basic Git Commands
- Initialize the git repo on local system.
```
git init 
```
- Add files to the staging area.
```
git add <filename> # . adds all the files
```
- Check the current version of the project.
```
git status
```
- Commit files from the staging area to the commit region.
```
git commmit -m "Message"
```
- Remove files from the staging area
```
git rm --cached <filename>
```
- Creating a new branch 
```
git branch <branchname>
```
- Move to any other branch
```
git checkout <branchname>
```
- Merge one branch to the other branch. 
Here, you need to go to the branch you want to merge to and then write the command below with the branchname as the branch you want to merge with.
```
git merge <branchname>
```

# Github/Gitlab Linking
- Add the github repo as a remote
```
git remote add origin <url>
```
- Push the code to remote
```
git push -u origin <branchname> (master)
```
If you did not push it to the main/master branch, after the push you'll see an option to merge the newly added code in the different branch and from there you can review the new code and merge it to the main branch. Sometimes, it won't be that simple and you may face a "Merge Conflict". In that case, you'll have to figure out what's wrong with the code and try fixing it. After the merge, the updated code will go from your new branch to the master branch (ONLY ON THE REMOTE SYSTEM)
- Getting the code locally
```
git pull (usually works)
git pull <remote> <branchname>
```

# Some Useful Commands
- Gitignore File: A file that ignores the files that needs to the be added to the repository
```
.gitignore
```
- It temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else
```
git stash
```