'use client';

import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '@/lib/portfolioData';

interface SidebarProps {
  activeTab: 'about' | 'resume' | 'projects' | 'certifications' | 'contact';
  onTabChange: (tab: 'about' | 'resume' | 'projects' | 'certifications' | 'contact') => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 overflow-y-auto border-r border-slate-700/50 bg-slate-950/80 backdrop-blur-xl p-8">
      {/* Profile Section */}
      <div className="mb-8 text-center">
        <div className="mb-6 mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center">
          <div className="text-4xl font-bold text-violet-400">VR</div>
        </div>
        <h1 className="text-xl font-semibold text-white">{profileData.name}</h1>
        <p className="mt-1 text-sm text-slate-400">{profileData.title}</p>
        <p className="text-xs text-slate-500">{profileData.subtitle}</p>
      </div>

      {/* Contact Info */}
      <div className="mb-8 space-y-3 border-t border-slate-700/50 pt-8">
        <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition">
          <Mail size={16} className="text-slate-500" />
          <span className="truncate">{profileData.email}</span>
        </a>
        <a href={`tel:${profileData.phone}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition">
          <Phone size={16} className="text-slate-500" />
          <span>{profileData.phone}</span>
        </a>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <MapPin size={16} className="text-slate-500" />
          <span>{profileData.location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8 flex justify-center gap-4 border-b border-slate-700/50 pb-8">
        <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-violet-400 hover:text-violet-400 transition">
          <Github size={18} />
        </a>
        <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition">
          <Linkedin size={18} />
        </a>
      </div>

      {/* Navigation Tabs */}
      <nav className="space-y-2">
        {(['about', 'resume', 'projects', 'certifications', 'contact'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
              activeTab === tab
                ? 'bg-violet-500/20 text-white border border-violet-400/30'
                : 'text-slate-300 hover:bg-slate-900/50'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Download Resume */}
      <div className="mt-12 border-t border-slate-700/50 pt-8">
        <a href="/resume.pdf" download className="block w-full rounded-lg bg-violet-500/20 border border-violet-400/30 px-4 py-3 text-center text-sm font-medium text-violet-300 hover:bg-violet-500/30 transition">
          Download Resume
        </a>
      </div>
    </aside>
  );
}
