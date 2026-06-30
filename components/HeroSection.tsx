'use client';

import { Code2, Briefcase, Award, GraduationCap } from 'lucide-react';

export function HeroSection() {
  const metrics = [
    { icon: Code2, label: 'Projects', value: '4+' },
    { icon: Briefcase, label: 'Internships', value: '3' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: GraduationCap, label: 'CGPA', value: '8.5' },
  ];

  return (
    <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Profile Section */}
      <div className="md:col-span-1 flex flex-col items-center">
        <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center mb-6 overflow-hidden">
          <div className="text-6xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">VR</div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center">Vanshika Raghav</h1>
        <p className="text-violet-400 font-semibold mt-2 text-center">Python & Web Developer</p>
        <p className="text-slate-400 text-sm mt-1 text-center">Computer Science Engineering Student</p>
      </div>

      {/* Metrics Grid */}
      <div className="md:col-span-2 grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4 hover:border-violet-400/50 transition">
              <div className="flex items-center gap-3 mb-2">
                <Icon size={18} className="text-violet-400" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{metric.label}</span>
              </div>
              <p className="text-3xl font-bold text-white">{metric.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
