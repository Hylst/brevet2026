import React from 'react';
import { motion } from 'motion/react';
import { Power, Activity, Sun, Battery } from 'lucide-react';

export const SourcesEnergieSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2"><Power className="text-yellow-400"/> Les Sources et Formes d'Énergie</h3>
         <p className="text-muted text-sm">L'énergie ne se perd jamais, elle se transforme !</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Renouvelables */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-green-900/20 border border-green-500/30 p-5 rounded-xl">
          <h4 className="font-bold text-green-400 text-lg mb-4 flex items-center gap-2"><Sun className="w-5 h-5"/> Renouvelables</h4>
          <p className="text-xs text-green-200 mb-4">Inépuisables à l'échelle du temps humain.</p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">☀️ <strong>Solaire</strong> (Panneaux, thermique)</li>
            <li className="flex items-center gap-2">💨 <strong>Éolienne</strong> (Vent)</li>
            <li className="flex items-center gap-2">🌊 <strong>Hydraulique</strong> (Barrages)</li>
            <li className="flex items-center gap-2">🌱 <strong>Biomasse</strong> (Bois, déchets organiques)</li>
            <li className="flex items-center gap-2">🌋 <strong>Géothermie</strong> (Chaleur de la Terre)</li>
          </ul>
        </motion.div>

        {/* Non Renouvelables */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-orange-900/20 border border-orange-500/30 p-5 rounded-xl">
          <h4 className="font-bold text-orange-400 text-lg mb-4 flex items-center gap-2"><Battery className="w-5 h-5"/> Non Renouvelables</h4>
          <p className="text-xs text-orange-200 mb-4">Réserves limitées qui s'épuisent (Énergies fossiles & fossiles).</p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">🛢️ <strong>Pétrole</strong> (Carburants, plastiques)</li>
            <li className="flex items-center gap-2">⛏️ <strong>Charbon</strong> (Centrales thermiques)</li>
            <li className="flex items-center gap-2">🔥 <strong>Gaz naturel</strong> (Chauffage, cuisine)</li>
            <li className="flex items-center gap-2">☢️ <strong>Uranium</strong> (Énergie nucléaire)</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700">
        <h4 className="font-bold text-gray-200 text-center mb-4"><Activity className="inline w-5 h-5 text-blue-400"/> Conversion type d'une Centrale Éolienne</h4>
        <div className="flex items-center justify-between bg-blue-900/10 p-4 rounded-lg border border-blue-500/20 text-sm">
          <div className="text-center"><span className="block text-xl">💨</span>Énergie<br/>Cinétique (Vent)</div>
          <div className="text-gray-500 font-bold">➔</div>
          <div className="text-center font-bold text-blue-300 border-2 border-blue-600 rounded-full p-3 bg-blue-900/30">Générateur</div>
          <div className="text-gray-500 font-bold">➔</div>
          <div className="text-center"><span className="block text-xl">⚡</span>Énergie<br/>Électrique</div>
        </div>
      </div>

    </div>
  );
};
