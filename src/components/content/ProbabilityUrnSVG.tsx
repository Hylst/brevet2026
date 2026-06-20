import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Play } from 'lucide-react';
import { useGamificationStore } from '../../store/useGamificationStore';

export const ProbabilityUrnSVG: React.FC = () => {
  const [urn, setUrn] = useState<'a'|'b'>('a');
  const [drawn, setDrawn] = useState<string | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  
  const { addXP } = useGamificationStore();
  
  // Urn A: 3 Red, 2 Blue
  // Urn B: 1 Red, 4 Blue
  
  const drawBall = () => {
    if (drawing) return;
    setDrawing(true);
    
    // Choose random based on current urn
    const rand = Math.random();
    let result = '';
    if (urn === 'a') {
      result = rand < 0.6 ? 'red' : 'blue'; // 3/5 = 0.6
    } else {
      result = rand < 0.2 ? 'red' : 'blue'; // 1/5 = 0.2
    }
    
    setDrawn(result);
    setHistory(prev => [result, ...prev].slice(0, 10)); // keep last 10
    addXP(2);
    
    setTimeout(() => {
      setDrawing(false);
    }, 1000);
  };

  const reset = () => {
    setDrawn(null);
    setHistory([]);
  };

  return (
    <div className="my-8 p-6 bg-surface border border-border rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold text-white mb-4 text-center">Tirage au sort dans une urne</h3>
      <p className="text-sm text-muted text-center mb-6">
        Modifie le contenu de l'urne et observe la différence de probabilité !
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        
        {/* Left side: Controls and Urn Graphic */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mb-4 bg-background p-1 rounded-xl">
            <button 
              onClick={() => { setUrn('a'); reset(); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${urn === 'a' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
            >
              Urne A (3R, 2B)
            </button>
            <button 
              onClick={() => { setUrn('b'); reset(); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${urn === 'b' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
            >
              Urne B (1R, 4B)
            </button>
          </div>

          <div className="relative w-48 h-56 mt-4">
            {/* Draw the Urn */}
            <svg width="100%" height="100%" viewBox="0 0 100 120" className="drop-shadow-lg">
              <path d="M20,20 L20,100 C20,110 30,115 50,115 C70,115 80,110 80,100 L80,20 Z" fill="none" stroke="#64748b" strokeWidth="4" />
              <ellipse cx="50" cy="20" rx="30" ry="10" fill="none" stroke="#64748b" strokeWidth="4" />
              
              {/* Balls inside Urn A */}
              {urn === 'a' && (
                <>
                  <circle cx="35" cy="100" r="8" fill="#ef4444" />
                  <circle cx="50" cy="95" r="8" fill="#ef4444" />
                  <circle cx="65" cy="100" r="8" fill="#3b82f6" />
                  <circle cx="42" cy="80" r="8" fill="#ef4444" />
                  <circle cx="58" cy="80" r="8" fill="#3b82f6" />
                </>
              )}
              {/* Balls inside Urn B */}
              {urn === 'b' && (
                <>
                  <circle cx="35" cy="100" r="8" fill="#3b82f6" />
                  <circle cx="50" cy="95" r="8" fill="#ef4444" />
                  <circle cx="65" cy="100" r="8" fill="#3b82f6" />
                  <circle cx="42" cy="80" r="8" fill="#3b82f6" />
                  <circle cx="58" cy="80" r="8" fill="#3b82f6" />
                </>
              )}
            </svg>
            
            {/* Drawn ball animation */}
            {drawn && (
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.5 }}
                animate={{ y: -40, opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0 }}
                key={history.length}
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full shadow-lg border-2 border-white/20 z-10 ${drawn === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}
              />
            )}
          </div>

          <button 
            onClick={drawBall}
            disabled={drawing}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary-hover hover:to-indigo-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
          >
            <Play className="w-5 h-5" />
            Tirer une boule
          </button>
        </div>

        {/* Right side: Stats */}
        <div className="w-full md:w-64 bg-background p-4 rounded-xl border border-border">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-foreground">Historique</h4>
            <button onClick={reset} className="text-muted hover:text-white p-1" title="Réinitialiser">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6 min-h-[40px]">
            {history.map((ball, i) => (
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                key={i} 
                className={`w-6 h-6 rounded-full shadow-sm border border-white/10 ${ball === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}
              />
            ))}
            {history.length === 0 && <span className="text-sm text-muted italic">Aucun tirage</span>}
          </div>

          <h4 className="font-bold text-foreground mb-2">Résultats empiriques</h4>
          {history.length > 0 ? (
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-red-400 font-bold">Rouges</span>
                  <span>{history.filter(b => b === 'red').length} / {history.length} ({(history.filter(b => b === 'red').length / history.length * 100).toFixed(0)}%)</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full transition-all" style={{ width: `${history.filter(b => b === 'red').length / history.length * 100}%` }}></div>
                </div>
                <div className="text-xs text-muted text-right mt-1">Théorique: {urn === 'a' ? '60%' : '20%'}</div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-blue-400 font-bold">Bleues</span>
                  <span>{history.filter(b => b === 'blue').length} / {history.length} ({(history.filter(b => b === 'blue').length / history.length * 100).toFixed(0)}%)</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${history.filter(b => b === 'blue').length / history.length * 100}%` }}></div>
                </div>
                <div className="text-xs text-muted text-right mt-1">Théorique: {urn === 'a' ? '40%' : '80%'}</div>
              </div>
              <p className="text-xs text-subtle mt-4 italic leading-relaxed">
                Plus on fait de tirages, plus la fréquence empirique se rapproche de la probabilité théorique (Loi des grands nombres).
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted">Fais plusieurs tirages pour voir les statistiques !</p>
          )}
        </div>
      </div>
    </div>
  );
};
