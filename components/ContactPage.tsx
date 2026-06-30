'use client';

import { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { profileData } from '@/lib/portfolioData';
import { sendContactEmail } from '@/lib/emailService';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!formState.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formState.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      setStatusMessage('Please fill in the required fields correctly.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    const result = await sendContactEmail({
      name: formState.name.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
    });

    if (result.success) {
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully.');
      setFormState({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setStatus('error');
      setStatusMessage(result.error || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        </div>
        <p className="text-slate-300 text-sm mb-6">I'm always interested in hearing about new projects and internship opportunities.</p>

        {/* Contact Cards - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <a href={`mailto:${profileData.email}`} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4 hover:border-violet-400/50 transition group">
            <Mail size={18} className="text-violet-400 mb-2 group-hover:text-violet-300 transition" />
            <p className="text-xs text-slate-400 mb-1">Email</p>
            <p className="text-sm text-white font-medium truncate">{profileData.email}</p>
          </a>

          <a href={`tel:${profileData.phone}`} className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4 hover:border-violet-400/50 transition group">
            <Phone size={18} className="text-violet-400 mb-2 group-hover:text-violet-300 transition" />
            <p className="text-xs text-slate-400 mb-1">Phone</p>
            <p className="text-sm text-white font-medium">{profileData.phone}</p>
          </a>

          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4">
            <MapPin size={18} className="text-violet-400 mb-2" />
            <p className="text-xs text-slate-400 mb-1">Location</p>
            <p className="text-sm text-white font-medium">{profileData.location}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-8">
          <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition">
            <Github size={16} />
            GitHub
          </a>
          <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h3 className="text-lg font-semibold text-white mb-4">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) => {
                setFormState({ ...formState, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className="w-full rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-400/20 transition"
            />
            {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className="w-full rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-400/20 transition"
            />
            {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder="Your message..."
              rows={4}
              value={formState.message}
              onChange={(e) => {
                setFormState({ ...formState, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              className="w-full rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-400/20 transition resize-none"
            />
            {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
          </div>

          {statusMessage && (
            <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-violet-500 px-5 py-2 text-sm font-medium text-white hover:bg-violet-600 transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>
        </form>
      </section>
    </div>
  );
}
