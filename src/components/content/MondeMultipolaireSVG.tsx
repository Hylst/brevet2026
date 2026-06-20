import React from 'react';
import { motion } from 'motion/react';
import { Globe2 } from 'lucide-react';

export const MondeMultipolaireSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-sm text-foreground">
      
      <div className="flex items-center gap-3 mb-6 justify-center">
         <Globe2 className="w-8 h-8 text-green-400" />
         <h3 className="text-xl font-bold text-white">Le monde multipolaire (Depuis 2001)</h3>
      </div>
      
      <p className="text-center text-muted mb-8 max-w-2xl mx-auto">Après la chute de l'URSS en 1991, les États-Unis étaient la seule hyperpuissance. Mais aujourd'hui, le monde compte plusieurs "pôles" de puissance qui coopèrent ou s'affrontent.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         
         <motion.div whileHover={{ y: -5 }} className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/50">
           <div className="text-2xl mb-2">🇺🇸 🇪🇺</div>
           <h4 className="font-bold text-blue-300 mb-2">Les puissances traditionnelles</h4>
           <p className="text-xs text-gray-300">États-Unis, Europe, Japon. Riches, développées, puissantes militairement, mais leur part dans la richesse mondiale recule peu à peu.</p>
         </motion.div>

         <motion.div whileHover={{ y: -5 }} className="bg-red-900/30 p-4 rounded-xl border border-red-500/50">
           <div className="text-2xl mb-2">🇨🇳 🇷🇺</div>
           <h4 className="font-bold text-red-300 mb-2">Les puissances rivales et ré-émergentes</h4>
           <p className="text-xs text-gray-300">La Chine veut devenir la 1ère puissance mondiale. La Russie veut retrouver sa grandeur passée et n'hésite pas à utiliser la force (Ukraine).</p>
         </motion.div>

         <motion.div whileHover={{ y: -5 }} className="bg-green-900/30 p-4 rounded-xl border border-green-500/50">
           <div className="text-2xl mb-2">🇧🇷 🇮🇳 🇿🇦</div>
           <h4 className="font-bold text-green-300 mb-2">Forces émergentes (BRICS)</h4>
           <p className="text-xs text-gray-300">Pays immenses, très peuplés (Inde, Brésil, Afrique du Sud) et en fort développement, qui réclament plus de place dans les décisions mondiales.</p>
         </motion.div>

         <motion.div whileHover={{ y: -5 }} className="bg-gray-800 p-4 rounded-xl border border-gray-600">
           <div className="text-2xl mb-2">⚠️ 🌍</div>
           <h4 className="font-bold text-gray-300 mb-2">Menaces et défis globaux</h4>
           <p className="text-xs text-gray-400">Le monde est déstabilisé par le terrorisme, les cyberattaques, et le changement climatique (qui frappe surtout les PMA et pays pauvres).</p>
         </motion.div>

      </div>
    </div>
  );
};
