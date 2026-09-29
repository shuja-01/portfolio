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
  FastForward,
  Copy,
  Sliders,
  AlertCircle,
  FileJson,
} from 'lucide-react';

import Interactive3DCube from '@/components/3d/Interactive3DCube';

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
  jsonPayload: object;
  simulationLogs: string[];
}

export default function TerminalDeck() {
  const [activeDeckMode, setActiveDeckMode] = useState<'3d-cube' | 'sandbox' | 'cli'>('3d-cube');
  const [activeTab, setActiveTab] = useState<'code' | 'logs' | 'payload' | 'metrics'>('logs');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('api-security');
  
  // Interactive Workbench State
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [simDone, setSimDone] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive Simulation Modifiers
  const [chaosMode, setChaosMode] = useState(false);
  const [highConcurrency, setHighConcurrency] = useState(false);
  const [jwtStrict, setJwtStrict] = useState(true);

  // CLI State
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1.5 text-slate-300 font-mono text-xs">
          <p className="text-blue-400 font-bold">MOHD SHUJA RIZVI // TERMINAL WORKBENCH v4.2.0</p>
          <p className="text-slate-400">
            Type <span className="text-blue-300 font-bold">&apos;help&apos;</span> or click preset command badges below to interact directly with the CLI engine.
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
      jsonPayload: {
        endpoint: '/api/v1/user/credentials',
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...',
          'X-Client-Node': 'KL_CAPGEMINI_PROD',
          'Content-Type': 'application/json',
        },
        response: {
          status: 200,
          authenticated: true,
          encryption: 'AES_256_GCM',
          claims: { userId: 'USR-89421', role: 'SECURITY_AUDITOR', exp: 1774428000 },
          latencyMs: highConcurrency ? 42 : 16,
        },
      },
      codeSnippet: `@Test
public void validateJWTAccessToken() {
  given().header("Authorization", "Bearer " + jwtToken)
         .header("X-Security-Check", "${jwtStrict ? 'STRICT' : 'PERMISSIVE'}")
         .contentType(ContentType.JSON)
         .when().get("/api/v1/user/credentials")
         .then().statusCode(200)
         .body("status", equalTo("VERIFIED"))
         .body("encryption", equalTo("AES_256"));
}`,
      simulationLogs: [
        'INITIALIZING: Test runner daemon (REST Assured v5.4.0)...',
        'AUTH: Generating 256-bit RSA JWT Bearer token [exp: 3600s]... OK',
        `CONFIG: Strict Security Mode = ${jwtStrict ? 'ENABLED' : 'DISABLED'}, Concurrency = ${highConcurrency ? '500 Threads' : '1 Worker'}`,
        'DISPATCH: GET /api/v1/user/credentials (Headers: Authorization, X-Request-ID: #89421)...',
        `RESPONSE: HTTP/1.1 200 OK (Latency: ${highConcurrency ? '42ms' : '16ms'}, Size: 1.4KB)...`,
        'ASSERT: body("status") == "VERIFIED" [PASS]',
        'ASSERT: body("encryption") == "AES_256_GCM" [PASS]',
        chaosMode 
          ? 'CHAOS INJECTION: Simulated malformed payload detected -> Auto-handled with HTTP 400 recovery! [PASS]'
          : 'SCHEMA VALIDATION: RFC 7519 JSON Web Token compliance verified. [PASS]',
        'EXECUTION COMPLETE: All assertions verified in 142ms. Zero defects detected.',
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
      jsonPayload: {
        suite: 'Checkout_Regression_Matrix',
        framework: 'Tricentis Tosca L2 + Selenium',
        concurrency: highConcurrency ? '50 Parallel Browsers' : '2 Headless Workers',
        results: {
          totalScenarios: 50,
          passed: 50,
          failed: 0,
          viewportCompatibility: ['Desktop Chrome', 'Mobile Safari', 'Android Chrome'],
        },
      },
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
        `BROWSER: Launching ${highConcurrency ? '50 parallel Chromium workers' : 'headless Chromium worker thread #1 & #2'}...`,
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
      jsonPayload: {
        agent: 'Claude-Code-Agent-v3.5',
        task: 'Unstructured Invoice OCR & Schema Extraction',
        confidenceScore: 0.998,
        extractedFields: {
          invoiceId: 'INV-2025-9921',
          vendor: 'Capgemini Global Services',
          currency: 'MYR',
          subtotal: 18500.00,
          tax: 1110.00,
          total: 19610.00,
        },
      },
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
        'INITIALIZING: Claude Code Autonomous Agent worker runtime...',
        'PROMPT INGESTION: Received raw unstructured PDF text buffer (8.2KB)...',
        'LLM EXTRACTION: Invoking claude-3-5-sonnet tool calling schema validator...',
        'STRUCTURE CHECK: Validating extracted AST schema against invoice interface...',
        'RESULT: Parsed { invoiceId, vendor, total, tax } with 99.8% confidence.',
        'PIPELINE DISPATCH: JSON payload transmitted to enterprise downstream DB.',
        'EXECUTION COMPLETE: Finished in 420ms.',
      ],
    },
    {
      id: 'shopify-frontend',
      title: 'Shopify Storefront & Liquid Frontend Architecture',
      role: 'Technology Lead @ Torn & Stitched',
      category: 'Frontend Engineering',
      icon: Layout,
      tags: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind', 'Web Vitals'],
      description:
        'Architected custom Shopify Liquid themes, high-converting interactive UI components, and sub-second page performance for a leading e-commerce brand.',
      impact: 'Boosted conversion rate and achieved 90+ Google Lighthouse performance scores.',
      jsonPayload: {
        site: 'Torn & Stitched Storefront',
        lighthouse: { performance: 96, accessibility: 98, bestPractices: 100, seo: 100 },
        webVitals: { LCP: '0.8s', FID: '12ms', CLS: '0.01' },
      },
      codeSnippet: `{% comment %} Custom high-performance product layout {% endcomment %}
<div class="product-grid" data-section-id="{{ section.id }}">
  {% for product in collection.products limit: 12 %}
    {% render 'product-card', product: product, lazy_load: true %}
  {% endfor %}
</div>`,
      simulationLogs: [
        'BUILD: Compiling Shopify Liquid AST templates...',
        'OPTIMIZATION: Minifying CSS bundle & injecting WebP image sources...',
        'LIGHTHOUSE BENCHMARK: Measuring Core Web Vitals (LCP: 0.8s, FID: 12ms, CLS: 0.01)...',
        'METRIC: Lighthouse Performance Score: 96/100 (PASSED)',
        'EXECUTION COMPLETE: Storefront payload ready in 88ms.',
      ],
    },
  ];

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  // Run Continuous Simulation
  const handleRunSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setSimDone(false);
    setSimStep(0);
    setActiveTab('logs');

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setSimStep(current);

      if (current >= currentProject.simulationLogs.length) {
        clearInterval(interval);
        setIsRunningSim(false);
        setSimDone(true);
      }
    }, 350);
  };

  // Step-by-Step Forward
  const handleStepForward = () => {
    setActiveTab('logs');
    if (simStep < currentProject.simulationLogs.length) {
      const next = simStep + 1;
      setSimStep(next);
      if (next >= currentProject.simulationLogs.length) {
        setSimDone(true);
      }
    }
  };

  // Reset Simulation
  const handleResetSimulation = () => {
    setIsRunningSim(false);
    setSimDone(false);
    setSimStep(0);
  };

  // Copy Code Snippet
  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentProject.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Handle Interactive CLI Commands
  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-blue-400 font-bold">// AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-400 font-bold">about</span> - Executive background &amp; role</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - Technical capabilities matrix</p>
            <p><span className="text-emerald-400 font-bold">run tests</span> - Run simulated automated test suite</p>
            <p><span className="text-emerald-400 font-bold">ieee</span> - Peer-reviewed deep learning paper link</p>
            <p><span className="text-emerald-400 font-bold">certs</span> - Accredited industry certifications</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Direct coordinates &amp; email</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Reset terminal window</p>
          </div>
        );
        break;

      case 'about':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-bold">MOHD SHUJA RIZVI</p>
            <p>Process Automation Engineer at Capgemini Malaysia (Sancy Solutions).</p>
            <p>B.Tech Electrical Engineering graduate from GCET (2023).</p>
            <p>Published author in Deep Learning on IEEE Xplore.</p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-blue-400 font-bold">// CORE TECHNICAL STACK:</p>
            <p>• <span className="text-slate-100 font-semibold">Frontend:</span> React 19, Next.js 16, TypeScript, Tailwind CSS, Shopify Liquid</p>
            <p>• <span className="text-slate-100 font-semibold">Automation:</span> Tricentis Tosca L2, REST Assured, Selenium, Appium, Java</p>
            <p>• <span className="text-slate-100 font-semibold">AI &amp; Data:</span> Claude Code, AI Coding Agents, Power BI, Python, CNNs</p>
            <p>• <span className="text-slate-100 font-semibold">Security:</span> JWT Bearer Auth, TLS 1.3, Encrypted Headers</p>
          </div>
        );
        break;

      case 'run tests':
      case 'test':
      case 'run':
        res = (
          <div className="space-y-1 text-emerald-400 font-bold">
            <p>✓ [PASS] REST Assured JWT Token Authenticated (200 OK)</p>
            <p>✓ [PASS] Tosca L2 Multi-Tier Regression (50/50 Scenarios)</p>
            <p>✓ [PASS] Claude Code AI Document Parsing (99.8% Confidence)</p>
            <p>✓ [PASS] Core Web Vitals Benchmark (LCP 0.8s, Lighthouse 96/100)</p>
            <p className="text-slate-400 font-normal">All 4 automated suites executed with 0 defects.</p>
          </div>
        );
        break;

      case 'ieee':
      case 'paper':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-blue-400 font-bold">IEEE XPLORE RESEARCH PUBLICATION:</p>
            <p className="italic">&quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</p>
            <p className="text-xs text-blue-300 underline">
              <a href="https://ieeexplore.ieee.org/document/10182947" target="_blank" rel="noopener noreferrer">
                https://ieeexplore.ieee.org/document/10182947 ↗
              </a>
            </p>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-blue-400 font-bold">// VERIFIED ACCREDITATIONS:</p>
            <p>1. AI Coder: Complete Claude Code &amp; Coding Agents Course (Udemy)</p>
            <p>2. Automation Specialist Level 2 (Tricentis Tosca)</p>
            <p>3. REST API Automation Using REST Assured (Java Testing)</p>
            <p>4. Data Analyst&apos;s Toolbox (Power BI, Excel FP&amp;A)</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-slate-300">
            <p>Email: <span className="text-blue-400 font-bold">mshuja.rizvi@gmail.com</span></p>
            <p>LinkedIn: <span className="text-blue-400 font-bold">linkedin.com/in/mshuja-rizvi</span></p>
            <p>GitHub: <span className="text-blue-400 font-bold">github.com/shuja-01</span></p>
            <p>Location: Kuala Lumpur, Malaysia</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        res = (
          <div className="text-rose-400">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;help&apos; for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, response: res }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIndex = historyIndex + 1 < commandList.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInputVal(commandList[commandList.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandList[commandList.length - 1 - nextIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] shadow-sm font-semibold">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>INTERACTIVE ENGINEERING WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Architecture Specimen &amp; <span className="gradient-text-cyber">Live Test Deck</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Interact with live automated test suites, toggle simulation parameters, inspect JSON response structures, or query the real-time CLI terminal.
          </p>

          {/* Mode Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 mt-4 shadow-sm font-mono">
            <button
              onClick={() => setActiveDeckMode('3d-cube')}
              className={`flex items-center gap-2 px-5 py-2 text-xs rounded-xl transition-all ${
                activeDeckMode === '3d-cube'
                  ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>3D Architecture Cube</span>
            </button>
            <button
              onClick={() => setActiveDeckMode('sandbox')}
              className={`flex items-center gap-2 px-5 py-2 text-xs rounded-xl transition-all ${
                activeDeckMode === 'sandbox'
                  ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Test Runner</span>
            </button>
            <button
              onClick={() => setActiveDeckMode('cli')}
              className={`flex items-center gap-2 px-5 py-2 text-xs rounded-xl transition-all ${
                activeDeckMode === 'cli'
                  ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Interactive Bash CLI</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODE 0: 3D ARCHITECTURE BENCHMARK CUBE */}
        {/* ========================================================================= */}
        {activeDeckMode === '3d-cube' && (
          <div className="space-y-6">
            <Interactive3DCube />
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE 1: INTERACTIVE TEST RUNNER WORKBENCH */}
        {/* ========================================================================= */}
        {activeDeckMode === 'sandbox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Specimen Selector & Interactive Toggles (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Architecture Specimen Selector */}
              <div className="editorial-card p-5 rounded-3xl border border-[#00f5ff]/20 space-y-3 bg-[#080e1c]/85">
                <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider block font-semibold">
                  // 1. SELECT ARCHITECTURE SPECIMEN
                </span>

                <div className="space-y-2">
                  {projects.map((proj) => {
                    const isSelected = selectedProjectId === proj.id;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => {
                          setSelectedProjectId(proj.id);
                          handleResetSimulation();
                        }}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-slate-900/90 border-[#00f5ff]/50 shadow-md ring-1 ring-[#00f5ff]/20'
                            : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#00f5ff] text-slate-950 shadow-md'
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}
                        >
                          <proj.icon className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden space-y-1">
                          <h4 className="font-heading font-bold text-sm text-white truncate leading-snug">
                            {proj.title}
                          </h4>
                          <p className="text-[11px] font-mono text-[#00f5ff]">{proj.role}</p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {proj.tags.slice(0, 3).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Simulation Modifier Toggles */}
              <div className="editorial-card p-5 rounded-3xl border border-slate-800 space-y-4 bg-[#111726]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>2. SIMULATION CONTROLS &amp; CHAOS</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">REAL-TIME MODIFIERS</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {/* High Concurrency Toggle */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-slate-200 font-medium block">Simulate 500 Virtual Users</span>
                      <span className="text-[10px] text-slate-500 block">High-concurrency load testing profile</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={highConcurrency}
                      onChange={(e) => setHighConcurrency(e.target.checked)}
                      className="w-4 h-4 rounded accent-blue-500 cursor-pointer"
                    />
                  </label>

                  {/* Chaos Injection Toggle */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-slate-200 font-medium block">Inject Payload Chaos / Anomaly</span>
                      <span className="text-[10px] text-slate-500 block">Tests auto-recovery and schema failover</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={chaosMode}
                      onChange={(e) => setChaosMode(e.target.checked)}
                      className="w-4 h-4 rounded accent-blue-500 cursor-pointer"
                    />
                  </label>

                  {/* Strict JWT Security */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-slate-200 font-medium block">Strict JWT Signature Enforcement</span>
                      <span className="text-[10px] text-slate-500 block">256-bit RS256 token verification</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={jwtStrict}
                      onChange={(e) => setJwtStrict(e.target.checked)}
                      className="w-4 h-4 rounded accent-blue-500 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Right: Live Interactive Workbench Screen (Cols 6-12) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="editorial-card rounded-3xl border border-slate-800 bg-[#070a10] overflow-hidden shadow-2xl flex flex-col">
                
                {/* Console Top Toolbar */}
                <div className="px-5 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2 font-semibold truncate">
                      {currentProject.title}
                    </span>
                  </div>

                  {/* View Tabs */}
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl font-mono text-xs border border-slate-800">
                    <button
                      onClick={() => setActiveTab('logs')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'logs' ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Live Stream
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'code' ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Specimen Code
                    </button>
                    <button
                      onClick={() => setActiveTab('payload')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'payload' ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      JSON Payload
                    </button>
                  </div>
                </div>

                {/* Console Main Display */}
                <div className="p-6 min-h-[360px] font-mono text-xs relative flex flex-col justify-between">
                  
                  {/* TAB 1: LIVE ASSERTION LOGS */}
                  {activeTab === 'logs' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-slate-500 border-b border-slate-900 pb-2 text-[11px]">
                        <span>DAEMON: TEST_RUNNER_ACTIVE</span>
                        <span>
                          STEP {simStep} OF {currentProject.simulationLogs.length}
                        </span>
                      </div>

                      {simStep === 0 && !isRunningSim && (
                        <div className="py-12 text-center space-y-3">
                          <Activity className="w-8 h-8 text-[#00f5ff] mx-auto animate-pulse" />
                          <p className="text-slate-400">Ready for execution. Click &apos;Run Test Execution&apos; or &apos;Step Forward&apos; below.</p>
                        </div>
                      )}

                      <div className="space-y-2">
                        {currentProject.simulationLogs.slice(0, simStep).map((log, lIdx) => {
                          const isPass = log.includes('[PASS]') || log.includes('OK') || log.includes('COMPLETE');
                          return (
                            <div
                              key={lIdx}
                              className={`flex items-start gap-2.5 p-2 rounded-lg leading-relaxed animate-in fade-in duration-200 ${
                                isPass
                                  ? 'bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30'
                                  : 'text-slate-300 bg-slate-900/40'
                              }`}
                            >
                              <span className="text-[#00f5ff] select-none">❯</span>
                              <span>{log}</span>
                            </div>
                          );
                        })}
                      </div>

                      {isRunningSim && (
                        <div className="flex items-center gap-2 text-[#00f5ff] pt-2 animate-pulse">
                          <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                          <span>Asserting payload integrity and security headers...</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: CODE SPECIMEN */}
                  {activeTab === 'code' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-[11px]">// IMPLEMENTATION SNIPPET</span>
                        <button
                          onClick={handleCopyCode}
                          className="flex items-center gap-1 text-[11px] text-[#00f5ff] hover:text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
                        >
                          {copiedCode ? <Check className="w-3 h-3 text-[#00ff9d]" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-900 text-slate-200 overflow-x-auto text-[11px] leading-relaxed">
                        <code>{currentProject.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* TAB 3: JSON PAYLOAD INSPECTOR */}
                  {activeTab === 'payload' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-[11px]">// LIVE JSON RESPONSE PAYLOAD</span>
                        <span className="text-[#00ff9d] text-[11px] font-bold">HTTP 200 OK</span>
                      </div>
                      <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-900 text-[#00f5ff] overflow-x-auto text-[11px] leading-relaxed">
                        <code>{JSON.stringify(currentProject.jsonPayload, null, 2)}</code>
                      </pre>
                    </div>
                  )}

                  {/* Console Action Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRunSimulation}
                        disabled={isRunningSim}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#00f5ff] hover:bg-[#00e1eb] text-slate-950 shadow-md shadow-[#00f5ff]/25 transition-all hover:scale-[1.02]"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Run Full Suite</span>
                      </button>

                      <button
                        onClick={handleStepForward}
                        disabled={isRunningSim || simDone}
                        className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all"
                        title="Step into next assertion"
                      >
                        <FastForward className="w-3.5 h-3.5 text-blue-400" />
                        <span>Step Next</span>
                      </button>

                      <button
                        onClick={handleResetSimulation}
                        className="p-2.5 rounded-xl text-xs bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all"
                        title="Reset workbench"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-slate-400 text-[11px] font-mono">
                      {simDone ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>SUITE COMPLETE: 0 DEFECTS</span>
                        </span>
                      ) : (
                        <span>Ready for assertion dispatch</span>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE 2: INTERACTIVE BASH CLI TERMINAL */}
        {/* ========================================================================= */}
        {activeDeckMode === 'cli' && (
          <div className="editorial-card rounded-3xl border border-slate-800 bg-[#070a10] overflow-hidden shadow-2xl max-w-4xl mx-auto flex flex-col">
            
            {/* CLI Header */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2 font-semibold">
                  shuja@kl-node:~ (interactive-cli)
                </span>
              </div>
              <button
                onClick={() => setHistory([])}
                className="text-[11px] font-mono text-slate-500 hover:text-slate-300"
              >
                Clear Screen
              </button>
            </div>

            {/* Preset Command Chips */}
            <div className="px-5 py-2.5 bg-slate-950/60 border-b border-slate-900 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[11px] text-slate-500 mr-1">Suggested:</span>
              {['help', 'about', 'skills', 'run tests', 'ieee', 'certs', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 text-slate-300 text-[11px] transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs min-h-[380px] max-h-[460px] overflow-y-auto space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-slate-500">❯</span>
                    <span className="text-slate-100 font-bold">{item.command}</span>
                  </div>
                  <div className="pl-4 leading-relaxed">{item.response}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Prompt Box */}
            <div className="p-4 bg-slate-950 border-t border-slate-900 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-sm font-bold">❯</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. 'run tests', 'skills', 'ieee', 'help')..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-600 font-mono text-xs focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold shrink-0"
              >
                Send
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
