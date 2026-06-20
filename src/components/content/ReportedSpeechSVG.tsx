import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Quote } from 'lucide-react';

export const ReportedSpeechSVG: React.FC = () => {
    const [type, setType] = useState<'direct' | 'indirect'>('direct');

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-center font-bold mb-6 text-foreground">Transformation du Discours</h3>

            <div className="flex justify-center mb-8">
                <div className="bg-background p-1 rounded-xl border border-border flex">
                    <button 
                        onClick={() => setType('direct')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${type === 'direct' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-foreground'}`}
                    >
                        Discours Direct
                    </button>
                    <button 
                        onClick={() => setType('indirect')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${type === 'indirect' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-foreground'}`}
                    >
                        Discours Indirect
                    </button>
                </div>
            </div>

            <div className="relative p-6 bg-background rounded-2xl border border-primary/20 min-h-[160px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    {type === 'direct' ? (
                        <motion.div 
                            key="direct"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="text-center space-y-4"
                        >
                            <div className="flex justify-center gap-1 mb-2">
                                <Quote className="w-4 h-4 text-primary fill-primary/20 rotate-180" />
                                <span className="text-sm font-medium italic">Il m'a dit : « Je <span className="text-primary font-bold">viendrai</span> <span className="text-orange-500 font-bold">demain</span>. »</span>
                                <Quote className="w-4 h-4 text-primary fill-primary/20" />
                            </div>
                            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                                <div className="p-2 rounded bg-surface border border-border text-[9px] font-bold text-muted uppercase">Ponctuation : : « »</div>
                                <div className="p-2 rounded bg-surface border border-border text-[9px] font-bold text-muted uppercase">Temps : Présent/Futur</div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="indirect"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center space-y-4"
                        >
                            <div className="text-sm font-medium italic">
                                Il m'a dit <span className="text-primary font-bold underline decoration-primary/30">qu'</span>il <span className="text-primary font-bold">viendrait</span> <span className="text-red-500 font-bold">le lendemain</span>.
                            </div>
                            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
                                <div className="p-2 rounded bg-primary/10 border border-primary/20 text-[9px] font-bold text-primary uppercase">Mots subordonnants (que, si...)</div>
                                <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-[9px] font-bold text-orange-500 uppercase">Concordance des temps</div>
                                <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-[9px] font-bold text-red-500 uppercase">Changement des indicateurs</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-wider bg-surface px-3 py-1.5 rounded-lg border border-border/50">
                    <ArrowRight className="w-3 h-3 text-primary" /> Transposer
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                    Astuce : Au discours indirect, les guillemets disparaissent et les pronoms changent.
                </p>
            </div>
        </div>
    );
};

import { AnimatePresence } from 'motion/react';
