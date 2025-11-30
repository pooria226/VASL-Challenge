import { memo, useMemo, useCallback } from 'react';
import type { Cell as CellType } from '../../types';
import { cn } from '../../utils';
import { CELL_NUMBER_COLORS, CELL_STATE_STYLES } from '../../constants/minesweeper';

interface CellProps {
  cell: CellType;
  onClick: (row: number, col: number) => void;
  onRightClick: (row: number, col: number) => void;
  gameOver: boolean;
}

export const Cell = memo(({ cell, onClick, onRightClick, gameOver }: CellProps) => {
  const handleClick = useCallback(() => {
    if (cell.state === 'hidden' && !gameOver) {
      onClick(cell.row, cell.col);
    }
  }, [cell.state, cell.row, cell.col, gameOver, onClick]);

  const handleRightClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!gameOver && (cell.state === 'hidden' || cell.state === 'flagged')) {
        onRightClick(cell.row, cell.col);
      }
    },
    [cell.state, cell.row, cell.col, gameOver, onRightClick]
  );

  const cellContent = useMemo(() => {
    if (cell.state === 'flagged') {
      return '🚩';
    }
    if (cell.state === 'revealed') {
      if (cell.value === 'mine') {
        return '💣';
      }
      if (cell.value === 0) {
        return '';
      }
      return cell.value.toString();
    }
    return '';
  }, [cell.state, cell.value]);

  const cellColor = useMemo(() => {
    if (cell.state === 'revealed' && typeof cell.value === 'number' && cell.value > 0) {
      return CELL_NUMBER_COLORS[cell.value] || '';
    }
    return '';
  }, [cell.state, cell.value]);

  const cellStyles = useMemo(() => {
    const baseStyles = 'w-8 h-8 sm:w-10 sm:h-10 border-2 border-gray-400 dark:border-gray-500 flex items-center justify-center text-sm font-bold transition-all duration-150';
    
    let stateStyles = '';
    if (cell.state === 'hidden') {
      stateStyles = CELL_STATE_STYLES.hidden;
    } else if (cell.state === 'revealed') {
      stateStyles = CELL_STATE_STYLES.revealed;
      if (cell.value === 'mine') {
        stateStyles = CELL_STATE_STYLES.mine;
      }
    } else if (cell.state === 'flagged') {
      stateStyles = CELL_STATE_STYLES.flagged;
    }

    return cn(
      baseStyles,
      stateStyles,
      cellColor,
      gameOver && cell.state === 'hidden' && 'opacity-75'
    );
  }, [cell.state, cell.value, cellColor, gameOver]);

  const isDisabled = cell.state === 'revealed' || gameOver;
  const ariaLabel = useMemo(
    () => `Cell row ${cell.row + 1}, column ${cell.col + 1}, ${cell.state}${cell.state === 'revealed' && typeof cell.value === 'number' ? `, ${cell.value} adjacent mines` : ''}`,
    [cell.row, cell.col, cell.state, cell.value]
  );

  return (
    <button
      className={cellStyles}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      type="button"
    >
      {cellContent}
    </button>
  );
});

Cell.displayName = 'Cell';

