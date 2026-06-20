import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, AlertCircle, Info, MessageSquare, LucideProps } from 'lucide-react';

export const SentenceTypesSVG: React.FC = () => {
    const [active, setActive] = useState<number | null>(0);
    const [isNegative, setIsNegative] = useState(false);

    const sentences = [
        { 
            type: 'Déclarative', 
            icon: <Info />, 
            text: 'Énonce un fait, une idée.', 
            aff: 'La mer est bleue.', 
            neg: 'La mer n\'est pas bleue.',
            sign: '.' 
        },
        { 
            type: 'Interrogative', 
            icon: <HelpCircle />, 
            text: 'Pose une question.', 
            aff: 'Vient-il demain ?', 
            neg: 'Ne vient-il pas demain ?',
            sign: '?' 
        },
        { 
            type: 'Exclamative', 
            icon: <AlertCircle />, 
            text: 'Exprime une émotion.', 
            aff: 'Quelle joie !', 
            neg: 'Quelle tristesse !', // Emotional negation is sometimes semantic
            sign: '!' 
        },
        { 
            type: 'Injonctive', 
            icon: <MessageSquare />, 
            text: 'Donne un ordre ou conseil.', 
            aff: 'Sois attentif.', 
            neg: 'Ne sois pas distrait.',
            sign: '. ou !' 
        },
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border">
            <h3 className="text-center font-black text-foreground mb-8 text-xl">Les 4 Types de Phrases</h3>
            
            <div className="grid grid-cols-2 gap-4">
                {sentences.map((s, i) => (
                    <motion.button
                        key={s.type}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActive(i)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 text-center relative overflow-hidden ${active === i ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-background border-border hover:border-primary/50'}`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active === i ? 'bg-white text-primary' : 'bg-surface text-muted'}`}>
                            {React.cloneElement(s.icon as React.ReactElement<LucideProps>, { size: 20 })}
                        </div>
                        <span className={`text-xs font-black uppercase tracking-tight ${active === i ? 'text-white' : 'text-foreground'}`}>{s.type}</span>
                        
                        <div className={`absolute -right-2 -bottom-2 text-4xl font-black opacity-10 ${active === i ? 'text-white' : 'text-muted'}`}>
                             {s.sign}
                        </div>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {active !== null && (
                    <motion.div
                        key={`${active}-${isNegative}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-6 bg-surface rounded-2xl border border-border shadow-inner"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full ${isNegative ? 'bg-red-500' : 'bg-success'}`}></div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">{isNegative ? 'Forme Négative' : 'Forme Affirmative'}</span>
                        </div>
                        <p className="text-lg font-bold text-foreground mb-1 leading-tight">
                            « {isNegative ? sentences[active].neg : sentences[active].aff} »
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">{sentences[active].text}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-2 gap-3">
                 <button 
                    onClick={() => setIsNegative(false)}
                    className={`p-4 rounded-xl border-2 transition-all font-black text-[10px] uppercase tracking-wider ${!isNegative ? 'bg-success/10 border-success text-success' : 'bg-background border-border text-muted hover:border-success/30'}`}
                 >
                    Forme Affirmative
                 </button>
                 <button 
                    onClick={() => setIsNegative(true)}
                    className={`p-4 rounded-xl border-2 transition-all font-black text-[10px] uppercase tracking-wider ${isNegative ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-background border-border text-muted hover:border-red-500/30'}`}
                 >
                    Forme Négative
                 </button>
            </div>
            <p className="text-center text-[10px] text-subtle mt-4 italic leading-relaxed">
                Cliquez sur les formes pour voir comment la phrase se transforme. <br/>
                Chaque type de phrase peut être à la forme affirmative ou négative.
            </p>
        </div>
    );
};
