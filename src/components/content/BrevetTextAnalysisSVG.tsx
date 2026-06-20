import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Eye, FileText, ChevronRight, LucideProps } from 'lucide-react';

export const BrevetTextAnalysisSVG: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Observer",
      title: "La découverte du texte",
      desc: "Regarde le titre, l'auteur, la date et le chapeau (le petit texte introductif). Ça te donne le contexte !",
      icon: <Eye />,
      example: "Titre : 'Le Lion et le Rat' -> Fable, animaux, morale."
    },
    {
      label: "Questionner",
      title: "Lire les questions d'abord",
      desc: "Lis les questions AVANT de lire le texte en profondeur. Tes yeux sauront ce qu'ils doivent chercher.",
      icon: <Search />,
      example: "Question : 'Quels sentiments éprouve le loup ?' -> Je cherche le champ lexical des émotions."
    },
    {
      label: "Analyser",
      title: "Citer et Interpréter",
      desc: "C'est la règle d'or : On relève un mot (la citation) + On nomme le procédé + On explique l'effet produit.",
      icon: <BookOpen />,
      example: "La métaphore 'mer de sang' montre la violence de la scène."
    },
    {
      label: "Rédiger",
      title: "Faire des phrases complètes",
      desc: "Réponds toujours par une phrase qui reprend les mots de la question. Soigne l'orthographe !",
      icon: <FileText />,
      example: "Le narrateur éprouve du remords car il utilise le mot 'hélas'."
    }
  ];

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border shadow-sm overflow-hidden">
      <h3 className="text-center font-black text-foreground mb-8 uppercase tracking-widest italic tracking-tighter">L'Analyse de Texte Step-by-Step</h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Step Selector */}
        <div className="lg:w-48 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`px-4 py-3 rounded-xl border flex items-center justify-between transition-all shrink-0 min-w-[120px] lg:w-full ${activeStep === i ? 'bg-primary border-primary shadow-lg -translate-y-1 lg:translate-x-2' : 'bg-background border-border hover:border-primary/30'}`}
            >
              <div className="flex items-center gap-3">
                 <div className={`${activeStep === i ? 'text-white' : 'text-muted'}`}>
                    {React.cloneElement(s.icon as React.ReactElement<LucideProps>, { size: 18 })}
                 </div>
                 <span className={`text-xs font-black uppercase tracking-tighter ${activeStep === i ? 'text-white' : 'text-foreground'}`}>
                   {s.label}
                 </span>
              </div>
              <ChevronRight size={14} className={`hidden lg:block ${activeStep === i ? 'text-white/40' : 'text-muted/40'}`} />
            </button>
          ))}
        </div>

        {/* content Area */}
        <div className="flex-1 bg-background rounded-2xl border border-border p-6 shadow-xl relative min-h-[300px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeStep}
               initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
               animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
               exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
               transition={{ duration: 0.3 }}
               className="h-full flex flex-col"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {React.cloneElement(steps[activeStep].icon as React.ReactElement<LucideProps>, { size: 20 })}
                   </div>
                   <h4 className="text-xl font-black text-foreground italic uppercase tracking-tighter">
                      {steps[activeStep].title}
                   </h4>
                </div>

                <p className="text-sm text-muted font-medium leading-relaxed mb-8 border-l-2 border-primary/20 pl-4">
                   {steps[activeStep].desc}
                </p>

                <div className="mt-auto">
                   <div className="bg-surface/40 p-4 rounded-xl border border-border/50 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(steps[activeStep].icon as React.ReactElement<LucideProps>, { size: 48 })}
                      </div>
                      <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-1">
                         <span className="w-1 h-1 rounded-full bg-primary" /> Exemple Concret :
                      </h5>
                      <p className="text-xs text-foreground font-mono leading-relaxed italic">
                         « {steps[activeStep].example} »
                      </p>
                   </div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
