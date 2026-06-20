import React from 'react';
import { motion } from 'motion/react';

export const NutritionDigestionSVG: React.FC = () => {

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-slate-900 rounded-xl shadow-lg font-sans">
      <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">Le trajet de la Digestion</h3>
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        <defs>
          <linearGradient id="esophagusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <radialGradient id="stomachGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </radialGradient>
          <linearGradient id="intestineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>

        {/* MOUTH TO ESOPHAGUS */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          d="M 400 50 Q 420 80 400 120" 
          fill="none" stroke="#fca5a5" strokeWidth="20" strokeLinecap="round" 
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          d="M 400 120 L 400 280" 
          fill="none" stroke="url(#esophagusGrad)" strokeWidth="20" strokeLinecap="round" 
        />
        <text x="440" y="80" fill="white" fontWeight="bold">Bouche & Oesophage</text>
        <text x="440" y="100" fill="#9ca3af" fontSize="14">Broyage mécanique</text>

        {/* STOMACH */}
        <motion.g
          animate={{ scale: [1, 1.05, 1], filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '400px 360px' }}
        >
          <path d="M 400 280 C 350 280 300 320 320 380 C 340 440 450 440 480 380 Q 490 350 450 320 Q 430 300 400 280 Z" fill="url(#stomachGrad)" />
          <text x="210" y="340" fill="white" fontWeight="bold">Estomac</text>
          <text x="110" y="360" fill="#9ca3af" fontSize="14">Brassage & Sucs gastriques (Enzymes)</text>
        </motion.g>

        {/* LIVER / PANCREAS (Abstracted shapes) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <path d="M 480 230 C 580 230 620 300 550 350 C 500 380 450 320 480 280 Z" fill="#78350f" opacity="0.8" />
          <text x="580" y="270" fill="white" fontWeight="bold">Foie & Vésicule</text>

          <path d="M 480 360 C 550 350 580 380 500 410 Z" fill="#fef08a" opacity="0.8" />
          <text x="560" y="415" fill="white" fontWeight="bold">Pancréas</text>
        </motion.g>

        {/* INTESTINES */}
        {/* Small Intestine Path */}
        <motion.path 
          id="intestinePath" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          d="M 420 420 Q 400 480 450 500 T 350 500 T 400 560" 
          fill="none" stroke="url(#intestineGrad)" strokeWidth="30" strokeLinejoin="round" strokeLinecap="round" 
        />
        <text x="180" y="520" fill="white" fontWeight="bold">Intestin Grêle</text>
        <text x="100" y="540" fill="#9ca3af" fontSize="14">Absorption des nutriments dans le sang</text>
        
        {/* Villi/Capillaries connecting to intestine */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <path d="M 330 500 L 280 500" stroke="#ef4444" strokeWidth="4" strokeDasharray="4" />
          <path d="M 470 500 L 520 500" stroke="#ef4444" strokeWidth="4" strokeDasharray="4" />
          <text x="240" y="490" fill="#fca5a5" fontSize="12">Vaisseaux sanguins</text>
          <text x="530" y="490" fill="#fca5a5" fontSize="12">Vaisseaux sanguins</text>
        </motion.g>

        {/* ANIMATED FOOD PARTICLES */}
        {/* Esophagus (Full food) */}
        <circle r="8" fill="#a3e635">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 400 50 Q 420 80 400 120 L 400 280" />
          <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.9;1" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Stomach (Breaking down) */}
        <g>
          <circle cx="0" cy="0" r="4" fill="#65a30d">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 400 280 C 350 280 300 320 320 380 C 340 440 450 440 480 380" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="5" cy="5" r="3" fill="#84cc16">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 400 280 C 350 280 300 320 320 380 C 340 440 450 440 480 380" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Intestine (Nutrients absorbing) */}
        <g>
          <circle cx="0" cy="0" r="2" fill="#d9f99d">
             <animateMotion dur="4s" repeatCount="indefinite" path="M 420 420 Q 400 480 450 500 T 350 500 T 400 560" />
             <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="-5" cy="5" r="2" fill="#d9f99d">
             <animateMotion dur="4s" repeatCount="indefinite" path="M 420 420 Q 400 480 450 500 T 350 500 T 400 560" />
             <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" />
          </circle>
          {/* Nutrients escaping into blood */}
          <circle cx="0" cy="0" r="2" fill="#fca5a5">
             <animateMotion dur="4s" repeatCount="indefinite" path="M 400 500 L 250 500" />
             <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.5;0.9;1" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

      </svg>
      <div className="mt-4 flex justify-between px-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-lime-400"></span> 
          <span className="text-slate-300">Aliment broyé</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-200"></span> 
          <span className="text-slate-300">Nutriment (microscopique)</span>
        </div>
      </div>
    </div>
  );
};
