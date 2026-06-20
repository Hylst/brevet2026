import React from 'react';
import { Home, BookOpen, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { playSound } from '../lib/audio';

export const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: BookOpen, label: 'Matières', path: '/subjects' },
    { icon: Settings, label: 'Options', path: '/settings' },
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-border pb-safe z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => { if (!isActive) playSound('click'); }}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "flex flex-col items-center justify-center flex-1 h-full space-y-1 relative group active:scale-95 transition-transform duration-200 rounded-xl my-1",
                isActive ? "text-primary" : "text-subtle hover:text-muted hover:bg-surface-hover/50"
              )}
            >
              {isActive && (
                <div className="absolute top-0 w-12 h-1 bg-primary rounded-b-full shadow-[0_0_10px_var(--color-primary)]" />
              )}
              <div className="relative">
                <item.icon className={clsx("w-6 h-6 transition-transform duration-300", isActive ? "fill-primary/20 scale-110" : "group-hover:scale-110")} />
              </div>
              <span className={clsx("text-[10px] font-bold transition-all duration-300", isActive ? "opacity-100 translate-y-0" : "opacity-80 translate-y-0.5")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};