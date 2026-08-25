'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, Terminal } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const email = 'mshuja.rizvi@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 shadow-sm font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CONNECT &amp; COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
            Let&apos;s Build <span className="gradient-text-cobalt">High-Impact Systems</span> Together
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Whether you&apos;re looking to architect frontend web applications, scale process automation, or discuss technical engineering opportunities—get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Card (Cols 1-5) */}
          <div className="lg:col-span-5 editorial-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-8 bg-white dark:bg-[#111726] shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider block font-semibold">
                // DIRECTORY &amp; COORDINATES
              </span>
              <h3 className="text-2xl font-heading font-bold text-slate-950 dark:text-white">Mohd Shuja Rizvi</h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Process Automation &amp; Frontend Engineer at Capgemini Malaysia. Open to technical engineering dialogues, frontend consulting, and high-leverage roles.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Copyable Email Card */}
              <div className="editorial-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">PRIMARY EMAIL</span>
                    <span className="text-xs font-mono text-slate-900 dark:text-slate-100 truncate block font-semibold">{email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-all shrink-0 relative shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-blue-500/40 transition-all group bg-slate-50 dark:bg-slate-900 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-400 transition-all shadow-sm">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">LINKEDIN NETWORK</span>
                    <span className="text-xs font-mono text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-semibold">
                      linkedin.com/in/mshuja-rizvi
                    </span>
                  </div>
                </div>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-mono group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/shuja-01"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-slate-400 dark:hover:border-slate-600 transition-all group bg-slate-50 dark:bg-slate-900 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-all shadow-sm">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">GITHUB REPOSITORIES</span>
                    <span className="text-xs font-mono text-slate-900 dark:text-slate-100 font-semibold">github.com/shuja-01</span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-400 pt-2 px-1 font-medium">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Base: Federal Territory of Kuala Lumpur, Malaysia</span>
              </div>

            </div>
          </div>

          {/* Direct Message Form (Cols 6-12) */}
          <div className="lg:col-span-7 editorial-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111726] shadow-xl">
            <h3 className="text-xl font-heading font-bold text-slate-950 dark:text-white mb-2">Send a Direct Inquiry</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 font-normal">
              Transmit your message directly for technical collaborations, engineering inquiries, or career discussions.
            </p>

            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-emerald-800 dark:text-emerald-300 font-heading font-bold text-base">Inquiry Successfully Transmitted</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-normal">
                  Thank you for reaching out. Shuja will review your note and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your engineering requirement, architecture, or project opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white dark:text-slate-950 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
