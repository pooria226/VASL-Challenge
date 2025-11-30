/**
 * Color mapping for cell numbers in Minesweeper
 */
export const CELL_NUMBER_COLORS = [
  '', // 0 - no color
  'text-blue-600 dark:text-blue-400', // 1
  'text-green-600 dark:text-green-400', // 2
  'text-red-600 dark:text-red-400', // 3
  'text-purple-600 dark:text-purple-400', // 4
  'text-yellow-600 dark:text-yellow-500', // 5
  'text-pink-600 dark:text-pink-400', // 6
  'text-gray-800 dark:text-gray-300', // 7
  'text-gray-900 dark:text-gray-200', // 8
] as const;

/**
 * Cell state styles mapping
 */
export const CELL_STATE_STYLES = {
  hidden: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-500 dark:active:bg-gray-400',
  revealed: 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-default',
  flagged: 'bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700',
  mine: 'bg-red-500 dark:bg-red-600',
} as const;

