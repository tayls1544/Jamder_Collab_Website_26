import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'glass-strong py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Jamder</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-brand-tertiary hover:text-brand-primary transition-colors">How it Works</a>
            <a href="#features" className="text-sm text-brand-tertiary hover:text-brand-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-brand-tertiary hover:text-brand-primary transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-tertiary hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-white/10 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-brand-tertiary hover:text-brand-primary py-2">How it Works</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-brand-tertiary hover:text-brand-primary py-2">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-brand-tertiary hover:text-brand-primary py-2">Pricing</a>
            <div className="h-px bg-white/10 my-2"></div>
            <Button variant="ghost" className="w-full justify-start">Log In</Button>
            <Button variant="primary" className="w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};