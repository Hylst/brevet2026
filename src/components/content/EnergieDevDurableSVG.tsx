import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Pickaxe, Factory, Truck, Power, Recycle, Info, Zap } from 'lucide-react';

export const EnergieDevDurableSVG: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 0,
      title: "1. Extraction",
      icon: Pickaxe,
      color: "bg-amber-600",
      borderColor: "border-amber-500",
      textColor: "text-amber-500",
      lightBg: "bg-amber-900/20",
      desc: "L'extraction des matières premières (minerais, pétrole, bois). C'est la phase qui détruit souvent des écosystèmes et demande d'immenses quantités d'énergie fossile."
    },
    {
      id: 1,
      title: "2. Fabrication",
      icon: Factory,
      color: "bg-gray-500",
      borderColor: "border-gray-500",
      textColor: "text-gray-400",
      lightBg: "bg-gray-800/50",
      desc: "La transformation et l'assemblage dans les usines. Cette étape consomme beaucoup d'électricité, d'eau, et rejette des gaz à effet de serre (GES)."
    },
    {
      id: 2,
      title: "3. Transport",
      icon: Truck,
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      textColor: "text-blue-400",
      lightBg: "bg-blue-900/20",
      desc: "L'expédition par bateaux, avions et camions. Le fret mondial est très dépendant du pétrole, augmentant massivement le bilan carbone du produit."
    },
    {
      id: 3,
      title: "4. Utilisation",
      icon: Power,
      color: "bg-yellow-500",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-400",
      lightBg: "bg-yellow-900/20",
      desc: "La durée de vie utile chez le consommateur. La consommation énergétique (veille, recharge) doit être la plus faible possible (classe énergétique A+++)."
    },
    {
      id: 4,
      title: "5. Fin de vie",
      icon: Recycle,
      color: "bg-emerald-500",
      borderColor: "border-emerald-500",
      textColor: "text-emerald-400",
      lightBg: "bg-emerald-900/20",
      desc: "Destruction, mise en décharge ou RECYCLAGE. Une bonne éco-conception permet de réutiliser les matières premières pour boucler le cycle et éviter le gaspillage !"
    }
  ];

  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-2xl my-8 text-foreground font-sans relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <Globe className="w-64 h-64" />
      </div>

      <div className="text-center mb-8 relative z-10">
         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
           <Zap className="text-emerald-400 w-6 h-6"/> Le Cycle de Vie d'un Objet
         </h3>
         <p className="text-muted text-sm max-w-xl mx-auto">
           De l'extraction des ressources jusqu'au recyclage, chaque étape a un impact environnemental. Clique sur les étapes pour explorer leurs enjeux écologiques.
         </p>
      </div>

      <div className="relative z-10 hidden md:flex flex-col items-center justify-center mx-auto my-12" style={{ maxWidth: '800px' }}>
        {/* The Cycle Connectors */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full absolute" viewBox="0 0 800 300" style={{ zIndex: -1 }}>
             <path d="M 120 150 L 260 150" stroke="#334155" strokeWidth="4" strokeDasharray="8 8" className="animate-pulse" fill="none" />
             <path d="M 260 150 L 400 150" stroke="#334155" strokeWidth="4" strokeDasharray="8 8" className="animate-pulse" fill="none" />
             <path d="M 400 150 L 540 150" stroke="#334155" strokeWidth="4" strokeDasharray="8 8" className="animate-pulse" fill="none" />
             <path d="M 540 150 L 680 150" stroke="#334155" strokeWidth="4" strokeDasharray="8 8" className="animate-pulse" fill="none" />
             
             {/* Return to start - large bottom curve */}
             <path d="M 680 170 Q 400 350 120 170" stroke="#059669" strokeWidth="4" strokeDasharray="8 8" fill="none" opacity="0.4" />
          </svg>
        </div>

        <div className="flex w-full justify-between items-center relative z-10 px-6">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={step.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setActiveStep(isActive ? null : step.id)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 shadow-xl ${isActive ? `${step.borderColor} ${step.color}` : 'border-slate-700 bg-slate-800 group-hover:border-slate-500'}`}>
                  <Icon className={`w-7 h-7 ${isActive ? 'text-white' : step.textColor}`} />
                </div>
                <div className="mt-4 text-center">
                  <p className={`font-bold text-sm tracking-wide transition-colors ${isActive ? step.textColor : 'text-slate-400'}`}>
                    {step.title}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile view of the steps (vertical) */}
      <div className="flex md:hidden flex-col gap-4 mb-8">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex flex-col border border-border bg-background rounded-xl overflow-hidden cursor-pointer" onClick={() => setActiveStep(isActive ? null : step.id)}>
              <div className={`flex items-center gap-4 p-4 ${isActive ? step.lightBg : ''}`}>
                 <div className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center ${isActive ? step.color : 'bg-slate-800'}`}>
                   <Icon className={`w-6 h-6 ${isActive ? 'text-white' : step.textColor}`} />
                 </div>
                 <h4 className={`font-bold ${isActive ? step.textColor : 'text-slate-200'}`}>{step.title}</h4>
              </div>
              {isActive && (
                 <div className={`p-4 pt-0 text-sm leading-relaxed ${step.textColor}`}>
                    {step.desc}
                 </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Desktop info panel */}
      <AnimatePresence mode="wait">
        <div className="h-[120px] hidden md:block">
          {activeStep !== null ? (
             <motion.div 
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`${steps[activeStep].lightBg} ${steps[activeStep].borderColor} border p-6 rounded-xl relative overflow-hidden`}
              >
                <Info className={`absolute -bottom-4 -right-4 w-32 h-32 opacity-10 ${steps[activeStep].textColor}`} />
                <h4 className={`text-lg font-bold mb-2 flex items-center gap-2 ${steps[activeStep].textColor}`}>
                  {steps[activeStep].title}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed relative z-10 max-w-3xl">
                  {steps[activeStep].desc}
                </p>
             </motion.div>
          ) : (
             <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full border-2 border-dashed border-slate-700/50 rounded-xl flex items-center justify-center text-slate-500 p-6 text-sm"
              >
                Cliquez sur une étape du cycle ci-dessus pour afficher ses détails écologiques.
             </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};
