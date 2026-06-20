import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Lightbulb, ListChecks, CheckCircle2, Search, LucideProps } from 'lucide-react';

export const BrevetRedactionSVG: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. Choix du Sujet",
      desc: "Prends 5 minutes pour lire les deux sujets (Invention ou Réflexion). Choisis celui qui t'inspire le plus !",
      icon: <Search />,
      color: "bg-blue-500",
      tips: ["Sujet d'invention : Imaginaire, émotions.", "Sujet de réflexion : Arguments, logique."]
    },
    {
      title: "2. Brouillon & Idées",
      desc: "Jette tes idées en vrac. Note le vocabulaire, les synonymes, les figures de style que tu veux utiliser.",
      icon: <Lightbulb />,
      color: "bg-yellow-500",
      tips: ["Fais une liste de mots-clés.", "Pense au champ lexical (ex: peur, joie)."]
    },
    {
      title: "3. Le Plan",
      desc: "Organise tes idées. Une rédaction sans plan est comme une maison sans fondations.",
      icon: <ListChecks />,
      color: "bg-purple-500",
      tips: ["Sépare les paragraphes.", "Prépare tes connecteurs logiques (Mais, Donc...)."]
    },
    {
      title: "4. Rédaction",
      desc: "Écris proprement au propre. Soigne l'introduction et la conclusion (ce sont elles qu'on lit en premier et en dernier !).",
      icon: <PenTool />,
      color: "bg-green-500",
      tips: ["Fais des phrases courtes.", "Utilise des expansions du nom pour enrichir."]
    },
    {
      title: "5. Relecture",
      desc: "La partie la plus rentable ! Relis-toi plusieurs fois pour corriger les fautes d'accord et de conjugaison.",
      icon: <CheckCircle2 />,
      color: "bg-red-500",
      tips: ["Vérifie les accords de participe passé.", "Vérifie les terminaisons des verbes."]
    }
  ];

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border shadow-sm">
      <h3 className="text-center font-black text-foreground mb-8 uppercase tracking-tighter italic">Le Parcours de la Rédaction</h3>

      <div className="relative">
        {/* Progress Bar */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-surface -translate-y-1/2 overflow-hidden rounded-full">
          <motion.div 
            animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            className="h-full bg-primary"
          />
        </div>

        <div className="relative flex justify-between">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className="group focus:outline-none"
            >
              <motion.div
                animate={{ 
                  scale: step === i ? 1.4 : 1,
                  backgroundColor: step >= i ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: step >= i ? '#fff' : 'var(--color-muted)'
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-background transition-colors z-10 relative bg-primary`}
              >
                {React.cloneElement(s.icon as React.ReactElement<LucideProps>, { size: 16 })}
              </motion.div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                 <span className="text-[10px] bg-background border border-border px-2 py-1 rounded shadow-sm text-foreground font-bold">
                    {s.title}
                 </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mt-16 bg-background rounded-2xl border border-border p-6 shadow-lg relative"
        >
          <div className={`absolute top-0 left-0 w-1.5 h-full ${steps[step].color} rounded-l-2xl`} />
          
          <div className="flex items-start gap-4">
             <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${steps[step].color} text-white shadow-xl`}>
                {React.cloneElement(steps[step].icon as React.ReactElement<LucideProps>, { size: 24 })}
             </div>
             <div className="flex-1">
                <h4 className="text-xl font-black text-foreground mb-2 italic uppercase tracking-tighter">{steps[step].title}</h4>
                <p className="text-sm text-muted leading-relaxed mb-6 font-medium">
                  {steps[step].desc}
                </p>

                <div className="bg-surface/30 p-4 rounded-xl border border-border/50">
                   <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Astuces de Pro :</h5>
                   <ul className="space-y-2">
                     {steps[step].tips.map((tip, i) => (
                       <li key={i} className="flex gap-2 text-xs text-foreground font-semibold">
                          <span className="text-primary opacity-50">✦</span>
                          {tip}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between items-center px-2">
         <button 
           onClick={() => setStep(s => Math.max(0, s - 1))}
           disabled={step === 0}
           className="text-xs font-black uppercase tracking-widest text-muted hover:text-primary transition-colors disabled:opacity-30 flex items-center gap-2"
         >
           ← Précédent
         </button>
         <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
            Étape {step + 1} sur {steps.length}
         </div>
         <button 
           onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
           disabled={step === steps.length - 1}
           className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary-hover transition-colors disabled:opacity-30 flex items-center gap-2"
         >
           Suivant →
         </button>
      </div>
    </div>
  );
};
