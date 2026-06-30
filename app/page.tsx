'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { AboutPage } from '@/components/Pages';
import { ResumePage } from '@/components/Pages';
import { ProjectsPage } from '@/components/ProjectsPage';
import { CertificationsPage } from '@/components/CertificationsPage';
import { ContactPage } from '@/components/ContactPage';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'about' | 'resume' | 'projects' | 'certifications' | 'contact'>('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'resume':
        return <ResumePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
