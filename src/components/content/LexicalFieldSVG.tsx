import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Search, Share2, Layers } from 'lucide-react';

export const LexicalFieldSVG: React.FC = () => {
    const [view, setView] = useState<'field' | 'family'>('field');

    const fieldWords = ['vagues', 'sable', 'baignade', 'sel', 'marée', 'navire'];
    const familyWords = ['mer', 'marin', 'maritime', 'amerir', 'amerrissage', 'sous-marin'];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <div className="flex justify-center gap-4 mb-10">
                <button 
                    onClick={() => setView('field')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${view === 'field' ? 'bg-primary text-white scale-105 shadow-md' : 'bg-background text-muted border border-border'}`}
                >
                    <Cloud className="w-3 h-3" /> Champ Lexical
                </button>
                <button 
                    onClick={() => setView('family')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${view === 'family' ? 'bg-primary text-white scale-105 shadow-md' : 'bg-background text-muted border border-border'}`}
                >
                    <Layers className="w-3 h-3" /> Famille de mots
                </button>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[2/1] bg-background rounded-2xl border border-border flex items-center justify-center overflow-hidden p-8">
                {/* Central Concept */}
                <motion.div 
                    layoutId="central"
                    className="z-10 bg-primary/20 p-6 rounded-full border-2 border-primary border-dashed flex flex-col items-center justify-center shadow-xl"
                >
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest opacity-60">Concept :</span>
                    <span className="text-2xl font-black text-foreground uppercase tracking-tighter">La Mer</span>
                </motion.div>

                {/* Floating Words */}
                {(view === 'field' ? fieldWords : familyWords).map((word, i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * (radius * 0.6);

                    return (
                        <motion.div
                            key={word}
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{ opacity: 1, x, y }}
                            transition={{ type: 'spring', damping: 12, stiffness: 100, delay: i * 0.05 }}
                            className={`absolute px-3 py-1.5 rounded-lg border text-[10px] font-bold shadow-sm ${view === 'field' ? 'bg-surface border-border text-foreground' : 'bg-primary/5 border-primary/20 text-primary'}`}
                        >
                            {word}
                        </motion.div>
                    );
                })}

                {/* Background lines for connection */}
                <div className="absolute inset-0 flex items-center justify-center -z-0 opacity-10">
                    <Share2 className="w-full h-full text-muted rotate-45 scale-150" />
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-xl border border-border">
                    <h4 className="text-[10px] font-black uppercase text-muted mb-2 tracking-widest">Définition</h4>
                    <p className="text-xs leading-relaxed italic">
                        {view === 'field' 
                            ? "Ensemble des mots qui se rapportent au même THÈME (sans avoir de radical commun)." 
                            : "Ensemble des mots formés à partir du même RADICAL (ici : 'mer-')."}
                    </p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                    <h4 className="text-[10px] font-black uppercase text-muted mb-2 tracking-widest">Pourquoi l'utiliser ?</h4>
                    <p className="text-xs leading-relaxed italic">
                        {view === 'field' 
                            ? "Pour enrichir son style, créer une atmosphère ou identifier le sujet d'un texte." 
                            : "Pour comprendre la formation du lexique et le sens des mots dérivés."}
                    </p>
                </div>
            </div>
        </div>
    );
};
