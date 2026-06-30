'use client';

import { certifications } from '@/lib/portfolioData';

export function CertificationsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Certifications & Achievements</h2>
      </div>
      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-3 hover:border-slate-600 transition">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                <p className="text-xs text-violet-400 mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-slate-300 mt-1">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
