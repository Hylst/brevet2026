import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, RefreshCcw } from 'lucide-react';

export const EquationsBalanceSVG: React.FC = () => {
  const [leftX, setLeftX] = useState(2);
  const [leftConst, setLeftConst] = useState(3);
  const [rightConst, setRightConst] = useState(11);
  
  // Model: ax + b = c
  // Current: leftX * X + leftConst = rightConst
  // Solution: X = (rightConst - leftConst) / leftX
  
  const xValue = 4; // We force the solution to be 4 for this interactive demo
  
  const leftWeight = leftX * 10 + leftConst;
  const rightWeight = rightConst;
  
  // Angle of the balance (0 is balanced)
  const balanceAngle = (leftWeight - rightWeight) * 0.5;

  const reset = () => {
    setLeftX(2);
    setLeftConst(3);
    setRightConst(11);
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
      <h3 className="text-xl font-bold text-foreground mb-4 text-center">Équilibre des Équations : <span className="text-primary font-mono">{leftX}x + {leftConst} = {rightConst}</span></h3>
      
      <div className="flex flex-col items-center gap-8">
        {/* The Balance */}
        <div className="relative w-full max-w-md h-64 flex items-end justify-center">
            {/* Base */}
            <div className="absolute bottom-0 w-32 h-4 bg-muted rounded-full" />
            <div className="absolute bottom-0 w-2 h-32 bg-muted translate-y-[-4px]" />
            
            {/* Moving Part */}
            <motion.g 
                className="absolute top-16 w-full h-8"
                animate={{ rotate: balanceAngle }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
                {/* Crossbar */}
                <div className="absolute top-0 left-[-10%] w-[120%] h-2 bg-foreground rounded-full" />
                
                {/* Left Pan */}
                <div className="absolute top-2 left-0 w-32 flex flex-col items-center origin-top" style={{ transform: `rotate(${-balanceAngle}deg)` }}>
                    <div className="w-1 h-12 bg-muted" />
                    <div className="w-32 h-4 bg-primary rounded-b-xl shadow-lg flex flex-wrap justify-center p-1 gap-1 min-h-[40px] items-end">
                        {Array.from({ length: leftX }).map((_, i) => (
                             <div key={`x-${i}`} className="w-6 h-6 bg-primary-dark border border-white/20 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm">x</div>
                        ))}
                        {Array.from({ length: leftConst }).map((_, i) => (
                             <div key={`c-${i}`} className="w-4 h-4 bg-white/20 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-bold text-white">1</div>
                        ))}
                    </div>
                </div>

                {/* Right Pan */}
                <div className="absolute top-2 right-0 w-32 flex flex-col items-center origin-top" style={{ transform: `rotate(${-balanceAngle}deg)` }}>
                    <div className="w-1 h-12 bg-muted" />
                    <div className="w-32 h-4 bg-success rounded-b-xl shadow-lg flex flex-wrap justify-center p-1 gap-1 min-h-[40px] items-end">
                        {Array.from({ length: rightConst }).map((_, i) => (
                             <div key={`rc-${i}`} className="w-3 h-3 bg-white/20 rounded-full border border-white/10 flex items-center justify-center text-[6px] font-bold text-white">1</div>
                        ))}
                    </div>
                </div>
            </motion.g>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            <div className="space-y-4 p-4 bg-background rounded-xl border border-border">
                <p className="text-xs font-bold text-primary uppercase mb-2">Côté Gauche</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Nombre de <strong className="text-primary">x</strong></span>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLeftX(Math.max(1, leftX - 1))} className="p-1 hover:bg-surface rounded border border-border"><Minus className="w-4 h-4"/></button>
                        <span className="w-4 text-center font-bold">{leftX}</span>
                        <button onClick={() => setLeftX(Math.min(5, leftX + 1))} className="p-1 hover:bg-surface rounded border border-border"><Plus className="w-4 h-4"/></button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Unités</span>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLeftConst(Math.max(0, leftConst - 1))} className="p-1 hover:bg-surface rounded border border-border"><Minus className="w-4 h-4"/></button>
                        <span className="w-4 text-center font-bold">{leftConst}</span>
                        <button onClick={() => setLeftConst(Math.min(20, leftConst + 1))} className="p-1 hover:bg-surface rounded border border-border"><Plus className="w-4 h-4"/></button>
                    </div>
                </div>
            </div>

            <div className="space-y-4 p-4 bg-background rounded-xl border border-border">
                <p className="text-xs font-bold text-success uppercase mb-2">Côté Droit</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Unités</span>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setRightConst(Math.max(1, rightConst - 1))} className="p-1 hover:bg-surface rounded border border-border"><Minus className="w-4 h-4"/></button>
                        <span className="w-6 text-center font-bold">{rightConst}</span>
                        <button onClick={() => setRightConst(Math.min(40, rightConst + 1))} className="p-1 hover:bg-surface rounded border border-border"><Plus className="w-4 h-4"/></button>
                    </div>
                </div>
                <button 
                    onClick={reset}
                    className="w-full mt-4 py-2 bg-surface hover:bg-surface-hover border border-border rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                >
                    <RefreshCcw className="w-3 h-3" /> Réinitialiser
                </button>
            </div>
        </div>

        <div className="w-full">
            <AnimatePresence mode="wait">
                {Math.abs(balanceAngle) < 0.1 ? (
                    <motion.div 
                        key="balanced"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-success/20 border border-success/30 p-4 rounded-xl text-center"
                    >
                        <p className="text-success font-bold text-sm">Bravo ! L'équation est équilibrée.</p>
                        <p className="text-xs text-success/80 mt-1">L'égalité est respectée.</p>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="unbalanced"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-warning/10 border border-warning/20 p-4 rounded-xl text-center"
                    >
                        <p className="text-warning font-bold text-sm truncate">L'équation n'est pas équilibrée !</p>
                        <p className="text-xs text-muted mt-1">
                            {balanceAngle > 0 ? "Le côté gauche est trop lourd." : "Le côté droit est trop lourd."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
