'use client';

import { profileData, skills, experience } from '@/lib/portfolioData';
import { Brain, BarChart3, Bot, Code2, Lightbulb, Sparkles } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { InternshipHighlights } from './InternshipHighlights';

export function AboutPage() {
  const areasOfInterest = [
    { title: 'Artificial Intelligence', icon: Sparkles },
    { title: 'Full Stack Development', icon: Code2 },
    { title: 'Python Development', icon: Bot },
    { title: 'Data Analytics', icon: BarChart3 },
    { title: 'Problem Solving', icon: Lightbulb },
    { title: 'Automation Tools', icon: Brain },
  ];

  return (
    <div className="space-y-8">
      <HeroSection />

      <InternshipHighlights />

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h3 className="text-lg font-semibold text-white">Areas of Interest</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {areasOfInterest.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4 transition hover:border-violet-400/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-violet-400/20 bg-violet-500/10 p-2 text-violet-300">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{area.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section - Compact */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h3 className="text-lg font-semibold text-white">About</h3>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm">{profileData.about}</p>
      </section>

      {/* Education - Compact */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h3 className="text-lg font-semibold text-white">Education</h3>
        </div>
        <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4">
          <h4 className="font-semibold text-white text-sm">{profileData.education.degree}</h4>
          <p className="text-xs text-violet-400 mt-1">{profileData.education.institution}</p>
          <div className="flex items-center justify-between mt-3 text-xs">
            <span className="text-slate-400">{profileData.education.duration}</span>
            <span className="text-violet-300 font-semibold">CGPA: {profileData.education.cgpa}</span>
          </div>
        </div>
      </section>

      {/* Skills - Grid Layout */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h3 className="text-lg font-semibold text-white">Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h4 className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-900/50 border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ResumePage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-3">
          {experience.map((job, index) => (
            <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h4 className="font-semibold text-white text-sm">{job.title}</h4>
                  <p className="text-xs text-violet-400 font-medium">{job.company}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{job.duration}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{job.description}</p>
              <div className="flex flex-wrap gap-1">
                {job.highlights.map((highlight) => (
                  <span key={highlight} className="inline-block rounded-full bg-violet-500/10 border border-violet-400/30 px-2 py-0.5 text-xs text-violet-300">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4">
              <h4 className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wide">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-900/50 border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
