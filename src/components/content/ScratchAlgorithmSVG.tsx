import React, { useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Play } from 'lucide-react';

export const ScratchAlgorithmSVG: React.FC = () => {
  const [sides, setSides] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();
  
  const angle = 360 / sides;
  const sideLength = 60;

  const runSimulation = async () => {
    setIsPlaying(true);
    
    // Initial state
    let currentX = 0;
    let currentY = 0;
    let currentRotate = 0;

    // Reset
    await controls.start({ x: 0, y: 0, rotate: 0, opacity: 1, transition: { duration: 0 } });
    
    // Simulating the loop
    for (let i = 0; i < sides; i++) {
      // Calculate next position
      const rad = (currentRotate * Math.PI) / 180;
      const dx = Math.cos(rad) * sideLength;
      const dy = Math.sin(rad) * sideLength;
      
      currentX += dx;
      currentY += dy;

      // Move 
      await controls.start({
        x: currentX,
        y: currentY,
        transition: { duration: 0.5 }
      });
      
      // Turn
      currentRotate += angle;
      await controls.start({
        rotate: currentRotate,
        transition: { duration: 0.3 }
      });
    }
    setIsPlaying(false);
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
      <h3 className="text-xl font-bold text-foreground mb-4 text-center">Simulateur d'Algorithme Scratch</h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Scratch Blocks */}
        <div className="flex-1 space-y-2">
           <div className="bg-warning p-3 rounded-lg text-white font-bold text-sm shadow-md border-b-4 border-warning-dark">Quand drapeau cliqué</div>
           <div className="bg-primary p-3 rounded-t-lg text-white font-bold text-sm border-b-4 border-primary-dark inline-block w-full">Répéter {sides} fois</div>
           <div className="ml-4 border-l-8 border-primary space-y-1">
              <div className="bg-blue-500 p-2 rounded-lg text-white font-bold text-xs ml-2 shadow-sm">Avancer de 60 pas</div>
              <div className="bg-blue-500 p-2 rounded-lg text-white font-bold text-xs ml-2 shadow-sm">Tourner de {angle.toFixed(0)}°</div>
           </div>
           <div className="bg-primary p-1 rounded-b-lg w-full"></div>
        </div>

        {/* canvas */}
        <div className="flex-1 aspect-square bg-background rounded-xl border border-border relative overflow-hidden flex items-center justify-center">
            {/* Grid for visual ref */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-muted) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <svg viewBox="-100 -100 200 200" className="w-full h-full overflow-visible">
               <motion.g animate={controls}>
                  <path d="M -10,-8 L 12,0 L -10,8 Z" fill="var(--color-warning)" stroke="var(--color-warning-dark)" strokeWidth="1" />
                  <circle cx="0" cy="0" r="2" fill="white" />
               </motion.g>
            </svg>

            <div className="absolute bottom-4 right-4 flex gap-2">
                <button 
                  onClick={() => setSides(Math.max(3, sides - 1))}
                  className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface-hover text-foreground"
                >
                  -
                </button>
                <span className="bg-surface px-3 py-1 rounded-lg border border-border text-xs font-bold flex items-center">{sides} côtés</span>
                <button 
                  onClick={() => setSides(Math.min(12, sides + 1))}
                  className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface-hover text-foreground"
                >
                  +
                </button>
            </div>
        </div>
      </div>

      <button 
        onClick={runSimulation}
        disabled={isPlaying}
        className="w-full mt-6 py-3 px-6 bg-success text-white font-bold rounded-xl shadow-lg hover:shadow-success/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100 active:scale-95"
      >
        <Play className="w-5 h-5 fill-current" />
        Lancer l'algorithme
      </button>
    </div>
  );
};
