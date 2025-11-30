import type { Cell } from '../types';

/**
 * Creates an empty grid of cells
 */
export const createEmptyGrid = (rows: number, cols: number): Cell[][] => {
  const grid: Cell[][] = [];
  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < cols; col++) {
      grid[row][col] = {
        id: `${row}-${col}`,
        state: 'hidden',
        value: 0,
        row,
        col,
      };
    }
  }
  return grid;
};

/**
 * Places mines randomly on the grid, avoiding the first clicked cell
 */
export const placeMines = (
  grid: Cell[][],
  mineCount: number,
  firstClickRow: number,
  firstClickCol: number
): Cell[][] => {
  const rows = grid.length;
  const cols = grid[0].length;
  const mines: Set<string> = new Set();

  // Generate random mine positions, avoiding first click
  while (mines.size < mineCount) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    const key = `${row}-${col}`;

    // Don't place mine on first click or if already has mine
    if (
      !(row === firstClickRow && col === firstClickCol) &&
      !mines.has(key)
    ) {
      mines.add(key);
    }
  }

  // Place mines
  mines.forEach((key) => {
    const [row, col] = key.split('-').map(Number);
    grid[row][col].value = 'mine';
  });

  // Calculate adjacent mine counts
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col].value !== 'mine') {
        grid[row][col].value = countAdjacentMines(grid, row, col);
      }
    }
  }

  return grid;
};

/**
 * Counts adjacent mines for a cell
 */
const countAdjacentMines = (
  grid: Cell[][],
  row: number,
  col: number
): number => {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;

      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol].value === 'mine'
      ) {
        count++;
      }
    }
  }

  return count;
};

/**
 * Flood fill algorithm to reveal empty cells
 * Uses iterative approach (queue) instead of recursion for better performance on large grids
 */
export const revealCell = (
  grid: Cell[][],
  row: number,
  col: number
): Cell[][] => {
  const newGrid = grid.map((r) => r.map((c) => ({ ...c })));
  const rows = newGrid.length;
  const cols = newGrid[0].length;

  // Use queue for iterative flood fill (better for large grids)
  const queue: Array<[number, number]> = [[row, col]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    const key = `${r}-${c}`;

    // Out of bounds or already processed
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      visited.has(key) ||
      newGrid[r][c].state !== 'hidden'
    ) {
      continue;
    }

    visited.add(key);
    newGrid[r][c].state = 'revealed';

    // If it's an empty cell (value 0), add neighbors to queue
    if (newGrid[r][c].value === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          queue.push([r + dr, c + dc]);
        }
      }
    }
  }

  return newGrid;
};

/**
 * Toggles flag on a cell
 */
export const toggleFlag = (
  grid: Cell[][],
  row: number,
  col: number
): Cell[][] => {
  const newGrid = grid.map((r) => r.map((c) => ({ ...c })));
  const cell = newGrid[row][col];

  if (cell.state === 'hidden') {
    cell.state = 'flagged';
  } else if (cell.state === 'flagged') {
    cell.state = 'hidden';
  }

  return newGrid;
};

/**
 * Counts flagged cells
 */
export const countFlags = (grid: Cell[][]): number => {
  let count = 0;
  for (const row of grid) {
    for (const cell of row) {
      if (cell.state === 'flagged') {
        count++;
      }
    }
  }
  return count;
};

/**
 * Checks if the game is won (all non-mine cells are revealed)
 */
export const checkWin = (grid: Cell[][], totalMines: number): boolean => {
  const rows = grid.length;
  const cols = grid[0].length;
  const totalCells = rows * cols;
  let revealedCount = 0;

  for (const row of grid) {
    for (const cell of row) {
      if (cell.state === 'revealed') {
        revealedCount++;
      }
    }
  }

  // Win condition: all non-mine cells are revealed
  return revealedCount === totalCells - totalMines;
};

/**
 * Reveals all mines (for game over)
 */
export const revealAllMines = (grid: Cell[][]): Cell[][] => {
  const newGrid = grid.map((r) => r.map((c) => ({ ...c })));

  for (const row of newGrid) {
    for (const cell of row) {
      if (cell.value === 'mine' && cell.state !== 'flagged') {
        cell.state = 'revealed';
      }
    }
  }

  return newGrid;
};

/**
 * Formats time in MM:SS format
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

