import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, MessageSquare, Scale, LucideProps } from 'lucide-react';

export const ArgumentationSVG: React.FC = () => {
    const [step, setStep] = useState(0);

    const stages = [
        {
            title: "Le Thème",
            desc: "De quoi on parle (le sujet général).",
            ex: "Le progrès scientifique.",
            icon: <Scale />,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "La Thèse",
            desc: "L'opinion de l'auteur sur le thème.",
            ex: "Le progrès doit être contrôlé.",
            icon: <Target />,
            color: "text-red-500",
            bg: "bg-red-500/10"
        },
        {
            title: "L'Argument",
            desc: "La preuve abstraite qui soutient la thèse.",
            ex: "Certaines technologies polluent.",
            icon: <Lightbulb />,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10"
        },
        {
            title: "L'Exemple",
            desc: "Le cas concret qui illustre l'argument.",
            ex: "Le plastique dans les océans.",
            icon: <MessageSquare />,
            color: "text-green-500",
            bg: "bg-green-500/10"
        }
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-center font-black text-foreground mb-8">Les Étapes de l'Argumentation</h3>

            <div className="relative flex flex-col gap-4">
                {stages.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={false}
                        animate={{ 
                            opacity: step >= i ? 1 : 0.4,
                            scale: step === i ? 1.02 : 1,
                            x: step === i ? 10 : 0
                        }}
                        onClick={() => setStep(i)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-4 items-center ${step === i ? 'bg-background border-primary/50 shadow-lg' : 'bg-background border-border hover:border-muted'}`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${step >= i ? `${s.bg} ${s.color}` : 'bg-surface text-muted'}`}>
                             {React.cloneElement(s.icon as React.ReactElement<LucideProps>, { size: 20 })}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className={`text-sm font-black uppercase ${step >= i ? s.color : 'text-muted'}`}>{s.title}</h4>
                                {step === i && <span className="text-[8px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">ACTIF</span>}
                            </div>
                            <p className="text-[10px] text-muted-foreground truncate">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}

                {/* Vertical Connector Line */}
                <div className="absolute left-9 top-10 bottom-10 w-0.5 bg-border -z-10" />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mt-6 p-4 rounded-xl border border-dashed ${stages[step].bg} ${stages[step].color.replace('text', 'border')}`}
                >
                    <div className="text-[9px] font-black uppercase mb-1 opacity-60">Illustration concrète :</div>
                    <p className="text-sm font-bold text-foreground italic">"{stages[step].ex}"</p>
                </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between items-center bg-surface p-3 rounded-xl border border-border/50">
                <span className="text-[10px] font-black text-muted uppercase tracking-widest">Technique de persuasion :</span>
                <div className="flex gap-2">
                    <span className="text-[9px] bg-background px-2 py-1 rounded border border-border font-bold">Convaincre (Raisonnance)</span>
                    <span className="text-[9px] bg-background px-2 py-1 rounded border border-border font-bold">Persuader (Émotion)</span>
                </div>
            </div>
        </div>
    );
};
