// =====================================================================
//  data/portfolio.js  —  v10a (adds short Testimonials strip under Training)
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  firstName: "Krishna",
  role: "IT Manager - Cloud, Microsoft 365 & Digital Transformation",
  tagline:
    "Results-driven IT professional with 10+ years across enterprise infrastructure, Microsoft 365 and digital transformation. I lead multi-plant IT operations and a team of 5, aligning IT strategy with business goals to deliver scalable, cost-effective solutions — with 750+ deployment projects delivered.",
  handwritten: "let's build something great",
  locationNote:
    "Indian national 🇮🇳 · Based in Kampala, Uganda 🇺🇬 · Open to global relocation 🌍",
  location: "Kampala, Uganda",
  email: "krishna.andhe@gmail.com",
  photo: "/profile.png",
  resumeUrl: "/resume.pdf",
  whatsapp: "256770761363",
};

// 5 stats with icon keys — rendered as the bordered strip
export const stats=[
 {value:"10+",  label:"Years Experience",         icon:"rocket"},
 {value:"500+", label:"Projects Delivered",       icon:"cloud"},
 {value:"5",    label:"IT Professionals Led",     icon:"users"},
 {value:"250+", label:"International Deployments",icon:"shield"},
 {value:"16+",  label:"Certifications",           icon:"chart"},
];

export const socials = [
  { name: "GitHub", handle: "@krishnaandhe", url: "https://github.com/krishnaandhe", icon: "github" },
  { name: "LinkedIn", handle: "in/krishnaandhe", url: "https://www.linkedin.com/in/", icon: "linkedin" }, // ← update
  { name: "Email", handle: "krishna.andhe@gmail.com", url: "mailto:krishna.andhe@gmail.com", icon: "mail" },
  { name: "WhatsApp", handle: "+91 9029535054", url: "https://wa.me/919029535054", icon: "whatsapp" },
  { name: "X (Twitter)", handle: "@krishnaandhe", url: "https://x.com/", icon: "x" }, // ← update or remove
  { name: "Telegram", handle: "@krishnaandhe", url: "https://t.me/", icon: "telegram" }, // ← update or remove
];

export const stack = [
  { name: "Microsoft 365", icon: "microsoft", level: 95 },
  { name: "Azure Cloud & Identity", icon: "cloud", level: 85 },
  { name: "Exchange Online", icon: "mail", level: 90 },
  { name: "Network & Security (Sophos)", icon: "network", level: 85 },
  { name: "PowerShell", icon: "powershell", level: 82 },
  { name: "PowerApps & Automation", icon: "n8n", level: 78 },
  { name: "Active Directory / SCCM", icon: "users", level: 82 },
  { name: "Virtualization & Cloud", icon: "server", level: 85 },
  { name: "Google Workspace", icon: "cloud", level: 88 },
  { name: "MySQL / Databases", icon: "mysql", level: 78 },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a Systems Administrator at Mukwano Industries Uganda with over a decade of experience designing, implementing and managing systems — with deep specialisation in virtualization and cloud infrastructure.",
    "I led a team to migrate critical applications to the cloud, achieving a 30% reduction in operational costs, and I bring 5+ years of leading IT teams to deploy, support and train on Office 365 — improving user experience and cutting support tickets by 50%.",
    "Backed by an MBA in Information Technology and known for leadership, training and project management, I'm actively growing toward IT Manager and IT Head roles.",
  ],
  highlights: [
    "Led cloud migration → 30% cost reduction",
    "Reduced operational costs by ~40%",
    "Cut support tickets by ~50%",
    "5+ years leading & training Office 365 products",
    "750+ projects across India, UAE & Africa",
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
    link: "https://github.com/krishnaandhe/Route_Arc",
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
  username: "krishnaandhe",
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
    desc: "Lead IT operations and support teams, aligning infrastructure with business goals.",
    icon: "users",
  },
  {
    title: "Microsoft 365 & Cloud Apps",
    desc: "M365 governance, Exchange Online, Azure identity and Google Workspace administration.",
    icon: "cloud",
  },
  {
    title: "Training & Enablement",
    desc: "Corporate and 1-on-1 Microsoft 365 training, onboarding and adoption programs.",
    icon: "cert",
  },
  {
    title: "Digital Transformation, Delivered Start to Finish",
    desc: "Lead organisations through the full digital-transformation journey — from first assessment to lasting adoption — turning Microsoft 365 into measurable business value.",
    icon: "cert",
  },
];

export const training = {
  heading: "Microsoft 365 Training",
  intro: "Hands-on Microsoft 365 training — online, live and interactive.",
  note: "Rates are indicative (USD). Custom curricula and local currency available on request.",

  tiers: [
    // ── 1) 1-ON-1 SESSION — END USER ──
    {
      name: "1-on-1 Session",
      audience: "For End Users",
      icon: "user",
      ideal: "Individuals getting confident with Microsoft 365",
      price: "$25",
      unit: "/ hour",
      duration: "60 minutes",
      when: "Flexible — evenings & weekends",
      mode: "Live online · screen-shared · interactive",
      popular: false,
      includes: [
        "1-on-1 live session, tailored to you",
        "Real examples using your own files/inbox",
        "Q&A anytime during the session",
        "Follow-up notes + quick-reference guide",
        "Course completion certificate",
      ],
      modules: [
        { t: "Outlook Made Easy", d: "Email, calendar, meetings, rules & etiquette." },
        { t: "Microsoft Teams", d: "Chat, calls, meetings & sharing files." },
        { t: "OneDrive & SharePoint", d: "Save, sync, share & co-author safely." },
        { t: "Word · Excel · PowerPoint", d: "Everyday tips that save time." },
        { t: "Staying Secure", d: "MFA, safe links & password habits." },
      ],
      outcomes: [
        "Use Outlook, Teams & OneDrive with confidence",
        "Collaborate & share files the right way",
        "Work faster with everyday shortcuts",
        "Spot and avoid common security risks",
      ],
      cta: "Book my session",
    },

    // ── 2) GROUP / TEAM — GROUP OF END USERS ──
    {
      name: "Group / Team",
      audience: "For a Group of End Users",
      icon: "users",
      ideal: "Small teams learning Microsoft 365 together",
      price: "$120",
      unit: "/ session",
      duration: "90 minutes",
      when: "Scheduled slots, Mon–Sat",
      mode: "Live workshop · up to 10 people · interactive",
      popular: true,
      includes: [
        "90-minute live team workshop (up to 10)",
        "Role-based, real-world scenarios",
        "Session recording + resource pack",
        "Team adoption checklist",
        "Completion certificate for each attendee",
      ],
      modules: [
        { t: "Getting Started Together", d: "Portal tour & everyday apps overview." },
        { t: "Teams for Collaboration", d: "Channels, meetings & shared files." },
        { t: "SharePoint & OneDrive", d: "Team libraries, sharing & versioning." },
        { t: "Co-authoring in Office", d: "Work on docs together in real time." },
        { t: "Team Security Basics", d: "Safe sharing, MFA & good habits." },
      ],
      outcomes: [
        "Collaborate efficiently as a team",
        "Use the right app for each task",
        "Share & co-author without confusion",
        "Adopt consistent, secure work habits",
      ],
      cta: "Book a workshop",
    },

    // ── 3) ADMIN TRAINING — IT ADMIN ──
    {
      name: "Admin Training",
      audience: "For IT Admins",
      icon: "admin",
      ideal: "IT admins & power users managing the tenant",
      price: "$60",
      unit: "/ hour",
      duration: "1–2 hours",
      when: "By appointment",
      mode: "Live online · hands-on admin console",
      popular: false,
      includes: [
        "Admin-focused 1-on-1 or small-group session",
        "Live walkthroughs in the M365 admin center",
        "Best-practice governance & security guidance",
        "PowerShell starter scripts",
        "Follow-up admin checklist + certificate",
      ],
      modules: [
        { t: "Tenant Administration", d: "Users, licensing, roles & groups." },
        { t: "Exchange · Teams · SharePoint Admin", d: "Core service administration." },
        { t: "Security & Compliance", d: "MFA, Conditional Access, policies, DLP." },
        { t: "PowerShell for M365", d: "Automate common admin tasks." },
        { t: "Monitoring & Reporting", d: "Health, usage & audit essentials." },
      ],
      outcomes: [
        "Manage users, licensing & governance",
        "Harden tenant security confidently",
        "Automate routine tasks with PowerShell",
        "Report on health, usage & compliance",
      ],
      cta: "Book admin training",
    },

    // ── 4) CORPORATE PROGRAM — DIGITAL TRANSFORMATION (TRAINING + ADOPTION) ──
    {
      name: "Corporate Program",
      audience: "Digital Transformation",
      icon: "corporate",
      ideal: "Company-wide training, rollout & adoption",
      price: "On request",
      unit: "",
      duration: "Multi-session",
      when: "Custom calendar · onsite / hybrid",
      mode: "Blended · role-based tracks · change management",
      popular: false,
      includes: [
        "Discovery & tailored curriculum",
        "Multi-session, role-based training tracks",
        "Change management & adoption plan",
        "Train-the-trainer to build internal champions",
        "Progress reporting + certificates for staff",
      ],
      modules: [
        { t: "Discovery & Planning", d: "Assess needs, define success & curriculum." },
        { t: "Rollout & Enablement", d: "Phased training across departments." },
        { t: "Adoption & Change Mgmt", d: "Drive real usage & behaviour change." },
        { t: "Train-the-Trainer", d: "Enable internal champions to sustain it." },
        { t: "Measure & Improve", d: "Adoption metrics & continuous improvement." },
      ],
      outcomes: [
        "Organisation-wide Microsoft 365 adoption",
        "Reduced support load & higher productivity",
        "Sustainable internal training capability",
        "Measurable digital-transformation outcomes",
      ],
      cta: "Request a quote",
    },
  ],
};

// =====================================================================
//  TESTIMONIALS — short & simple. Add/edit freely (quote + who).
// =====================================================================
export const testimonials = [
  {
    quote:
      "Krishna made our Microsoft 365 rollout painless — clear, patient and genuinely knowledgeable.",
    name: "IT Manager",
    role: "Manufacturing Company",
  },
  {
    quote:
      "The best Office 365 training our team has had. Practical, hands-on and easy to follow.",
    name: "HR Lead",
    role: "Corporate Client",
  },
  {
    quote:
      "Great trainer — explained complex admin tasks simply and answered every question.",
    name: "Trainee",
    role: "1-on-1 Session",
  },
];

export const events = [
  // 🎓 Trainer / attended certs — CLICKABLE (open preview modal)
  {
    name: "Microsoft Ignite",
    image: "/events/ignite.jpg",        // scan in public/events/
    link: "",                           // optional verify link
    detail: "Attendee — Microsoft Ignite",
  },
  { name: "M365 Trainer Certificate", image: "/events/m365-trainer.jpg", link: "https://credential-link", detail: "Delivered Microsoft 365 corporate training", },
  { name: "Google Cloud Onboard: App Development", image: "/events/gcp-appdev.jpg", link: "https://credential-link", detail: "Application development on GCP", },
  { name: "AWS Innovate 2018", image: "/events/aws-innovate18.jpg", link: "https://credential-link", detail: "AWS Innovate 2018 Online Event", },
  { name: "AWS Innovate 2019", image: "/events/aws-innovate19.jpg", link: "https://credential-link", detail: "AWS Innovate 2019 Online Event", },

  { name: "AWSOME DAY 2018", image: "/events/awsome-day18.jpg", link: "https://credential-link", detail: "AWSOME DAY Online Conference 2018", },
  { name: "AWSOME DAY 2019", image: "/events/awsome-day19.jpg", link: "https://credential-link", detail: "AWSOME DAY Online Conference 2019", },
  { name: "AWSOME DAY 2020", image: "/events/awsome-day20.jpg", link: "https://credential-link", detail: "AWSOME DAY Online Conference 2020", },
  { name: "AWSOME DAY 2023", image: "/events/awsome-day23.jpg", link: "https://credential-link", detail: "AWSOME DAY Online Conference 2023", },
  { name: "AWSOME DAY 2024", image: "/events/awsome-day24.jpg", link: "https://credential-link", detail: "AWSOME DAY Online Conference 2024", },


  { name: "AWS SUMMIT ONLINE 2020", image: "/events/aws-summit20.jpg", link: "", detail: "AWS SUMMIT ONLINE 2020", },
  { name: "AWS Innovate ML-Ai 2019", image: "/events/aws-mlai19.jpg", link: "https://credential-link", detail: "AWS Innovate ML-AI 2019 Online Event", },
  { name: "AWS Innovate ML-Ai 2020", image: "/events/aws-mlai20.jpg", link: "https://credential-link", detail: "AWS Innovate ML-AI 2020 Online Event", },

  // ✦ Plain mentions — non-clickable fun chips (no image yet)
  "GITEX Technology Week",
];

export const certifications = [
  { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", category: "Microsoft & Azure", icon: "microsoft", detail: "Core Azure services, cloud concepts, security and pricing.", image: "/certs/az-900.jpg", verifyUrl: "https://learn.microsoft.com/en-us/users/KrishnaAndhe-3735/credentials/88C36A0782D3DAE" },
  { title: "Azure Administrator (AZ-104)", issuer: "KodeKloud", category: "Microsoft & Azure", icon: "microsoft", detail: "Managing Azure identities, storage, compute and networking.", image: "/certs/az-104.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2DF633B28FBC-2D143D25FA65" },
  { title: "Azure Solutions Expert (AZ-305)", issuer: "KodeKloud", category: "Microsoft & Azure", icon: "microsoft", detail: "Designing infrastructure, data and application solutions on Azure.", image: "/certs/az-305.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2ED7E870ADB4-2D143D25FA65" },
  { title: "Microsoft 365 Administration", issuer: "LinkedIn Learning", category: "Microsoft & Azure", icon: "microsoft", detail: "M365 tenant administration, governance and security.", image: "/certs/m365-admin.jpg", verifyUrl: "" },
  { title: "M365 Essentials for Administrators", issuer: "LinkedIn Learning", category: "Microsoft & Azure", icon: "microsoft", detail: "Core administrative skills across the Microsoft 365 suite.", image: "/certs/m365-essentials.jpg", verifyUrl: "" },
  { title: "Cloud Management with MS Intune", issuer: "LinkedIn Learning", category: "Microsoft & Azure", icon: "microsoft", detail: "Cloud Management with Microsoft Intune", image: "/certs/ms-intune.jpg", verifyUrl: "" },
  { title: "Microsoft Security,Compliance,Identity (SC-900)", issuer: "Udemy", category: "Microsoft & Azure", icon: "microsoft", detail: "Security & Compliance Administration", image: "/certs/sc-900.jpg", verifyUrl: "" },
  { title: "AWS Cloud Practitioner", issuer: "KodeKloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Foundational AWS cloud, services and billing knowledge.", image: "/certs/aws-cp.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2EDF1A84CB0F-2D143D25FA65" },
  { title: "GCP Cloud Digital Leader", issuer: "KodeKloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Google Cloud technology and digital transformation.", image: "/certs/gcp-cdl.jpg", verifyUrl: "GCP Cloud Digital Leader Certification" },
  { title: "GCP Fundamentals: Core Infrastructure", issuer: "Coursera / Google Cloud", category: "Cloud (AWS & Google)",  icon: "cloud", detail: "Google Cloud Fundamentals: Core Infrastructure", image: "/certs/gcp-fci.jpg", verifyUrl: "https://coursera.org/verify/AHM6EPZETWVK", },
  { title: "GCP Big Data and Machine Learning Fundamentals", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Foundational knowledge of big data and machine learning on Google Cloud.", image: "/certs/gcp-bdml.jpg", verifyUrl: "https://coursera.org/verify/GU2Z5N5TEMKA", },

  { title: "Google Cloud Essentials", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Application development on Google Cloud Platform.", image: "/certs/gcp-essentials.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/219962" },
  { title: "GCP DevOps Essentials", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Application development on Google Cloud Platform.", image: "/certs/gcp-devops.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/222726" },  
  { title: "Google Cloud Certified in G Suite", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Certified administration of Google's G Suite platform.", image: "/certs/gsuite-certified.jpg", verifyUrl: "" },
  { title: "G Suite Deployment & Customer Success", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Deployment planning and customer success services.", image: "/certs/gsuite-deploy.jpg", verifyUrl: "" },
  { title: "G Suite Deployment Services Specialist", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Specialist exam for G Suite deployment services.", image: "/certs/gsuite-specialist.jpg", verifyUrl: "" },
  { title: "Google Chrome: Deployment Planning", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Planning and rolling out Chrome across an organisation.", image: "/certs/chrome-planning.jpg", verifyUrl: "" },
  { title: "Chrome Deployment Credential", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Credential exam for Chrome enterprise deployment.", image: "/certs/chrome-credential.jpg", verifyUrl: "" },
  { title: "Chrome OS IT Administrator", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Credential exam for Chrome OS.", image: "/certs/chrome-osadmin.jpg", verifyUrl: "" },
  { title: "Google Workspace for IT Administrators", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Administering Google Workspace in enterprise IT.", image: "/certs/gws-itadmin.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/2523629" },
  { title: "Google Workspace Essentials", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Administering Google Workspace in enterprise IT.", image: "/certs/gws-essentials.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/149849" },
  { title: "Cisco Certified (CCNA)", issuer: "R.S.T Forum", category: "Networking & Tools", icon: "network", detail: "Routing, switching and core networking fundamentals.", image: "/certs/ccna.jpg", verifyUrl: "" },
  { title: "CloudM Migrate Advanced", issuer: "CloudM", category: "Networking & Tools", icon: "cloud", detail: "Advanced migration capabilities using CloudM Migrate.", image: "/certs/cloudm-mig-adv.jpg", verifyUrl: "" },
  { title: "Sophos Firewall Administration", issuer: "Sophos", category: "Networking & Tools", icon: "network", detail: "Firewall policies, VLAN, VPN and secure remote access.", image: "", verifyUrl: "" },
  { title: "PowerShell Automation", issuer: "Microsoft", category: "Networking & Tools", icon: "powershell", detail: "Scripting and automating administrative tasks.", image: "", verifyUrl: "" },
  { title: "Metabase Analytics", issuer: "Self-hosted", category: "Networking & Tools", icon: "code", detail: "Dashboards and SQL-based reporting.", image: "", verifyUrl: "" },
];

export const education = [
  { title: "MBA – Information Technology", issuer: "SMU University", year: "2015", icon: "education", detail: "Postgraduate management degree specialising in IT." },
  { title: "BCA – Computer Applications", issuer: "TMV University, Pune", year: "2012", icon: "education", detail: "Bachelor of Computer Applications — IT & development foundations." },
  
];

export const experience = [
  {
    role: "Systems Administrator",
    org: "Mukwano Industries Uganda Ltd",
    period: "Sep 2022 – Present",
    summary:
      "Oversee enterprise IT infrastructure and Microsoft 365 operations across multi-plant environments, supporting the Head of IT in digital transformation.",
    icon: "server",
    details: [
      "Own Microsoft 365 support & deployment (L2), including governance and security.",
      "Manage Sophos firewall administration and resolve network issues.",
      "Handle vendor and project management across plants.",
      "Conduct Office 365 training and grooming for organisation users.",
      "Work with a PowerApps developer to turn in-house forms into apps.",
      "Provide infrastructure support for HRMS, SAP environment and DMS.",
    ],
    tags: ["Microsoft 365", "Sophos", "PowerApps", "Training", "Leadership"],
  },
  {
    role: "Sr. Team Lead – Office 365",
    org: "Shivaami Cloud Services Pvt. Ltd",
    period: "Jan 2017 – Aug 2022",
    summary:
      "Led global Office 365 deployment, reseller support and project delivery across India and overseas, while managing and training support teams.",
    icon: "cloud",
    details: [
      "Delivered 250+ international and 500+ domestic Office 365 projects.",
      "Completed 20+ onsite deployments & training across India + overseas.",
      "Managed Exchange Online and domain records (MX, CNAME, SPF, DKIM, DMARC).",
      "Handled L1–L2 on Zoho Desk; escalated & followed up L3 with Microsoft Support.",
      "Managed and trained the support team; ran post-deployment client training.",
      "Ran Microsoft Reseller Panel 4+ years — customer creation & licensing.",
      "Google Workspace: migrations, GWSMO/IMAP/POP config, admin settings.",
    ],
    tags: ["Office 365", "Exchange Online", "DNS", "Team Leadership", "Reseller"],
  },
  {
    role: "IT Service Desk Executive",
    org: "Hexaware Technologies (client: Torm Shipping)",
    period: "Dec 2015 – Dec 2016",
    summary:
      "Enterprise service desk for a global shipping client — user, application and desktop management.",
    icon: "users",
    details: [
      "User & mailbox management, IP phone administration and Citrix support.",
      "SCCM OS/app deployment to new laptops & desktops; antivirus and remote support.",
      "Service desk first-response, asset & vendor management.",
    ],
    tags: ["SCCM", "Citrix", "Office 365", "Service Desk"],
  },
  {
    role: "IT Service Desk Executive",
    org: "HCL Comnet (client: SBI General Insurance)",
    period: "May 2014 – Sep 2015",
    summary:
      "Ticketing and mail support on IBM Lotus Notes with strong SLA and reporting focus.",
    icon: "network",
    details: [
      "Logged and assigned tickets via Web & HP Service Manager (HPSM).",
      "Full mail support on IBM Lotus Notes; released stuck mail on Cisco IronPort.",
      "Created and maintained monthly issue reports through to resolution.",
    ],
    tags: ["Lotus Notes", "HPSM", "IronPort", "SLA"],
  },
  {
    role: "IT Helpdesk Executive",
    org: "Vayamtech (client: MSACS)",
    period: "Sep 2013 – Apr 2014",
    summary:
      "Helpdesk support for the Maharashtra State AIDS Control Society website and users.",
    icon: "users",
    details: [
      "Resolved user & admin-level queries via phone, mail and remote support.",
      "Maintained monthly reports and records through to resolution.",
    ],
    tags: ["Helpdesk", "Remote Support", "Reporting"],
  },
  {
    role: "Data Analyst",
    org: "Shivam Enterprise Ltd",
    period: "Feb 2012 – Sep 2013",
    summary:
      "Data compilation and analysis in Excel — pivot tables, VLOOKUP/HLOOKUP and reporting.",
    icon: "code",
    details: [
      "Built pivot tables and applied VLOOKUP/HLOOKUP to generate data.",
      "Identified and corrected data issues; maintained monthly datasets.",
    ],
    tags: ["Excel", "Pivot Tables", "Data Analysis"],
  },
];

// -------- NEW: content for the /training/ sub-page --------
export const trainingDetails = {
  heading: "Training Details",
  intro:
    "Choose the training that fits you. Each option below shows its price, modules, outcomes, timing, materials and completion certificate — everything in one column.",

  // Optional: keep the Trainer vs Attendee explainer at the top
  trainerVsAttendee: {
    heading: "How the Training Works",
    subtitle: "What I bring as your trainer — and what you walk away with.",
    trainer: {
      label: "What I Bring (Trainer)",
      points: [
        "10+ years of real-world Microsoft 365 & IT experience",
        "Live, screen-shared, hands-on demos",
        "Real scenarios from actual deployments",
        "Patient, jargon-free explanations",
      ],
    },
    attendee: {
      label: "What You'll Earn (Attendee)",
      points: [
        "Practical, job-ready Microsoft 365 skills",
        "Confidence across the core apps",
        "A recording + resource pack",
        "A Course Completion Certificate",
      ],
    },
  },

  // =====================================================================
  //  COLUMN-PER-TIER — each object is one full column.
  //  Customize price + content per column freely.
  //  Shared material/certificate live in `common` (used by every column)
  //  but you can override per-tier by adding `materials`/`certificate`.
  // =====================================================================
  common: {
    materials: [
      { name: "Course Syllabus (Sample)", file: "/training/syllabus-sample.pdf", type: "pdf", downloadable: true },
      { name: "Teams Quick-Start Guide", file: "/training/teams-guide-sample.jpg", type: "image", downloadable: false },
      { name: "Security Checklist", file: "/training/security-checklist-sample.jpg", type: "image", downloadable: false },
    ],
    certificate: {
      label: "Course Completion Certificate",
      sample: "/training/certificate-sample.jpg", // "" for icon only
      note: "Add to your CV & LinkedIn (as training completed).",
    },
  },

  tiers: [
    {
      name: "1-on-1 Session",
      ideal: "Individuals upskilling",
      price: "$25",
      unit: "/ hour",
      popular: false,
      features: ["Live online, screen-shared", "Tailored to your goals", "Q&A + follow-up notes"],
      modules: [
        { title: "Getting Started with Microsoft 365", desc: "Portal tour, apps overview, security basics." },
        { title: "Outlook & Exchange Online", desc: "Mail, calendar, rules and etiquette." },
        { title: "Teams Essentials", desc: "Chat, meetings, files and calls." },
      ],
      outcomes: ["Work confidently across core M365 apps", "Apply security best practices (MFA)"],
      timing: { duration: "1 hour", when: "Flexible — evenings & weekends" },
      cta: "Book a session",
    },
    {
      name: "Group / Team",
      ideal: "Small teams (up to 10)",
      price: "$120",
      unit: "/ session",
      popular: true,
      features: ["90-minute live workshop", "Role-based scenarios", "Recording + resource pack", "Adoption checklist"],
      modules: [
        { title: "Getting Started with Microsoft 365", desc: "Portal tour, apps overview, security basics." },
        { title: "Teams for Collaboration", desc: "Channels, meetings, shared files." },
        { title: "SharePoint & OneDrive", desc: "Libraries, sharing, versioning." },
      ],
      outcomes: ["Collaborate efficiently as a team", "Adopt the right app for each task", "Apply security best practices"],
      timing: { duration: "90 minutes", when: "Scheduled slots, Mon–Sat" },
      cta: "Book a workshop",
    },
    {
      name: "Admin Trainings",
      ideal: "IT admins & power users",
      price: "$60",
      unit: "/ hour",
      popular: false,
      features: ["Tenant & user administration", "Exchange, Teams & SharePoint admin", "Security & governance", "PowerShell basics"],
      modules: [
        { title: "Tenant Administration", desc: "Users, licensing, roles." },
        { title: "Security & Compliance", desc: "MFA, policies, data protection." },
        { title: "PowerShell for M365", desc: "Automate common admin tasks." },
      ],
      outcomes: ["Manage users, licensing & governance", "Harden tenant security", "Automate with PowerShell"],
      timing: { duration: "1–2 hours", when: "By appointment" },
      cta: "Book admin training",
    },
    {
      name: "Corporate Program",
      ideal: "Companies & rollouts",
      price: "On request",
      unit: "",
      popular: false,
      features: ["Multi-session curriculum", "Migration & change management", "Train-the-trainer option", "Onsite / hybrid available", "Custom reporting"],
      modules: [
        { title: "Discovery & Planning", desc: "Assess needs, tailor curriculum." },
        { title: "Rollout & Adoption", desc: "Phased training + change management." },
        { title: "Train-the-Trainer", desc: "Enable internal champions." },
      ],
      outcomes: ["Organisation-wide adoption", "Reduced support load", "Sustainable internal capability"],
      timing: { duration: "Multi-session", when: "Custom calendar, onsite / hybrid" },
      cta: "Request a quote",
    },
  ],
};
