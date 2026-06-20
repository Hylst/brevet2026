import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const PastParticipleSVG: React.FC = () => {
    const [scenario, setScenario] = useState<number>(0);

    const rules = [
        {
            title: "Avec l'auxiliaire ÊTRE",
            rule: "S'accorde TOUJOURS avec le Sujet.",
            ex: "Elles sont part",
            suffix: "ies",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            reason: "Le sujet est 'Elles' (Féminin Pluriel)."
        },
        {
            title: "Avec l'auxiliaire AVOIR (1)",
            rule: "S'accorde avec le COD si celui-ci est placé AVANT le verbe.",
            ex: "Les pommes que j'ai mang",
            suffix: "ées",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            reason: "Le COD est 'que' (= les pommes, placé avant)."
        },
        {
            title: "Avec l'auxiliaire AVOIR (2)",
            rule: "Pas d'accord si le COD est placé APRES le verbe.",
            ex: "J'ai mang",
            suffix: "é",
            color: "text-red-500",
            bg: "bg-red-500/10",
            reason: "Le COD 'des pommes' est placé après le verbe."
        }
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
            <h3 className="text-center font-black text-foreground mb-8 uppercase tracking-widest text-sm">
                L'Accord du Participe Passé
            </h3>

            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
                {rules.map((r, i) => (
                    <button
                        key={i}
                        onClick={() => setScenario(i)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black whitespace-nowrap transition-all border ${scenario === i ? `${r.bg} ${r.color} border-current` : 'bg-background text-muted border-border hover:border-muted'}`}
                    >
                        {r.title}
                    </button>
                ))}
            </div>

            <div className="relative p-6 bg-background rounded-2xl border border-border min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="absolute top-4 right-4 text-muted/20">
                    <HelpCircle size={48} />
                </div>
                
                <div className="mb-6">
                    <h4 className={`text-xs font-black uppercase mb-2 ${rules[scenario].color}`}>
                        Règle :
                    </h4>
                    <p className="text-sm font-medium text-foreground max-w-xs mx-auto">
                        {rules[scenario].rule}
                    </p>
                </div>

                <div className="text-xl sm:text-2xl font-black font-mono tracking-tight flex items-baseline gap-1">
                    <span>{rules[scenario].ex}</span>
                    <motion.span 
                        key={scenario}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`underline decoration-wavy ${rules[scenario].color}`}
                    >
                        {rules[scenario].suffix}
                    </motion.span>
                </div>

                <div className="mt-6 flex items-center gap-2 px-3 py-1 bg-surface rounded-full border border-border">
                    <CheckCircle2 className={`w-3 h-3 ${rules[scenario].color}`} />
                    <span className="text-[10px] font-medium text-muted italic">{rules[scenario].reason}</span>
                </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="text-primary w-4 h-4" />
                </div>
                <div>
                   <h5 className="text-[10px] font-black uppercase text-primary mb-1">Attention aux verbes pronominaux</h5>
                   <p className="text-[10px] text-muted italic leading-normal">
                      Ex: Elle s'est lavée (Accord car elle se lave elle-même). | Elle s'est lavé les mains (Pas d'accord car le COD 'les mains' est après).
                   </p>
                </div>
            </div>
        </div>
    );
};
