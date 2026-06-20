import React from 'react';
import { motion } from 'motion/react';
import { Map, AlertOctagon, Info } from 'lucide-react';

export const FranceVichySVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <Map className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-white mb-0 mt-0">La France divisée (1940-1942)</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Carte simplifiée (SVG) */}
        <div className="w-full justify-center flex relative md:w-[60%] shrink-0">
          <svg viewBox="0 0 400 400" className="w-full max-w-[350px] drop-shadow-xl" role="img" aria-label="Carte de la France divisée en zones">
             <defs>
               <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
                 <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#9ca3af" strokeWidth="1" opacity="0.5"/>
               </pattern>
             </defs>
             {/* Base de la France (contour très simplifié) */}
             <path d="M150,20 L250,20 L300,100 L350,200 L300,350 L200,380 L100,350 L50,200 L50,100 Z" fill="#2d3748" stroke="#4a5568" strokeWidth="3" />
             
             {/* Zone Occupée (Nord et Ouest) */}
             {/* On dessine la partie Nord et Ouest de la ligne de démarcation */}
             <motion.path 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               d="M150,20 L250,20 L300,100 L350,200 L250,200 L200,250 L100,250 L50,200 L50,100 Z" 
               fill="#7f1d1d" opacity="0.8" stroke="#fca5a5" strokeWidth="2" 
               whileHover={{ opacity: 1, fill: "#991b1b" }}
             />
             
             {/* Zone Libre (Sud) */}
             <motion.path 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               d="M100,250 L200,250 L250,200 L350,200 L300,350 L200,380 L100,350 L50,200 Z" 
               fill="#1e3a8a" opacity="0.8" stroke="#93c5fd" strokeWidth="2"
               whileHover={{ opacity: 1, fill: "#1e40af" }}
             />

             {/* Zone rattachée/Alsace-Lorraine (Est) */}
             <path d="M250,20 L300,100 L250,120 L200,50 Z" fill="url(#diagonalHatch)" stroke="#d1d5db" strokeWidth="1" />

             {/* Ligne de démarcation */}
             <path d="M100,250 L200,250 L250,200 L350,200" fill="none" stroke="#facc15" strokeWidth="4" strokeDasharray="8 4" />

             {/* Villes */}
             <circle cx="180" cy="120" r="6" fill="white" />
             <text x="190" y="125" fill="white" fontSize="14" fontWeight="bold">Paris</text>

             <circle cx="220" cy="270" r="6" fill="white" />
             <text x="230" y="275" fill="white" fontSize="14" fontWeight="bold">Vichy</text>
          </svg>
        </div>

        {/* Légende interactive */}
        <div className="w-full md:w-[40%] flex flex-col justify-center space-y-4">
           <div className="bg-red-900/30 border border-red-500/50 p-4 rounded-lg flex gap-3 items-start">
             <div className="w-4 h-4 rounded-full bg-red-800 shrink-0 mt-1"></div>
             <div>
               <h4 className="font-bold text-red-200">Zone Occupée</h4>
               <p className="text-xs text-gray-300 mt-1">Administrée par l'armée allemande depuis Paris. L'Ouest (côtes) est hyper-sécurisé.</p>
             </div>
           </div>

           <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg flex gap-3 items-start">
             <div className="w-4 h-4 rounded-full bg-blue-800 shrink-0 mt-1"></div>
             <div>
               <h4 className="font-bold text-blue-200">Zone Libre</h4>
               <p className="text-xs text-gray-300 mt-1">Dirigée par le gouvernement de Pétain depuis Vichy. Elle sera envahie par l'Allemagne en novembre 1942.</p>
             </div>
           </div>

           <div className="bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-lg flex gap-3 items-start">
             <div className="w-8 h-1 bg-yellow-400 shrink-0 mt-2 border border-black border-dashed"></div>
             <div>
               <h4 className="font-bold text-yellow-200">Ligne de démarcation</h4>
               <p className="text-xs text-gray-300 mt-1">Frontière intérieure très surveillée nécessitant un laissez-passer (Ausweis) pour la franchir.</p>
             </div>
           </div>

           <div className="bg-gray-800/50 border border-gray-600 p-4 rounded-lg flex gap-3 items-start">
             <div className="w-4 h-4 bg-gray-600 shrink-0 mt-1 border border-gray-400 opacity-50" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #9ca3af 2px, #9ca3af 4px)'}}></div>
             <div>
               <h4 className="font-bold text-gray-300">Alsace-Moselle</h4>
               <p className="text-xs text-gray-300 mt-1">Territoires annexés (rattachés directement à l'Allemagne nazie).</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
