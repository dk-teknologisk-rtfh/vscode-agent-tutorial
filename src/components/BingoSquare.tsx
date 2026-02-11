import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  // Memphis playful rotation based on square ID
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
  const rotationClass = rotations[square.id % rotations.length];
  
  // Memphis border colors - vary by position
  const borderColors = ['border-accent', 'border-marked', 'border-bingo', 'border-coral', 'border-purple'];
  const borderColor = borderColors[square.id % borderColors.length];
  
  const baseClasses =
    `relative flex items-center justify-center px-2 py-4 text-center border-4 rounded-lg transition-all duration-200 select-none min-h-[80px] text-xs leading-tight font-semibold ${rotationClass}`;

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo border-bingo text-gray-900 animate-pulse'
      : `pattern-circles bg-marked/20 border-marked-border text-gray-900`
    : `bg-white ${borderColor} text-gray-800 hover:bg-gray-50 active:scale-95`;

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-display text-base bg-purple text-white border-bingo shadow-lg' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto relative z-10 w-full">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-marked-border text-lg font-bold">✓</span>
      )}
    </button>
  );
}
