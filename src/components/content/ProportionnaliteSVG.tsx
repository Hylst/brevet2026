import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Table as TableIcon } from 'lucide-react';
import clsx from 'clsx';

export const ProportionnaliteSVG: React.FC = () => {
    const [coeff, setCoeff] = useState(2);
    const values = [1, 2, 3, 4, 5];
    
    const size = 300;
    const padding = 40;
    const innerSize = size - padding * 2;
    const scaleX = innerSize / 5;
    const scaleY = innerSize / 10; // Max value 10 (5 * 2)

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">La Proportionnalité</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Table View */}
                <div className="space-y-6">
                    <div className="bg-background rounded-xl border border-border overflow-hidden">
                        <div className="p-3 bg-surface border-b border-border flex items-center gap-2">
                             <TableIcon className="w-4 h-4 text-primary" />
                             <span className="text-xs font-bold uppercase tracking-wider">Tableau de Valeurs</span>
                        </div>
                        <table className="w-full text-center">
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="p-3 bg-surface/30 text-xs font-bold w-24">Entrée (x)</td>
                                    {values.map(v => (
                                        <td key={v} className="p-3 font-mono text-sm">{v}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-3 bg-surface/30 text-xs font-bold">Sortie (y)</td>
                                    {values.map(v => (
                                        <motion.td 
                                            key={v} 
                                            initial={false}
                                            animate={{ color: 'var(--color-primary)' }}
                                            className="p-3 font-mono text-sm font-bold"
                                        >
                                            {v * coeff}
                                        </motion.td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-between">
                         <span className="text-sm">Coefficient k = <strong>{coeff}</strong></span>
                         <div className="flex gap-2">
                             <button onClick={() => setCoeff(Math.max(0.5, coeff - 0.5))} className="w-8 h-8 flex items-center justify-center bg-background rounded border border-border hover:bg-surface">-</button>
                             <button onClick={() => setCoeff(Math.min(2, coeff + 0.5))} className="w-8 h-8 flex items-center justify-center bg-background rounded border border-border hover:bg-surface">+</button>
                         </div>
                    </div>
                </div>

                {/* Graph View */}
                <div className="space-y-4">
                    <div className="relative aspect-square bg-background rounded-xl border border-border overflow-hidden p-4">
                        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
                            {/* Grid */}
                            {Array.from({ length: 11 }).map((_, i) => (
                                <line key={`h${i}`} x1={padding} y1={size - padding - i * scaleY} x2={size - padding} y2={size - padding - i * scaleY} stroke="rgba(255,255,255,0.05)" />
                            ))}
                            {Array.from({ length: 6 }).map((_, i) => (
                                <line key={`v${i}`} x1={padding + i * scaleX} y1={padding} x2={padding + i * scaleX} y2={size - padding} stroke="rgba(255,255,255,0.05)" />
                            ))}

                            {/* Axes */}
                            <line x1={padding} y1={size - padding} x2={size - padding + 10} y2={size - padding} stroke="var(--color-muted)" strokeWidth="2" markerEnd="url(#arrow)" />
                            <line x1={padding} y1={size - padding} x2={padding} y2={padding - 10} stroke="var(--color-muted)" strokeWidth="2" markerEnd="url(#arrow)" />

                            {/* The Line */}
                            <motion.line 
                                animate={{ x2: padding + 5 * scaleX, y2: size - padding - (5 * coeff) * scaleY }}
                                x1={padding}
                                y1={size - padding}
                                stroke="var(--color-primary)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Origin point */}
                            <circle cx={padding} cy={size - padding} r="4" fill="var(--color-danger)" />
                            <text x={padding - 15} y={size - padding + 15} className="fill-danger text-[10px] font-bold">0</text>
                        </svg>
                        
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 px-2 py-1 rounded border border-border backdrop-blur-sm">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-bold">Droite passant par l'origine</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
