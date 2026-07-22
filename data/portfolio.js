// =====================================================================
//  EDIT EVERYTHING HERE — the whole site reads from this one file.
//  "icon" fields are string KEYS mapped in components/icons.js.
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  firstName: "Krishna",
  role: "Systems Administrator & Full-Stack Builder",
  tagline:
    "IT professional from Kampala with 10+ years across enterprise infrastructure, Microsoft 365 and networking — now building self-hosted platforms and custom web apps that teams actually rely on every day.",
  location: "Kampala, Uganda",
  email: "your.email@example.com", // ← update
  // Put your photo at public/profile.jpg then set this to "/profile.jpg"
  photo: "/profile.svg",
  resumeUrl: "",
};

export const stats = [
  { value: "10+", label: "Years in IT" },
  { value: "M365", label: "Administration" },
  { value: "∞", label: "Self-hosted apps" },
];

export const socials = [
  { name: "GitHub", handle: "@krishnaandhe", url: "https://github.com/krishnaandhe", icon: "github" },
  { name: "LinkedIn", handle: "in/krishnaandhe", url: "https://www.linkedin.com/in/", icon: "linkedin" },
  { name: "Email", handle: "your.email@example.com", url: "mailto:your.email@example.com", icon: "mail" },
  { name: "X (Twitter)", handle: "@krishnaandhe", url: "https://x.com/", icon: "x" },
  { name: "Telegram", handle: "@krishnaandhe", url: "https://t.me/", icon: "telegram" },
  { name: "WhatsApp", handle: "Chat with me", url: "https://wa.me/", icon: "whatsapp" },
];

// Tech stack — shown as a STATIC glowing grid (2–3 rows)
export const stack = [
  { name: "Microsoft 365", icon: "microsoft" },
  { name: "Windows Server", icon: "windows" },
  { name: "Ubuntu", icon: "ubuntu" },
  { name: "Linux", icon: "linux" },
  { name: "Docker", icon: "docker" },
  { name: "Nginx", icon: "nginx" },
  { name: "PHP", icon: "php" },
  { name: "MariaDB", icon: "mariadb" },
  { name: "MySQL", icon: "mysql" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "n8n", icon: "n8n" },
  { name: "PowerShell", icon: "powershell" },
  { name: "Leaflet", icon: "leaflet" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm an experienced IT professional with 10+ years in IT infrastructure, systems administration, Microsoft 365, networking and enterprise operations.",
    "I build practical, open-source-first solutions — self-hosting platforms like Nextcloud, Baserow and n8n, and shipping custom PHP apps across Windows Server, Ubuntu and Docker.",
    "I care about clean architecture, security, and tools real teams actually use.",
  ],
};

// =====================================================================
//  PROJECTS
//  - `featuredProjects` are ALWAYS shown first (great for private repos
//    like Route Arc that won't come from GitHub).
//  - `github` controls the AUTO-PULL of your public repositories.
// =====================================================================
export const featuredProjects = [
  {
    title: "Route Arc",
    subtitle: "Self-hosted Fleet & Trip Booking System",
    description:
      "PHP + MariaDB platform with role-aware access, Leaflet/OpenStreetMap route mapping, universal ratings and smart pre-fill booking.",
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
  username: "krishnaandhe", // ← your GitHub username
  enabled: true, // set false to turn OFF auto-pull entirely
  max: 6, // max number of repos to show
  exclude: ["krishnaandhe.github.io", "krishnaandhe"], // repo names to hide
  includeForks: false, // show forked repos?
  onlyTopic: "", // e.g. "showcase" → only repos tagged with this GitHub topic
  sort: "updated", // "updated" | "stars"
};

export const services = [
  {
    title: "IT Infrastructure",
    desc: "Design, deployment and maintenance of on-prem and self-hosted infrastructure across Windows and Linux.",
    icon: "server",
  },
  {
    title: "Microsoft 365 Administration",
    desc: "Tenant management, Teams, SharePoint, security, and end-user support & training.",
    icon: "cloud",
  },
  {
    title: "Custom Web Applications",
    desc: "Full-stack PHP / JavaScript apps with clean RBAC, modular design and thoughtful UI/UX.",
    icon: "code",
  },
];

// =====================================================================
//  EXPERIENCE — expandable timeline (Tim Gesemann style).
//  Click a role to reveal `details` + `tags`. Add as much as you like.
// =====================================================================
export const experience = [
  {
    role: "Systems Administrator",
    org: "Mukwano Group",
    period: "Present",
    summary:
      "End-to-end IT operations, Microsoft 365, Teams & SharePoint, plus self-hosted application deployment.",
    icon: "server",
    details: [
      "Manage the full Microsoft 365 tenant — Exchange, Teams, SharePoint and security policies.",
      "Deploy and maintain self-hosted apps (Nextcloud, Baserow, n8n) on Windows Server, Ubuntu and Docker.",
      "Designed and shipped Route Arc, an internal PHP/MariaDB fleet & trip booking platform.",
      "Own SSL, reverse-proxy (Nginx Proxy Manager) and backup strategy across services.",
    ],
    tags: ["Microsoft 365", "Docker", "Windows Server", "Ubuntu", "Nginx"],
  },
  {
    role: "IT Infrastructure & Operations",
    org: "Enterprise IT",
    period: "10+ yrs",
    summary:
      "Networking, firewalls, Hyper-V virtualization and full server lifecycle management.",
    icon: "network",
    details: [
      "Built and maintained virtualized environments on Hyper-V (NAT vs external switch design).",
      "Configured firewalls, VLANs and secure remote access across sites.",
      "Handled full hardware lifecycle — procurement, deployment and decommissioning.",
      "Diagnosed complex network issues using tcpdump, ss and netstat.",
    ],
    tags: ["Networking", "Hyper-V", "Firewalls", "Linux"],
  },
  {
    role: "End-User Support & Training",
    org: "Cross-functional",
    period: "Ongoing",
    summary:
      "Hardware lifecycle, onboarding documentation and hands-on training across user roles.",
    icon: "users",
    details: [
      "Authored help-center docs and interactive flow diagrams for business processes.",
      "Created onboarding guides for Admin, Employee, Driver and Fleet Manager roles.",
      "Delivered hands-on training and responsive first-line support.",
    ],
    tags: ["Documentation", "Training", "Support"],
  },
  {
    role: "Automation & Integration",
    org: "Internal Projects",
    period: "Recent",
    summary:
      "Built reminder and workflow automations with n8n + Baserow, integrated with email and APIs.",
    icon: "code",
    details: [
      "Designed an expiry-tracking system with configurable email reminders via Gmail SMTP.",
      "Built n8n workflows: scheduled triggers, Baserow reads, conditional logic and notifications.",
      "Explored WhatsApp and SMS notification channels for future expansion.",
    ],
    tags: ["n8n", "Baserow", "Automation", "APIs"],
  },
];
