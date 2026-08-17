'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build <span className="gradient-text-edgy">Intelligent Systems</span> Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you&apos;re looking to scale enterprise process automation, implement AI/LLM testing workflows, or discuss technical opportunities—reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                // CONTACT DIRECTORY
              </span>
              <h3 className="text-2xl font-bold text-white">Mohd Shuja Rizvi</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Process Automation Engineer @ Capgemini. Open to technical collaborations, AI automation discussions, and process engineering innovations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Copyable Email Badge */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 block">PRIMARY EMAIL</span>
                    <span className="text-xs font-mono text-slate-200 truncate block">{email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">LINKEDIN PROFILE</span>
                    <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/mshuja-rizvi
                    </span>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/shuja-01"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">GITHUB REPOSITORY</span>
                    <span className="text-xs font-mono text-slate-200">github.com/shuja-01</span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 px-1">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Base: Federal Territory of Kuala Lumpur, Malaysia</span>
              </div>

            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/60">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Drop your inquiry below to trigger a direct email notification.
            </p>

            {sent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in duration-300">
                <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-emerald-300 font-bold text-sm">Message Transmitted!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Shuja will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500/60 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500/60 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">Message Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, automation goals, or opportunities..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500/60 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
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
