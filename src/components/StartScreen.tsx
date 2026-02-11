interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-50 relative overflow-hidden">
      {/* Memphis decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent opacity-20 -rotate-12"></div>
      <div className="absolute top-20 right-16 w-16 h-16 bg-marked opacity-30 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-bingo opacity-25 rotate-12"></div>
      <div className="absolute bottom-32 right-12 w-20 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-coral opacity-30 -rotate-6"></div>
      
      <div className="text-center max-w-md relative z-10">
        <div className="mb-2 animate-[bounce_1s_ease-in-out]">
          <h1 className="font-display text-7xl text-accent mb-1 drop-shadow-lg" style={{letterSpacing: '0.05em'}}>
            SOC
          </h1>
          <div className="h-2 w-32 mx-auto bg-gradient-to-r from-accent via-marked to-bingo rotate-1 mb-1"></div>
          <h1 className="font-display text-7xl text-marked mb-1 drop-shadow-lg" style={{letterSpacing: '0.05em'}}>
            OPS
          </h1>
        </div>
        <p className="text-2xl font-semibold text-purple mb-8 -rotate-1">Social Bingo</p>
        
        <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-purple rotate-1 mb-8 animate-[fadeIn_0.8s_ease-in]">
          <h2 className="font-display text-xl text-coral mb-3 -rotate-1">How to play</h2>
          <ul className="text-left text-gray-700 font-semibold space-y-2">
            <li className="flex items-start">
              <span className="text-accent mr-2 text-xl">▸</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-marked mr-2 text-xl">▸</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-bingo mr-2 text-xl">▸</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-display text-2xl py-5 px-8 rounded-2xl border-4 border-purple shadow-lg hover:bg-accent-light active:scale-95 transition-all -rotate-2 animate-[fadeIn_1s_ease-in]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
