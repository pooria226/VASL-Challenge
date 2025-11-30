// Application constants
export const APP_NAME = 'VASL Game Challenge';
export const APP_VERSION = '1.0.0';

// Minesweeper constants
import type { Difficulty, DifficultyConfig } from '../types';

export const DIFFICULTY_CONFIGS: Record<Difficulty, DifficultyConfig> = {
  beginner: {
    rows: 9,
    cols: 9,
    mines: 10,
    label: 'Beginner',
  },
  intermediate: {
    rows: 16,
    cols: 16,
    mines: 40,
    label: 'Intermediate',
  },
  expert: {
    rows: 16,
    cols: 30,
    mines: 99,
    label: 'Expert',
  },
};

// Re-export minesweeper constants
export * from './minesweeper';

