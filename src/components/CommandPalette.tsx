'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  User,
  Briefcase,
  Cpu,
  Terminal,
  BookOpen,
  Mail,
  Copy,
  Check,
  CornerDownLeft,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectAccent?: (accent: 'cyan' | 'emerald' | 'violet' | 'amber') => void;
  currentAccent?: string;
  themeMode?: string;
  onToggleTheme?: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Actions';
  title: string;
  subtitle?: string;
  icon: any;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('mshuja.rizvi@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About & Executive Architecture',
      subtitle: 'Career background, Capgemini consulting & GCET degree',
      icon: User,
      action: () => scrollToSection('about'),
      shortcut: 'G A',
    },
    {
      id: 'nav-experience',
      category: 'Navigation',
      title: 'Career Chronology & Milestones',
      subtitle: 'Capgemini, Torn & Stitched, Newgen Software timeline',
      icon: Briefcase,
      action: () => scrollToSection('journey'),
      shortcut: 'G E',
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'Technical Capabilities & Stack Matrix',
      subtitle: 'React 19, TypeScript, Tosca L2, REST Assured, Claude Code',
      icon: Cpu,
      action: () => scrollToSection('skills'),
      shortcut: 'G S',
    },
    {
      id: 'nav-terminal',
      category: 'Navigation',
      title: 'Interactive Test Sandbox & Code CLI',
      subtitle: 'Execute live automated test suites and CLI queries',
      icon: Terminal,
      action: () => scrollToSection('projects'),
      shortcut: 'G P',
    },
    {
      id: 'nav-publications',
      category: 'Navigation',
      title: 'Peer Research & Certifications',
      subtitle: 'IEEE Deep learning paper & Tricentis Tosca accreditations',
      icon: BookOpen,
      action: () => scrollToSection('publications'),
      shortcut: 'G R',
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Direct Connect & Inquiry',
      subtitle: 'Email, LinkedIn, location and collaboration form',
      icon: Mail,
      action: () => scrollToSection('contact'),
      shortcut: 'G C',
    },

    // Actions
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'View Profile / Resume PDF',
      subtitle: 'Open integrated interactive document viewer',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
      shortcut: '⌘ R',
    },
    {
      id: 'act-copy-email',
      category: 'Actions',
      title: copied ? 'Email Copied!' : 'Copy Email Address',
      subtitle: 'mshuja.rizvi@gmail.com',
      icon: copied ? Check : Copy,
      action: copyEmail,
    },
    {
      id: 'act-linkedin',
      category: 'Actions',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/mshuja-rizvi (Opens new tab)',
      icon: LinkedinIcon,
      action: () => {
        window.open('https://www.linkedin.com/in/mshuja-rizvi/', '_blank');
        onClose();
      },
    },
    {
      id: 'act-github',
      category: 'Actions',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/shuja-01 (Opens new tab)',
      icon: GithubIcon,
      action: () => {
        window.open('https://github.com/shuja-01', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl editorial-card rounded-2xl border border-slate-700/80 bg-[#070c14] shadow-2xl shadow-black/80 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800/90 gap-3 bg-slate-900/60">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, section, or action..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 transition-all text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Command List Results */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-slate-800/90 border border-blue-500/30 text-white shadow-sm'
                      : 'hover:bg-slate-900/70 border border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      <cmd.icon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-100 truncate">{cmd.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-950/80 text-slate-400 border border-slate-800">
                          {cmd.category}
                        </span>
                      </div>
                      {cmd.subtitle && (
                        <p className="text-[11px] text-slate-400 truncate mt-0.5 font-mono">{cmd.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {cmd.shortcut && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {cmd.shortcut}
                      </span>
                    )}
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-blue-400" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to dismiss</span>
          </div>
          <span className="text-blue-400 font-semibold">COMMAND PALETTE</span>
        </div>
      </div>
    </div>
  );
}
