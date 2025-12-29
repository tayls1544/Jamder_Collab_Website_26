import React from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Reveal width="100%" direction="down">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto text-white">
            Level up your <br />
            <span className="text-gradient">collaborations.</span>
          </h2>
        </Reveal>
        
        <Reveal width="100%" delay={0.2} direction="up">
          <p className="text-xl text-brand-tertiary mb-10 max-w-2xl mx-auto">
            Join thousands of musicians staying organized and creating together.
            Your next hit project starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="px-12 py-4 text-lg w-full sm:w-auto shadow-2xl">
              Join Jamder Free
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};