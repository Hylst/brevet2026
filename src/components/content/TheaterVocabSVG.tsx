import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VenetianMask, MessageSquare, Volume2, Users, LucideProps } from 'lucide-react';

export const TheaterVocabSVG: React.FC = () => {
    const [active, setActive] = useState<string | null>(null);

    const vocab = [
        { id: 'didascalie', term: 'Didascalie', icon: <VenetianMask />, def: 'Indication scénique donnée par l\'auteur (gestes, ton, décor).', type: 'Texte' },
        { id: 'tirade', term: 'Tirade', icon: <Volume2 />, def: 'Longue réplique prononcée sans interruption par un personnage.', type: 'Parole' },
        { id: 'aparte', term: 'Aparté', icon: <MessageSquare />, def: 'Parole que seul le public entend (les autres acteurs ignorent).', type: 'Public' },
        { id: 'choeur', term: 'Chœur', icon: <Users />, def: 'Groupe de personnages qui commentent l\'action par le chant ou la parole.', type: 'Groupe' }
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-black text-foreground mb-8 text-center uppercase tracking-tighter italic">Le Lexique du Théâtre</h3>

            <div className="flex justify-center gap-4 flex-wrap mb-10">
                {vocab.map((item) => (
                    <button
                        key={item.id}
                        onMouseEnter={() => setActive(item.id)}
                        onClick={() => setActive(item.id)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${active === item.id ? 'bg-primary border-primary shadow-xl -translate-y-1' : 'bg-background border-border hover:border-primary/30'}`}
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${active === item.id ? 'bg-white text-primary' : 'bg-surface text-muted group-hover:text-primary'}`}>
                             {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { size: 24 })}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${active === item.id ? 'text-white' : 'text-muted'}`}>
                            {item.term}
                        </span>
                    </button>
                    
                ))}
            </div>

            <div className="min-h-[140px] relative">
                <AnimatePresence mode="wait">
                    {active ? (
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            className="p-6 bg-background rounded-2xl border border-border shadow-inner flex flex-col items-center text-center"
                        >
                            <span className="text-[9px] font-black uppercase text-primary mb-2 px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">
                                Catégorie : {vocab.find(v => v.id === active)?.type}
                            </span>
                            <h4 className="text-2xl font-black text-foreground mb-3">{vocab.find(v => v.id === active)?.term}</h4>
                            <p className="text-sm font-bold text-muted-foreground leading-relaxed max-w-sm">
                                {vocab.find(v => v.id === active)?.def}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-2xl"
                        >
                             <VenetianMask className="w-8 h-8 text-muted mb-2 opacity-20" />
                             <p className="text-[10px] font-black text-muted uppercase">Clique sur un bouton pour découvrir sa définition</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2">
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-center">
                    <span className="text-[11px] font-black text-red-500 uppercase italic">Comédie : Rire</span>
                </div>
                <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-center">
                    <span className="text-[11px] font-black text-blue-500 uppercase italic">Tragédie : Pitié & Terreur</span>
                </div>
            </div>
        </div>
    );
};
