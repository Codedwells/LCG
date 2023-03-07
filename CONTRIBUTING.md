## Rules

-   Don't create a pull request on an issue that doesn't exist, create an issue first and if the changes you are proposing are said to be okay, you can go ahead and create a pull request

-   Don't work on anything unless you are assigned, if you make a pull request without being assigned to that issue, it will be closed without being merged

-   Don't work on more than one issue at a time, this is so that you don't make a huge pull request and others can have opportunities to work on another issue while you work on something else

-   Do read the `readme.md` file

-   Add the Issue you worked on in your Pull Request

-   Don't work on the main branch, create your own branch

-   Don't commit the lock files eg package.json

-   Keep your PR as small as possible

> # Note: Breaking any of the rules above👆🏽 will get your PR rejected

## 👩🏽‍💻 Prerequisite Skills to Contribute

### Contribute in project

-   Frontend

    -   JavaScript
    -   HTML
    -   CSS

-   Backend
    -   NodeJs
    -   Express
    -   MongoDB

---

## 💥 How to Contribute

-   Take a look at the existing [Issues](https://github.com/Codedwells/LCG/issues) or [create a new issue](https://github.com/Codedwells/LCG/issues/new/choose)!
-   [Fork the Repo](https://github.com/Codedwells/LCG/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
-   Create a [Pull Request](https://github.com/Codedwells/LCG/compare) (PR), which will be promptly reviewed and given suggestions for improvements by the community.
-   Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## 🌟 HOW TO MAKE A PULL REQUEST:

1. Start by making a Fork of the [LCG](https://github.com/Codedwells/LCG) repository. Click on the
   <a href="https://github.com/Codedwells/LCG/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

2. Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/LCG
```

3. Navigate to the newly created LCG project directory:

```bash
cd LCG
```

4. Set upstream command:

```bash
git remote add upstream https://github.com/Codedwells/LCG.git
```

5. Create a new branch:

```bash
git checkout -b YourBranchName
```

6. Sync your fork or your local repository with the origin repository:

-   In your forked repository, click on "Fetch upstream"
-   Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

7. Make your changes to the source code.

8. Add and commit the changes:

⚠️ Make sure not to commit package.json or package-lock.json file

Add the changes that you have made to the branch using the `git add` command:

```bash
git add TheFileNameYouChanged
```

Example:

```bash
git add README.md
```

Now commit those changes using `git commit` command:

```bash
git commit -m "Your commit message"
```

9. Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

10. Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

11. Congratulations! You've made your first contribution to [LCG](https://github.com/Codedwells/LCG/graphs/contributors)!

🏆 After this, the maintainers will review the PR and will merge it if it helps move the LCG project forward. Otherwise,\
it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase.

---

> Your PR

> When making your 🚀PRs please do them in small chunks e.g after revamping the navbar make a PR. This ensures\
> the PRs are manageable and easy to review. Thank for taking interest in this project.

> 💝 Your contribution is appreciated.

---

## 💥 Issues

In order to discuss changes, you are welcome to [open an issue](https://github.com/Codedwells/LCG/issues/new/choose) about what you would like to contribute. Enhancements are always encouraged and
appreciated.
