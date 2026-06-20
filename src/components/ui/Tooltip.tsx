import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'auto' | 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'auto' }) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [actualPosition, setActualPosition] = useState<'top' | 'bottom'>('top');

  const updatePosition = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      
      let pos = position;
      if (pos === 'auto') {
         if (rect.top < 60) pos = 'bottom';
         else pos = 'top';
      }

      // Calculate base horizontal position (center of the element)
      let left = rect.left + window.scrollX + rect.width / 2;
      
      // Prevent horizontal overflow (assuming ~250px max width tooltip, so 125px half-width)
      const halfWidth = 125; 
      const maxLeft = window.innerWidth - halfWidth - 10;
      const minLeft = halfWidth + 10;
      
      if (left > maxLeft) left = maxLeft;
      if (left < minLeft) left = minLeft;

      if (pos === 'bottom') {
        setCoords({
          top: rect.bottom + window.scrollY + 8,
          left,
        });
        setActualPosition('bottom');
      } else {
        setCoords({
          top: rect.top + window.scrollY - 8,
          left,
        });
        setActualPosition('top');
      }
    }
  };

  useEffect(() => {
    if (show) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition, { passive: true });
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [show, position]);

  return (
    <div 
      ref={containerRef}
      className="inline-flex items-center justify-center h-full cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      onClick={() => setShow(!show)}
      onTouchStart={() => setShow(!show)}
    >
      {children}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: actualPosition === 'bottom' ? -5 : 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: actualPosition === 'bottom' ? -5 : 5, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                top: coords.top,
                left: coords.left,
                transform: actualPosition === 'bottom' ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
              }}
              className="absolute z-[9999] px-3 py-2 text-xs font-medium text-center text-white bg-slate-800 rounded-lg shadow-xl pointer-events-none w-max max-w-[250px] leading-relaxed border border-white/10"
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
