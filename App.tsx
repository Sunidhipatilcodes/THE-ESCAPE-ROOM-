import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import GameInterface from './components/GameInterface';
import { LEVELS } from './constants';
import Button from './components/UI/Button';

const MainMenu = () => {
  const { dispatch } = useGame();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80" />
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-[Orbitron]">
          Legends Of Hidden Escape 
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Synchronize with the Neural Core. Select your simulation.
        </p>

        <div className="grid gap-6 w-full">
          {LEVELS.map((level) => (
            <div 
              key={level.id} 
              className="group relative bg-white/5 border border-white/10 hover:border-white/30 rounded-xl p-6 transition-all hover:bg-white/10 text-left cursor-pointer overflow-hidden"
              onClick={() => dispatch({ type: 'START_GAME', levelId: level.id })}
            >
              <div className="relative z-10 flex justify-between items-center">
                <div>
                   <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-300 transition-colors">{level.title}</h3>
                   <p className="text-sm text-gray-500 line-clamp-2">{level.introduction}</p>
                </div>
                <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                   {level.theme === 'VICTORIAN' ? '🕯️' : level.theme === 'JUNGLE' ? '🌿' : '🚀'}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-xs text-gray-600 font-mono">
          SYSTEM STATUS: ONLINE <br/>
          AI MODEL: GEMINI-2.5-FLASH <br/>
          LATENCY: 12ms
        </div>
      </div>
    </div>
  );
};

const AppContent = () => {
  const { state } = useGame();
  return state.gameStarted ? <GameInterface /> : <MainMenu />;
}

const App = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;