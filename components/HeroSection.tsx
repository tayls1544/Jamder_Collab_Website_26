import React, { useState } from 'react';
import { ArrowRight, PlayCircle, Music, MessageSquare, Heart, Users, Sparkles, X, Play } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const HeroSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden perspective-1000">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-secondary/15 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen opacity-50" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Reveal width="100%" direction="down" duration={0.8}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-brand-primary/30 hover:border-brand-primary/50 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
              </span>
              <span className="text-sm font-medium text-gray-200">New: AI-Powered Project Tools v2.0</span>
            </div>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2} duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 max-w-5xl mx-auto text-white">
            Find Your Perfect <br />
            <span className="text-gradient drop-shadow-sm">Music Collaborator</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4} duration={0.8}>
          <p className="text-lg md:text-xl text-brand-tertiary mb-10 max-w-2xl mx-auto leading-relaxed">
            The project management platform built for musicians. Swipe to find collaborators, then manage your projects with tools designed for how musicians actually work.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6} duration={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              Start Matching Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto group"
              onClick={() => setIsVideoOpen(true)}
            >
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </Reveal>

        {/* Product Dashboard Mockup */}
        <Reveal width="100%" delay={0.4} direction="up" duration={1}>
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 blur-2xl rounded-[2rem]" />
            
            <div className="relative rounded-2xl bg-brand-card border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.01] group">
              {/* Window Controls */}
              <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 w-64 h-4 bg-white/5 rounded-full" />
              </div>

              {/* Dashboard Content */}
              <div className="p-4 md:p-8 text-left bg-brand-card">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-brand-muted text-sm mb-1">Good evening</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient">Patrick Topping!</h2>
                    <p className="text-brand-tertiary text-sm mt-2">Find collaborators • Create music • Grow your network</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 hidden md:block">
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-brand-card" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-brand-elevated p-4 rounded-xl border border-white/5 flex items-center justify-between group/card hover:border-brand-primary/20 transition-colors">
                    <div>
                      <p className="text-brand-muted text-xs mb-1">Active Collaborations</p>
                      <p className="text-2xl font-bold text-white">1</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Music className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="bg-brand-elevated p-4 rounded-xl border border-white/5 flex items-center justify-between group/card hover:border-brand-primary/20 transition-colors">
                    <div>
                      <p className="text-brand-muted text-xs mb-1">Unread Messages</p>
                      <p className="text-2xl font-bold text-white">0</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="bg-brand-elevated p-4 rounded-xl border border-white/5 flex items-center justify-between group/card hover:border-brand-primary/20 transition-colors">
                    <div>
                      <p className="text-brand-muted text-xs mb-1">New Matches</p>
                      <p className="text-2xl font-bold text-white">0</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-brand-lime/10 flex items-center justify-center text-brand-lime">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-brand-primary" />
                      <h4 className="font-bold text-white">Quick Actions</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-6 rounded-xl h-32 relative overflow-hidden group/action cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="relative z-10">
                          <h5 className="font-bold text-white text-lg">Discover Musicians</h5>
                          <p className="text-white/80 text-sm">Find your next collaborator</p>
                        </div>
                        <Heart className="absolute bottom-[-10px] right-[-10px] w-24 h-24 text-white/20 rotate-[-15deg] group-hover/action:scale-110 transition-transform" />
                      </div>

                      <div className="bg-gradient-to-br from-brand-secondary to-brand-primary p-6 rounded-xl h-32 relative overflow-hidden group/action cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="relative z-10">
                          <h5 className="font-bold text-white text-lg">View Matches</h5>
                          <p className="text-white/80 text-sm">Connect with mutual interests</p>
                        </div>
                        <Users className="absolute bottom-[-10px] right-[-10px] w-24 h-24 text-white/20 rotate-[-15deg] group-hover/action:scale-110 transition-transform" />
                      </div>

                      <div className="bg-brand-elevated border border-white/5 p-6 rounded-xl h-32 relative overflow-hidden group/action cursor-pointer transition-transform hover:-translate-y-1 hover:border-brand-lime/30">
                        <div className="relative z-10">
                          <h5 className="font-bold text-white text-lg">Active Projects</h5>
                          <p className="text-brand-tertiary text-sm">Continue collaborating</p>
                        </div>
                        <Music className="absolute bottom-[-10px] right-[-10px] w-24 h-24 text-brand-lime/10 rotate-[-15deg] group-hover/action:scale-110 transition-transform" />
                      </div>

                      <div className="bg-brand-elevated border border-white/5 p-6 rounded-xl h-32 relative overflow-hidden group/action cursor-pointer transition-transform hover:-translate-y-1 hover:border-brand-primary/30">
                        <div className="relative z-10">
                          <h5 className="font-bold text-white text-lg">Browse Showcase</h5>
                          <p className="text-brand-tertiary text-sm">Discover amazing projects</p>
                        </div>
                        <Sparkles className="absolute bottom-[-10px] right-[-10px] w-24 h-24 text-brand-primary/10 rotate-[-15deg] group-hover/action:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:col-span-1">
                    <div className="bg-brand-elevated rounded-xl border border-white/5 p-5 h-full">
                      <h4 className="font-bold text-white mb-6">Your Usage</h4>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-brand-tertiary">Plan</span>
                          <span className="text-brand-lime font-medium">Free</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-brand-tertiary">Collaborations</span>
                            <span className="text-white font-medium">1/3</span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-brand-primary h-full w-1/3 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-brand-bg/90 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/80 transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              poster="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            >
              <source src="https://cdn.coverr.co/videos/coverr-dj-mixing-music-5654/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-6 left-6 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-primary/40 backdrop-blur-md rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">Jamder Demo</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};