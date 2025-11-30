import { memo } from 'react';
import { formatTime } from '../../utils/minesweeper';

interface GameStatusProps {
  status: 'won' | 'lost' | 'idle';
  elapsedTime: number;
  moves: number;
}

export const GameStatus = memo(({ status, elapsedTime, moves }: GameStatusProps) => {
  if (status === 'won') {
    return (
      <div className="mt-6 text-center">
        <div className="bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg p-4 inline-block animate-pulse">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
            🎉 Congratulations! You Won!
          </h2>
          <p className="text-green-700 dark:text-green-300">
            Completed in {formatTime(elapsedTime)} with {moves} moves
          </p>
        </div>
      </div>
    );
  }

  if (status === 'lost') {
    return (
      <div className="mt-6 text-center">
        <div className="bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded-lg p-4 inline-block">
          <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-2">
            💥 Game Over!
          </h2>
          <p className="text-red-700 dark:text-red-300">
            Better luck next time!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 text-center">
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 inline-block">
        <p className="text-blue-800 dark:text-blue-200 text-sm">
          Click any cell to start the game. The first click is always safe!
        </p>
      </div>
    </div>
  );
});

GameStatus.displayName = 'GameStatus';

