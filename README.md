# Rubik's Official

## 🔄 Fork & Clone the Repository
1. Click the **"Fork"** button on the top right of this repository (this creates a copy of the repo in your GitHub account).
2. Clone the forked repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```
3. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```

---

## 🚀 Set Up the Project
1. Install dependencies:
   ```bash
   npm install
   ```
   or  
   ```bash
   yarn install
   ```

## 🌱 Create a New Branch
1. Before making any changes, create a new branch from `development` (or `main`):
   ```bash
   git checkout -b feature-branch-name
   ```
   Example:
   ```bash
   git checkout -b add-dark-mode
   ```

---

## 💻 Make Changes & Commit
1. Make the necessary changes in the code.
2. Stage the changes:
   ```bash
   git add .
   ```
3. Commit with a meaningful message:
   ```bash
   git commit -m "Added dark mode feature"
   ```

---

## 🔄 Sync with the Latest Code
Before pushing your branch, ensure your branch is up to date:
```bash
git fetch origin
git checkout development
git pull origin development
git checkout feature-branch-name
git merge development
```
Resolve conflicts if any.

---

## 🚀 Push the Changes
Once everything is fine, push your branch to GitHub:
```bash
git push origin feature-branch-name
```

---

## 🔄 Create a Pull Request (PR)
1. Go to your **forked repository** on GitHub.
2. Click on **"Compare & Pull Request"**.
3. Fill in the PR title and description:
   - Clearly explain **what** changes you made.
   - If it's fixing an issue, mention **"Closes #IssueNumber"**.
   - Attach screenshots if applicable.
4. Submit the PR and wait for maintainers to review.

---
