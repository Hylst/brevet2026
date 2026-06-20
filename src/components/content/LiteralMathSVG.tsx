import React, { useState } from 'react';
import { motion } from 'motion/react';

export const LiteralMathSVG: React.FC = () => {
    const [a, setA] = useState(4);
    const [b, setB] = useState(6);
    const [c, setC] = useState(3);

    const scale = 15;
    const padding = 20;

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Distributivité : <span className="text-primary font-mono">{a}({b} + {c}) = {a}×{b} + {a}×{c}</span></h3>

            <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-md space-y-4 mb-6">
                    <div>
                        <label className="flex justify-between text-xs text-muted mb-1 uppercase font-bold tracking-wider">
                            <span>Largeur (a) : <strong className="text-primary text-sm">{a}</strong></span>
                        </label>
                        <input type="range" min="1" max="8" step="1" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="flex justify-between text-xs text-muted mb-1 uppercase font-bold tracking-wider">
                                <span>Partie 1 (b) : <strong className="text-success text-sm">{b}</strong></span>
                            </label>
                            <input type="range" min="1" max="10" step="1" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-success" />
                        </div>
                        <div>
                            <label className="flex justify-between text-xs text-muted mb-1 uppercase font-bold tracking-wider">
                                <span>Partie 2 (c) : <strong className="text-warning text-sm">{c}</strong></span>
                            </label>
                            <input type="range" min="1" max="10" step="1" value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-warning" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full aspect-video flex justify-center items-center bg-background rounded-xl border border-border overflow-hidden p-8">
                    <svg viewBox={`0 0 400 200`} className="w-full h-full max-w-[350px]">
                        {/* Rectangle 1: a * b */}
                        <motion.rect 
                            animate={{ width: b * scale, height: a * scale }}
                            x={padding}
                            y={padding}
                            fill="rgba(var(--color-success-rgb), 0.2)"
                            stroke="var(--color-success)"
                            strokeWidth="2"
                            className="transition-all"
                        />
                        <foreignObject x={padding} y={padding} width={b * scale} height={a * scale}>
                             <div className="w-full h-full flex items-center justify-center text-success font-bold text-xs truncate">{a} × {b}</div>
                        </foreignObject>

                        {/* Rectangle 2: a * c */}
                        <motion.rect 
                            animate={{ x: padding + b * scale, width: c * scale, height: a * scale }}
                            y={padding}
                            fill="rgba(var(--color-warning-rgb), 0.2)"
                            stroke="var(--color-warning)"
                            strokeWidth="2"
                            className="transition-all"
                        />
                         <foreignObject x={padding + b * scale} y={padding} width={c * scale} height={a * scale}>
                             <div className="w-full h-full flex items-center justify-center text-warning font-bold text-xs truncate">{a} × {c}</div>
                        </foreignObject>

                        {/* Labels */}
                        {/* Side a */}
                        <text x={padding - 10} y={padding + (a * scale) / 2} textAnchor="end" dominantBaseline="middle" className="fill-muted text-[10px] font-bold">a = {a}</text>
                        
                        {/* Top b */}
                        <text x={padding + (b * scale) / 2} y={padding - 5} textAnchor="middle" className="fill-success text-[10px] font-bold">b = {b}</text>
                        
                        {/* Top c */}
                        <text x={padding + b * scale + (c * scale) / 2} y={padding - 5} textAnchor="middle" className="fill-warning text-[10px] font-bold">c = {c}</text>

                        {/* Total Bottom */}
                        <line x1={padding} y1={padding + a * scale + 10} x2={padding + (b + c) * scale} y2={padding + a * scale + 10} stroke="var(--color-muted)" strokeWidth="1" strokeDasharray="4" />
                        <text x={padding + ((b+c) * scale) / 2} y={padding + a * scale + 25} textAnchor="middle" className="fill-foreground text-[10px] font-bold font-mono">Total = {b + c}</text>
                    </svg>
                </div>

                <div className="w-full bg-primary/5 p-4 rounded-xl border border-primary/20">
                    <p className="text-center text-sm font-mono tracking-tight">
                        {a} × ({b} + {c}) = <span className="text-success font-bold">{a}×{b}</span> + <span className="text-warning font-bold">{a}×{c}</span> = <span className="text-primary font-bold">{a*(b+c)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
