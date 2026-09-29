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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] shadow-sm font-semibold">
            <Mail className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>DIRECT CONNECT &amp; COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Let&apos;s Build <span className="gradient-text-cyber">High-Impact Systems</span> Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Whether you&apos;re looking to architect frontend web applications, scale process automation, or discuss technical engineering opportunities—get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Card (Cols 1-5) */}
          <div className="lg:col-span-5 editorial-card p-8 rounded-3xl border border-[#00f5ff]/20 space-y-8 bg-[#080e1c]/85 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider block font-semibold">
                // DIRECTORY &amp; COORDINATES
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">Mohd Shuja Rizvi</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Process Automation &amp; Frontend Engineer at Capgemini Malaysia. Open to technical engineering dialogues, frontend consulting, and high-leverage roles.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Copyable Email Card */}
              <div className="editorial-card p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 bg-slate-900/90">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#00f5ff] shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-[#00f5ff]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">PRIMARY EMAIL</span>
                    <span className="text-xs font-mono text-white truncate block font-semibold">{email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition-all shrink-0 relative shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#00ff9d] font-bold" /> : <Copy className="w-4 h-4 text-[#00f5ff]" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 hover:border-[#00f5ff]/50 transition-all group bg-slate-900/90 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#00f5ff] group-hover:border-[#00f5ff]/50 transition-all shadow-sm">
                    <LinkedinIcon className="w-4 h-4 text-[#00f5ff]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">LINKEDIN NETWORK</span>
                    <span className="text-xs font-mono text-white group-hover:text-[#00f5ff] transition-colors font-semibold">
                      linkedin.com/in/mshuja-rizvi
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#00f5ff] font-mono group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/shuja-01"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 hover:border-[#00f5ff]/50 transition-all group bg-slate-900/90 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:text-white transition-all shadow-sm">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">GITHUB REPOSITORIES</span>
                    <span className="text-xs font-mono text-white group-hover:text-[#00f5ff] transition-colors font-semibold">github.com/shuja-01</span>
                  </div>
                </div>
                <span className="text-xs text-[#00f5ff] font-mono group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 px-1 font-medium">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Base: Federal Territory of Kuala Lumpur, Malaysia</span>
              </div>

            </div>
          </div>

          {/* Direct Message Form (Cols 6-12) */}
          <div className="lg:col-span-7 editorial-card p-8 sm:p-10 rounded-3xl border border-[#00f5ff]/20 bg-[#080e1c]/85 shadow-xl">
            <h3 className="text-xl font-heading font-bold text-white mb-2">Send a Direct Inquiry</h3>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              Transmit your message directly for technical collaborations, engineering inquiries, or career discussions.
            </p>

            {sent ? (
              <div className="p-8 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/40 text-center space-y-3 animate-in fade-in duration-300">
                <Sparkles className="w-8 h-8 text-[#00ff9d] mx-auto" />
                <h4 className="text-[#00ff9d] font-heading font-bold text-base">Inquiry Successfully Transmitted</h4>
                <p className="text-xs text-slate-300 font-normal">
                  Thank you for reaching out. Shuja will review your note and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00f5ff] font-mono transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00f5ff] font-mono transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-semibold">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your engineering requirement, architecture, or project opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00f5ff] font-mono transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-[#00f5ff] hover:bg-[#00e1eb] shadow-md shadow-[#00f5ff]/25 transition-all hover:scale-[1.01]"
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
