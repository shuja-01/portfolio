'use client';

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle, Terminal, Sparkles, Building } from 'lucide-react';

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
}

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');
  const [expandedId, setExpandedId] = useState<string>('capgemini');

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
        'Working as a Process Automation Engineer at Capgemini, contributing to process development, API security, and AI integration for global enterprise applications.',
      responsibilities: [
        'Perform API testing for REST services, validating request/response payload structures, status codes, and business logic.',
        'Develop and maintain data-driven automated test scenarios using Tosca, Selenium, Appium, TypeScript, and Java.',
        'Design end-to-end business process automations, replacing manual operations with resilient software workflows.',
        'Integrate AI and LLM capabilities into existing enterprise pipelines to enhance operational decision-making.',
        'Analyze defects, conduct root-cause analysis, and collaborate with cross-functional global teams for quality delivery.',
      ],
      contributions: [
        'Drastically reduced manual testing overhead by building data-driven automated test suites.',
        'Built process automation solutions that directly cut operational overhead across critical workflows.',
        'Ensured zero-downtime regression testing across core enterprise application releases.',
      ],
      skills: ['REST APIs', 'Tosca', 'Selenium', 'Appium', 'TypeScript', 'Java', 'AI Integration', 'JWT Security', 'Process Automation'],
    },
    {
      id: 'torn-stitched',
      company: 'Torn & Stitched',
      role: 'Technology Lead',
      period: 'February 2024 - July 2025 (1 yr 6 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Led store technology infrastructure, managing front-end engineering, Liquid template customizations, data analytics, and automated testing.',
      responsibilities: [
        'Set up and configured Shopify stores, customizing Liquid templates and front-end elements for optimal user experience.',
        'Performed data analytics to identify customer trends, improving conversion rates and store performance.',
        'Automated web regression and UI flows using Selenium for enhanced accuracy.',
        'Structured large datasets in Excel for business reporting and executive decision-making.',
      ],
      skills: ['Shopify', 'Liquid', 'JavaScript', 'Selenium', 'Data Analysis', 'Google Analytics', 'HTML', 'CSS', 'Excel'],
    },
    {
      id: 'newgen-app',
      company: 'Newgen Software',
      role: 'Application Engineer',
      period: 'July 2023 - February 2024 (8 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Developed and deployed scalable software solutions for enterprise Middle East clients using Newgen products, Java, and SQL databases.',
      responsibilities: [
        'Built customized enterprise solutions with Newgen products, Java, and MsSQL according to strict client specs.',
        'Designed, developed, and deployed applications using Java, JavaScript, and relational databases.',
        'Collaborated with cross-functional client teams to integrate legacy systems and optimize query performance.',
      ],
      skills: ['Java', 'MsSQL', 'JSP', 'XML', 'JavaScript', 'Newgen Suite', 'SQL Optimization'],
    },
    {
      id: 'newgen-trainee',
      company: 'Newgen Software',
      role: 'Application Engineer (Trainee)',
      period: 'January 2023 - July 2023 (7 mos)',
      location: 'Noida, Uttar Pradesh, India',
      type: 'work',
      description:
        'Completed intensive engineering training in Java, SQL, system architecture, and integration points for Newgen enterprise platforms.',
      responsibilities: [
        'Mastered software development principles, system integration patterns, and database normalization.',
        'Delivered hands-on client simulation projects assigned by technical leads.',
      ],
      skills: ['Java', 'SQL', 'Software Architecture', 'System Integration'],
    },
    {
      id: 'uppcl',
      company: 'Uttar Pradesh Power Corporation (UPPCL)',
      role: 'Engineering Trainee',
      period: 'July 2022 - July 2022 (1 mo)',
      location: 'Lucknow, Uttar Pradesh, India',
      type: 'work',
      description: 'Industrial engineering training focused on grid automation, power distribution, and electrical systems control.',
      responsibilities: [
        'Gained hands-on insights into electrical distribution grid automation and monitoring protocols.',
      ],
      skills: ['Electrical Engineering', 'Power Automation', 'Grid Systems'],
    },
    {
      id: 'gcet',
      company: 'Galgotias College of Engineering & Technology (GCET)',
      role: 'B.Tech in Electrical Engineering',
      period: 'August 2019 - June 2023',
      location: 'Greater Noida, India',
      type: 'education',
      badge: 'DEGREE',
      description: 'Completed Bachelor of Technology in Electrical Engineering with strong foundation in signals, control systems, and computational methods.',
      responsibilities: [
        'Published research paper: "A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset"',
        'Specialized in automated systems, machine learning basics, and programming fundamentals.',
      ],
      skills: ['Electrical Engineering', 'Deep Learning', 'Machine Learning', 'Control Systems', 'C/C++'],
    },
  ];

  const filteredData = timelineData.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER CHRONOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Professional <span className="gradient-text-edgy">Journey & Impact</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A progression across process automation, enterprise software engineering, e-commerce tech leadership, and AI workflow integration.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 mt-6">
            {[
              { key: 'all', label: 'All Milestones' },
              { key: 'work', label: 'Experience' },
              { key: 'education', label: 'Education & Research' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-600 to-slate-800 -translate-x-1/2 opacity-40 hidden sm:block" />

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
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-20 shadow-lg shadow-cyan-500/50 hidden sm:flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:pl-0' : 'sm:pr-0'}`}>
                    <div
                      onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                      className={`glass-panel p-6 rounded-2xl border transition-all cursor-pointer ${
                        isExpanded
                          ? 'border-cyan-500/50 bg-slate-900/90 shadow-xl shadow-cyan-500/10'
                          : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      {/* Top Meta */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1 mb-4">
                        <span className="text-slate-200 font-semibold flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-cyan-400" />
                          {item.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-in fade-in duration-200">
                          <div>
                            <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                              Key Responsibilities:
                            </span>
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.contributions && (
                            <div>
                              <span className="text-[11px] font-mono text-emerald-400 block mb-2 uppercase tracking-wider">
                                Quantifiable Impact:
                              </span>
                              <ul className="space-y-2">
                                {item.contributions.map((cnt, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                                    <span>{cnt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-slate-800/50">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Toggle Hint */}
                      <div className="flex items-center justify-end text-[11px] font-mono text-cyan-400/80 mt-3 pt-2 border-t border-slate-800/40">
                        <span>{isExpanded ? 'Collapse view' : 'Expand details'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
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
