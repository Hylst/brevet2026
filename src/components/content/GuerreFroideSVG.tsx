import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Shield } from 'lucide-react';

export const GuerreFroideSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 md:grid md:grid-cols-2 gap-6 text-sm text-foreground">
      
      <div className="col-span-full mb-4 text-center">
         <h3 className="text-xl font-bold text-white mb-2">Un monde bipolaire (La Guerre Froide)</h3>
         <p className="text-muted">Deux superpuissances s'affrontent indirectement pour la domination mondiale.</p>
      </div>

      {/* Bloc Ouest */}
      <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30 flex flex-col items-center">
        <h4 className="font-bold text-blue-400 text-xl mb-4">Le Bloc de l'Ouest</h4>
        
        <div className="text-center w-full bg-blue-950/50 py-2 rounded mb-4 font-bold text-lg text-white">
          🇺🇸 États-Unis
        </div>

        <ul className="list-disc pl-5 space-y-3 mt-2 w-full text-blue-100">
          <li><strong>Idéologie :</strong> Démocratie libérale, Libertés individuelles.</li>
          <li><strong>Économie :</strong> Capitalisme, libre-échange, propriété privée.</li>
          <li><strong>Alliance militaire :</strong> L'OTAN (1949).</li>
          <li><strong>Aide économique :</strong> Le Plan Marshall (prêts en dollars pour reconstruire l'Europe).</li>
        </ul>
      </motion.div>

      {/* Bloc Est */}
      <motion.div whileHover={{ scale: 1.02 }} className="bg-red-900/20 p-5 rounded-xl border border-red-500/30 flex flex-col items-center">
        <h4 className="font-bold text-red-400 text-xl mb-4">Le Bloc de l'Est</h4>
        
        <div className="text-center w-full bg-red-950/50 py-2 rounded mb-4 font-bold text-lg text-white">
          ☭ URSS
        </div>

        <ul className="list-disc pl-5 space-y-3 mt-2 w-full text-red-100">
          <li><strong>Idéologie :</strong> Communisme, dictature (Démocratie populaire).</li>
          <li><strong>Économie :</strong> Collectivisation des terres, économie contrôlée par l'État.</li>
          <li><strong>Alliance militaire :</strong> Le Pacte de Varsovie (1955).</li>
          <li><strong>Aide économique :</strong> CAEM (entraide économique contrainte).</li>
        </ul>
      </motion.div>

      {/* Le centre */}
      <div className="col-span-full border-t border-border pt-6 mt-2 flex flex-col items-center text-center">
         <ArrowLeftRight className="w-8 h-8 text-yellow-500 mb-2" />
         <h4 className="font-bold text-yellow-400 mb-2">Le danger atomique (Équilibre de la terreur)</h4>
         <p className="max-w-md mx-auto">La guerre directe est impossible car chaque camp possède l'arme nucléaire et pourrait détruire l'autre. "Paix impossible, guerre improbable" (Raymond Aron).</p>
      </div>
      
    </div>
  );
};
