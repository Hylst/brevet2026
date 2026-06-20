import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box } from 'lucide-react';

export const ResizingSVG: React.FC = () => {
    const [k, setK] = useState(1.5);
    
    const baseSize = 40;
    const currentSize = baseSize * k;
    const k2 = (k * k).toFixed(2);
    const k3 = (k * k * k).toFixed(2);

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
                Effet du Coefficient k
            </h3>

            <div className="flex flex-col items-center gap-8">
                {/* Control Slider */}
                <div className="w-full max-w-sm space-y-4 bg-background p-6 rounded-xl border border-border shadow-inner">
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-muted uppercase tracking-tighter">Rapport k</span>
                        <span className="text-2xl font-black text-primary font-mono">{k.toFixed(1)}</span>
                    </div>
                    <input 
                        type="range" min="0.5" max="3" step="0.1" value={k} 
                        onChange={(e) => setK(parseFloat(e.target.value))}
                        className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary" 
                    />
                    <div className="flex justify-between text-[10px] font-bold text-muted uppercase">
                        <span>Réduction (k &lt; 1)</span>
                        <span>Agrandissement (k &gt; 1)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
                    {/* Visual Comparison */}
                    <div className="relative aspect-square bg-background rounded-xl border border-border flex items-center justify-center overflow-hidden">
                        {/* Original Shadow */}
                        <div 
                          className="absolute border-2 border-dashed border-muted/30 rounded"
                          style={{ width: baseSize, height: baseSize }}
                        />
                        
                        {/* Dynamic Shape */}
                        <motion.div 
                           animate={{ width: currentSize, height: currentSize }}
                           className="bg-primary/20 border-2 border-primary rounded shadow-xl flex items-center justify-center relative"
                        >
                           <span className="text-[10px] font-bold text-primary font-mono">k = {k.toFixed(1)}</span>
                        </motion.div>

                        <div className="absolute bottom-4 left-4 text-[10px] font-bold text-muted uppercase bg-surface/80 px-2 py-1 rounded backdrop-blur-sm">
                           Bleu = Transformé | Pointillés = Original
                        </div>
                    </div>

                    {/* Stats / Effects */}
                    <div className="space-y-4">
                        <div className="p-4 bg-background rounded-xl border border-border group hover:border-primary/30 transition-all">
                           <div className="flex justify-between items-center mb-1">
                               <span className="text-xs font-bold text-muted uppercase">Longueurs</span>
                               <span className="text-lg font-black font-mono text-primary">× {k.toFixed(1)}</span>
                           </div>
                           <p className="text-[10px] text-muted leading-tight">Rayon, périmètre, côté, hauteur...</p>
                        </div>

                        <div className="p-4 bg-background rounded-xl border border-border group hover:border-success/30 transition-all">
                           <div className="flex justify-between items-center mb-1">
                               <span className="text-xs font-bold text-muted uppercase">Aires (Surface)</span>
                               <span className="text-lg font-black font-mono text-success">× {k2}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <span className="text-[9px] font-bold text-success/60 bg-success/10 px-1 rounded">k² = {k.toFixed(1)}²</span>
                           </div>
                           <p className="text-[10px] text-muted leading-tight mt-1">Peinture nécessaire, surface au sol...</p>
                        </div>

                        <div className="p-4 bg-background rounded-xl border border-border group hover:border-warning/30 transition-all">
                           <div className="flex justify-between items-center mb-1">
                               <span className="text-xs font-bold text-muted uppercase">Volumes</span>
                               <span className="text-lg font-black font-mono text-warning">× {k3}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <span className="text-[9px] font-bold text-warning/60 bg-warning/10 px-1 rounded">k³ = {k.toFixed(1)}³</span>
                           </div>
                           <p className="text-[10px] text-muted leading-tight mt-1">Poids, contenance, capacité en Litres...</p>
                        </div>
                    </div>
                </div>

                {/* Conclusion Callout */}
                <div className="w-full bg-primary/5 p-4 rounded-xl border border-primary/20 text-center">
                    <p className="text-sm font-bold text-primary italic">
                        "Si on double les longueurs (k=2), l'aire est multipliée par 4 et le volume par 8 !"
                    </p>
                </div>
            </div>
        </div>
    );
};
