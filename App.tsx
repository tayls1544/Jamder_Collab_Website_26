import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { LandingFooter } from './components/LandingFooter';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-pink selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}

export default App;