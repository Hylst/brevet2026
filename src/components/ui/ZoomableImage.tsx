import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div 
        className="relative cursor-zoom-in group block w-full text-center"
        onClick={() => setIsZoomed(true)}
        title="Cliquez pour agrandir"
      >
        <img src={src} alt={alt} className={`w-full ${className}`} referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-lg">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 drop-shadow-lg transition-opacity duration-300" />
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={src} 
                alt={alt} 
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10" 
                referrerPolicy="no-referrer"
              />
              {alt && (
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-center text-sm sm:text-base font-medium bg-surface/80 px-6 py-2.5 rounded-full backdrop-blur-md border border-border shadow-lg z-50">
                  {alt}
                </p>
              )}
              <button 
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-surface border border-border text-foreground p-2.5 rounded-full shadow-xl hover:bg-surface-hover hover:scale-110 transition-all z-50"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
