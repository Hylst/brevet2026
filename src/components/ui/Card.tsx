import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { playSound } from '../../lib/audio';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
  gradient?: string; // e.g. "from-blue-600 to-indigo-700"
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, onClick, to, gradient, ariaLabel }) => {
  const baseStyles = "relative block bg-surface/80 rounded-2xl border border-border overflow-hidden hover:border-border-hover transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm group";
  
  const handleMouseEnter = () => playSound('hover');
  const handleClick = (e: React.MouseEvent) => {
    playSound('click');
    onClick && onClick();
  };

  const content = (
    <>
      {gradient && (
        <>
          <div className={clsx("absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br", gradient)} />
          {/* Subtle highlight sweep */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
          </div>
        </>
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </>
  );

  if (to) {
    return (
      <Link 
        to={to} 
        className={clsx(baseStyles, className)}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={clsx(baseStyles, onClick && "cursor-pointer", className)}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  );
};