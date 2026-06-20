import React from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  themeColorClass?: string; // e.g. "bg-blue-500" to override primary color
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  themeColorClass,
  disabled,
  ...props
}) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-[0.98] focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: themeColorClass 
      ? clsx(themeColorClass, "text-white shadow-lg shadow-black/10 hover:brightness-110")
      : "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20",
    secondary: "bg-surface-hover hover:bg-border text-foreground border border-border",
    ghost: "bg-transparent hover:bg-surface-hover text-muted hover:text-foreground",
    danger: "bg-danger/10 hover:bg-danger/20 text-danger border border-danger/30",
    outline: "bg-transparent border-2 border-border hover:border-muted text-muted hover:text-foreground"
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-4 text-sm",
    lg: "h-14 px-6 text-base font-bold"
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};