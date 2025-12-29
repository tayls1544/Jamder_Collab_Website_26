import React from 'react';
import { Music, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-1.5 rounded-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Jamder</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering musicians to connect, collaborate, and create worldwide. The stage is yours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-pink transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-pink transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Copyright</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jamder Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};