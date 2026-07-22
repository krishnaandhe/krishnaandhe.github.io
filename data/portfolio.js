// =====================================================================
//  YOUR PORTFOLIO CONTENT — edit everything here in one place.
//  Change text, links, and projects; the whole site updates.
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  role: "Systems Administrator & Full-Stack Builder",
  tagline:
    "I design, deploy and maintain self-hosted business systems — from enterprise IT infrastructure to custom web applications.",
  location: "Kampala, Uganda",
  email: "your.email@example.com", // ← update
  resumeUrl: "", // optional: link to a PDF resume
};

export const socials = [
  { name: "GitHub", url: "https://github.com/krishnaandhe", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/", icon: "linkedin" }, // ← update
  { name: "Email", url: "mailto:your.email@example.com", icon: "mail" }, // ← update
];

export const stats = [
  { value: "10+", label: "Years in IT" },
  { value: "M365", label: "Administration" },
  { value: "Self-hosted", label: "Infrastructure" },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an experienced IT professional with over a decade in IT infrastructure, systems administration, Microsoft 365, networking and enterprise IT operations.",
    "I build practical, open-source-first solutions — self-hosting platforms like Nextcloud, Baserow, n8n and custom PHP applications on Windows Server, Ubuntu and Docker.",
    "I care about clean architecture, security, and building tools that real teams actually use day to day.",
  ],
};

export const skills = [
  "Microsoft 365 & Teams",
  "Windows Server / IIS",
  "Ubuntu / Linux",
  "Docker & Containers",
  "Networking & Firewalls",
  "PHP & MariaDB/MySQL",
  "JavaScript / React",
  "Nginx Proxy Manager",
  "n8n Automation",
  "PowerShell",
];

export const projects = [
  {
    title: "Route Arc",
    subtitle: "Self-hosted Fleet & Trip Booking System",
    description:
      "A PHP + MariaDB platform for trip booking and fleet management with role-aware access (Employee, HOD, Fleet Manager, Admin), route mapping via Leaflet/OpenStreetMap, universal ratings and a smart pre-fill booking flow.",
    tags: ["PHP", "MariaDB", "Leaflet", "RBAC"],
    link: "",
    badge: "Flagship Project",
  },
  {
    title: "Expiry Tracking System",
    subtitle: "Contracts / Licenses / Certifications Reminders",
    description:
      "A multi-user reminder system built on Baserow + n8n + Gmail SMTP — configurable email alerts before expiry dates, browser and mobile access, with room for WhatsApp notifications.",
    tags: ["Baserow", "n8n", "Automation"],
    link: "",
    badge: "Automation",
  },
  {
    title: "M365 Management Console",
    subtitle: "Web-based PowerShell Admin (Concept)",
    description:
      "An AdminDroid-style web console that runs PowerShell scripts in the background through a clean web interface for day-to-day Office 365 administration.",
    tags: ["PowerShell", "Web", "M365"],
    link: "",
    badge: "In Planning",
  },
  {
    title: "IT Infrastructure & Self-Hosting",
    subtitle: "Nextcloud · Baserow · n8n · NPM · Portainer",
    description:
      "End-to-end deployment and maintenance of self-hosted services across Windows Server (IIS), Ubuntu (Hyper-V) and Docker, fronted by Nginx Proxy Manager with SSL.",
    tags: ["Docker", "Ubuntu", "Nginx"],
    link: "",
    badge: "Infrastructure",
  },
];

export const services = [
  {
    title: "IT Infrastructure",
    desc: "Design, deployment and maintenance of on-prem and self-hosted infrastructure across Windows and Linux.",
  },
  {
    title: "Microsoft 365 Administration",
    desc: "Tenant management, Teams, SharePoint, security and end-user support and training.",
  },
  {
    title: "Custom Web Applications",
    desc: "Full-stack PHP / JavaScript apps with clean RBAC, modular design and thoughtful UI/UX.",
  },
];
