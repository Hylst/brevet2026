import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Replace, ZoomIn, Eye, LucideProps } from 'lucide-react';

export const FiguresDeStyleSVG: React.FC = () => {
  const [active, setActive] = useState(0);

  const figures = [
    {
      name: "La Comparaison",
      icon: <Sparkles />,
      color: "bg-blue-500",
      formula: "A + Comme + B",
      desc: "Rapproche deux éléments avec un outil de comparaison.",
      example: "Il est fort comme un lion.",
      visual: (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-500/50 flex items-center justify-center text-blue-500 font-black">A</div>
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-muted"><Sparkles size={20} /></motion.div>
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-500/50 flex items-center justify-center text-blue-500 font-black">B</div>
        </div>
      )
    },
    {
      name: "La Métaphore",
      icon: <Replace />,
      color: "bg-purple-500",
      formula: "A = B",
      desc: "Rapproche deux éléments sans outil de comparaison. C'est une fusion imaginaire.",
      example: "Cet homme est un lion.",
      visual: (
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-24 h-24 bg-purple-500/20 rounded-full border-2 border-dashed border-purple-500 flex items-center justify-center text-purple-500 font-black text-xl"
          >
            A+B
          </motion.div>
          <motion.div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl" />
        </div>
      )
    },
    {
      name: "L'Hyperbole",
      icon: <ZoomIn />,
      color: "bg-red-500",
      formula: "Objet x 1000",
      desc: "Exagère fortement la réalité pour frapper l'esprit.",
      example: "Je meurs de faim !",
      visual: (
        <div className="flex flex-col items-center gap-2">
           <motion.div 
             animate={{ scale: [1, 1.8, 1], rotate: [0, 5, -5, 0] }} 
             transition={{ repeat: Infinity, duration: 1.5 }}
             className="text-red-500"
           >
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white shadow-xl">
                 <ZoomIn size={24} />
              </div>
           </motion.div>
           <span className="text-[10px] font-black uppercase text-red-500 tracking-widest mt-2">Plus Fort !</span>
        </div>
      )
    }
  ];

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border">
      <h3 className="text-center font-black text-foreground mb-8 italic uppercase tracking-tighter">Les "Effets Spéciaux" de la Langue</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {figures.map((fig, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${active === i ? `bg-background ${fig.color.replace('bg-', 'border-')} shadow-xl -translate-y-1` : 'bg-background border-border hover:border-primary/30'}`}
          >
            <div className={`p-2 rounded-xl transition-colors ${active === i ? `${fig.color} text-white` : 'bg-surface text-muted group-hover:text-primary'}`}>
               {React.cloneElement(fig.icon as React.ReactElement<LucideProps>, { size: 18 })}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${active === i ? 'text-foreground' : 'text-muted'}`}>
               {fig.name}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={active}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           className="bg-background rounded-2xl border border-border p-6 shadow-sm overflow-hidden relative"
        >
           <div className={`absolute top-0 right-0 w-32 h-32 ${figures[active].color} opacity-5 blur-3xl -mr-16 -mt-16`} />
           
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 flex items-center justify-center min-h-[140px] bg-surface/30 rounded-xl border border-border/50">
                 {figures[active].visual}
              </div>
              
              <div className="flex-1 space-y-4">
                 <div>
                    <div className="flex items-center justify-between mb-1">
                       <h4 className={`text-lg font-black uppercase tracking-tighter ${figures[active].color.replace('bg-', 'text-')}`}>{figures[active].name}</h4>
                       <span className="text-[10px] font-mono font-bold bg-surface px-2 py-1 rounded-full text-muted">{figures[active].formula}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed font-medium">
                       {figures[active].desc}
                    </p>
                 </div>

                 <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <h5 className="text-[9px] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-1">
                       <Eye size={10} /> Exemple :
                    </h5>
                    <p className="text-xs font-bold text-foreground italic flex items-center gap-3">
                       <span className="text-primary opacity-50">«</span>
                       {figures[active].example}
                       <span className="text-primary opacity-50">»</span>
                    </p>
                 </div>
              </div>
           </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
