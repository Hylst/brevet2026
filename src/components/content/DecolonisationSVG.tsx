import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, ExternalLink, Flag } from 'lucide-react';

export const DecolonisationSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 flex flex-col gap-6 text-sm text-foreground">
      
      <div className="text-center">
         <h3 className="text-xl font-bold text-white mb-2">Les Chemins de l'Indépendance</h3>
         <p className="text-muted">Comment les colonies sont devenues des États souverains.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Voie Négociée */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-5 rounded-xl border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <h4 className="font-bold text-green-400 text-lg">Voie Négociée</h4>
          </div>
          <p className="mb-4 text-green-100/80">Accord entre le colonisateur et les leaders nationalistes.</p>
          <div className="bg-background/40 p-3 rounded-lg border border-border">
            <span className="font-bold text-white italic">Exemple : L'Inde (1947)</span>
            <ul className="text-xs mt-2 space-y-1 text-muted">
              <li>• Leader : Gandhi (Non-violence)</li>
              <li>• Acteur : Royaume-Uni</li>
              <li>• Résultat : Partition Inde / Pakistan</li>
            </ul>
          </div>
        </motion.div>

        {/* Voie Violente */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-5 rounded-xl border border-orange-500/30 bg-orange-500/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Flag className="w-5 h-5 text-orange-400" />
            </div>
            <h4 className="font-bold text-orange-400 text-lg">Voie Violente</h4>
          </div>
          <p className="mb-4 text-orange-100/80">Refus du colonisateur menant à une guerre d'indépendance.</p>
          <div className="bg-background/40 p-3 rounded-lg border border-border">
            <span className="font-bold text-white italic">Exemple : L'Algérie (1954-1962)</span>
            <ul className="text-xs mt-2 space-y-1 text-muted">
              <li>• Leader : Le FLN</li>
              <li>• Acteur : La France</li>
              <li>• Résultat : Accords d'Évian</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Tiers-Monde */}
      <div className="bg-indigo-900/20 p-5 rounded-xl border border-indigo-500/30">
        <div className="flex items-center gap-3 mb-3">
          <Globe className="w-6 h-6 text-indigo-400" />
          <h4 className="font-bold text-indigo-400">L'émergence du Tiers-Monde (1955)</h4>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="text-indigo-100">Réunis à <strong>Bandung</strong>, les nouveaux pays affirment :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-indigo-200/80 text-xs">
              <li>Leur refus de la colonisation.</li>
              <li>Leur souhait de ne pas s'aligner sur les USA ou l'URSS.</li>
              <li>Leur besoin de développement économique.</li>
            </ul>
          </div>
          <div className="shrink-0 bg-indigo-500/20 px-4 py-2 rounded-lg border border-indigo-500/40 font-mono text-xs">
            "Le Non-Alignement"
          </div>
        </div>
      </div>
      
    </div>
  );
};
