import React from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';

interface ProgressBarProps {
  percentage: number;
  themeBackgroundClass?: string;
  className?: string;
  heightClass?: string;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  themeBackgroundClass = 'bg-primary', 
  className,
  heightClass = 'h-1.5',
  animated = false
}) => {
  return (
    <div className={clsx("w-full bg-surface-hover rounded-full overflow-hidden border border-border-hover", heightClass, className)}>
      {animated ? (
        <motion.div 
            className={clsx("h-full", themeBackgroundClass)} 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
        />
      ) : (
        <div 
          className={clsx("h-full transition-all duration-1000 ease-out", themeBackgroundClass)} 
          style={{ width: `${percentage}%` }} 
        />
      )}
    </div>
  );
};
