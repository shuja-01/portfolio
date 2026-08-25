import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohd Shuja Rizvi — Process Automation Engineer & Modern Web Architect",
  description:
    "Portfolio of Mohd Shuja Rizvi: Process Automation Engineer at Capgemini Malaysia, specialized in enterprise automated regression testing (Tosca L2, Selenium, REST Assured), React 19/Next.js frontend architectures, and AI/LLM workflow integrations.",
  keywords: [
    "Mohd Shuja Rizvi",
    "Process Automation Engineer",
    "Capgemini Malaysia",
    "Tricentis Tosca Automation Specialist L2",
    "React 19",
    "Next.js 16",
    "TypeScript",
    "REST Assured",
    "Selenium",
    "Appium",
    "Claude Code",
    "AI Agents",
    "Deep Learning Skin Lesion",
    "IEEE Xplore 10182947",
    "GCET",
  ],
  authors: [{ name: "Mohd Shuja Rizvi", url: "https://www.linkedin.com/in/mshuja-rizvi/" }],
  creator: "Mohd Shuja Rizvi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shuja-portfolio.vercel.app",
    title: "Mohd Shuja Rizvi — Process Automation Engineer & Modern Web Architect",
    description:
      "Process Automation Engineer at Capgemini Malaysia & GCET Electrical Engineering graduate. Building enterprise test suites, high-performance React 19 apps, and AI extraction pipelines.",
    siteName: "Mohd Shuja Rizvi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Shuja Rizvi — Process Automation Engineer",
    description:
      "Process Automation Engineer at Capgemini Malaysia. React 19, Next.js 16, Tosca L2, REST Assured, and Claude Code AI Workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data for Search Engines (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohd Shuja Rizvi",
              "jobTitle": "Process Automation Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Capgemini",
                "location": "Kuala Lumpur, Malaysia"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Galgotias College of Engineering & Technology (GCET)"
              },
              "knowsAbout": [
                "Process Automation",
                "Tricentis Tosca L2",
                "React 19",
                "Next.js 16",
                "TypeScript",
                "REST Assured",
                "Selenium",
                "AI Coding Agents",
                "Claude Code"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/mshuja-rizvi/",
                "https://github.com/shuja-01",
                "https://ieeexplore.ieee.org/document/10182947"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
