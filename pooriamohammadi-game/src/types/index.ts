// Common types for the application
export type GameStatus = 'idle' | 'playing' | 'paused' | 'won' | 'lost' | 'draw';

export interface GameState {
  status: GameStatus;
  score?: number;
  moves?: number;
}

// Minesweeper types
export type CellState = 'hidden' | 'revealed' | 'flagged';
export type CellValue = number | 'mine'; // number is count of adjacent mines (0-8)

export interface Cell {
  id: string;
  state: CellState;
  value: CellValue;
  row: number;
  col: number;
}

export type Difficulty = 'beginner' | 'intermediate' | 'expert';

export interface DifficultyConfig {
  rows: number;
  cols: number;
  mines: number;
  label: string;
}

export interface MinesweeperState {
  grid: Cell[][];
  difficulty: Difficulty;
  gameStatus: 'idle' | 'playing' | 'won' | 'lost';
  minesRemaining: number;
  moves: number;
  startTime: number | null;
  endTime: number | null;
}

