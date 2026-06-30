'use client';

import { projects } from '@/lib/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsPage() {
  const visibleProjects = projects.slice(0, 8);

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Projects Showcase</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-700/50 bg-slate-900/30 overflow-hidden hover:border-violet-400/50 transition"
          >
            {/* Project Image Placeholder */}
            <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-violet-500 to-cyan-500" />
              <div className="text-center relative z-10">
                <div className="text-3xl font-bold text-slate-700 group-hover:text-slate-600 transition">{project.id}</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1 line-clamp-1 group-hover:text-violet-300 transition">{project.title}</h3>
              <p className="text-xs text-slate-400 mb-3 line-clamp-2">{project.description}</p>

              {/* Tech Stack - Compact */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-900/50 border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="rounded-full bg-slate-900/50 border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Link */}
              <div className="flex items-center gap-1 text-sm text-violet-400 group-hover:text-violet-300 transition">
                <Github size={14} />
                <span>View Code</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex justify-start">
        <a
          href="https://github.com/DashCodeMaster?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
        >
          <Github size={16} />
          Explore More on GitHub
        </a>
      </div>
    </div>
  );
}
