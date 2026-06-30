'use client';

import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/portfolioData';

export function InternshipHighlights() {
  const highlights = experience.slice(0, 3); // Get top 3 internships

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
        <h2 className="text-xl font-semibold text-white">Internship Highlights</h2>
      </div>
      <div className="space-y-3">
        {highlights.map((job, index) => (
          <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4 hover:border-slate-600 transition">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Briefcase size={16} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h4 className="font-semibold text-white truncate">{job.title}</h4>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{job.duration}</span>
                </div>
                <p className="text-sm text-violet-400 font-medium mb-2">{job.company}</p>
                <p className="text-xs text-slate-300 line-clamp-2 mb-2">{job.description}</p>
                <div className="flex flex-wrap gap-1">
                  {job.highlights.slice(0, 2).map((highlight) => (
                    <span key={highlight} className="inline-block rounded-full bg-violet-500/10 border border-violet-400/30 px-2 py-0.5 text-xs text-violet-300">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
