import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Triangle } from 'lucide-react';

export const PythagoreThalesSVG: React.FC = () => {
    const [view, setView] = useState<'pythagore' | 'thales'>('pythagore');

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <div className="flex justify-center gap-2 mb-8">
                <button 
                  onClick={() => setView('pythagore')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${view === 'pythagore' ? 'bg-primary text-white shadow-lg' : 'bg-surface hover:bg-surface-hover border border-border'}`}
                >
                    <Triangle className="w-3 h-3" /> Pythagore
                </button>
                <button 
                  onClick={() => setView('thales')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${view === 'thales' ? 'bg-success text-white shadow-lg' : 'bg-surface hover:bg-surface-hover border border-border'}`}
                >
                    <Layers className="w-3 h-3" /> Thalès
                </button>
            </div>

            <div className="relative aspect-video bg-background rounded-xl border border-border overflow-hidden p-8 flex items-center justify-center">
                {view === 'pythagore' ? (
                    <motion.svg 
                        key="pyth"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewBox="0 0 400 300" 
                        className="w-full h-full max-w-md"
                    >
                        {/* Triangle */}
                        <path d="M 150 200 L 250 200 L 150 100 Z" fill="rgba(var(--color-primary-rgb), 0.1)" stroke="var(--color-primary)" strokeWidth="3" />
                        <rect x="150" y="190" width="10" height="10" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                        
                        {/* Squares */}
                        {/* a = 100, b = 100, c = 141.4 */}
                        <rect x="50" y="100" width="100" height="100" fill="rgba(var(--color-primary-rgb), 0.2)" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4" />
                        <rect x="150" y="200" width="100" height="100" fill="rgba(var(--color-primary-rgb), 0.2)" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4" />
                        
                        {/* Hypotenuse square (rotated) */}
                        <g transform="translate(150, 100) rotate(-45)">
                            <rect x="0" y="-141.4" width="141.4" height="141.4" fill="rgba(var(--color-primary-rgb), 0.3)" stroke="var(--color-primary)" strokeWidth="2" />
                        </g>

                        <text x="100" y="150" textAnchor="middle" className="fill-primary font-bold text-xs">a²</text>
                        <text x="200" y="250" textAnchor="middle" className="fill-primary font-bold text-xs">b²</text>
                        <text x="250" y="120" textAnchor="middle" className="fill-primary font-bold text-xs">c²</text>
                        
                        <text x="200" y="40" textAnchor="middle" className="fill-foreground font-mono font-bold text-lg">a² + b² = c²</text>
                        <text x="200" y="280" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold tracking-widest text-center opacity-50">Rectangle → Égalité des carrés</text>
                    </motion.svg>
                ) : (
                    <motion.svg 
                        key="thales"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewBox="0 0 400 300" 
                        className="w-full h-full max-w-md"
                    >
                        {/* Main Triangle */}
                        <path d="M 200 50 L 50 250 L 350 250 Z" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeDasharray="4" />
                        
                        {/* Parallel Line */}
                        <motion.line 
                           initial={{ y1: 250, y2: 250 }}
                           animate={{ y1: 150, y2: 150 }}
                           x1="125" x2="275" 
                           stroke="var(--color-success)" 
                           strokeWidth="4" 
                        />
                        
                        {/* Horizontal base */}
                        <line x1="50" y1="250" x2="350" y2="250" stroke="var(--color-success)" strokeWidth="2" />

                        {/* Labels */}
                        <text x="200" y="40" textAnchor="middle" className="fill-foreground font-bold text-sm">A</text>
                        <text x="110" y="155" textAnchor="end" className="fill-success font-bold text-xs">M</text>
                        <text x="290" y="155" textAnchor="start" className="fill-success font-bold text-xs">N</text>
                        <text x="40" y="265" textAnchor="end" className="fill-foreground font-bold text-xs">B</text>
                        <text x="360" y="265" textAnchor="start" className="fill-foreground font-bold text-xs">C</text>

                        <circle cx="200" cy="50" r="4" fill="var(--color-success)" />
                        <circle cx="125" cy="150" r="3" fill="var(--color-success)" />
                        <circle cx="275" cy="150" r="3" fill="var(--color-success)" />

                        <foreignObject x="50" y="180" width="300" height="100">
                           <div className="w-full h-full flex items-center justify-center">
                              <div className="bg-success/10 border border-success/20 px-4 py-2 rounded-lg text-success font-mono font-bold text-sm">
                                 AM/AB = AN/AC = MN/BC
                              </div>
                           </div>
                        </foreignObject>
                        
                        <text x="200" y="280" textAnchor="middle" className="fill-muted text-[10px] uppercase font-bold tracking-widest opacity-50">Parallèles → Proportionnalité</text>
                    </motion.svg>
                )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
               <div className={`p-4 rounded-xl border transition-all ${view === 'pythagore' ? 'bg-primary/5 border-primary/30' : 'bg-background border-border text-muted opacity-50'}`}>
                  <h4 className="text-xs font-bold uppercase mb-2">Triangle Rectangle</h4>
                  <p className="text-[11px] leading-relaxed">Sert à calculer une <strong>longueur</strong> quand on a un angle droit.</p>
               </div>
               <div className={`p-4 rounded-xl border transition-all ${view === 'thales' ? 'bg-success/5 border-success/30' : 'bg-background border-border text-muted opacity-50'}`}>
                  <h4 className="text-xs font-bold uppercase mb-2">Lignes Parallèles</h4>
                  <p className="text-[11px] leading-relaxed">Sert à calculer une <strong>longueur</strong> quand on a des parallèles.</p>
               </div>
            </div>
        </div>
    );
};
