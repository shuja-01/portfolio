'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check, Play } from 'lucide-react';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export default function TerminalDeck() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">MOHD SHUJA RIZVI // TERMINAL SYSTEM v2.6.0</p>
          <p className="text-xs text-slate-400">
            Type <span className="text-amber-300 font-bold">&apos;help&apos;</span> or click quick command buttons below to query interactive profile data.
          </p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let resNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-400">about</span> - Executive background & degree</p>
            <p><span className="text-emerald-400">experience</span> - Capgemini, Torn & Stitched, Newgen history</p>
            <p><span className="text-emerald-400">skills</span> - API Testing, AI/LLMs, Automation stack</p>
            <p><span className="text-emerald-400">certifications</span> - Professional certs & publications</p>
            <p><span className="text-emerald-400">linkedin</span> - Direct LinkedIn link & profile info</p>
            <p><span className="text-emerald-400">contact</span> - Email & contact credentials</p>
            <p><span className="text-emerald-400">cat resume</span> - Resume status & download details</p>
            <p><span className="text-emerald-400">clear</span> - Reset terminal history</p>
          </div>
        );
        break;

      case 'about':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">Mohd Shuja Rizvi</p>
            <p>Role: Process Automation Engineer @ Capgemini (Malaysia)</p>
            <p>Degree: B.Tech in Electrical Engineering (GCET)</p>
            <p>Specialization: Enterprise Process Automation, REST API Testing, JWT Security, AI/LLM Workflows.</p>
          </div>
        );
        break;

      case 'experience':
        resNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">CAREER HISTORY:</p>
            <p>1. <span className="text-amber-300 font-bold">Capgemini</span> (2025-Present) - Process Automation Engineer (Kuala Lumpur)</p>
            <p>2. <span className="text-amber-300 font-bold">Torn & Stitched</span> (2024-2025) - Technology Lead (Shopify & Selenium)</p>
            <p>3. <span className="text-amber-300 font-bold">Newgen Software</span> (2023-2024) - Application Engineer (Java, MsSQL, Middle East clients)</p>
          </div>
        );
        break;

      case 'skills':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">TECHNICAL STACK:</p>
            <p><span className="text-emerald-400">Automation:</span> Tosca, Selenium, Appium, REST Assured, API Testing</p>
            <p><span className="text-emerald-400">Languages:</span> TypeScript, Java, JavaScript, Python, Liquid, SQL</p>
            <p><span className="text-emerald-400">AI & Security:</span> AI/LLM Workflows, JWT, Encryption Implementations</p>
            <p><span className="text-emerald-400">Analytics:</span> Power BI, FP&A, Excel Financial Modeling</p>
          </div>
        );
        break;

      case 'certifications':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">CERTIFICATIONS & RESEARCH:</p>
            <p>• Automation Specialist Level 2</p>
            <p>• REST API Automation Using REST Assured</p>
            <p>• Data Analysts Toolbox: Excel, Python, Power BI, PivotTables</p>
            <p>• Excel for Financial Planning and Analysis (FP&A)</p>
            <p>• Publication: &quot;Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</p>
          </div>
        );
        break;

      case 'linkedin':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">LINKEDIN PROFILE:</p>
            <p className="text-cyan-300 underline">https://www.linkedin.com/in/mshuja-rizvi/</p>
          </div>
        );
        break;

      case 'contact':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">CONTACT INFO:</p>
            <p>Email: <span className="text-emerald-400">mshuja.rizvi@gmail.com</span></p>
            <p>LinkedIn: https://www.linkedin.com/in/mshuja-rizvi/</p>
            <p>GitHub: https://github.com/shuja-01</p>
            <p>Location: Kuala Lumpur, Malaysia</p>
          </div>
        );
        break;

      case 'cat resume':
      case 'cat profile.pdf':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">PROFILE.PDF STATUS: AVAILABLE</p>
            <p>File path: /public/Profile.pdf</p>
            <p>Click &quot;Resume PDF&quot; in navigation bar or Hero section to open built-in reader modal.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        resNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: &apos;{cleanCmd}&apos;. Type <span className="text-amber-300 font-bold">&apos;help&apos;</span> for commands list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, response: resNode }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const presetCmds = ['help', 'about', 'skills', 'experience', 'certifications', 'linkedin', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developer <span className="gradient-text-edgy">Command Deck</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            An edgy, interactive terminal environment to explore Shuja&apos;s resume, skills, and certifications directly.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-panel rounded-2xl border border-slate-800 shadow-2xl overflow-hidden bg-[#07090e]">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2">shuja@capgemini:~$ bash</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                LIVE INTERACTION
              </span>
            </div>
          </div>

          {/* Terminal Body Screen */}
          <div className="p-5 font-mono text-sm space-y-4 max-h-96 overflow-y-auto bg-[#07090e]/95 scrollbar-thin">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
                    <span>shuja@capgemini:~$</span>
                    <span className="text-slate-100">{item.command}</span>
                  </div>
                )}
                <div className="pl-2 border-l-2 border-slate-800">{item.response}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleSubmit} className="border-t border-slate-800 p-3 bg-slate-900/40 flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 font-bold shrink-0">shuja@capgemini:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'skills', 'experience'..."
              className="w-full bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-all shrink-0"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Command Buttons */}
          <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            <span className="text-slate-500 mr-1">Quick Run:</span>
            {presetCmds.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
