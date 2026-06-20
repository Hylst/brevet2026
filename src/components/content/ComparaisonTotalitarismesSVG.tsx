import React from 'react';
import { motion } from 'motion/react';
import { User, ShieldAlert, Cpu } from 'lucide-react';

export const ComparaisonTotalitarismesSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 md:grid md:grid-cols-3 gap-4 text-sm text-foreground space-y-4 md:space-y-0">
      
      {/* URSS */}
      <motion.div whileHover={{ y: -5 }} className="bg-red-900/20 p-4 rounded-xl border border-red-500/30 flex flex-col items-center">
        <h4 className="font-bold text-red-400 text-lg mb-2">URSS (Staline)</h4>
        <User className="w-10 h-10 text-red-500 mb-2" />
        <ul className="list-disc pl-5 space-y-2 mt-4 w-full">
          <li><strong>Idéologie :</strong> Communisme (égalité sociale forcée).</li>
          <li><strong>Économie :</strong> Collectivisation des terres (kolkhozes) et planification par l'État.</li>
          <li><strong>Cible :</strong> Les "koulaks" (paysans riches), l'opposition de classe.</li>
          <li><strong>Terreur :</strong> Le Goulag, les grandes purges (1936-1938).</li>
        </ul>
      </motion.div>

      {/* Allemagne Nazie */}
      <motion.div whileHover={{ y: -5 }} className="bg-gray-800 p-4 rounded-xl border border-gray-600 flex flex-col items-center">
        <h4 className="font-bold text-gray-300 text-lg mb-2">Allemagne (Hitler)</h4>
        <ShieldAlert className="w-10 h-10 text-gray-400 mb-2" />
        <ul className="list-disc pl-5 space-y-2 mt-4 w-full">
          <li><strong>Idéologie :</strong> Nazisme (racisme extrême, antisémitisme).</li>
          <li><strong>Objectif :</strong> Espace vital (Lebensraum) et pureté de la "race aryenne".</li>
          <li><strong>Cible :</strong> Les Juifs, Tziganes, homosexuels, handicapés, communistes.</li>
          <li><strong>Terreur :</strong> Gestapo, SS, Camps de concentration et d'extermination.</li>
        </ul>
      </motion.div>

      {/* Points communs */}
      <motion.div whileHover={{ y: -5 }} className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 flex flex-col items-center">
        <h4 className="font-bold text-blue-400 text-lg mb-2">Points Communs</h4>
        <Cpu className="w-10 h-10 text-blue-500 mb-2" />
        <ul className="list-disc pl-5 space-y-2 mt-4 w-full">
          <li><strong>Culte du Chef :</strong> Affiches, statues, propagande omniprésente.</li>
          <li><strong>Parti unique :</strong> Disparition de la démocratie.</li>
          <li><strong>Jeunesse embrigadée :</strong> Jeunesses hitlériennes, Komsomols.</li>
          <li><strong>Surveillance :</strong> Police politique secrète, censure.</li>
        </ul>
      </motion.div>

    </div>
  );
};
