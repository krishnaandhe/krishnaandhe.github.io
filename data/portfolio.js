// =====================================================================
//  EDIT EVERYTHING HERE — the whole site reads from this one file.
//  "icon" fields are string KEYS mapped to real icons inside components
//  (see components/icons.js). Unmapped keys fall back to a default icon.
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  firstName: "Krishna",
  role: "Systems Administrator & Full-Stack Builder",
  // Slightly richer hero description (still concise & scannable)
  tagline:
    "IT professional from Kampala with 10+ years across enterprise infrastructure, Microsoft 365 and networking — now building self-hosted platforms and custom web apps that teams actually rely on every day.",
  location: "Kampala, Uganda",
  email: "your.email@example.com", // ← update
  resumeUrl: "", // optional PDF link
};

// 3 stats keeps the hero balanced (odd number reads best)
export const stats = [
  { value: "10+", label: "Years in IT" },
  { value: "M365", label: "Administration" },
  { value: "∞", label: "Self-hosted apps" },
];

// Socials — add as many as you like; Contact renders them as 3D tilt cards.
export const socials = [
  { name: "GitHub", handle: "@krishnaandhe", url: "https://github.com/krishnaandhe", icon: "github" },
  { name: "LinkedIn", handle: "in/krishnaandhe", url: "https://www.linkedin.com/in/", icon: "linkedin" }, // ← update
  { name: "Email", handle: "your.email@example.com", url: "mailto:your.email@example.com", icon: "mail" }, // ← update
  { name: "X (Twitter)", handle: "@krishnaandhe", url: "https://x.com/", icon: "x" }, // ← update or remove
  { name: "Telegram", handle: "@krishnaandhe", url: "https://t.me/", icon: "telegram" }, // ← update or remove
  { name: "WhatsApp", handle: "Chat with me", url: "https://wa.me/", icon: "whatsapp" }, // ← update or remove
];

// Tech marquee — each shows ICON + NAME
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

// Projects — each card shows ICON + NAME
export const projects = [
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
  {
    title: "M365 Management Console",
    subtitle: "Web-based PowerShell Admin (Concept)",
    description:
      "An AdminDroid-style web console running PowerShell in the background through a clean web UI for day-to-day Office 365 administration.",
    tags: ["PowerShell", "Web", "M365"],
    link: "",
    badge: "In Planning",
    icon: "terminal",
  },
  {
    title: "Self-Hosting Stack",
    subtitle: "Nextcloud · Baserow · n8n · NPM · Portainer",
    description:
      "End-to-end deployment across Windows Server (IIS), Ubuntu (Hyper-V) and Docker, fronted by Nginx Proxy Manager with SSL.",
    tags: ["Docker", "Ubuntu", "Nginx"],
    link: "",
    badge: "Infrastructure",
    icon: "server",
  },
];

// Services — each shows ICON + NAME
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

// Experience — CONCISE, informative. Rendered as 3D tilt cards.
export const experience = [
  {
    role: "Systems Administrator",
    org: "Mukwano Group",
    period: "Present",
    summary: "End-to-end IT operations, M365, Teams & SharePoint, plus self-hosted app deployment.",
    icon: "server",
  },
  {
    role: "IT Infrastructure & Operations",
    org: "Enterprise IT",
    period: "10+ yrs",
    summary: "Networking, firewalls, Hyper-V virtualization and full server lifecycle management.",
    icon: "network",
  },
  {
    role: "End-User Support & Training",
    org: "Cross-functional",
    period: "Ongoing",
    summary: "Hardware lifecycle, onboarding docs and hands-on training across user roles.",
    icon: "users",
  },
];
