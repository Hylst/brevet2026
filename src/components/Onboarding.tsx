import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Mascot, MascotContext } from './ui/Mascot';
import { STORAGE_KEYS } from '../constants';

const steps: { title: string; description: string; color: string; context: MascotContext }[] = [
  {
    title: "Yo ! Prêt à exploser ton Brevet ?",
    description: "Hylst Brevet est là pour t'accompagner. Fini les classeurs moisis, place à l'XP et aux révisions 2.0 !",
    color: "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
    context: 'accueil'
  },
  {
    title: "Explore, Manipule, Comprends !",
    description: "Nos schémas s'animent et te font participer : fais tourner des atomes, observe l'ADN et joue avec nos flashcards pour un max de mémorisation. Apprends sans t'en rendre compte !",
    color: "bg-gradient-to-br from-warning via-warning/90 to-warning-hover",
    context: 'svt'
  },
  {
    title: "Deviens un Tryhard de l'XP 🏆",
    description: "Conserve ta Flamme, gagne des badges épiques, et monte en niveau à chaque quiz réussi ou leçon terminée. T'es chaud pour devenir le boss du Brevet ?",
    color: "bg-gradient-to-br from-secondary via-secondary/90 to-secondary-hover",
    context: 'histoire'
  }
];

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem(STORAGE_KEYS.ONBOARDING, 'true');
      window.dispatchEvent(new Event('onboardingCompleted'));
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md p-6"
      >
        <motion.div 
          key={step}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ type: "spring", duration: 0.6 }}
          className={`w-full max-w-md ${steps[step].color} rounded-3xl p-8 sm:p-10 mb-8 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-1/4 -translate-y-1/4">
             <div className="w-40 h-40 rounded-full bg-white blur-2xl" />
          </div>
          
          <div className="mb-6 relative z-10 transform scale-125 my-4">
            <Mascot forcedContext={steps[step].context} />
          </div>
          
          <h2 className="text-3xl font-black mb-4 leading-tight relative z-10">{steps[step].title}</h2>
          <p className="text-lg opacity-95 leading-relaxed font-medium relative z-10">{steps[step].description}</p>
        </motion.div>

        <div className="flex gap-3 mb-10">
          {steps.map((_, i) => (
            <motion.div 
              key={i} 
              initial={false}
              animate={{ 
                width: i === step ? 32 : 12,
                backgroundColor: i === step ? 'var(--color-primary)' : 'var(--color-border)'
              }}
              className="h-3 rounded-full" 
            />
          ))}
        </div>

        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
            <span className="text-lg">{step === steps.length - 1 ? 'C\'est parti !' : 'Continuer'}</span>
            <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
              {step === steps.length - 1 ? <Check className="w-5 h-5"/> : <ArrowRight className="w-5 h-5" />}
            </div>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};
