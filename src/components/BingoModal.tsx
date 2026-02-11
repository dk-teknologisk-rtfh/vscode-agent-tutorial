interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      {/* Memphis confetti decorations */}
      <div className="absolute top-10 left-1/4 w-12 h-12 rounded-full bg-accent opacity-50 animate-bounce"></div>
      <div className="absolute top-20 right-1/4 w-10 h-10 bg-marked opacity-50 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-14 h-14 rounded-full bg-bingo opacity-50 animate-bounce"></div>
      <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-coral opacity-50 rotate-12 animate-pulse"></div>
      
      <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-4 border-bingo -rotate-2 animate-[bounce_0.5s_ease-out] relative z-10">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="font-display text-5xl mb-2">
          <span className="text-accent">B</span>
          <span className="text-marked">I</span>
          <span className="text-bingo">N</span>
          <span className="text-coral">G</span>
          <span className="text-purple">O</span>
          <span className="text-bingo text-6xl">!</span>
        </h2>
        <p className="text-lg font-semibold text-gray-700 mb-6 rotate-1">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-display text-xl py-4 px-6 rounded-2xl border-4 border-purple shadow-lg hover:bg-accent-light active:scale-95 transition-all rotate-1"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
