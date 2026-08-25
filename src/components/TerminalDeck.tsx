'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Sparkles,
  Code2,
  Layout,
  Cpu,
  ShieldCheck,
  Bot,
  Check,
  Play,
  RotateCcw,
  CheckCircle2,
  Activity,
  Layers,
} from 'lucide-react';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  role: string;
  category: 'Frontend Engineering' | 'Backend & Security' | 'AI & Automation' | 'Enterprise Automation';
  icon: any;
  tags: string[];
  description: string;
  impact: string;
  codeSnippet: string;
  simulationLogs: string[];
}

interface TerminalDeckProps {
  themeMode?: 'light' | 'dark';
}

export default function TerminalDeck({ themeMode }: TerminalDeckProps) {
  const [activeDeckMode, setActiveDeckMode] = useState<'sandbox' | 'cli'>('sandbox');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('api-security');
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [simDone, setSimDone] = useState(false);

  // CLI State
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1.5 text-slate-300">
          <p className="text-blue-400 font-bold">MOHD SHUJA RIZVI // TERMINAL TELEMETRY v4.0.0</p>
          <p className="text-xs text-slate-400">
            Type <span className="text-blue-300 font-bold">&apos;help&apos;</span> or click preset commands below to query interactive engineering records.
          </p>
        </div>
      ),
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeDeckMode === 'cli') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeDeckMode]);

  const projects: Project[] = [
    {
      id: 'api-security',
      title: 'REST API & Security Automation Suite',
      role: 'Consultant @ Capgemini',
      category: 'Backend & Security',
      icon: ShieldCheck,
      tags: ['REST Assured', 'Java', 'JWT Auth', 'Postman', 'Payload Encryption'],
      description:
        'Engineered Java REST Assured automated test scripts verifying HTTP headers, JWT bearer authentication, encrypted token expirations, and JSON schema assertions.',
      impact: 'Zero security vulnerabilities or regression defects across enterprise client release cycles.',
      codeSnippet: `@Test
public void validateJWTAccessToken() {
  given().header("Authorization", "Bearer " + jwtToken)
         .contentType(ContentType.JSON)
         .when().get("/api/v1/user/credentials")
         .then().statusCode(200)
         .body("status", equalTo("VERIFIED"))
         .body("encryption", equalTo("AES_256"));
}`,
      simulationLogs: [
        'INITIALIZING: Test runner daemon (REST Assured v5.4.0)...',
        'AUTH: Generating 256-bit RSA JWT Bearer token [exp: 3600s]... OK',
        'DISPATCH: GET /api/v1/user/credentials (Headers: Authorization, X-Request-ID: #89421)...',
        'RESPONSE: HTTP/1.1 200 OK (Latency: 38ms, Size: 1.4KB)...',
        'ASSERT: body("status") == "VERIFIED" [PASS]',
        'ASSERT: body("encryption") == "AES_256" [PASS]',
        'EXECUTION COMPLETE: 2/2 Assertions passed in 142ms. Zero defects detected.',
      ],
    },
    {
      id: 'tosca-automation',
      title: 'Tosca & Selenium End-to-End Regression Deck',
      role: 'Automation Specialist @ Capgemini',
      category: 'Enterprise Automation',
      icon: Cpu,
      tags: ['Tosca L2', 'Selenium', 'Appium', 'Data-Driven', 'CI/CD'],
      description:
        'Architected data-driven regression decks covering multi-tier web and mobile business workflows with automated reporting and Tricentis Tosca L2 integration.',
      impact: 'Reduced manual test execution time from 14 hours down to 25 minutes per release build.',
      codeSnippet: `// Selenium Webdriver TS Page Object Model
export class CheckoutPipeline {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }
  async completeOrder() {
    await this.page.click('#submit-order-btn');
    await expect(this.page.locator('.order-status')).toHaveText('CONFIRMED');
  }
}`,
      simulationLogs: [
        'INITIALIZING: Tricentis Tosca Automation Specialist Engine...',
        'DATA LOAD: Ingesting data-driven CSV matrix (50 unique scenario variants)...',
        'BROWSER: Launching headless Chromium worker thread #1 & #2...',
        'FLOW: Navigating to client checkout funnel -> injecting valid payment payload...',
        'ASSERT: Confirmation DOM element resolved (.order-status == "CONFIRMED")... [PASS]',
        'METRIC: Flow executed with 0 UI mismatches across desktop/mobile viewport.',
        'EXECUTION COMPLETE: 50/50 Scenarios verified in 312ms.',
      ],
    },
    {
      id: 'ai-pipeline',
      title: 'Claude Code & AI Agent Extraction Pipeline',
      role: 'Process & AI Engineer @ Capgemini',
      category: 'AI & Automation',
      icon: Bot,
      tags: ['Claude Code', 'AI Agents', 'Prompt Engineering', 'REST APIs'],
      description:
        'Integrated Claude Code CLI and LLM agentic workflows to automatically parse unstructured enterprise documents into standardized JSON payloads for automated processing.',
      impact: 'Eliminated manual document triage, cutting processing turnaround time by 75%.',
      codeSnippet: `async function extractDocumentData(rawText: string) {
  const agentResponse = await claudeClient.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: "Extract strict JSON schema: { invoiceId, total, items, tax }.",
    messages: [{ role: "user", content: rawText }]
  });
  return JSON.parse(agentResponse.content[0].text);
}`,
      simulationLogs: [
        'INITIALIZING: Claude Agent Orchestration Engine (Claude 3.5 Sonnet)...',
        'INGEST: Receiving unstructured multi-page enterprise invoice PDF...',
        'PROMPT: Sending system instructions with strict JSON response schema...',
        'COMPLETION: Token usage: 412 prompt + 128 completion tokens...',
        'VALIDATE: Schema check: { invoiceId: "INV-9821", total: 4500.00, verified: true }... [PASS]',
        'INTEGRATION: Payload dispatched to downstream ERP webhook in 280ms.',
        'EXECUTION COMPLETE: Autonomous extraction succeeded.',
      ],
    },
    {
      id: 'shopify-frontend',
      title: 'Shopify Storefront & Liquid Frontend Engine',
      role: 'Tech Lead @ Torn & Stitched',
      category: 'Frontend Engineering',
      icon: Layout,
      tags: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind CSS', 'Web Vitals'],
      description:
        'Architected custom Liquid templates, responsive storefront UI components, speed optimization, and automated end-to-end regression testing pipelines.',
      impact: 'Boosted store conversion rate, achieved 90+ Lighthouse score across mobile/desktop.',
      codeSnippet: `// Custom Liquid snippet & Cart Drawer JS handler
document.addEventListener('DOMContentLoaded', () => {
  const quickCart = new ModernCartDrawer({
    checkoutUrl: '/checkout',
    optimisticUI: true,
    analyticsTracking: true
  });
  quickCart.init();
});`,
      simulationLogs: [
        'INITIALIZING: Liquid Template Compiler & DOM Hydration...',
        'BUNDLE: Compiling Tailwind CSS & modern JS modules (Size: 18.2KB gzipped)...',
        'LIGHTHOUSE AUDIT: Performance: 96 | Accessibility: 98 | Best Practices: 100...',
        'INTERACTION: Simulating AJAX cart drawer state mutation in 12ms...',
        'ASSERT: Checkout redirect payload structured and verified... [PASS]',
        'EXECUTION COMPLETE: Storefront optimization benchmark passed.',
      ],
    },
  ];

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  // Run real-time test execution simulation
  const handleRunSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setSimDone(false);
    setSimStep(0);

    const totalSteps = selectedProject.simulationLogs.length;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setSimStep(current);
      if (current >= totalSteps) {
        clearInterval(interval);
        setIsRunningSim(false);
        setSimDone(true);
      }
    }, 400);
  };

  const resetSimulation = () => {
    setIsRunningSim(false);
    setSimDone(false);
    setSimStep(0);
  };

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let resNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-400">about</span> - Executive background & degree</p>
            <p><span className="text-emerald-400">skills</span> - Full-stack & Automation capabilities</p>
            <p><span className="text-emerald-400">experience</span> - Capgemini, Torn & Stitched, Newgen</p>
            <p><span className="text-emerald-400">projects</span> - View featured engineering systems</p>
            <p><span className="text-emerald-400">certifications</span> - Accreditations & IEEE research publication</p>
            <p><span className="text-emerald-400">contact</span> - Direct email & LinkedIn details</p>
            <p><span className="text-emerald-400">clear</span> - Reset terminal output</p>
          </div>
        );
        break;

      case 'about':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">Mohd Shuja Rizvi</p>
            <p>Role: Process Automation Engineer @ Capgemini Malaysia</p>
            <p>Degree: B.Tech in Electrical Engineering (GCET Graduate)</p>
            <p>Expertise: Frontend Architecture, Process Automation, REST APIs & AI Pipelines.</p>
          </div>
        );
        break;

      case 'skills':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">CORE TECHNICAL STACK:</p>
            <p><span className="text-emerald-400">Frontend:</span> React 19, Next.js 16, TypeScript, Tailwind CSS, Web Vitals, Liquid</p>
            <p><span className="text-emerald-400">Automation:</span> Tricentis Tosca L2, Selenium, Appium, REST Assured, Postman</p>
            <p><span className="text-emerald-400">Backend & Security:</span> Java Enterprise, JWT Authentication, MsSQL, AES-256</p>
            <p><span className="text-emerald-400">AI & Data:</span> Claude Code, AI Coding Agents, Python Scripting, Power BI, FP&A</p>
          </div>
        );
        break;

      case 'experience':
        resNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">CAREER RECORD:</p>
            <p>1. <span className="text-blue-300 font-bold">Capgemini</span> (2025-Present) - Process Automation Engineer (Kuala Lumpur)</p>
            <p>2. <span className="text-blue-300 font-bold">Torn & Stitched</span> (2024-2025) - Technology Lead (Shopify Liquid & Web QA)</p>
            <p>3. <span className="text-blue-300 font-bold">Newgen Software</span> (2023-2024) - Application Engineer (Java, MsSQL, Enterprise)</p>
          </div>
        );
        break;

      case 'projects':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">FEATURED SYSTEMS:</p>
            <p>• REST API & Security Automation Suite (Capgemini)</p>
            <p>• Tosca L2 & Selenium Regression Deck (Capgemini)</p>
            <p>• Claude Code & AI Agent Extraction Pipeline (Capgemini)</p>
            <p>• Shopify Storefront & Liquid Frontend Engine (Torn & Stitched)</p>
          </div>
        );
        break;

      case 'certifications':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">ACCREDITATIONS & RESEARCH:</p>
            <p>• AI Coder: Complete Claude Code & Coding Agents Course (Udemy)</p>
            <p>• Tricentis Tosca Automation Specialist Level 2</p>
            <p>• REST API Automation Using REST Assured (Java)</p>
            <p>• Data Analysts Toolbox: Excel, Python, Power BI</p>
            <p>• Excel for Financial Planning & Analysis (FP&A)</p>
            <p>• IEEE Research: Deep Learning Skin Lesion Classification Review (Doc 10182947)</p>
          </div>
        );
        break;

      case 'contact':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold">COMMUNICATION CHANNELS:</p>
            <p>Email: <span className="text-emerald-400">mshuja.rizvi@gmail.com</span></p>
            <p>LinkedIn: https://www.linkedin.com/in/mshuja-rizvi/</p>
            <p>GitHub: https://github.com/shuja-01</p>
            <p>Location: Kuala Lumpur, Malaysia</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        resNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: &apos;{cleanCmd}&apos;. Type <span className="text-blue-300 font-bold">&apos;help&apos;</span> for commands list.
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

  const presetCmds = ['help', 'skills', 'experience', 'projects', 'certifications', 'contact', 'clear'];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 shadow-sm font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE TEST RUNNER &amp; CLI DECK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
            Engineering Projects &amp; <span className="gradient-text-cobalt">Live Sandbox</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Select an architecture to inspect code structure and click <strong className="text-blue-700 dark:text-blue-400 font-semibold">&quot;Run Test Execution&quot;</strong> to watch live simulated automated regression assertions in real time.
          </p>

          {/* Mode Switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mt-4 shadow-sm font-mono text-xs">
            <button
              onClick={() => setActiveDeckMode('sandbox')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all ${
                activeDeckMode === 'sandbox'
                  ? 'bg-slate-950 text-white dark:bg-blue-600 dark:text-white font-bold shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Interactive Test Sandbox</span>
            </button>

            <button
              onClick={() => setActiveDeckMode('cli')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl transition-all ${
                activeDeckMode === 'cli'
                  ? 'bg-slate-950 text-white dark:bg-blue-600 dark:text-white font-bold shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              <TerminalIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Interactive Bash CLI</span>
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        {activeDeckMode === 'sandbox' ? (
          /* High-Craft Interactive Test Runner Sandbox */
          <div className="space-y-6 max-w-6xl mx-auto">
            
            {/* Project Selection Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {projects.map((proj) => {
                const isSelected = proj.id === selectedProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      resetSimulation();
                    }}
                    className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'editorial-card border-blue-500/60 bg-white dark:bg-[#161e31] shadow-lg ring-1 ring-blue-500/20'
                        : 'editorial-card border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#111726]/70 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/40' : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <proj.icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                        {proj.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-heading font-bold text-slate-950 dark:text-slate-100 truncate">{proj.title}</h3>
                      <p className="text-[11px] font-mono text-blue-700 dark:text-blue-400 mt-0.5 truncate font-medium">{proj.role}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Sandbox Console Card */}
            <div className="editorial-card rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f17] shadow-xl overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-sm">
                    <selectedProject.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-slate-950 dark:text-white">{selectedProject.title}</h3>
                    <p className="text-xs font-mono text-slate-600 dark:text-slate-400">{selectedProject.role} • {selectedProject.category}</p>
                  </div>
                </div>

                {/* Simulation Trigger Button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunningSim}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${
                      isRunningSim
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 animate-pulse cursor-wait'
                        : simDone
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950'
                    }`}
                  >
                    {isRunningSim ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>EXECUTING TESTS...</span>
                      </>
                    ) : simDone ? (
                      <>
                        <RotateCcw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>RE-RUN TEST SUITE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-white dark:fill-slate-950" />
                        <span>RUN TEST EXECUTION</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Console Body: 2 Columns (Left: Code & Narrative, Right: Live Execution Logs) */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Description & Code Snippet (Cols 1-7) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedProject.description}
                    </p>
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 text-xs font-mono text-emerald-800 dark:text-emerald-400 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Impact:</strong> {selectedProject.impact}</span>
                    </div>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>// ARCHITECTURE CODE SPECIMEN</span>
                      <span>UTF-8 • STRICT</span>
                    </div>
                    <pre className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
                      <code>{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Live Test Execution Telemetry Window (Cols 8-12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-[#090d16] p-5 rounded-2xl border border-slate-800 shadow-inner">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isRunningSim
                              ? 'bg-amber-400 animate-ping'
                              : simDone
                              ? 'bg-emerald-400'
                              : 'bg-blue-400'
                          }`}
                        />
                        <span className="text-slate-200 font-semibold">LIVE LOG TELEMETRY</span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {isRunningSim ? 'STATUS: ACTIVE' : simDone ? 'STATUS: PASSED' : 'STANDBY'}
                      </span>
                    </div>

                    {/* Step by Step Simulation Feed */}
                    <div className="space-y-2 min-h-[220px] font-mono text-xs">
                      {simStep === 0 && !simDone && (
                        <div className="py-12 text-center text-slate-400 space-y-2">
                          <Activity className="w-6 h-6 text-slate-500 mx-auto" />
                          <p className="text-xs">Click &quot;Run Test Execution&quot; above to trigger live automated assertion simulator.</p>
                        </div>
                      )}

                      {selectedProject.simulationLogs.slice(0, simStep).map((log, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-300 animate-in fade-in slide-in-from-left-1 duration-150"
                        >
                          <span className="text-blue-400 shrink-0 font-bold">&gt;</span>
                          <span className={idx === selectedProject.simulationLogs.length - 1 ? 'text-emerald-400 font-bold' : ''}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Status Bar */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">
                      {simDone ? 'ALL ASSERTIONS VERIFIED' : isRunningSim ? 'EXECUTING PIPELINE...' : 'READY'}
                    </span>
                    {simDone && (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>100% PASS</span>
                      </span>
                    )}
                  </div>

                </div>

              </div>

            </div>

          </div>
        ) : (
          /* Interactive CLI View */
          <div className="max-w-4xl mx-auto editorial-card rounded-3xl border border-slate-800 shadow-xl overflow-hidden bg-[#090d16]">
            
            {/* Terminal Window Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">shuja@capgemini-my:~$ bash</span>
              </div>

              <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                LIVE SHELL
              </span>
            </div>

            {/* Terminal Output Stream */}
            <div className="p-6 font-mono text-xs sm:text-sm space-y-4 max-h-96 overflow-y-auto bg-[#070c14]">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  {item.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs">
                      <span>shuja@capgemini:~$</span>
                      <span className="text-slate-100">{item.command}</span>
                    </div>
                  )}
                  <div className="pl-3 border-l-2 border-slate-800">{item.response}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Form Input Prompt */}
            <form onSubmit={handleSubmit} className="border-t border-slate-800 p-3 bg-slate-950 flex items-center gap-2">
              <span className="text-xs font-mono text-blue-400 font-bold shrink-0">shuja@capgemini:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'skills', 'experience', 'projects', 'certifications'..."
                className="w-full bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder-slate-600"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all shrink-0"
                aria-label="Submit command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick Run Command Buttons */}
            <div className="bg-slate-950 px-4 py-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
              <span className="text-slate-500 mr-1">Quick Run:</span>
              {presetCmds.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-300 border border-slate-800 transition-all"
                >
                  {cmd}
                </button>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
