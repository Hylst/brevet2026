import React from 'react';
import { motion } from 'motion/react';

export const RespirationCirculationSVG: React.FC = () => {

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-slate-900 rounded-xl shadow-lg font-sans">
      <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">La double circulation sanguine</h3>
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        <defs>
          <radialGradient id="lungGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </radialGradient>
          <radialGradient id="organGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </radialGradient>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>

        {/* LUNGS */}
        <motion.g
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '400px 150px' }}
        >
          <path d="M 320 80 Q 250 80 250 150 Q 250 250 380 250 L 380 80 Z" fill="url(#lungGradient)" opacity="0.8" />
          <path d="M 480 80 Q 550 80 550 150 Q 550 250 420 250 L 420 80 Z" fill="url(#lungGradient)" opacity="0.8" />
          <text x="400" y="150" textAnchor="middle" fill="white" fontWeight="bold" fontSize="24">Poumons (Alvéoles)</text>
          <text x="400" y="180" textAnchor="middle" fill="#fca5a5" fontSize="16">Recharge en O₂, rejet de CO₂</text>
        </motion.g>

        {/* ORGANS */}
        <g>
          <rect x="250" y="450" width="300" height="100" rx="30" fill="url(#organGradient)" opacity="0.8" />
          <text x="400" y="500" textAnchor="middle" fill="white" fontWeight="bold" fontSize="24">Organes (Muscles, cerveau...)</text>
          <text x="400" y="530" textAnchor="middle" fill="#374151" fontSize="16">Consommation d'O₂, rejet de CO₂</text>
        </g>

        {/* CAPILLARIES TOP (Pulmonary) */}
        <path d="M 320 220 L 480 220" stroke="#ef4444" strokeWidth="4" strokeDasharray="5,5" opacity="0.5" />
        <path d="M 320 230 L 480 230" stroke="#3b82f6" strokeWidth="4" strokeDasharray="5,5" opacity="0.5" />

        {/* CAPILLARIES BOTTOM (Organs) */}
        <path d="M 300 480 L 500 480" stroke="#ef4444" strokeWidth="4" strokeDasharray="5,5" opacity="0.5" />
        <path d="M 300 490 L 500 490" stroke="#3b82f6" strokeWidth="4" strokeDasharray="5,5" opacity="0.5" />

        {/* VESSELS */}
        {/* Veine pulmonaire (Rouge: poumons vers coeur gauche) */}
        <path id="veine-pulmonaire" d="M 480 200 C 600 200 650 250 650 320 C 650 350 600 350 450 350" fill="none" stroke="#ef4444" strokeWidth="12" markerEnd="url(#arrowRed)" />
        <text x="590" y="270" fill="#fca5a5" fontSize="16" fontWeight="bold">Veine pulmonaire (riche en O₂)</text>

        {/* Artère aorte (Rouge: coeur gauche vers organes) */}
        <path id="artere-aorte" d="M 450 360 C 600 360 650 380 650 430 C 650 480 600 480 500 480" fill="none" stroke="#ef4444" strokeWidth="16" markerEnd="url(#arrowRed)" />
        <text x="600" y="415" fill="#fca5a5" fontSize="16" fontWeight="bold">Artère Aorte</text>

        {/* Veine cave (Bleue: organes vers coeur droit) */}
        <path id="veine-cave" d="M 300 480 C 200 480 150 430 150 370 C 150 350 200 350 340 350" fill="none" stroke="#3b82f6" strokeWidth="16" markerEnd="url(#arrowBlue)" />
        <text x="200" y="415" fill="#93c5fd" fontSize="16" fontWeight="bold">Veines Caves (riche en CO₂)</text>

        {/* Artère pulmonaire (Bleue: coeur droit vers poumons) */}
        <path id="artere-pulmonaire" d="M 340 340 C 200 340 150 250 150 200 C 150 160 250 160 320 160" fill="none" stroke="#3b82f6" strokeWidth="12" markerEnd="url(#arrowBlue)" />
        <text x="180" y="270" fill="#93c5fd" fontSize="16" fontWeight="bold">Artère pulmonaire</text>

        {/* HEART */}
        <motion.g
          animate={{ scale: [1, 1.08, 1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '400px 350px' }}
        >
          {/* Right Heart (Blue) */}
          <path d="M 400 280 C 350 280 320 310 320 350 C 320 400 400 430 400 430 Z" fill="#3b82f6" />
          {/* Left Heart (Red) */}
          <path d="M 400 280 C 450 280 480 310 480 350 C 480 400 400 430 400 430 Z" fill="#ef4444" />
          
          <text x="365" y="360" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">Droit</text>
          <text x="435" y="360" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">Gauche</text>
        </motion.g>

        {/* ANIMATED O2 / CO2 particles along paths */}
        {/* We use framer-motion path animation by taking advantage of path length or animateMotion */}
        <circle cx="0" cy="0" r="6" fill="#ef4444">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 480 200 C 600 200 650 250 650 320 C 650 350 600 350 450 350" />
        </circle>
        <circle cx="0" cy="0" r="6" fill="#ef4444">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 450 360 C 600 360 650 380 650 430 C 650 480 600 480 500 480" />
        </circle>
        <circle cx="0" cy="0" r="6" fill="#3b82f6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 300 480 C 200 480 150 430 150 370 C 150 350 200 350 340 350" />
        </circle>
        <circle cx="0" cy="0" r="6" fill="#3b82f6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 340 340 C 200 340 150 250 150 200 C 150 160 250 160 320 160" />
        </circle>
      </svg>
      <div className="mt-4 flex justify-between px-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span> 
          <span className="text-slate-300">Sang pauvre en dioxygène</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span> 
          <span className="text-slate-300">Sang riche en dioxygène</span>
        </div>
      </div>
    </div>
  );
};
