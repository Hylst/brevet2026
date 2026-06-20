import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Layers, ArrowRight, Share2, LucideProps } from 'lucide-react';

export const ComplexSentenceSVG: React.FC = () => {
  const [type, setType] = useState<'juxtaposition' | 'coordination' | 'subordination'>('juxtaposition');

  const data = {
    juxtaposition: {
      title: 'Juxtaposition',
      desc: 'Les propositions sont simplement posées l\'une à côté de l\'autre.',
      connector: 'Ponctuation ( , ; : )',
      example: '[Il pleut] , [je reste au lit].',
      color: 'bg-blue-500',
      icon: <Layers />
    },
    coordination: {
      title: 'Coordination',
      desc: 'Les propositions sont reliées par un mot de liaison.',
      connector: 'Coordination (et, ou, donc...)',
      example: '[Il pleut] car [le ciel est gris].',
      color: 'bg-yellow-500',
      icon: <Link />
    },
    subordination: {
      title: 'Subordination',
      desc: 'Une proposition dépend directement d\'une autre.',
      connector: 'Subordination (que, quand, qui...)',
      example: 'Je pense [qu\'il va pleuvoir].',
      color: 'bg-primary',
      icon: <Share2 />
    }
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border overflow-hidden relative">
      <h3 className="text-center font-black text-foreground mb-8 uppercase tracking-widest italic">La Logique des Propositions</h3>

      <div className="flex justify-center gap-2 mb-10 p-1 bg-background rounded-2xl border border-border w-fit mx-auto shadow-inner">
        {(['juxtaposition', 'coordination', 'subordination'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${type === t ? `${data[t].color} text-white shadow-md scale-105` : 'text-muted hover:text-foreground'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8 min-h-[220px]">
        {/* Visual Construction */}
        <div className="relative flex items-center justify-center gap-4 w-full">
          {/* Prop 1 */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-32 h-16 bg-surface border-2 border-border rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-tighter text-muted"
          >
            Proposition 1
          </motion.div>

          {/* Connector */}
          <AnimatePresence mode="wait">
            <motion.div
              key={type}
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 45 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${data[type].color}`}
            >
              {React.cloneElement(data[type].icon as React.ReactElement<LucideProps>, { size: 20 })}
            </motion.div>
          </AnimatePresence>

          {/* Prop 2 */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`w-32 h-16 border-2 rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-tighter text-center px-1 transition-colors duration-500 ${type === 'subordination' ? 'border-primary bg-primary/5 text-primary' : 'bg-surface border-border text-muted'}`}
          >
            {type === 'subordination' ? 'Proposition Subordonnée' : 'Proposition 2'}
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 400 100">
             <motion.path 
               d="M 128 50 L 176 50" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeDasharray="4 4"
               className="text-border"
             />
             <motion.path 
               d="M 224 50 L 272 50" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeDasharray="4 4"
               className="text-border"
             />
          </svg>
        </div>

        {/* Info Card */}
        <motion.div 
          key={type + 'card'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm bg-background border border-border p-4 rounded-2xl shadow-xl space-y-3"
        >
          <div className="flex items-center gap-2">
             <div className={`p-1.5 rounded-lg text-white ${data[type].color}`}>
                {React.cloneElement(data[type].icon as React.ReactElement<LucideProps>, { size: 14 })}
             </div>
             <h4 className="font-black text-xs uppercase tracking-widest text-foreground">{data[type].title}</h4>
          </div>
          <p className="text-[11px] text-muted leading-relaxed font-medium">{data[type].desc}</p>
          <div className="pt-2 border-t border-border flex flex-col gap-1.5">
             <div className="flex items-center justify-between">
                <span className="text-[8px] font-black uppercase text-muted tracking-widest">Connecteur :</span>
                <span className={`text-[9px] font-bold ${data[type].color.replace('bg-', 'text-')}`}>{data[type].connector}</span>
             </div>
             <div className="bg-surface/50 p-2 rounded-lg border border-border/50 italic text-[10px] text-foreground font-mono flex items-center justify-center gap-2">
                <ArrowRight size={10} className="text-primary" />
                {data[type].example}
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
