import { useState, useMemo } from 'react';
import type { Difficulty } from '../../types';
import { DIFFICULTY_CONFIGS } from '../../constants';
import { useMinesweeper } from '../../hooks/useMinesweeper';
import { Cell, GameStats, GameStatus } from '../../components/minesweeper';
import { Button } from '../../components/ui';

export const Minesweeper = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const config = DIFFICULTY_CONFIGS[difficulty];

  const {
    grid,
    gameStatus,
    moves,
    elapsedTime,
    minesRemaining,
    gameOver,
    initializeGame,
    handleCellClick,
    handleRightClick,
  } = useMinesweeper(difficulty);

  // Memoize difficulty buttons to prevent unnecessary re-renders
  const difficultyButtons = useMemo(
    () =>
      Object.entries(DIFFICULTY_CONFIGS).map(([key, config]) => (
        <Button
          key={key}
          variant={difficulty === key ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setDifficulty(key as Difficulty)}
          disabled={gameStatus === 'playing'}
          aria-pressed={difficulty === key}
        >
          {config.label}
        </Button>
      )),
    [difficulty, gameStatus]
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          🎯 Minesweeper
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Click to reveal, right-click to flag
        </p>
      </header>

      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Difficulty Selector */}
          <nav className="flex gap-2" aria-label="Difficulty selection">
            {difficultyButtons}
          </nav>

          {/* Stats */}
          <GameStats
            minesRemaining={minesRemaining}
            moves={moves}
            elapsedTime={elapsedTime}
          />

          {/* Restart Button */}
          <Button
            onClick={initializeGame}
            variant="secondary"
            size="sm"
            aria-label="Start a new game"
          >
            🔄 New Game
          </Button>
        </div>
      </div>

      {/* Game Board */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
        role="grid"
        aria-label={`Minesweeper game board, ${config.rows} by ${config.cols} cells, ${config.mines} mines`}
      >
        <div
          className="inline-grid gap-1 mx-auto"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, minmax(0, 1fr))`,
          }}
        >
          {grid.map((row) =>
            row.map((cell) => (
              <Cell
                key={cell.id}
                cell={cell}
                onClick={handleCellClick}
                onRightClick={handleRightClick}
                gameOver={gameOver}
              />
            ))
          )}
        </div>
      </div>

      {/* Game Status Messages */}
      {(gameStatus === 'won' || gameStatus === 'lost' || gameStatus === 'idle') && (
        <GameStatus
          status={gameStatus as 'won' | 'lost' | 'idle'}
          elapsedTime={elapsedTime}
          moves={moves}
        />
      )}
    </div>
  );
};

