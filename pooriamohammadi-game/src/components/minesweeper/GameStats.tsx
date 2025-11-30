import { memo } from 'react';
import { formatTime } from '../../utils/minesweeper';

interface GameStatsProps {
  minesRemaining: number;
  moves: number;
  elapsedTime: number;
}

export const GameStats = memo(({ minesRemaining, moves, elapsedTime }: GameStatsProps) => {
  return (
    <div className="flex gap-4 text-sm">
      <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
        <span className="text-gray-600 dark:text-gray-400">Mines: </span>
        <span className="font-bold text-gray-800 dark:text-gray-200">
          {minesRemaining}
        </span>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
        <span className="text-gray-600 dark:text-gray-400">Moves: </span>
        <span className="font-bold text-gray-800 dark:text-gray-200">{moves}</span>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
        <span className="text-gray-600 dark:text-gray-400">Time: </span>
        <span className="font-bold text-gray-800 dark:text-gray-200">
          {formatTime(elapsedTime)}
        </span>
      </div>
    </div>
  );
});

GameStats.displayName = 'GameStats';

