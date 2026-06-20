import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';

export const FractionsPieSVG: React.FC = () => {
    const [num, setNum] = useState(3);
    const [den, setDen] = useState(8);

    const size = 200;
    const center = size / 2;
    const radius = 80;

    const sectors = Array.from({ length: den }).map((_, i) => {
        const startAngle = (i * 360) / den;
        const endAngle = ((i + 1) * 360) / den;
        
        const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
        const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
        const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
        const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
        
        const largeArcFlag = 360 / den > 180 ? 1 : 0;
        const d = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
        
        return {
            d,
            isSelected: i < num
        };
    });

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Visualiser une Fraction : <span className="text-primary font-mono">{num}/{den}</span></h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                {/* SVG Pie */}
                <div className="relative">
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                        {sectors.map((s, i) => (
                             <motion.path 
                                key={i}
                                d={s.d}
                                initial={false}
                                animate={{ 
                                    fill: s.isSelected ? 'var(--color-primary)' : 'rgba(var(--color-primary-rgb), 0.1)',
                                    stroke: 'var(--color-surface)',
                                    strokeWidth: 2,
                                    scale: s.isSelected ? 1.05 : 1
                                }}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                             />
                        ))}
                    </svg>
                    
                    {/* Centered fractional text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                         <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border flex flex-col items-center">
                             <div className="text-2xl font-black text-primary leading-none border-b-2 border-primary mb-1 pb-1">{num}</div>
                             <div className="text-2xl font-black text-foreground leading-none">{den}</div>
                         </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-6 w-full max-w-[200px]">
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted uppercase tracking-tighter text-center">Numérateur (Haut)</p>
                        <div className="flex items-center justify-between bg-background p-2 rounded-xl border border-border shadow-sm">
                            <button onClick={() => setNum(Math.max(0, num - 1))} className="p-2 hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border"><Minus className="w-4 h-4"/></button>
                            <span className="text-lg font-black text-primary">{num}</span>
                            <button onClick={() => setNum(Math.min(den, num + 1))} className="p-2 hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border"><Plus className="w-4 h-4"/></button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted uppercase tracking-tighter text-center">Dénominateur (Bas)</p>
                        <div className="flex items-center justify-between bg-background p-2 rounded-xl border border-border shadow-sm">
                            <button onClick={() => setDen(Math.max(1, den - 1))} className="p-2 hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border"><Minus className="w-4 h-4"/></button>
                            <span className="text-lg font-black text-foreground">{den}</span>
                            <button onClick={() => { if (num >= den + 1) setNum(den + 1); setDen(Math.min(20, den + 1)); }} className="p-2 hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border"><Plus className="w-4 h-4"/></button>
                        </div>
                    </div>

                    <div className="pt-2">
                        <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
                             <p className="text-xs text-primary font-bold">Pourcentage : {Math.round((num / den) * 100)} %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
