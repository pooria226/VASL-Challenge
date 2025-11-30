import { useState, useEffect, useCallback, useMemo } from 'react';
import type { Difficulty, Cell as CellType } from '../types';
import { DIFFICULTY_CONFIGS } from '../constants';
import {
  createEmptyGrid,
  placeMines,
  revealCell,
  toggleFlag,
  countFlags,
  checkWin,
  revealAllMines,
} from '../utils/minesweeper';

export const useMinesweeper = (difficulty: Difficulty) => {
  const config = DIFFICULTY_CONFIGS[difficulty];
  const [grid, setGrid] = useState<CellType[][]>([]);
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Initialize game
  const initializeGame = useCallback(() => {
    const newGrid = createEmptyGrid(config.rows, config.cols);
    setGrid(newGrid);
    setGameStatus('idle');
    setMoves(0);
    setStartTime(null);
    setElapsedTime(0);
  }, [config.rows, config.cols]);

  // Timer effect
  useEffect(() => {
    let interval: number | undefined;
    if (gameStatus === 'playing' && startTime) {
      interval = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameStatus, startTime]);

  // Handle cell click
  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (gameStatus === 'won' || gameStatus === 'lost') return;

      // First click: place mines and start game
      if (gameStatus === 'idle') {
        const newGrid = placeMines(
          createEmptyGrid(config.rows, config.cols),
          config.mines,
          row,
          col
        );
        const revealedGrid = revealCell(newGrid, row, col);
        setGrid(revealedGrid);
        setGameStatus('playing');
        setStartTime(Date.now());
        setMoves(1);

        // Check win after first click
        if (checkWin(revealedGrid, config.mines)) {
          setGameStatus('won');
        }
        return;
      }

      // Subsequent clicks
      if (grid[row][col].state !== 'hidden') return;

      // Check for mine before revealing
      const isMine = grid[row][col].value === 'mine';
      const newGrid = revealCell(grid, row, col);
      setGrid(newGrid);
      setMoves((prev) => prev + 1);

      // Check for mine
      if (isMine) {
        const revealedMines = revealAllMines(newGrid);
        setGrid(revealedMines);
        setGameStatus('lost');
        return;
      }

      // Check win
      if (checkWin(newGrid, config.mines)) {
        setGameStatus('won');
      }
    },
    [gameStatus, grid, config.rows, config.cols, config.mines]
  );

  // Handle right click (flag)
  const handleRightClick = useCallback(
    (row: number, col: number) => {
      if (gameStatus === 'won' || gameStatus === 'lost' || gameStatus === 'idle') return;
      if (grid[row][col].state === 'revealed') return;

      const newGrid = toggleFlag(grid, row, col);
      setGrid(newGrid);
    },
    [gameStatus, grid]
  );

  // Memoized computed values
  const minesRemaining = useMemo(() => {
    return config.mines - countFlags(grid);
  }, [config.mines, grid]);

  const gameOver = useMemo(() => {
    return gameStatus === 'won' || gameStatus === 'lost';
  }, [gameStatus]);

  // Re-initialize when difficulty changes
  useEffect(() => {
    initializeGame();
  }, [difficulty, initializeGame]);

  return {
    grid,
    gameStatus,
    moves,
    elapsedTime,
    minesRemaining,
    gameOver,
    initializeGame,
    handleCellClick,
    handleRightClick,
  };
};

