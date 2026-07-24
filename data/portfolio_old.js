// =====================================================================
//  data/portfolio.js  —  drop-in replacement (real CV content, v8 structure)
//  EDIT EVERYTHING HERE — the whole site reads from this one file.
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  firstName: "Krishna",
  // Real title + leadership direction (leads a 5-member team, supports Head IT)
  role: "Systems Administrator & IT Team Lead",
  tagline:
    "IT professional overseeing enterprise infrastructure and Microsoft 365 operations across multi-plant environments. I lead IT teams, drive digital transformation and automation, and support the Head of IT — building toward IT management and leadership.",
  locationNote:
    "Indian national 🇮🇳 · Based in Kampala, Uganda 🇺🇬 · Open to global relocation 🌍",
  location: "Kampala, Uganda",
  email: "krishna.andhe@gmail.com",
  photo: "/profile.png",
  resumeUrl: "/resume.pdf", // drop your CV at public/resume.pdf
};

// Factual, recruiter-friendly headline stats (all from your CV)
export const stats = [
  { value: "750+", label: "Projects Delivered" },
  { value: "Team of 5", label: "Led (IT + SAP)" },
  { value: "M365", label: "& Cloud Expert" },
];

export const socials = [
  { name: "GitHub", handle: "@krishnaandhe", url: "https://github.com/krishnaandhe", icon: "github" },
  { name: "LinkedIn", handle: "in/krishnaandhe", url: "https://www.linkedin.com/in/", icon: "linkedin" }, // ← update
  { name: "Email", handle: "krishna.andhe@gmail.com", url: "mailto:krishna.andhe@gmail.com", icon: "mail" },
  { name: "WhatsApp", handle: "+256 770 761 363", url: "https://wa.me/256770761363", icon: "whatsapp" },
  { name: "X (Twitter)", handle: "@krishnaandhe", url: "https://x.com/", icon: "x" }, // ← update or remove
  { name: "Telegram", handle: "@krishnaandhe", url: "https://t.me/", icon: "telegram" }, // ← update or remove
];

// Tech stack with proficiency (0–100), mapped from your Key Skills
export const stack = [
  { name: "Microsoft 365", icon: "microsoft", level: 95 },
  { name: "Azure Cloud & Identity", icon: "cloud", level: 82 },
  { name: "Network & Security", icon: "network", level: 88 },
  { name: "PowerShell", icon: "powershell", level: 85 },
  { name: "PowerApps & Automation", icon: "n8n", level: 80 },
  { name: "Active Directory", icon: "users", level: 85 },
  { name: "Nextcloud (DMS)", icon: "server", level: 80 },
  { name: "HESK Helpdesk", icon: "bell", level: 78 },
  { name: "Metabase Analytics", icon: "code", level: 75 },
  { name: "MySQL / Database", icon: "mysql", level: 82 },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I oversee enterprise IT infrastructure and Microsoft 365 operations across multi-plant environments, supporting the Head of IT in ensuring network reliability, system optimization and the execution of digital transformation initiatives.",
    "I lead a 5-member team (IT Support + SAP Support), own the Microsoft 365 ecosystem end to end — including governance and security — and deploy platforms like Nextcloud, HESK and Metabase, while driving PowerApps and PowerShell automation.",
    "With an MBA in Information Technology and 750+ enterprise projects delivered across India, the UAE and Africa, I pair hands-on delivery with the planning, documentation and people skills that IT management demands.",
  ],
  highlights: [
    "Leads a 5-member IT & SAP support team",
    "Enterprise M365 governance & security",
    "Multi-plant infrastructure, network & Wi-Fi",
    "Digital transformation & automation",
    "MBA – Information Technology",
    "Multilingual: EN · HI · MR · TE",
  ],
};

export const featuredProjects = [
  {
    title: "Route Arc",
    subtitle: "Self-hosted Fleet & Trip Booking System",
    description:
      "PHP + MariaDB platform with role-aware access, Leaflet/OpenStreetMap route mapping, universal ratings and smart pre-fill booking. Designed, built and rolled out end to end.",
    tags: ["PHP", "MariaDB", "Leaflet", "RBAC"],
    link: "",
    badge: "Flagship",
    icon: "route",
  },
  {
    title: "Expiry Tracking System",
    subtitle: "Licenses & Certifications Reminders",
    description:
      "Multi-user reminder system on Baserow + n8n + Gmail SMTP — configurable email alerts before expiry, browser & mobile access.",
    tags: ["Baserow", "n8n", "Automation"],
    link: "",
    badge: "Automation",
    icon: "bell",
  },
];

export const github = {
  username: "krishnaandhe", // ← confirm this is EXACTLY your GitHub handle
  enabled: true,
  max: 6,
  exclude: ["krishnaandhe.github.io", "krishnaandhe"],
  includeForks: false,
  onlyTopic: "",
  sort: "updated",
};

export const services = [
  {
    title: "IT Operations & Team Leadership",
    desc: "Lead multi-plant IT operations and a support team, aligning infrastructure with business goals.",
    icon: "users",
  },
  {
    title: "Microsoft 365 & Cloud",
    desc: "M365 governance & security, Exchange Online, Teams, SharePoint, and Azure identity.",
    icon: "cloud",
  },
  {
    title: "Network, Security & Automation",
    desc: "Sophos firewall, VLAN/VPN, enterprise Wi-Fi, plus PowerApps & PowerShell automation.",
    icon: "network",
  },
];

// Real certifications from your CV
export const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft · AZ-900",
    year: "",
    icon: "microsoft",
    detail: "Core Azure services, cloud concepts, security, pricing and support.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "",
    icon: "cloud",
    detail: "Foundational understanding of AWS cloud, services and billing.",
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    year: "",
    icon: "cloud",
    detail: "Cloud technology, digital transformation and GCP product knowledge.",
  },
];

// Real education from your CV
export const education = [
  {
    title: "MBA – Information Technology",
    issuer: "Sikkim Manipal University",
    year: "2012 – 2015",
    icon: "education",
    detail: "Postgraduate management degree specialising in Information Technology.",
  },
  {
    title: "BCA – Computer Applications",
    issuer: "TMV University, Pune",
    year: "2009 – 2012",
    icon: "education",
    detail: "Bachelor of Computer Applications — foundations of IT & development.",
  },
];

// Real experience from your CV — hover to expand each role
export const experience = [
  {
    role: "Systems Administrator",
    org: "Mukwano Industries Uganda Ltd",
    period: "Sep 2022 – Present",
    summary:
      "Oversee enterprise IT infrastructure and Microsoft 365 operations across multi-plant environments, supporting the Head of IT in digital transformation and stable IT operations.",
    icon: "server",
    details: [
      "Manage enterprise IT infrastructure across a multi-plant environment.",
      "Lead a team of 5 (3 IT Support, 2 SAP Support).",
      "Own the Microsoft 365 ecosystem including governance and security.",
      "Deploy and manage Nextcloud, HESK Helpdesk and Metabase.",
      "Drive PowerApps automation and workflow initiatives.",
      "Provide infrastructure support for HRMS, the SAP environment and DMS.",
      "Implemented enterprise Wi-Fi using Ruijie devices across plants.",
      "Automated Microsoft 365 operations using PowerShell.",
      "Supported Spine HRMS integration with Matrix biometric devices.",
    ],
    tags: ["Microsoft 365", "Networking", "PowerShell", "Nextcloud", "Leadership"],
  },
  {
    role: "Senior Team Lead – Office 365",
    org: "Shivaami Cloud Services",
    period: "Jan 2017 – Aug 2022",
    summary:
      "Led global Office 365 deployment and support projects across India, UAE and Africa while managing teams and delivering large-scale enterprise implementations.",
    icon: "cloud",
    details: [
      "Delivered 250+ international and 500+ domestic projects.",
      "Completed 20+ onsite deployments and training programs.",
      "Managed L1–L3 support teams and escalations.",
      "Handled Exchange Online, DNS (SPF, DKIM, DMARC) and tenant configurations.",
      "Provided customer training and ensured adoption.",
      "Managed Microsoft reseller operations and licensing.",
    ],
    tags: ["Office 365", "Exchange Online", "DNS", "Team Management"],
  },
  {
    role: "IT Support & Infrastructure",
    org: "Earlier Experience",
    period: "Before 2017",
    summary:
      "Managed enterprise IT support and infrastructure across Active Directory, SCCM, Citrix and helpdesk operations.",
    icon: "network",
    details: [
      "Managed enterprise IT support, Active Directory, SCCM and Citrix.",
      "Ran helpdesk and ticketing systems with strong SLA focus.",
      "Handled user support, asset management and vendor coordination.",
    ],
    tags: ["Active Directory", "SCCM", "Citrix", "Helpdesk"],
  },
];
