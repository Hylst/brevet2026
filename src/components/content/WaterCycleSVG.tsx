import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, CloudRain, Sun, Droplets, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

export const WaterCycleSVG: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Évaporation",
      desc: "L'eau des océans et des lacs s'évapore sous l'effet de la chaleur du soleil.",
      icon: <ArrowUp className="w-6 h-6 text-orange-400" />,
      color: "text-orange-400",
      bg: "bg-orange-400/20",
      border: "border-orange-400/50"
    },
    {
      id: 2,
      title: "Condensation",
      desc: "La vapeur d'eau refroidit en altitude et forme des nuages.",
      icon: <Cloud className="w-6 h-6 text-foreground" />,
      color: "text-foreground",
      bg: "bg-surface",
      border: "border-border"
    },
    {
      id: 3,
      title: "Précipitations",
      desc: "L'eau retombe sur terre sous forme de pluie, neige ou grêle.",
      icon: <CloudRain className="w-6 h-6 text-primary" />,
      color: "text-primary",
      bg: "bg-primary/20",
      border: "border-primary/50"
    },
    {
      id: 4,
      title: "Ruissellement & Infiltration",
      desc: "L'eau s'infiltre dans le sol ou ruisselle vers les cours d'eau et les océans.",
      icon: <Droplets className="w-6 h-6 text-cyan-400" />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/20",
      border: "border-cyan-400/50"
    }
  ];

  return (
    <div className="flex flex-col items-center my-8 p-6 bg-surface/50 rounded-2xl border border-border">
      <h4 className="text-lg font-bold text-foreground mb-6">Le Cycle de l'Eau</h4>
      
      <div className="relative w-full max-w-[500px] aspect-video flex items-center justify-center mb-8">
        {/* Simple visual representation */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 to-background/40 rounded-xl overflow-hidden border border-border">
          
          {/* Sun */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 text-yellow-400"
          >
            <Sun className="w-12 h-12" />
          </motion.div>

          {/* Ocean */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-900/60 border-t border-blue-500/30"></div>
          
          {/* Land */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-900/40 rounded-tl-full border-t border-l border-emerald-500/30"></div>

          {/* Step 1: Evaporation */}
          <motion.div 
            className={`absolute bottom-1/3 left-1/4 flex flex-col items-center transition-opacity duration-300 ${activeStep === 1 || activeStep === null ? 'opacity-100' : 'opacity-30'}`}
            animate={activeStep === 1 ? { y: [0, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowUp className="w-8 h-8 text-orange-400 mb-2" />
            <span className="text-xs font-bold text-orange-400 bg-background/80 px-2 py-1 rounded">1. Évaporation</span>
          </motion.div>

          {/* Step 2: Condensation */}
          <motion.div 
            className={`absolute top-8 right-1/3 flex flex-col items-center transition-opacity duration-300 ${activeStep === 2 || activeStep === null ? 'opacity-100' : 'opacity-30'}`}
            animate={activeStep === 2 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Cloud className="w-12 h-12 text-foreground mb-2" />
            <span className="text-xs font-bold text-foreground bg-background/80 px-2 py-1 rounded">2. Condensation</span>
          </motion.div>

          {/* Step 3: Precipitation */}
          <motion.div 
            className={`absolute top-1/4 right-1/4 flex flex-col items-center transition-opacity duration-300 ${activeStep === 3 || activeStep === null ? 'opacity-100' : 'opacity-30'}`}
            animate={activeStep === 3 ? { y: [0, 10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <CloudRain className="w-10 h-10 text-primary mb-2" />
            <span className="text-xs font-bold text-primary bg-background/80 px-2 py-1 rounded">3. Précipitations</span>
          </motion.div>

          {/* Step 4: Runoff */}
          <motion.div 
            className={`absolute bottom-1/4 right-1/4 flex flex-col items-center transition-opacity duration-300 ${activeStep === 4 || activeStep === null ? 'opacity-100' : 'opacity-30'}`}
            animate={activeStep === 4 ? { x: [0, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Droplets className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-xs font-bold text-cyan-400 bg-background/80 px-2 py-1 rounded">4. Ruissellement</span>
          </motion.div>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {steps.map((step) => (
          <div 
            key={step.id}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
              activeStep === step.id 
                ? `${step.bg} ${step.border}` 
                : 'bg-surface/50 border-border hover:bg-surface'
            }`}
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${step.bg}`}>
                {step.icon}
              </div>
              <h5 className={`font-bold ${activeStep === step.id ? step.color : 'text-foreground'}`}>
                {step.id}. {step.title}
              </h5>
            </div>
            <p className="text-sm text-muted">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
