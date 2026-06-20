import React from 'react';
import { motion } from 'motion/react';
import { Hash, Divide, Layers } from 'lucide-react';

export const ArithmetiqueSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 flex flex-col gap-6 text-sm text-foreground">
      
      <div className="text-center">
         <h3 className="text-xl font-bold text-white mb-2">L'Arithmétique en un clin d'œil</h3>
         <p className="text-muted">Nombres premiers, diviseurs et décomposition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombres Premiers */}
        <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Hash className="w-6 h-6 text-blue-400" />
            <h4 className="font-bold text-blue-400">Nombres Premiers</h4>
          </div>
          <p className="text-xs text-blue-100/70 mb-4">Ils n'ont que 2 diviseurs : 1 et eux-mêmes.</p>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 5, 7, 11, 13, 17, 19].map((n) => (
              <motion.span 
                key={n}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-blue-500/30 text-white px-2 py-1 rounded font-mono font-bold border border-blue-500/50"
              >
                {n}
              </motion.span>
            ))}
          </div>
          <p className="text-[10px] mt-4 text-orange-300 italic font-medium">⚠️ 1 n'est PAS premier !</p>
        </div>

        {/* Critères de Divisibilité */}
        <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Divide className="w-6 h-6 text-purple-400" />
            <h4 className="font-bold text-purple-400">Divisibilité</h4>
          </div>
          <ul className="space-y-2 text-[11px]">
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-purple-200">Par 2</span>
              <span>Se termine par 0, 2, 4, 6, 8</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-purple-200">Par 3</span>
              <span>Somme des chiffres dans la table de 3</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-purple-200">Par 5</span>
              <span>Se termine par 0 ou 5</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-purple-200">Par 9</span>
              <span>Somme des chiffres dans la table de 9</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Décomposition */}
      <div className="bg-green-900/10 p-5 rounded-xl border border-green-500/20 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-6 h-6 text-green-400" />
          <h4 className="font-bold text-green-400">Décomposition (Exemple : 120)</h4>
        </div>
        <div className="flex items-center justify-center gap-4 font-mono text-lg">
          <div className="flex flex-col items-end border-r border-green-500/30 pr-4 gap-1">
            <span>120</span>
            <span>60</span>
            <span>30</span>
            <span>15</span>
            <span>5</span>
            <span>1</span>
          </div>
          <div className="flex flex-col items-start pl-4 gap-1 text-green-400 font-bold">
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>3</span>
            <span>5</span>
            <span className="opacity-0">-</span>
          </div>
          <div className="ml-8 text-white bg-green-500/20 p-3 rounded-lg border border-green-500/40">
            120 = 2³ × 3 × 5
          </div>
        </div>
      </div>
      
    </div>
  );
};
