import React from 'react';
import { 
  Heart, X, Play, Pause, MoreHorizontal, Search, Filter, 
  Plus, Calendar, CheckCircle2, Mic, FileText, ListTodo, 
  Link as LinkIcon, Upload, Users, Clock, Settings, ArrowRight,
  Music, User, Sparkles, Trophy, ChevronDown, Flag, Check,
  AlertCircle, Circle, Bot, PenTool, Wand2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

// --- MOCKUP COMPONENTS ---

const SwipeMockup = () => (
  <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group shadow-brand-primary/10">
    <img 
      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
      alt="Musician Profile" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />

    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
      <div className="bg-brand-bg/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
        <span className="text-xs font-medium text-white">Nearby</span>
      </div>
      <div className="bg-brand-primary text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
        95% Match
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-bg via-brand-bg/90 to-transparent pt-20">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">Ben Hemsley, 25</h3>
        <p className="text-brand-primary text-sm font-medium uppercase tracking-wider">Producer • DJ</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {['House', 'Trance', 'Techno'].map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-tertiary">
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 flex items-center gap-3">
        <button className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="h-8 flex items-end gap-0.5 opacity-60">
             {[40, 60, 30, 80, 50, 90, 40, 60, 70, 40, 30, 60, 80, 50, 40].map((h, i) => (
               <div key={i} className="flex-1 bg-brand-secondary rounded-t-sm" style={{ height: `${h}%` }} />
             ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <button className="w-14 h-14 rounded-full bg-brand-bg/50 border border-white/10 text-red-500 flex items-center justify-center hover:bg-red-500/10 transition-all">
          <X className="w-6 h-6" />
        </button>
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-brand-primary/20">
          <Heart className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
  </div>
);

const ProjectsMockup = () => (
  <div className="w-full bg-brand-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
    <div className="p-6 border-b border-white/5">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">Active Projects</h3>
          <p className="text-brand-tertiary text-sm">Continue your collaborations.</p>
        </div>
        <Button variant="primary" size="sm">
          <Plus className="w-4 h-4 mr-1" /> New Project
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors"
            readOnly
          />
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-brand-tertiary flex items-center gap-2 hover:text-white transition-colors">
          <Filter className="w-4 h-4" /> All Status
        </button>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-brand-primary mb-4">
          <Mic className="w-4 h-4" />
          <h4 className="font-semibold">My Open Calls (1)</h4>
        </div>
        <div className="bg-brand-bg border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-brand-primary/30 transition-colors cursor-pointer">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-white">trance fest</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-lime/10 text-brand-lime uppercase">Active</span>
            </div>
            <p className="text-brand-muted text-xs">Looking for vocals • 0/3 filled</p>
          </div>
          <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-white transition-colors" />
        </div>
      </div>

      <div className="bg-brand-bg border border-white/5 rounded-xl p-4 flex items-center justify-between group hover:border-brand-primary/30 transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg">
            N
          </div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-brand-primary transition-colors">New Collaboration Project</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-4 rounded-full bg-gray-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-brand-tertiary">with Ewan Mcvicar</span>
            </div>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-brand-muted" />
      </div>
    </div>
  </div>
);

const WorkspaceMockup = () => (
  <div className="w-full bg-brand-card border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
    <div className="flex-1 p-6">
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-xl font-bold text-white">Piano House EP</h3>
      </div>
      <div className="flex items-center gap-4 mb-6 text-xs text-brand-tertiary">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Started 13/12/2025</span>
        <span className="flex items-center gap-1 text-brand-lime"><Users className="w-3 h-3" /> 1/2 online</span>
      </div>

      <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-3 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Settings className="w-4 h-4 text-brand-primary" />
          <div>
            <p className="text-brand-primary text-xs font-bold">Ownership Setup</p>
            <p className="text-brand-primary/60 text-[10px]">Define splits before publishing</p>
          </div>
        </div>
        <button className="px-3 py-1 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white text-xs font-bold rounded transition-colors">
          Manage
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: 'Upload', icon: Upload, color: 'from-brand-primary to-brand-secondary' },
          { label: 'Record', icon: Mic, color: 'from-blue-600 to-indigo-600' },
          { label: 'AI', icon: Sparkles, color: 'from-indigo-600 to-brand-secondary' },
          { label: 'Notes', icon: FileText, color: 'from-cyan-600 to-blue-600' },
          { label: 'Tasks', icon: ListTodo, color: 'from-brand-lime to-green-600' },
          { label: 'Inspo', icon: LinkIcon, color: 'from-slate-600 to-slate-800' },
        ].map((item) => (
          <div key={item.label} className={`bg-gradient-to-br ${item.color} p-3 rounded-lg flex flex-col items-start gap-2 group hover:scale-[1.02] cursor-pointer transition-all shadow-lg`}>
            <item.icon className="w-5 h-5 text-white opacity-80 group-hover:opacity-100" />
            <span className="text-xs font-bold text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-white/10 bg-brand-bg p-4">
      <div className="mb-6">
        <h4 className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-3">Team (2)</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-lime border-2 border-brand-bg" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Patrick Topping</p>
              <p className="text-[10px] text-brand-primary">Producer</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-3">Stats</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px]">
            <span className="text-brand-tertiary">Progress</span>
            <span className="text-brand-lime font-bold">40%</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1">
            <div className="bg-brand-lime h-full w-[40%]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIMockup = () => (
  <div className="w-full bg-brand-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
    <div className="p-4 border-b border-white/5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Bot className="w-5 h-5 text-brand-primary" />
        <h3 className="text-white font-bold">AI Music Assistant</h3>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <div className="bg-brand-bg border border-white/10 rounded-xl p-4 hover:border-brand-primary transition-colors">
        <div className="flex justify-between items-center mb-4">
           <div className="flex items-center gap-2">
             <Wand2 className="w-4 h-4 text-brand-primary" />
             <h4 className="font-bold text-white">Track Idea Gen</h4>
           </div>
           <span className="text-[10px] text-brand-muted">1/5 used</span>
        </div>
        <div className="bg-brand-card border border-white/5 rounded-lg p-3 mb-4 text-xs text-brand-tertiary">
           Enter a concept, mood, or inspiration...
        </div>
        <Button className="w-full h-10 text-sm">
           <Sparkles className="w-4 h-4 mr-2" /> Generate
        </Button>
      </div>

       <div className="bg-brand-bg border border-white/10 rounded-xl p-4 hover:border-brand-secondary transition-colors">
        <div className="flex justify-between items-center mb-4">
           <div className="flex items-center gap-2">
             <PenTool className="w-4 h-4 text-brand-secondary" />
             <h4 className="font-bold text-white">Lyric Generator</h4>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
           <div className="bg-brand-card rounded-lg px-3 py-2 text-[10px] text-brand-tertiary flex justify-between items-center border border-white/5">
             Genre <ChevronDown className="w-3 h-3" />
           </div>
           <div className="bg-brand-card rounded-lg px-3 py-2 text-[10px] text-brand-tertiary flex justify-between items-center border border-white/5">
             Mood <ChevronDown className="w-3 h-3" />
           </div>
        </div>
        <Button className="w-full h-10 text-sm bg-brand-secondary border-none">
           <Sparkles className="w-4 h-4 mr-2" /> Generate Lyrics
        </Button>
      </div>
    </div>
  </div>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-elevated/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 space-y-32">
        
        {/* Feature 1: Swipe Matching */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <Reveal width="100%">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-left">
                Smart Matching <br />
                <span className="text-gradient">Streamlined.</span>
              </h2>
              <p className="text-brand-tertiary text-lg leading-relaxed mb-6">
                Stop wasting time in forums. Our algorithm analyzes your genre tags and musical style to recommend collaborators who fit your sound perfectly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-brand-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  Match based on genre overlap and proximity
                </li>
                <li className="flex items-center gap-3 text-brand-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  Listen to audio snippets directly on the card
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="flex-1 w-full">
            <Reveal width="100%" direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full -z-10" />
                <SwipeMockup />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature 2: Active Projects */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-right">
             <Reveal width="100%">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6 border border-brand-secondary/20 ml-auto">
                <ListTodo className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Seamless <br />
                <span className="text-gradient">Project Management</span>
              </h2>
              <p className="text-brand-tertiary text-lg leading-relaxed mb-6">
                Keep all your collaborations organized in one place. View status updates, manage open calls, and never lose track of a demo again.
              </p>
            </Reveal>
          </div>
          <div className="flex-1 w-full">
            <Reveal width="100%" direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-secondary/10 blur-3xl rounded-full -z-10" />
                <ProjectsMockup />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature 3: Workspace */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
             <Reveal width="100%">
              <div className="w-12 h-12 rounded-2xl bg-brand-lime/10 flex items-center justify-center text-brand-lime mb-6 border border-brand-lime/20">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-left">
                Dedicated <br />
                <span className="text-gradient">Workspaces</span>
              </h2>
              <p className="text-brand-tertiary text-lg leading-relaxed mb-6">
                Every project gets its own room. Chat with your team, share large stems, and manage split sheets all without leaving the page.
              </p>
            </Reveal>
          </div>
          <div className="flex-1 w-full">
            <Reveal width="100%" direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-lime/5 blur-3xl rounded-full -z-10" />
                <WorkspaceMockup />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature 4: AI Tools */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-right">
            <Reveal width="100%">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20 ml-auto">
                <Bot className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Creative <br />
                <span className="text-gradient">AI Co-pilot</span>
              </h2>
              <p className="text-brand-tertiary text-lg leading-relaxed mb-6">
                Stuck on a lyric? Need a chord progression idea? Our built-in AI assistant is trained on music theory to give you instant inspiration.
              </p>
            </Reveal>
          </div>
          <div className="flex-1 w-full">
            <Reveal width="100%" direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full -z-10" />
                <AIMockup />
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};