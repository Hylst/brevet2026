import React from 'react';
import { motion } from 'motion/react';
import { Search, Eye, Filter, CheckCircle2, XCircle } from 'lucide-react';

export const MediasOpinionSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 flex flex-col gap-6 text-sm text-foreground">
      
      <div className="text-center">
         <h3 className="text-xl font-bold text-white mb-2">Esprit Critique vs Fake News</h3>
         <p className="text-muted">Développer ses réflexes pour ne pas se faire manipuler.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vérification */}
        <div className="space-y-4">
          <h4 className="font-bold text-primary flex items-center gap-2">
            <Search className="w-5 h-5" /> Les réflexes de vérification
          </h4>
          <div className="space-y-3">
            {[
              { label: "Qui est l'auteur ?", color: "bg-blue-500/20 text-blue-300" },
              { label: "De quand date le sujet ?", color: "bg-indigo-500/20 text-indigo-300" },
              { label: "Où est-ce publié ?", color: "bg-purple-500/20 text-purple-300" },
              { label: "Est-ce un fait ou une opinion ?", color: "bg-pink-500/20 text-pink-300" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`p-3 rounded-lg border border-white/5 font-medium ${item.color}`}
              >
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fait vs Opinion */}
        <div className="p-5 rounded-2xl bg-background/50 border border-border flex flex-col gap-4">
          <h4 className="font-bold text-white text-center">Fait ou Opinion ?</h4>
          
          <div className="flex flex-col gap-3">
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
               <div className="flex items-center gap-2 text-green-400 font-bold mb-1">
                 <CheckCircle2 className="w-4 h-4" /> LE FAIT
               </div>
               <p className="text-xs italic text-green-100/70">"La température sur Terre a augmenté de 1°C depuis 1900."</p>
               <p className="text-[10px] mt-1 text-muted">Vérifiable, mesurable, incontestable.</p>
            </div>

            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
               <div className="flex items-center gap-2 text-red-400 font-bold mb-1">
                 <XCircle className="w-4 h-4" /> L'OPINION
               </div>
               <p className="text-xs italic text-red-100/70">"La météo est vraiment nulle aujourd'hui."</p>
               <p className="text-[10px] mt-1 text-muted">Subjectif, dépend des goûts, varie selon les personnes.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20 flex gap-4 items-center">
        <Filter className="w-8 h-8 text-yellow-500 shrink-0" />
        <p className="text-xs text-yellow-100/80 leading-relaxed">
          <strong>Attention aux bulles de filtres !</strong> Sur Internet, les algorithmes ont tendance à ne nous montrer que des informations qui confirment ce que nous pensons déjà. Pour être libre, il faut aller voir ailleurs !
        </p>
      </div>
      
    </div>
  );
};
