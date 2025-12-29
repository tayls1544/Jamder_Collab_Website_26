import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-90 shadow-xl shadow-brand-primary/20 border border-transparent hover:-translate-y-0.5",
    secondary: "bg-brand-elevated text-white hover:bg-white/5 border border-white/10 hover:-translate-y-0.5 shadow-lg",
    ghost: "bg-transparent text-brand-tertiary hover:text-white hover:bg-white/5",
    outline: "bg-transparent border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary/60"
  };

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-lg",
    md: "text-base px-6 py-3 rounded-xl",
    lg: "text-lg px-8 py-4 rounded-2xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};