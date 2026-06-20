import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, Heart, Landmark } from 'lucide-react';

export const LaiciteSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 flex flex-col gap-8 text-sm text-foreground">
      
      <div className="text-center">
         <h3 className="text-xl font-bold text-white mb-2">Les 3 Piliers de la Laïcité</h3>
         <p className="text-muted">Un cadre de liberté pour vivre ensemble.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch">
        
        {/* Pilier 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 p-5 rounded-2xl border border-blue-500/30 bg-blue-500/5 text-center flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="font-bold text-blue-400 mb-2">Liberté de conscience</h4>
          <p className="text-xs text-muted leading-relaxed">Chacun est libre de croire, de ne pas croire ou de changer de religion.</p>
        </motion.div>

        {/* Pilier 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 p-5 rounded-2xl border border-purple-500/30 bg-purple-500/5 text-center flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <Landmark className="w-6 h-6 text-purple-400" />
          </div>
          <h4 className="font-bold text-purple-400 mb-2">Séparation État / Religions</h4>
          <p className="text-xs text-muted leading-relaxed">L'État est neutre. Il ne favorise et ne finance aucun culte.</p>
        </motion.div>

        {/* Pilier 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 p-5 rounded-2xl border border-pink-500/30 bg-pink-500/5 text-center flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
            <Scale className="w-6 h-6 text-pink-400" />
          </div>
          <h4 className="font-bold text-pink-400 mb-2">Égalité devant la loi</h4>
          <p className="text-xs text-muted leading-relaxed">La même loi s'applique à tous, peu importe ses convictions.</p>
        </motion.div>

      </div>

      <div className="bg-background/60 p-4 rounded-xl border border-border flex items-start gap-4 italic">
        <Heart className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
        <p className="text-sm">
          "La Laïcité n'est pas une opinion, elle est la liberté d'en avoir une."
        </p>
      </div>
      
    </div>
  );
};
