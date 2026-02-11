import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-br from-yellow-50 via-pink-50 to-cyan-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b-4 border-accent shadow-md">
        <button
          onClick={onReset}
          className="text-accent font-semibold text-sm px-4 py-2 rounded-lg border-2 border-accent hover:bg-accent hover:text-white active:scale-95 transition-all -rotate-1"
        >
          ← Reset
        </button>
        <h1 className="font-display text-2xl text-purple">Soc Ops</h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-gray-700 font-semibold text-sm py-3 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo text-gray-900 text-center py-3 font-display text-lg border-y-4 border-purple animate-pulse">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
