/* ------------------------------------------------------------------
   All site content lives here. Edit this file to update the site —
   no component changes required.
------------------------------------------------------------------ */

export const profile = {
  name: "Danish Imam",
  role: "Software Engineer",
  location: "Hyderabad, India",
  phone: "+91-6201552830",
  whatsapp: "916201552830", // country code + number, no symbols
  email: "danishimam43@gmail.com",
  headline: "ERP Developer",
  company: "Venixo Technologies",
  since: "Sep 2025",
  // Drop a PDF in /public (e.g. /public/resume.pdf) and set this to
  // "/resume.pdf" — the download button appears automatically.
  resume: "",
  summary:
    "Results-driven Software Engineer working across ERP automation, integration and data. At Venixo Technologies I automate business processes with ERP workflows and SQL Server stored procedures, build and test REST API integrations, and keep master and transactional data accurate from source to report.",
  summaryTwo:
    "Alongside ERP work I build responsive, user-centric web applications with React.js, JavaScript, Tailwind CSS and Node.js. I enjoy collaborating with cross-functional teams, writing clean, maintainable code, solving complex business challenges, and leveraging AI-assisted development tools to accelerate delivery.",
};

/* Add your LinkedIn URL below and it will appear automatically.
   Empty links are hidden rather than rendered as dead ends. */
export const socials = [
  { label: "GitHub", href: "https://github.com/danishimam" },
  { label: "LinkedIn", href: "" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

/* `icon` keys map to Lucide icons in Skills.jsx. */
export const skillGroups = [
  {
    title: "Frontend",
    icon: "frontend",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "WebSockets",
      "Component-Based Architecture",
      "Performance Optimization",
    ],
  },
  {
    title: "SQL & Databases",
    icon: "database",
    items: [
      "SQL Server",
      "Stored Procedures",
      "Data Validation",
      "Data Reconciliation",
      "MongoDB",
      "CRUD Operations",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "analytics",
    items: [
      "Power BI",
      "KPI Dashboards",
      "Data Quality Monitoring",
      "Defect Reporting",
      "Operational Reporting",
    ],
  },
  {
    title: "ERP & Automation",
    icon: "erp",
    items: [
      "ERP Workflow Configuration",
      "Process Automation",
      "API Integration",
      "Functional & Regression Testing",
      "UAT Coordination",
      "Root-Cause Analysis",
      "Agile / Scrum",
    ],
  },
  {
    title: "Backend & Languages",
    icon: "backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Authentication & Authorization",
      "MERN Stack",
      "C++",
    ],
  },
  {
    title: "Tools",
    icon: "tools",
    items: ["Git", "GitHub", "Postman", "Cursor IDE", "Claude AI", "ChatGPT"],
  },
];

export const experience = [
  {
    role: "ERP Developer — Automation, Integration & Data",
    company: "Venixo Technologies",
    place: "Hyderabad",
    period: "Sep 2025 — Present",
    current: true,
    points: [
      "Automated manual business processes and data flows by configuring ERP workflows and developing SQL Server stored procedures, reducing repetitive hand-offs across Operations, Finance, and IT.",
      "Developed and validated REST API integrations using Postman, covering payload validation, JWT authentication, status codes, and positive/negative test scenarios.",
      "Built SQL-based data validation and reconciliation processes across master and transactional data, preventing reporting mismatches before reaching end users.",
      "Managed production issues through a structured ticket lifecycle including defect logging, triage, root-cause analysis, fix verification, and post-deployment validation.",
      "Converted business requirements into functional and regression test scenarios, executed ERP testing, and coordinated UAT sign-off with business stakeholders.",
      "Designed Power BI dashboards for KPI tracking, data quality monitoring, defect reporting, and operational visibility.",
      "Collaborated within an Agile cross-functional team through sprint planning, stand-ups, reviews, retrospectives, and continuous delivery practices.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Netcoreinfo Business Group",
    place: "Noida",
    period: "July 2023 — Sep 2023",
    points: [
      "Developed web applications using Python and Django with clean and maintainable code.",
      "Built and integrated REST APIs while collaborating with cross-functional teams.",
      "Designed database models and optimized application performance.",
      "Fixed bugs, implemented new features, and followed software development best practices.",
    ],
  },
];

/* `stack` is taken from each repo's package.json / language breakdown.
   Add an optional `description` to any project to show a short blurb. */
export const projects = [
  {
    name: "E-Commerce Website",
    url: "https://zingy-cupcake-89b4d9.netlify.app/",
    repo: "https://github.com/danishimam/e-commerce-website",
    stack: ["React", "React Router", "Tailwind CSS", "Vite"],
    featured: true,
  },
  {
    name: "Cryptoplace",
    url: "https://crypto-price-tracking-beryl.vercel.app/",
    repo: "https://github.com/danishimam/crypto-price-tracking",
    stack: ["React", "React Router", "Google Charts", "Vite"],
  },
  {
    name: "Cuptoday",
    url: "https://cup-today-web.vercel.app/",
    repo: "https://github.com/danishimam/cup-today-web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    name: "PropSoch Landing Page",
    url: "https://propsoch-landingpage-gold.vercel.app/",
    repo: "https://github.com/danishimam/propsoch-landingpage",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Weather App",
    url: "https://danishimam.github.io/weather-app/",
    repo: "https://github.com/danishimam/weather-app",
    stack: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
  },
  {
    name: "Todo List",
    url: "https://danishimam.github.io/to-do-list/",
    repo: "https://github.com/danishimam/to-do-list",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Blinkit Clone",
    url: "https://danishimam.github.io/Blinkit-Clone/",
    repo: "https://github.com/danishimam/Blinkit-Clone",
    stack: ["HTML", "CSS"],
  },
];

export const education = [
  {
    school: "IIMT College of Engineering",
    qualification: "Bachelor of Technology (B.Tech)",
    period: "October 2020 — July 2024",
  },
  {
    school: "Patna Muslim High School",
    qualification: "Senior Secondary",
    period: "May 2017 — March 2019",
  },
  {
    school: "Satyam International School",
    qualification: "Secondary School",
    period: "March 2016 — June 2017",
  },
];

export const certifications = [
  "Software Engineer Internship Certification",
  "Frontend Development (React)",
  "DSA with Java Certification",
  "Google Workspace Certification",
  "Python Essentials 1 Certification",
];
