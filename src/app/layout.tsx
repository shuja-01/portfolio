import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohd Shuja Rizvi — Process Automation & AI Integration Engineer',
  description:
    'Portfolio of Mohd Shuja Rizvi, Process Automation Engineer at Capgemini Malaysia. Specialist in enterprise process automation, REST API testing, JWT security, and AI/LLM workflow integration.',
  keywords: [
    'Mohd Shuja Rizvi',
    'Process Automation Engineer',
    'Capgemini',
    'AI Integration',
    'LLM Workflows',
    'REST API Testing',
    'Tosca',
    'Selenium',
    'Appium',
    'TypeScript',
    'Java',
    'GCET',
  ],
  authors: [{ name: 'Mohd Shuja Rizvi' }],
  openGraph: {
    title: 'Mohd Shuja Rizvi | Process Automation & AI Integration Engineer',
    description:
      'Designing & automating end-to-end enterprise business processes, REST API validation, security encryption, and AI workflows.',
    url: 'https://www.linkedin.com/in/mshuja-rizvi/',
    siteName: 'Mohd Shuja Rizvi Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
