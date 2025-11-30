# 📬 Submission Guide

This document explains exactly how to submit your solution for the ReactJS game challenge.

Please read this fully before starting.

---

## 1. Fork the Repository

1. Go to the main GitHub repository link provided by us.
2. Click the **Fork** button (top-right) to create a copy under your own GitHub account.

All your work should happen on your fork.

---

## 2. Create Your Project Folder

In the **root** of your forked repository, create a folder with this pattern:

```txt
yourName-challengeName
```

Examples:

```txt
alexSmith-tic-tac-strategy
johnDoe-game-of-life
```

Inside that folder, scaffold your React project in any way you prefer:

```txt
yourName-challengeName/
├─ README.md          // how to run, tech stack, notes
├─ package.json
├─ src/
└─ ...
```

---

## 3. Implement the Challenge

1. Choose **one** challenge from [`CHALLENGES.md`](./CHALLENGES.md).
2. Implement the game according to the description.
3. Focus on:
   - Clear and correct game logic
   - Clean, maintainable code
   - Reasonable UX and UI
4. Test the app:
   - It should run locally without crashes.
   - Basic flows should work as expected.

---

## 4. Prepare Your Local README

In your project folder (`yourName-challengeName/README.md`), include:

- **Challenge name**:
  - e.g., “Tic-Tac Strategy” or “Conway’s Game of Life”
- **Tech stack**:
  - React, TypeScript (if used), styling solution, etc.
- **How to run**:

  - Example:

    ```bash
    npm install
    npm run dev
    ```

- **Assumptions and decisions**:
  - Any rules you interpreted or changed
  - Any design/UX choices worth noting
- **Known limitations / future improvements** (optional but helpful)

---

## 5. Commit & Push

1. Stage your files:

   ```bash
   git add .
   ```

2. Commit with a clear message, for example:

   ```bash
   git commit -m "Implement tic-tac strategy challenge"
   ```

3. Push to your fork:

   ```bash
   git push origin main
   ```

(or the branch you’re using, e.g., `challenge/tic-tac`)

---

## 6. Open a Pull Request

1. Go to your fork on GitHub.
2. Click **Compare & pull request** (or create a new pull request).
3. Make sure:
   - **Base repository**: the original challenge repo
   - **Base branch**: `main`
   - **Head repository**: your fork
   - **Head branch**: the branch that contains your solution

### PR Title Format

Use this format:

```txt
[Challenge] your-name – challenge-name
```

Examples:

```txt
[Challenge] Alex Smith – Tic-Tac Strategy
[Challenge] John Doe – Conway’s Game of Life
```

---

## 7. PR Description

In the Pull Request description, you may include any useful data such as:

- **Short summary of your approach**:
  - How you structured the components
  - How you handled state and core logic
- **Tech stack**:
  - React, TS/JS, styling choice, libraries
- **How to run**:
  - Duplicate the key steps from your local README for convenience.
- **Assumptions / trade-offs**:
  - Any rules you interpreted or simplified
- **What you would improve with more time** (optional but appreciated)

If a Pull Request template appears automatically, just fill it in with the above information.

---

## 8. After Submission

Once your PR is open:

- We’ll review your code and comment when the review process has started.
- We'll review your submitted CV.
- We'll contact you to schedule the next steps.

Please do **not** add additional big features after review has started, unless requested.

---

## 9. General Tips

- Keep commits reasonably organized (not mandatory, but nice).
- Do not commit generated build folders (like `dist`, `.next`, `build`).
- Make sure `.gitignore` is correctly set for your chosen tooling.
- Feel free to add small tests if you want, but they are optional.

---

Thank you for taking the time to complete this challenge.  
We’re looking forward to reviewing your work! 🚀
