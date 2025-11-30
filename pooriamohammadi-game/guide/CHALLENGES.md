# 🎮 ReactJS Code Challenges – Game Edition

These are the available code challenges for this repository.  
Choose **one** challenge and implement it using React (and any supporting tools you like).

If any detail is missing or unclear, feel free to define your own rules or behavior (and document your decisions).

---

## 1. Tic-Tac Strategy

A tactical version of Tic-Tac-Toe:

- Player X and O can each have **only 3 marks** on the board at any time.
- On placing a **fourth mark**, the **oldest mark disappears** automatically.
- Game ends when:
  - A player wins with 3 in a row.
  - **20 turns** pass with no winner (draw).

**Ideas / Hints (optional, not required to follow):**

- Show the current player’s turn.
- Show the move history or turn count.
- Highlight the winning line when the game ends.

---

## 2. Memory Card Flip Game

Flip and match memory cards:

- The game starts with a grid of size **4x4**, **8x8**, or **16x16**.
- Cards are hidden and contain pairs of symbols or images.
- Click to flip 2 cards:
  - If matched: they stay revealed.
  - If not: they flip back after a delay.
- Game ends when all pairs are matched.

**Ideas / Hints:**

- Let the user choose the grid size.
- Track and display the number of moves.
- Optionally track the best score.

---

## 3. Color Guessing Game

A code-breaking guessing game (similar to Mastermind):

- The computer selects **5 colored pins** from **8 options** (colors may repeat).
- The user has **15 turns** to guess the exact sequence.
- After each guess, show hints:
  - ⚪️ = correct color and position.
  - ⚫️ = correct color but wrong position.
  - ❌ = incorrect color.
- Game ends when the user guesses correctly or after 15 turns.

**Ideas / Hints:**

- Provide a color palette for guesses.
- Show a history of previous guesses with hints.
- Highlight when the user wins or loses.

---

## 4. Sliding Puzzle (15 Puzzle)

A classic number-tile puzzle:

- Render a **4x4 grid** with numbers 1–15 and one empty cell.
- User can click adjacent tiles to slide them into the empty space.
- Goal: arrange numbers in correct order (1 to 15).
- Track number of moves and optionally include a timer.

**Ideas / Hints:**

- Add a “Shuffle” button that produces a solvable configuration.
- Add a “Reset” button to restore the solved state.
- Indicate when the puzzle is solved.

---

## 5. Knight’s Hunt on the Chessboard

A chess-based movement puzzle:

- Display an **8x8 chessboard**.
- User selects two distinct cells:
  - One for a **knight**.
  - One for a **target piece**.
- On starting:
  - Calculate the **minimum number of moves** for the knight to reach the target.
  - Animate each move with a **1-second delay**.
  - The **target does not move** during the sequence.

**Ideas / Hints:**

- Use standard chessboard coloring for better visuals.
- Allow the user to reset or pick new positions.
- Optionally show the total number of moves required before animation starts.

---

## 6. Minesweeper (Mine-Sweeper Game)

A classic minefield logic game:

- Render a grid-based board (for example: **9x9**, **16x16**, or similar).
- Randomly place a set number of **mines** on the board.
- Each cell can be:
  - **Hidden**
  - **Revealed**
  - **Flagged** as a suspected mine
- When the user **left-clicks** a hidden cell:
  - If it contains a mine → **game over**.
  - If it is empty:
    - Show the number of **adjacent mines** (0–8).
    - If the number is **0**, automatically reveal its neighbors (flood fill behavior).
- When the user **right-clicks** (or alternative interaction) on a hidden cell:
  - Toggle a **flag** to mark/unmark a suspected mine.
- Game ends when:
  - The user clicks a mine (loss), or
  - All **non-mine cells are revealed** (win).

**Ideas / Hints:**

- Allow different **difficulty levels** (board size + mine count).
- Show:
  - Number of **remaining mines** (based on flags).
  - A **timer** and/or move count.
- Disable interaction after win/loss and show a clear message.
- Provide a **Restart** / **New Game** button.

---

## 7. 🧬 Conway’s Game of Life

A zero-player simulation that evolves over time based on initial input and mathematical rules.

### 🔷 Rules

- The game runs on a grid of square **cells**, each either:
  - **Alive** (e.g., colored or filled), or
  - **Dead** (e.g., empty or grayed).
- Each cell has **8 neighbors**: all adjacent cells including diagonals — forming a **3x3 neighborhood** centered around the cell.

### 📋 Simulation Logic (applied to all cells each generation)

1. **Survival**: A live cell with **2 or 3 live neighbors** remains alive.
2. **Birth**: A dead cell with **exactly 3 live neighbors** becomes alive.
3. **Death**:
   - Live cells with **fewer than 2** live neighbors die (underpopulation).
   - Live cells with **more than 3** live neighbors die (overpopulation).

### 🕹️ Gameplay Requirements

- The game **must not auto-start**.
- User must:
  - Click on cells to **set initial live cells**.
  - Then click **Start** to begin the simulation.
- Provide controls to:
  - **Play / Pause** the simulation.
  - **Step** through **one generation at a time**.
  - **Reset** the grid or **randomize** live cells.

**Ideas / Hints:**

- Let the user adjust the grid size or simulation speed.
- Visualize generations count.
- Provide some preset patterns (e.g., glider, blinker) if you like.

---

## 🧠 Use Your Imagination!

If any detail is missing or unclear, you are free to:

- Define the behavior in a way that makes sense.
- Add extra features or polish.
- Change UI layout or interactions.

Just make sure to **document** any significant assumptions or deviations in your project `README.md`.

---

Happy coding! 🚀
