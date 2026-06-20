import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Feather, ArrowDownCircle } from 'lucide-react';

export const EnergieConservationSVG: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0 = en haut (Ep = max, Ec = 0)
    // 100 = en bas (Ep = 0, Ec = max)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
            // reset avec un petit délai
            setTimeout(() => setProgress(0), 1000);
            return 100;
        }
        return prev + 2; // vitesse de chute
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const ep = Math.max(0, 100 - progress);
  const ec = Math.min(100, progress);

  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans">
      <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <ArrowDownCircle className="text-blue-500"/> Conservation de l'énergie mécanique
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-2xl mx-auto">
        
        {/* Visualisation de la chute */}
        <div className="relative w-24 h-64 bg-slate-900 rounded-full border-4 border-slate-700 shadow-inner flex flex-col items-center py-4">
            <span className="absolute -top-6 text-xs text-muted font-bold">10m (V=0)</span>
            <span className="absolute -bottom-6 text-xs text-muted font-bold">0m (V=max)</span>
            
            <div className="w-1 h-full bg-slate-800 rounded-full relative">
                <motion.div 
                   className="absolute left-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] border-2 border-slate-300"
                   style={{ top: `${progress}%`, marginTop: '-16px' }}
                />
            </div>
        </div>

        {/* Barres d'énergie */}
        <div className="flex-1 w-full space-y-6">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-blue-400">Énergie de Position (Ep)</span>
                    <span className="font-mono text-blue-200">{ep}%</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-75" style={{ width: `${ep}%` }} />
                </div>
                <p className="text-xs text-slate-400 mt-2 text-right">Liée à l'altitude</p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-red-500">Énergie Cinétique (Ec)</span>
                    <span className="font-mono text-red-200">{ec}%</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 transition-all duration-75" style={{ width: `${ec}%` }} />
                </div>
                <p className="text-xs text-slate-400 mt-2 text-right">Liée à la vitesse</p>
            </div>

            <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-emerald-400">Énergie Mécanique (Em)</span>
                    <span className="font-mono text-emerald-200">100%</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden relative">
                    {/* Em = Ep + Ec */}
                    <div className="absolute left-0 h-full bg-blue-500 transition-all duration-75" style={{ width: `${ep}%` }} />
                    <div className="absolute h-full bg-red-500 transition-all duration-75" style={{ left: `${ep}%`, width: `${ec}%` }} />
                </div>
                <p className="text-xs text-emerald-300 mt-2 text-center font-bold">Em = Ep + Ec (Constante)</p>
            </div>
        </div>

      </div>
    </div>
  );
};
