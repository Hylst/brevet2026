import React, { useState } from 'react';
import { motion } from 'motion/react';

export const ElectricCircuitSVG: React.FC = () => {
  const [switchClosed, setSwitchClosed] = useState(false);
  const [voltage, setVoltage] = useState(4.5); // 1.5 to 9V

  // Calculate brightness based on voltage and switch state
  const brightness = switchClosed ? Math.min(1, Math.max(0.1, voltage / 6)) : 0;

  return (
    <div className="flex flex-col items-center my-8 p-6 bg-surface/50 rounded-2xl border border-border">
      <h4 className="text-lg font-bold text-foreground mb-2">Circuit Électrique Simple</h4>
      <p className="text-sm text-muted mb-6 text-center">
        Fermez l'interrupteur et modifiez la tension du générateur pour observer l'éclat de la lampe.
      </p>

      <div className="relative w-full max-w-[500px] aspect-video flex items-center justify-center overflow-hidden bg-background rounded-xl border border-border mb-6">
        <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-xl">
          {/* Circuit Path (Wires) */}
          <path
            d="M 100,150 L 100,50 L 400,50 L 400,150 L 400,250 L 280,250"
            fill="none"
            stroke="#475569"
            strokeWidth="4"
          />
          <path
            d="M 220,250 L 100,250 L 100,150"
            fill="none"
            stroke="#475569"
            strokeWidth="4"
          />

          {/* Electrons moving */}
          {switchClosed && (
            <motion.path
              d="M 100,150 L 100,50 L 400,50 L 400,150 L 400,250 L 280,250 M 220,250 L 100,250 L 100,150"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="6"
              strokeDasharray="10 40"
              animate={{ pathLength: [0, 1] }}
              transition={{
                duration: 2 / (voltage / 4.5),
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}

          {/* Battery (Generator) at left */}
          <g transform="translate(100, 150)">
            <rect x="-20" y="-30" width="40" height="60" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
            {/* Positive terminal */}
            <rect x="-10" y="-40" width="20" height="10" fill="#ef4444" />
            <text x="0" y="-15" fill="#ef4444" textAnchor="middle" className="font-bold text-lg">+</text>
            {/* Negative terminal */}
            <text x="0" y="20" fill="#3b82f6" textAnchor="middle" className="font-bold text-lg">-</text>
            {/* Voltage label */}
            <text x="-35" y="5" fill="#94a3b8" textAnchor="end" className="font-bold text-sm">{voltage.toFixed(1)}V</text>
          </g>

          {/* Lightbulb at right */}
          <g transform="translate(400, 150)">
            {/* Bulb glow */}
            <circle 
              cx="0" 
              cy="0" 
              r="40" 
              fill="#fef08a" 
              opacity={brightness * 0.6} 
              filter="blur(10px)"
            />
            {/* Bulb glass */}
            <circle cx="0" cy="0" r="25" fill={switchClosed ? "#fef08a" : "#334155"} stroke="#94a3b8" strokeWidth="2" />
            {/* Filament */}
            <path d="M -10,15 L -5,0 L 0,-10 L 5,0 L 10,15" fill="none" stroke={switchClosed ? "#fbbf24" : "#64748b"} strokeWidth="2" />
            {/* Base */}
            <rect x="-15" y="25" width="30" height="15" fill="#64748b" />
            <rect x="-10" y="40" width="20" height="5" fill="#475569" />
          </g>

          {/* Switch at bottom */}
          <g transform="translate(250, 250)">
            {/* Terminals */}
            <circle cx="-30" cy="0" r="5" fill="#94a3b8" />
            <circle cx="30" cy="0" r="5" fill="#94a3b8" />
            
            {/* Switch lever */}
            <motion.line
              x1="-30"
              y1="0"
              x2="30"
              y2="0"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
              initial={false}
              animate={{ 
                rotate: switchClosed ? 0 : -35,
                transformOrigin: "-30px 0px"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </g>

        </svg>
      </div>

      <div className="w-full max-w-md space-y-6">
        {/* Switch Control */}
        <div className="flex items-center justify-between bg-surface/50 p-4 rounded-xl border border-border">
          <span className="text-foreground font-medium">Interrupteur</span>
          <button
            onClick={() => setSwitchClosed(!switchClosed)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${
              switchClosed ? 'bg-success' : 'bg-muted'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                switchClosed ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Voltage Control */}
        <div className="flex flex-col gap-2 bg-surface/50 p-4 rounded-xl border border-border">
          <div className="flex justify-between text-sm text-foreground font-medium">
            <span>Tension du générateur (U)</span>
            <span className="text-warning">{voltage.toFixed(1)} V</span>
          </div>
          <input
            type="range"
            min="1.5"
            max="12"
            step="0.5"
            value={voltage}
            onChange={(e) => setVoltage(parseFloat(e.target.value))}
            className="w-full h-2 mt-2 bg-surface rounded-lg appearance-none cursor-pointer accent-warning"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>1.5V (Pile)</span>
            <span>12V (Batterie)</span>
          </div>
        </div>

        {/* Observation box */}
        <div className="bg-primary/10 rounded-xl p-4 border border-primary/30">
          <p className="text-sm text-primary">
            <strong>Observation :</strong> {
              !switchClosed 
                ? "Le circuit est ouvert. Le courant ne circule pas, la lampe est éteinte." 
                : voltage < 3 
                  ? "Le circuit est fermé mais la tension est trop faible. La lampe brille très faiblement (sous-tension)."
                  : voltage > 9
                    ? "Le circuit est fermé. La tension est très forte, la lampe brille intensément et risque de griller (surtension)."
                    : "Le circuit est fermé. Le courant circule et la lampe brille normalement."
            }
          </p>
        </div>
      </div>
    </div>
  );
};
