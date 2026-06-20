import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, CloudRain, Star, Zap, Skull, ShieldCheck, LucideProps } from 'lucide-react';

export const UtopieDystopieSVG: React.FC = () => {
    const [mode, setMode] = useState<'utopie' | 'dystopie'>('utopie');

    const data = {
        utopie: {
            title: 'Utopie',
            desc: 'Un monde idéal, parfait et imaginaire où tout le monde est heureux.',
            color: 'text-success',
            bg: 'bg-success/10',
            border: 'border-success/30',
            icon: <Sun />,
            items: [
                { icon: <Star />, text: 'Équité Sociale' },
                { icon: <ShieldCheck />, text: 'Paix Durable' },
                { icon: <Zap />, text: 'Progrès Harmoneux' }
            ],
            slogan: 'L\'espoir d\'un demain meilleur.'
        },
        dystopie: {
            title: 'Dystopie',
            desc: 'Un monde cauchemardesque où la société est opprimée (souvent par la technologie).',
            color: 'text-destructive',
            bg: 'bg-destructive/10',
            border: 'border-destructive/30',
            icon: <Skull />,
            items: [
                { icon: <CloudRain />, text: 'Chaos Climatique' },
                { icon: <Zap />, text: 'Surveillance Totale' },
                { icon: <Skull />, text: 'Déshumanisation' }
            ],
            slogan: 'Le reflet de nos peurs actuelles.'
        }
    };

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border overflow-hidden relative">
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-5 transition-colors duration-700 ${data[mode].bg}`} />

            <div className="relative flex flex-col items-center">
                <div className="flex gap-4 p-1.5 bg-background rounded-2xl border border-border shadow-inner mb-10">
                    {['utopie', 'dystopie'].map((m) => (
                        <button
                            key={m}
                            onClick={() => setMode(m as any)}
                            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-tighter transition-all ${mode === m ? `${data[m as 'utopie' | 'dystopie'].color} ${data[m as 'utopie' | 'dystopie'].bg} shadow-md` : 'text-muted hover:text-foreground'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                        animate={{ opacity: 1, filter: 'blur(0)', y: 0 }}
                        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center w-full max-w-md"
                    >
                        <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500 ${data[mode].bg} ${data[mode].color} border-2 ${data[mode].border}`}>
                             {React.cloneElement(data[mode].icon as React.ReactElement<LucideProps>, { size: 40 })}
                        </div>

                        <h4 className={`text-4xl font-black uppercase tracking-tighter mb-4 ${data[mode].color}`}>
                            {data[mode].title}
                        </h4>
                        <p className="text-sm font-bold text-foreground leading-relaxed mb-8 px-4 opacity-80">
                            {data[mode].desc}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {data[mode].items.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="p-3 bg-background rounded-2xl border border-border flex flex-col items-center gap-2"
                                >
                                    <div className={`${data[mode].color} opacity-40`}>
                                        {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { size: 20 })}
                                    </div>
                                    <span className="text-[8px] font-black uppercase text-muted text-center leading-tight">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className={`p-4 rounded-2xl border border-dashed ${data[mode].border} ${data[mode].bg}`}>
                            <p className={`text-xs font-black italic tracking-tight ${data[mode].color}`}>
                                "{data[mode].slogan}"
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center px-4 relative z-10">
                <span className="text-[10px] font-black text-muted uppercase">Exemple d'auteur :</span>
                <span className="text-[10px] font-black text-foreground italic">
                    {mode === 'utopie' ? 'Thomas More' : 'George Orwell (1984)'}
                </span>
            </div>
        </div>
    );
};
