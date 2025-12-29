import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { PricingPlan } from '../types';
import { Reveal } from './ui/Reveal';

const plans: PricingPlan[] = [
  {
    name: "Free Artist",
    price: "$0",
    description: "Perfect for hobbyists and beginners just starting out.",
    features: [
      "Create 1 Artist Profile",
      "3 Active Collaborations",
      "Unlimited Matches",
      "Basic Task Boards",
      "50 AI Requests/month",
      "Standard Support"
    ]
  },
  {
    name: "Pro Studio",
    price: "$12",
    description: "For serious musicians managing professional collaborations.",
    isPopular: true,
    features: [
      "Unlimited Artist Profiles",
      "Unlimited Active Collaborations",
      "Unlimited AI Requests",
      "Verification Badge",
      "Split Agreement Templates",
      "High-res File Sharing (1GB)",
      "Priority Support"
    ]
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Simple, Professional Plans</h2>
            <p className="text-brand-tertiary max-w-xl mx-auto">
              Start for free, upgrade when you're ready to collaborate seriously.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 0.2} width="100%" direction="up" className="flex-1">
              <div 
                className={`relative h-full rounded-card p-8 md:p-10 border transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-brand-primary/5 border-brand-primary shadow-2xl shadow-brand-primary/10 scale-100 lg:scale-105 z-10' 
                    : 'bg-brand-card border-white/10 hover:border-white/20'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-xl">
                    Professional Choice
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-brand-primary' : 'text-brand-tertiary'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-brand-muted text-sm">/month</span>
                  </div>
                  <p className="text-brand-tertiary text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full shrink-0 ${plan.isPopular ? 'text-brand-lime' : 'text-brand-muted'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-brand-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.isPopular ? 'primary' : 'outline'} 
                  className="w-full mt-auto"
                >
                  {plan.isPopular ? 'Upgrade to Pro' : 'Get Started Free'}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};