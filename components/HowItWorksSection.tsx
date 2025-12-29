import React from 'react';
import { UserPlus, Sparkles, FolderKanban } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    id: 1,
    title: "Create Your Profile",
    description: "Set up your artist profile with genres, instruments, and featured tracks. Let your sound speak for itself.",
    icon: UserPlus,
    color: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary"
  },
  {
    id: 2,
    title: "Swipe & Match",
    description: "Browse potential collaborators. Swipe right if you vibe. When they swipe back, it's a match!",
    icon: Sparkles,
    color: "bg-brand-secondary/10 border-brand-secondary/20 text-brand-secondary"
  },
  {
    id: 3,
    title: "Collaborate",
    description: "Move to your dedicated workspace. Chat, share files, and track progress from idea to master.",
    icon: FolderKanban,
    color: "bg-brand-lime/10 border-brand-lime/20 text-brand-lime"
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-brand-bg/50">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">How <span className="text-brand-primary">Jamder</span> Works</h2>
            <p className="text-brand-tertiary max-w-2xl mx-auto text-lg">
              Go from solo artist to organized collaboration in three simple steps.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative h-full">
              <Reveal delay={index * 0.2} direction="up" className="h-full">
                <div className="group glass-standard p-8 rounded-card h-full hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-brand-primary/30 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} p-4 mb-6 mx-auto md:mx-0 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 border`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-brand-tertiary leading-relaxed">{step.description}</p>
                  
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 select-none pointer-events-none">
                    0{step.id}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};