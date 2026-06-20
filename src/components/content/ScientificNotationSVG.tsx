import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Binary } from 'lucide-react';

export const ScientificNotationSVG: React.FC = () => {
  const [value, setValue] = useState(45200);
  const [exponent, setExponent] = useState(0);
  
  // Normalized value for the scientific notation display
  // value = mantissa * 10^exponent
  // We want to show how shifting the decimal point changes the exponent
  
  const mantissa = value / Math.pow(10, exponent);
  const formattedMantissa = mantissa.toLocaleString('en-US', { maximumFractionDigits: 5 });
  
  const shiftDecimal = (dir: 'left' | 'right') => {
    if (dir === 'left') setExponent(prev => Math.min(prev + 1, 15));
    else setExponent(prev => Math.max(prev - 1, -15));
  };

  const isScientific = mantissa >= 1 && mantissa < 10;

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
        <Binary className="w-5 h-5 text-primary" />
        L'Écriture Scientifique
      </h3>

      <div className="flex flex-col items-center gap-8">
        {/* Main Display */}
        <div className="w-full max-w-md bg-background rounded-xl border border-border p-8 relative overflow-hidden">
          <div className="flex flex-col items-center gap-6">
            {/* Standard Number with moving dot */}
            <div className="text-3xl font-mono tracking-widest relative">
              <span className="opacity-20">{value.toString().split('.')[0]}</span>
              <motion.div 
                className="absolute top-0 left-0 text-primary flex items-center"
                initial={false}
              >
                 {/* This is a bit complex to animate the dot within string, 
                     so let's show the scientific result directly and an arrow visualization */}
              </motion.div>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{formattedMantissa}</span>
                <span className="text-2xl text-muted">×</span>
                <div className="flex items-start">
                  <span className="text-3xl font-bold">10</span>
                  <motion.span 
                    key={exponent}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-xl font-bold text-primary -translate-y-2"
                  >
                    {exponent}
                  </motion.span>
                </div>
              </div>
            </div>

            <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${isScientific ? 'bg-success/20 text-success border border-success/30' : 'bg-warning/10 text-warning border border-warning/20'}`}>
              {isScientific ? "Écriture Scientifique Valide" : "Format non standard"}
            </div>
          </div>
          
          {/* Visual Aid: Moving the dot */}
          <div className="mt-8 pt-6 border-t border-border/50">
             <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={() => shiftDecimal('right')}
                  className="p-3 hover:bg-surface rounded-xl border border-border transition-colors group"
                >
                  <ArrowLeftRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] block mt-1 uppercase font-bold text-muted">Droite (10⁻¹)</span>
                </button>
                
                <div className="flex-1 max-w-[100px] h-1 bg-muted rounded-full overflow-hidden relative">
                   <motion.div 
                     className="absolute h-full bg-primary w-2 rounded-full"
                     animate={{ left: `${(exponent + 15) / 30 * 100}%`, x: '-50%' }}
                   />
                </div>

                <button 
                  onClick={() => shiftDecimal('left')}
                  className="p-3 hover:bg-surface rounded-xl border border-border transition-colors group"
                >
                  <ArrowLeftRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-[10px] block mt-1 uppercase font-bold text-muted">Gauche (10¹)</span>
                </button>
             </div>
          </div>
        </div>

        {/* Dynamic Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
           <div className="bg-background/40 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer" onClick={() => { setValue(150000000); setExponent(8); }}>
              <p className="text-[10px] font-bold text-muted uppercase mb-1">Distance Terre-Soleil</p>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-mono">150 000 000 m</span>
                <span className="text-primary font-bold">1,5 × 10⁸</span>
              </div>
           </div>
           <div className="bg-background/40 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer" onClick={() => { setValue(0.0000005); setExponent(-7); }}>
              <p className="text-[10px] font-bold text-muted uppercase mb-1">Taille d'une bactérie</p>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-mono">0,000 000 5 m</span>
                <span className="text-primary font-bold">5 × 10⁻⁷</span>
              </div>
           </div>
        </div>

        <div className="text-center max-w-md">
            <p className="text-sm text-muted italic">
              "L'écriture scientifique doit avoir un seul chiffre non nul avant la virgule (entre 1 et 9.99...)"
            </p>
        </div>
      </div>
    </div>
  );
};
