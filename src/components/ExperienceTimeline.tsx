'use client';

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Sparkles, Building2, ExternalLink, Play, Pause, RotateCcw, ChevronDown, ListFilter } from 'lucide-react';
import Card3DTilt from '@/components/3d/Card3DTilt';

interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  contributions?: string[];
  skills: string[];
  type: 'work' | 'education';
  link?: string;
  linkText?: string;
}

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');
  const [expandedId, setExpandedId] = useState<string>('capgemini');
  
  // Interactive Career Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackIndex, setPlaybackIndex] = useState<number>(0);

  const timelineData: TimelineItem[] = [
    {
      id: 'capgemini',
      company: 'Capgemini',
      role: 'Process Automation Engineer (Consultant - Sancy Solutions)',
      period: 'August 2025 - Present',
      location: 'Kuala Lumpur, Malaysia',
      badge: 'CURRENT ROLE',
      type: 'work',
      description:
        'Architecting automated enterprise business workflows, REST API testing suites, JWT token encryption handlers, and AI/LLM workflow integrations for global client operations.',
      responsibilities: [
        'Perform thorough API testing for REST microservices, validating request/response payload structures, status codes (200, 201, 400, 401), and business logic.',
        'Develop and execute scalable, data-driven automated regression test suites using Tricentis Tosca, Selenium, Appium, TypeScript, and Java.',
        'Engineer end-to-end business process automations, replacing manual operational overhead with resilient software workflows.',
        'Integrate AI and Large Language Model capabilities into enterprise pipelines for automated unstructured document parsing and decision support.',
        'Conduct root-cause defect analysis, log diagnostics, and collaborate with cross-functional distributed teams.',
      ],
      contributions: [
        'Built automated regression suites drastically cutting manual QA validation overhead by over 70%.',
        'Integrated AI prompt automation pipelines into operational workflows for automated document triage.',
        'Maintained 100% security compliance across API authentication payloads and JWT token handlers.',
      ],
      skills: ['React / TS', 'REST APIs', 'Tosca L2', 'Selenium', 'Appium', 'Java', 'AI Integration', 'JWT Security', 'Process Automation'],
    },
    {
      id: 'torn-stitched',
      company: 'Torn & Stitched',
      role: 'Technology Lead',
      period: 'February 2024 - July 2025 (1 yr 6 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Directed end-to-end storefront technology, custom Shopify Liquid frontend architecture, user experience optimization, data analytics, and automated web regression testing.',
      responsibilities: [
        'Architected and customized Shopify Liquid templates, creating high-converting, responsive UI components with clean CSS and JavaScript.',
        'Conducted data analytics to identify customer funnel drop-offs, driving conversion rate improvements and page performance.',
        'Automated web regression and checkout UI validation using Selenium to prevent deployment breaks.',
        'Structured complex financial and inventory datasets in Excel for executive FP&A decision-making.',
      ],
      contributions: [
        'Achieved 90+ Lighthouse performance scores across mobile and desktop storefront layouts.',
        'Streamlined checkout flow resulting in measurable conversion rate lift.',
      ],
      skills: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind', 'Selenium', 'Data Analytics', 'HTML5', 'CSS3', 'Excel FP&A'],
    },
    {
      id: 'newgen-app',
      company: 'Newgen Software',
      role: 'Application Engineer',
      period: 'July 2023 - February 2024 (8 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Developed and deployed mission-critical enterprise software solutions for Middle East client ecosystems using Newgen digital transformation platforms, Java Enterprise, and MsSQL.',
      responsibilities: [
        'Engineered customized enterprise software solutions with Newgen products, Java, and MsSQL according to strict client specifications.',
        'Designed, tested, and deployed applications utilizing Java, JavaScript, XML, and relational database schemas.',
        'Collaborated with client technical leads to integrate legacy backend systems and optimize database queries.',
      ],
      contributions: [
        'Delivered multiple client deployment milestones on schedule with zero critical production bugs.',
      ],
      skills: ['Java Enterprise', 'MsSQL', 'JSP', 'XML', 'JavaScript', 'Newgen Suite', 'SQL Optimization'],
    },
    {
      id: 'newgen-trainee',
      company: 'Newgen Software',
      role: 'Application Engineer (Trainee)',
      period: 'January 2023 - July 2023 (7 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Underwent comprehensive engineering training in Java, SQL database normalization, software architecture principles, and integration patterns for Newgen enterprise platforms.',
      responsibilities: [
        'Mastered core enterprise software design patterns, system integration workflows, and query profiling.',
        'Built simulated client applications evaluated and approved by senior technical architects.',
      ],
      skills: ['Java', 'SQL', 'Software Architecture', 'System Integration'],
    },
    {
      id: 'gcet',
      company: 'Galgotias College of Engineering & Technology (GCET)',
      role: 'B.Tech in Electrical Engineering',
      period: 'August 2019 - June 2023',
      location: 'Greater Noida, India',
      type: 'education',
      badge: 'DEGREE CONFERRED',
      link: 'https://ieeexplore.ieee.org/document/10182947',
      linkText: 'IEEE Research Publication (Doc: 10182947)',
      description:
        'Conferred Bachelor of Technology in Electrical Engineering. Authored and published peer-reviewed deep learning research paper on IEEE Xplore: "A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset".',
      responsibilities: [
        'Authored and published peer-reviewed IEEE research paper on CNN architectures for imbalanced medical imaging datasets.',
        'Specialized in automated control systems, machine learning fundamentals, and algorithmic problem-solving.',
      ],
      contributions: [
        'Published research paper on IEEE Xplore exploring deep learning models for imbalanced clinical dermatological datasets.',
      ],
      skills: ['Electrical Engineering', 'Deep Learning', 'Machine Learning', 'Control Systems', 'IEEE Research'],
    },
  ];

  const filteredData = timelineData.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  // Playback Auto Stepper
  const togglePlayCareer = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    let idx = 0;
    setExpandedId(timelineData[0].id);

    const interval = setInterval(() => {
      idx += 1;
      if (idx >= timelineData.length) {
        clearInterval(interval);
        setIsPlaying(false);
        setExpandedId(timelineData[0].id);
      } else {
        setExpandedId(timelineData[idx].id);
      }
    }, 2000);
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] shadow-sm font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>CAREER CHRONOLOGY &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Professional <span className="gradient-text-cyber">Journey &amp; Milestones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Progressive engineering trajectory spanning enterprise automation at Capgemini, storefront leadership at Torn &amp; Stitched, and software development at Newgen.
          </p>

          {/* Interactive Navigation & Playback Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 font-mono text-xs">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800 shadow-sm">
              {[
                { key: 'all', label: 'All Milestones (5)' },
                { key: 'work', label: 'Work Experience (4)' },
                { key: 'education', label: 'Education & Research (1)' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    activeTab === tab.key
                      ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Play Career Timeline Simulator Button */}
            <button
              onClick={togglePlayCareer}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border font-bold ${
                isPlaying
                  ? 'bg-[#00ff9d] border-[#00ff9d] text-slate-950 shadow-lg shadow-[#00ff9d]/30 animate-pulse'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#00ff9d]" />}
              <span>{isPlaying ? 'Playing Trajectory...' : 'Play Career Walkthrough'}</span>
            </button>

          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f5ff] via-[#a855f7] to-slate-800 -translate-x-1/2 opacity-40 hidden sm:block" />

          <div className="space-y-8">
            {filteredData.map((item, index) => {
              const isExpanded = expandedId === item.id;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-4 sm:left-1/2 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 z-20 shadow-md hidden sm:flex items-center justify-center transition-all ${
                      isExpanded
                        ? 'border-[#00f5ff] shadow-[#00f5ff]/50 scale-125'
                        : 'border-slate-700'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-[#00f5ff]' : 'bg-slate-700'}`}></span>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:pl-0' : 'sm:pr-0'}`}>
                    <Card3DTilt maxTilt={6} scale={1.01} className="w-full">
                      <div
                        onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                        className={`editorial-card p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer ${
                          isExpanded
                            ? 'border-[#00f5ff]/60 bg-[#0c152a] shadow-2xl ring-1 ring-[#00f5ff]/30'
                            : 'border-slate-800 hover:border-[#00f5ff]/30 bg-[#080e1c]/80'
                        }`}
                      >
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-[#00f5ff] flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Role & Company Header */}
                      <h3 className="text-xl font-heading font-bold text-white leading-snug">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-1 mb-4">
                        <span className="text-slate-200 font-bold flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#00f5ff]" />
                          {item.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-rose-500" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* Optional Direct IEEE Paper Link in Education */}
                      {item.link && (
                        <div className="mb-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f5ff] hover:underline font-semibold bg-[#00f5ff]/10 px-3 py-1.5 rounded-lg border border-[#00f5ff]/30"
                          >
                            <span>{item.linkText || 'Read Paper on IEEE Xplore'}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}

                      {/* Expandable Key Details */}
                      {isExpanded && (
                        <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-in fade-in duration-200">
                          <div>
                            <span className="text-[11px] font-mono text-[#00f5ff] block mb-2 uppercase tracking-wider font-semibold">
                              Key Responsibilities &amp; Workflows:
                            </span>
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-normal">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f5ff] mt-0.5 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.contributions && (
                            <div>
                              <span className="text-[11px] font-mono text-[#00ff9d] block mb-2 uppercase tracking-wider font-semibold">
                                Quantifiable Impact &amp; Results:
                              </span>
                              <ul className="space-y-2">
                                {item.contributions.map((cnt, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-normal">
                                    <Sparkles className="w-3.5 h-3.5 text-[#00ff9d] mt-0.5 shrink-0" />
                                    <span>{cnt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-slate-800/60">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Expand/Collapse Trigger */}
                      <div className="flex items-center justify-end text-[11px] font-mono text-[#00f5ff] mt-3 pt-2 border-t border-slate-800/40 font-semibold">
                        <span>{isExpanded ? 'Collapse view' : 'Click to expand details'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </Card3DTilt>
                </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
