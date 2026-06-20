import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, UserCheck, ShieldCheck, PenTool, LucideProps } from 'lucide-react';

export const AutobiographyPactSVG: React.FC = () => {
    const [step, setStep] = useState(0);
    
    const conditions = [
        { 
            title: "L'Identité (A=N=P)", 
            icon: <UserCheck />, 
            text: "L'Auteur, le Narrateur et le Personnage principal sont une seule et même personne.",
            formula: "Auteur = Narrateur = Personnage"
        },
        { 
            title: "Le Serment de Sincérité", 
            icon: <ShieldCheck />, 
            text: "L'auteur s'engage auprès du lecteur à dire la vérité, même si elle est parfois gênante ou subjective.",
            formula: "Vérité vs Fiction"
        },
        { 
            title: "Le Point de Vue", 
            icon: <PenTool />, 
            text: "Récit à la 1ère personne (JE). On suit le regard de l'auteur sur ses propres souvenirs.",
            formula: "Perspective Interne"
        }
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border overflow-hidden">
            <h3 className="text-xl font-black text-foreground mb-8 text-center flex items-center justify-center gap-2 italic">
                <FileText className="text-primary" /> Le Pacte Autobiographique
            </h3>

            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Visual Representation of the Pact */}
                <div className="relative w-48 h-48 shrink-0 bg-background rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center shadow-inner">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-2 rounded-full border border-primary/10"
                    />
                    
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={step}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center text-primary"
                        >
                            {React.cloneElement(conditions[step].icon as React.ReactElement<LucideProps>, { size: 40 })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Nodes */}
                    {conditions.map((_, i) => (
                        <div 
                            key={i}
                            className={`absolute w-3 h-3 rounded-full transition-colors ${step === i ? 'bg-primary scale-125' : 'bg-surface border border-border'}`}
                            style={{
                                left: `calc(50% + ${Math.cos((i / 3) * Math.PI * 2 - Math.PI / 2) * 85}px)`,
                                top: `calc(50% + ${Math.sin((i / 3) * Math.PI * 2 - Math.PI / 2) * 85}px)`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    ))}
                </div>

                {/* Progress Content */}
                <div className="flex-1 space-y-4">
                    <div className="flex gap-2">
                        {conditions.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setStep(i)}
                                className={`h-1 flex-1 rounded-full transition-all ${step === i ? 'bg-primary' : 'bg-surface'}`}
                            />
                        ))}
                    </div>
                    
                    <div className="min-h-[140px]">
                        <h4 className="text-lg font-black text-foreground mb-2">{conditions[step].title}</h4>
                        <p className="text-sm text-muted leading-relaxed mb-4">{conditions[step].text}</p>
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-[10px] font-black font-mono text-primary uppercase">
                            {conditions[step].formula}
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                         <button 
                            disabled={step === 0}
                            onClick={() => setStep(s => s - 1)}
                            className="text-xs font-bold text-muted hover:text-primary disabled:opacity-30 transition-colors"
                         >
                            Précédent
                         </button>
                         <button 
                            disabled={step === conditions.length - 1}
                            onClick={() => setStep(s => s + 1)}
                            className="text-xs font-bold text-primary hover:underline disabled:opacity-0 transition-colors"
                         >
                            Suivant
                         </button>
                    </div>
                </div>
            </div>
            
            <p className="mt-8 text-center text-[10px] text-muted italic p-3 border-t border-border/50">
               Définition : C'est Philippe Lejeune qui a théorisé ce pacte de confiance entre l'auteur et son lecteur.
            </p>
        </div>
    );
};
