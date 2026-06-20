import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { playSound } from '../../lib/audio';

export type MascotContext = 'accueil' | 'maths' | 'francais' | 'physique' | 'svt' | 'techno' | 'histoire' | 'geo' | 'emc' | 'oral' | 'methodologie';

interface MascotProps {
  className?: string;
  forcedContext?: MascotContext;
}

export const Mascot: React.FC<MascotProps> = ({ className, forcedContext }) => {
  const location = useLocation();
  const [context, setContext] = useState<MascotContext>(forcedContext || 'accueil');
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Déterminer le contexte en fonction de l'URL
  useEffect(() => {
    if (forcedContext) {
      setContext(forcedContext);
      return;
    }
    const path = location.pathname;
    if (path.includes('maths')) setContext('maths');
    else if (path.includes('francais')) setContext('francais');
    else if (path.includes('physique')) setContext('physique');
    else if (path.includes('svt')) setContext('svt');
    else if (path.includes('techno')) setContext('techno');
    else if (path.includes('histoire')) setContext('histoire');
    else if (path.includes('geo')) setContext('geo');
    else if (path.includes('emc')) setContext('emc');
    else if (path.includes('oral')) setContext('oral');
    else if (path.includes('methodo')) setContext('methodologie');
    else setContext('accueil');
  }, [location.pathname, forcedContext]);

  const handleInteraction = () => {
    playSound('click');
    setClickCount(prev => prev + 1);
    
    // Petit easter egg de remise à zéro
    if (clickCount > 5) {
      setClickCount(0);
    }
  };

  const handleHover = () => {
    if (!isHovered) {
      playSound('hover');
    }
    setIsHovered(true);
  };

  // Les "assets" du personnage selon le contexte
  const renderAccessories = () => {
    switch (context) {
      case 'maths':
        return (
          <motion.div key="maths" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute top-[34px] w-full flex justify-center"
            >
              {/* Lunettes grand format et centrées sur les yeux */}
              <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="2" width="18" height="14" rx="4" stroke="#1E293B" strokeWidth="3" fill="#E0F2FE" fillOpacity="0.3" />
                <rect x="34" y="2" width="18" height="14" rx="4" stroke="#1E293B" strokeWidth="3" fill="#E0F2FE" fillOpacity="0.3" />
                <path d="M 30 8 L 34 8" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                {/* Branches */}
                <path d="M 12 8 L 4 6" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                <path d="M 52 8 L 60 6" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10, rotate: -45 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0 }}
              className="absolute -bottom-4 -left-2"
            >
              {/* Equerre */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M 4 28 L 28 28 L 4 4 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 10 22 L 20 22 L 10 12 Z" fill="transparent" stroke="#CA8A04" strokeWidth="2" strokeLinejoin="round" />
                {/* Graduations */}
                <path d="M 8 28 L 8 25 M 12 28 L 12 25 M 16 28 L 16 25 M 20 28 L 20 25 M 24 28 L 24 25" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 4 8 L 7 8 M 4 12 L 7 12 M 4 16 L 7 16 M 4 20 L 7 20 M 4 24 L 7 24" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'francais':
        return (
          <motion.div key="francais" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -top-[24px] right-0 w-full flex justify-end"
            >
              {/* Béret français agrandi */}
              <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-6 drop-shadow-sm">
                 <ellipse cx="28" cy="22" rx="22" ry="8" fill="#991B1B" />
                 <ellipse cx="28" cy="18" rx="26" ry="10" fill="#EF4444" />
                 <path d="M 28 8 V 12" stroke="#7F1D1D" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 10, rotate: 45 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0 }}
               className="absolute -bottom-2 -right-4"
            >
              {/* Plume */}
              <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-12 drop-shadow-md">
                <path d="M 14 40 Q 14 20 4 4 Q 14 0 24 4 Q 14 20 14 40Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M 14 40 Q 14 20 4 4" stroke="#94A3B8" strokeWidth="1.5" />
                <path d="M 14 40 Q 14 20 24 4" stroke="#94A3B8" strokeWidth="1.5" />
                <path d="M 14 12 L 10 8 M 14 16 L 8 10 M 14 20 L 10 14 M 14 24 L 12 18" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 14 12 L 18 8 M 14 16 L 20 10 M 14 20 L 18 14 M 14 24 L 16 18" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 13 36 L 15 36 L 14 40 Z" fill="#1E293B" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'physique':
        return (
          <motion.div key="physique" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute top-[32px] w-full flex justify-center"
            >
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M 5 8 L 55 8" stroke="#475569" strokeWidth="4" />
                 <path d="M 12 4 Q 16 22 20 22 Q 24 22 28 4 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" opacity="0.8"/>
                 <path d="M 32 4 Q 36 22 40 22 Q 44 22 48 4 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" opacity="0.8"/>
              </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 10, rotate: 20 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0 }}
              className="absolute -bottom-2 -right-4"
            >
              {/* Aimant / Éprouvette */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-12 drop-shadow-md">
                <path d="M 10 24 L 10 12 A 6 6 0 0 1 22 12 L 22 24" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
                <path d="M 10 24 L 10 28" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
                <path d="M 22 24 L 22 28" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'svt':
        return (
          <motion.div key="svt" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -top-[16px] w-full flex justify-center"
            >
               {/* Petite feuille sur la tête */}
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                 <path d="M 16 28 Q 16 16 6 10 Q 16 2 26 10 Q 16 16 16 28" fill="#4ADE80" stroke="#166534" strokeWidth="1.5" />
                 <path d="M 16 28 Q 20 20 28 14" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
               </svg>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: -10, rotate: -30 }} animate={{ opacity: 1, x: 0, rotate: -15 }} exit={{ opacity: 0 }}
               className="absolute -bottom-2 -left-2"
            >
              {/* Microscope */}
               <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                 <path d="M 4 28 L 24 28" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                 <path d="M 8 28 L 14 16 L 14 6" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M 10 6 L 18 6" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                 <path d="M 14 16 L 22 16" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                 <circle cx="14" cy="4" r="2" fill="#38BDF8" />
               </svg>
            </motion.div>
          </motion.div>
        );
      case 'techno':
        return (
          <motion.div key="techno" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute top-[32px] w-full flex justify-center"
            >
               {/* Lunettes de soudure ou de geek */}
               <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="8" y="4" width="20" height="12" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                 <rect x="32" y="4" width="20" height="12" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                 <path d="M 28 10 L 32 10" stroke="#475569" strokeWidth="3" />
                 <circle cx="18" cy="10" r="2" fill="#FBBF24" />
                 <circle cx="42" cy="10" r="2" fill="#FBBF24" />
               </svg>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 10, rotate: 20 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0 }}
               className="absolute -bottom-2 -right-4"
            >
               {/* Écrou / Clé plate */}
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[30deg] drop-shadow-md">
                 <path d="M 6 12 Q 10 4 18 12 L 28 22 A 4 4 0 0 1 22 28 L 12 18 Q 4 10 12 6" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
                 <circle cx="25" cy="25" r="1.5" fill="#1E293B" />
                 <path d="M 6 12 L 12 18" stroke="#475569" strokeWidth="1.5" />
               </svg>
            </motion.div>
          </motion.div>
        );
      case 'histoire':
        return (
          <motion.div key="histoire" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -top-12 w-full flex justify-center"
            >
               {/* Casque romain */}
               <svg width="72" height="56" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                 <path d="M 24 4 C 10 4, 10 24, 10 24 L 38 24 C 38 24, 38 4, 24 4 Z" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
                 <path d="M 24 4 C 20 -2, 28 -2, 24 4" fill="#EF4444" />
                 <path d="M 16 4 C 16 -6, 32 -6, 32 4" fill="#EF4444" />
                 <path d="M 12 24 L 12 32 M 36 24 L 36 32" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                 <path d="M 24 16 L 24 24" stroke="#B45309" strokeWidth="2" />
               </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -10 }} exit={{ opacity: 0 }}
              className="absolute -bottom-2 -left-3"
            >
              {/* Sablier */}
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M 4 4 L 20 4 M 4 28 L 20 28" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
                <path d="M 6 6 L 18 6 L 14 16 L 18 26 L 6 26 L 10 16 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M 8 26 L 16 26 L 14 16 Z" fill="#FCD34D" />
                <circle cx="12" cy="10" r="2" fill="#FCD34D" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'geo':
        return (
          <motion.div key="geo" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -top-7 w-full flex justify-center"
            >
               {/* Chapeau explorateur */}
               <svg width="64" height="35" viewBox="0 0 64 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="32" cy="28" rx="30" ry="6" fill="#D97706" />
                  <path d="M 16 28 C 16 10, 48 10, 48 28 Z" fill="#F59E0B" />
                  <path d="M 17 25 Q 32 29 47 25" stroke="#78350F" strokeWidth="3" fill="none" />
               </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0 }}
              className="absolute -bottom-2 -left-2"
            >
              {/* Boussole */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <circle cx="16" cy="16" r="14" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
                <circle cx="16" cy="16" r="10" fill="#E2E8F0" />
                <path d="M 16 2 L 19 13 L 16 16 Z" fill="#EF4444" />
                <path d="M 16 2 L 13 13 L 16 16 Z" fill="#DC2626" />
                <path d="M 16 30 L 19 19 L 16 16 Z" fill="#94A3B8" />
                <path d="M 16 30 L 13 19 L 16 16 Z" fill="#64748B" />
                <circle cx="16" cy="16" r="2" fill="#1E293B" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'emc':
        return (
          <motion.div key="emc" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -top-6 w-full flex justify-center translate-x-3"
            >
               {/* Colombe */}
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                 <path d="M 20 20 Q 30 10 36 20 Q 28 24 20 20 Z" fill="#FFF" stroke="#CBD5E1" strokeWidth="1.5" />
                 <path d="M 20 20 Q 10 10 4 20 Q 12 24 20 20 Z" fill="#FFF" stroke="#CBD5E1" strokeWidth="1.5" />
                 <circle cx="20" cy="20" r="4" fill="#FFF" stroke="#CBD5E1" strokeWidth="1.5" />
                 <path d="M 20 24 L 20 28 M 18 28 L 22 28" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: 10 }} exit={{ opacity: 0 }}
              className="absolute -bottom-2 -left-2"
            >
              {/* Balance de justice */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M 16 4 L 16 28 M 10 28 L 22 28" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
                <path d="M 4 10 L 28 10" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
                <path d="M 4 10 L 8 20 L 12 10" fill="none" stroke="#64748B" strokeWidth="1.5" />
                <path d="M 20 10 L 24 20 L 28 10" fill="none" stroke="#64748B" strokeWidth="1.5" />
                <path d="M 4 20 Q 8 24 12 20" fill="#FBBF24" />
                <path d="M 20 20 Q 24 24 28 20" fill="#FBBF24" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'oral':
        return (
          <motion.div key="oral" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
               className="absolute -bottom-[20px] w-full flex justify-center"
            >
               <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* Col de chemise */}
                 <path d="M 14 0 L 24 10 L 20 0 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
                 <path d="M 34 0 L 24 10 L 28 0 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
                 {/* Noeud de cravate */}
                 <path d="M 20 0 L 28 0 L 26 6 L 22 6 Z" fill="#E11D48" />
                 {/* Reste de la cravate */}
                 <path d="M 22 6 L 26 6 L 28 24 L 24 32 L 20 24 Z" fill="#BE123C" />
               </svg>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
               className="absolute -bottom-1 -right-4"
            >
               {/* Microphone sur pied */}
               <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                 <path d="M 4 30 L 20 30" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                 <path d="M 12 20 L 12 30" stroke="#475569" strokeWidth="3" />
                 <rect x="8" y="4" width="8" height="16" rx="4" fill="#64748B" />
                 <rect x="8" y="4" width="8" height="6" rx="3" fill="#334155" />
                 <path d="M 8 7 L 16 7 M 8 9 L 16 9" stroke="#94A3B8" strokeWidth="1" />
               </svg>
            </motion.div>
          </motion.div>
        );
      case 'methodologie':
        return (
          <motion.div key="methodologie" className="absolute inset-0 z-20 pointer-events-none">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
               className="absolute -top-3 -right-2"
            >
               {/* Chronomètre amélioré */}
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                 <circle cx="16" cy="18" r="12" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
                 <circle cx="16" cy="18" r="9" fill="#FFF5F5" />
                 <path d="M 16 18 L 16 11" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                 <path d="M 16 18 L 21 14" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                 <circle cx="16" cy="18" r="2" fill="#1E293B" />
                 <path d="M 13 4 L 19 4" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
                 <path d="M 16 4 L 16 6" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
                 <path d="M 26 8 L 28 10" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
               </svg>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: -10, rotate: -10 }} animate={{ opacity: 1, x: 0, rotate: -6 }} exit={{ opacity: 0 }}
               className="absolute top-2 -left-3"
            >
              {/* Post-it */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <rect x="2" y="2" width="20" height="20" fill="#FEF08A" stroke="#EAB308" strokeWidth="1" />
                <path d="M 6 8 L 18 8 M 6 12 L 15 12 M 6 16 L 12 16" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
                {/* Coin replié */}
                <path d="M 16 22 L 22 22 L 22 16 Q 16 16 16 22" fill="#FDE047" stroke="#EAB308" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        );
      case 'accueil':
      default:
        return (
          <motion.div 
             key="accueil"
             initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
             className="absolute -top-[16px] w-full flex justify-center z-20 pointer-events-none"
          >
             {/* Casque audio retravaillé (plus grand, positionné sur les "oreilles") */}
             <svg width="76" height="48" viewBox="0 0 76 48" fill="none" xmlns="http://www.w3.org/2000/svg">
               {/* Arceau */}
               <path d="M 12 40 C 12 -5, 64 -5, 64 40" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
               {/* Oreillette gauche */}
               <rect x="4" y="24" width="12" height="20" rx="6" fill="#475569" />
               <rect x="2" y="28" width="4" height="12" rx="2" fill="#334155" />
               {/* Oreillette droite */}
               <rect x="60" y="24" width="12" height="20" rx="6" fill="#475569" />
               <rect x="70" y="28" width="4" height="12" rx="2" fill="#334155" />
             </svg>
          </motion.div>
        );
    }
  };

  const MascotColors = {
    'accueil': 'from-indigo-400 to-purple-500',
    'maths': 'from-blue-400 to-cyan-500',
    'francais': 'from-rose-400 to-pink-500',
    'physique': 'from-cyan-400 to-blue-600',
    'svt': 'from-green-400 to-emerald-600',
    'techno': 'from-slate-400 to-gray-600',
    'histoire': 'from-amber-500 to-orange-600',
    'geo': 'from-teal-400 to-emerald-500',
    'emc': 'from-indigo-400 to-blue-500',
    'oral': 'from-violet-400 to-fuchsia-500',
    'methodologie': 'from-slate-400 to-gray-500'
  };

  return (
    <div 
      className={clsx("relative inline-block select-none", className)}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInteraction}
      style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Background Decor (Aura) */}
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.3 : 0.1,
          rotate: isHovered ? 45 : 0
        }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "absolute inset-0 rounded-full blur-xl transition-colors duration-1000",
          `bg-gradient-to-tr ${MascotColors[context]}`
        )}
      />

      {/* Main Mascot Body */}
      <motion.div
        animate={{
          y: isHovered ? -5 : [0, -3, 0], // Idle bobbing
          rotate: clickCount > 0 ? [0, -10, 10, -10, 10, 0] : 0, // Shake when clicked
          scale: clickCount > 4 ? [1, 1.2, 0.8, 1.1, 1] : 1 // Easter egg scale
        }}
        transition={{
          y: { repeat: isHovered ? 0 : Infinity, duration: 2, ease: "easeInOut" },
          rotate: { duration: 0.3 },
          scale: { duration: 0.4 }
        }}
        className={clsx(
          "relative w-20 h-20 rounded-3xl bg-gradient-to-br shadow-xl flex items-center justify-center p-2 text-4xl transition-colors duration-1000 z-10",
          MascotColors[context],
          "border-2 border-white/20"
        )}
      >
        {/* Face */}
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Eyes */}
            <motion.div className="flex gap-3 mt-2">
                <motion.div 
                    animate={isHovered ? { height: 4 } : { height: [12, 12, 2, 12, 12] }} 
                    transition={{ repeat: isHovered ? 0 : Infinity, duration: 4, times: [0, 0.5, 0.55, 0.6, 1] }}
                    className="w-3 h-3 bg-white rounded-full relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                </motion.div>
                <motion.div 
                    animate={isHovered ? { height: 4 } : { height: [12, 12, 2, 12, 12] }} 
                    transition={{ repeat: isHovered ? 0 : Infinity, duration: 4, times: [0, 0.5, 0.55, 0.6, 1] }}
                    className="w-3 h-3 bg-white rounded-full relative"
                >
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                </motion.div>
            </motion.div>

            {/* Mouth */}
            <motion.div 
                 animate={{ scaleY: isHovered ? 1.5 : 1, width: isHovered ? 10 : 8 }}
                 className="absolute bottom-3 w-2 h-1 bg-gray-900/50 rounded-full"
            />
            
            {/* Blush */}
            <div className="absolute top-6 left-1 w-2 h-1.5 bg-pink-500/40 rounded-full blur-[1px]"></div>
            <div className="absolute top-6 right-1 w-2 h-1.5 bg-pink-500/40 rounded-full blur-[1px]"></div>
        </div>
        
        {/* Accessories */}
        <AnimatePresence mode="popLayout">
           {renderAccessories()}
        </AnimatePresence>

      </motion.div>

      {/* Bulle de texte occasionnelle */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface text-foreground px-3 py-1.5 rounded-2xl shadow-lg border border-border text-xs font-medium z-30 pointer-events-none"
          >
            {context === 'accueil' && "Prêt à réviser ?"}
            {context === 'maths' && "C'est logique !"}
            {context === 'francais' && "Quelle belle langue !"}
            {context === 'physique' && "Eurêka !"}
            {context === 'svt' && "C'est vivant !"}
            {context === 'techno' && "Je bricole..."}
            {context === 'histoire' && "Voyage temporel !"}
            {context === 'geo' && "Le monde est grand !"}
            {context === 'emc' && "Liberté, Égalité..."}
            {context === 'oral' && "Je t'écoute !"}
            {context === 'methodologie' && "Tic tac..."}
            
            {/* Flèche de la bulle */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface border-b border-r border-border rotate-45 transform"></div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
