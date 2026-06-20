import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Flame, Droplet, Play, SquareTerminal } from 'lucide-react';

export const AlgorithmiqueBlocsSVG: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans">
      <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <SquareTerminal className="text-emerald-500"/> Algorithme : Cuisson des pâtes
      </h3>

      <div className="flex flex-col items-center max-w-sm mx-auto font-mono text-sm">
        
        {/* Début */}
        <div className={`px-4 py-2 rounded-full border-2 border-emerald-500 font-bold mb-4 transition-colors ${step === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-surface text-muted'}`}>
           DÉBUT
        </div>

        {/* Flèche */}
        <div className="w-0.5 h-6 bg-border mb-4 relative">
            {step === 0 && <motion.div layoutId="runner" className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>

        {/* Action 1 */}
        <div className={`px-6 py-3 rounded-lg border-2 border-blue-500 mb-4 transition-colors flex items-center gap-2 ${step === 1 ? 'bg-blue-500/20 text-blue-400' : 'bg-surface text-muted'}`}>
           <Flame className="w-4 h-4"/> Allumer le feu
        </div>

        {/* Flèche */}
        <div className="w-0.5 h-6 bg-border mb-4 relative">
             {step === 1 && <motion.div layoutId="runner" className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>

        {/* Condition */}
        <div className={`relative px-6 py-4 rounded-lg transform rotate-45 border-2 border-yellow-500 mb-8 mt-4 transition-colors w-24 h-24 flex items-center justify-center ${step === 2 || step === 3 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-surface text-muted'}`}>
           <div className="-rotate-45 text-center leading-tight">
               <Droplet className="w-4 h-4 mx-auto mb-1"/>
               Eau bout ?
           </div>
        </div>

        {/* Boucle Non (Step 3) */}
        <AnimatePresence>
            {step === 3 && (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute mr-48 mt-[280px] bg-red-500/20 text-red-400 border border-red-500 px-3 py-1 rounded-md text-xs font-bold"
                >
                    NON ⟶ Attendre 1s
                </motion.div>
            )}
        </AnimatePresence>

        {/* Flèche (Oui) */}
        <div className="w-0.5 h-6 bg-border mb-4 relative">
            {step === 2 && <span className="absolute -left-8 top-1 text-xs text-green-500 font-bold">OUI</span>}
             {(step === 2 || step === 3) && <motion.div layoutId="runner" className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>

        {/* Action 2 */}
        <div className={`px-6 py-3 rounded-lg border-2 border-blue-500 mb-4 transition-colors flex items-center gap-2 ${step === 4 ? 'bg-blue-500/20 text-blue-400' : 'bg-surface text-muted'}`}>
           Plonger les pâtes
        </div>

        {/* Flèche */}
        <div className="w-0.5 h-6 bg-border mb-4 relative">
             {step === 4 && <motion.div layoutId="runner" className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>

        {/* Fin */}
        <div className={`px-4 py-2 rounded-full border-2 border-red-500 font-bold transition-colors ${step === 5 ? 'bg-red-500/20 text-red-400' : 'bg-surface text-muted'}`}>
           FIN
        </div>

      </div>
    </div>
  );
};
