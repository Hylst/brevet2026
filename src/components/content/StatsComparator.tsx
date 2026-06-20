import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { Info } from 'lucide-react';
import { playSound } from '../../lib/audio';

export const StatsComparator: React.FC = () => {
  const [data, setData] = useState([10, 12, 12, 14, 15, 18, 20]);
  
  const sorted = [...data].sort((a, b) => a - b);
  const mean = data.length > 0 ? (data.reduce((a, b) => a + b, 0) / data.length) : 0;
  
  const mid = Math.floor(sorted.length / 2);
  const median = data.length === 0 ? 0 : sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  const addValue = () => {
    if (data.length >= 15) return;
    playSound('click');
    const newVal = Math.floor(Math.random() * 20);
    setData([...data, newVal]);
  };

  const removeValue = (index: number) => {
    if (data.length <= 1) return;
    playSound('click');
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border shadow-xl">
      <h3 className="text-xl font-bold text-foreground mb-4 text-center">Moyenne vs Médiane</h3>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-surface p-4 rounded-xl border border-border">
          <div className="text-sm font-bold text-muted mb-3 flex items-center justify-between">
            <span>Données en vrac ({data.length})</span>
            <button 
              onClick={addValue}
              onMouseEnter={() => playSound('hover')}
              disabled={data.length >= 15}
              className="px-2 py-1 bg-primary/20 hover:bg-primary/30 text-primary text-xs rounded transition-colors disabled:opacity-50"
            >
              + Aléatoire
            </button>
          </div>
          <div className="flex flex-wrap gap-2 min-h-[48px]">
            <AnimatePresence>
              {data.map((val, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  key={`raw-${idx}-${val}`}
                  onClick={() => removeValue(idx)}
                  onMouseEnter={() => playSound('hover')}
                  className="group relative cursor-pointer"
                >
                  <div className="bg-background border border-border px-3 py-2 rounded-lg font-mono text-sm font-bold hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors shadow-sm">
                    {val}
                  </div>
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 bg-danger text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] shadow">×</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1 bg-surface p-4 rounded-xl border border-border">
          <div className="text-sm font-bold text-muted mb-3">Série ordonnée (pour Médiane)</div>
          <div className="flex flex-wrap gap-2 min-h-[48px]">
            <AnimatePresence>
              {sorted.map((val, idx) => {
                const isMedian = sorted.length % 2 !== 0 
                  ? idx === mid 
                  : (idx === mid || idx === mid - 1);
                
                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key={`sorted-${idx}-${val}`}
                    className={clsx(
                      "px-3 py-2 rounded-lg font-mono text-sm font-bold shadow-sm transition-colors",
                      isMedian ? "bg-warning/20 border border-warning text-warning" : "bg-background border border-border text-foreground"
                    )}
                  >
                    {val}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 text-center relative overflow-hidden">
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Moyenne</div>
          <div className="text-4xl font-black text-primary">{mean.toFixed(1)}</div>
          <p className="text-xs text-primary/70 mt-2 font-medium">Somme / Effectif total</p>
        </div>
        <div className="bg-warning/10 p-4 rounded-2xl border border-warning/20 text-center relative overflow-hidden">
          <div className="text-xs font-bold text-warning uppercase tracking-widest mb-1">Médiane</div>
          <div className="text-4xl font-black text-warning">{median.toFixed(1)}</div>
          <p className="text-xs text-warning/70 mt-2 font-medium">Valeur centrale</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-5 rounded-xl border border-blue-500/20">
        <div className="flex gap-3">
          <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
             <p className="font-bold mb-1 text-blue-300">Le savais-tu ?</p>
             <p className="text-muted">Si tu as une valeur très éloignée des autres (une valeur extrême), la <strong className="text-primary">Moyenne</strong> va beaucoup changer ! Mais la <strong className="text-warning">Médiane</strong>, qui ne regarde que l'ordre des valeurs, ne bougera presque pas. On dit que la médiane est plus <em>robuste</em>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
