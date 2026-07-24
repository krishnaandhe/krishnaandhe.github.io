// =====================================================================
//  data/portfolio.js  —  v10a (adds short Testimonials strip under Training)
// =====================================================================

export const profile = {
  name: "Krishna Andhe",
  firstName: "Krishna",
  role: "Systems Administrator, IT Team Lead & M365 Trainer",
  tagline:
    "IT professional with 10+ years designing, implementing and managing systems — specialised in virtualization, cloud and Microsoft 365. I lead IT teams, deliver enterprise migrations, and train organisations & individuals on Microsoft 365.",
  locationNote:
    "Indian national 🇮🇳 · Based in Kampala, Uganda 🇺🇬 · Open to global relocation 🌍",
  location: "Kampala, Uganda",
  email: "krishna.andhe@gmail.com",
  photo: "/profile.png",
  resumeUrl: "/resume.pdf",
  whatsapp: "256770761363",
};

export const stats = [
  { value: "10+", label: "Years in IT" },
  { value: "750+", label: "Projects Delivered" },
  { value: "30%", label: "Ops Cost Reduced" },
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
    "Cut support tickets by ~50%",
    "5+ years leading & training Office 365 teams",
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
    title: "Microsoft 365 & Cloud",
    desc: "M365 governance, Exchange Online, Azure identity and Google Workspace administration.",
    icon: "cloud",
  },
  {
    title: "Training & Enablement",
    desc: "Corporate and 1-on-1 Microsoft 365 training, onboarding and adoption programs.",
    icon: "cert",
  },
];

export const training = {
  heading: "Microsoft 365 Training",
  intro:
    "I deliver hands-on Microsoft 365 training — from individual upskilling to full corporate rollout & adoption programs. Online, live and interactive.",
  note: "Rates are indicative (USD). Custom curricula and local currency available on request.",
  tiers: [
    {
      name: "1-on-1 Session",
      price: "$25",
      unit: "/ hour",
      ideal: "Individuals upskilling",
      popular: false,
      features: [
        "Live online, screen-shared",
        "Tailored to your goals",
        "Outlook, Teams, SharePoint, OneDrive",
        "Q&A + follow-up notes",
      ],
      cta: "Book a session",
    },
    {
      name: "Group / Team",
      price: "$120",
      unit: "/ session",
      ideal: "Small teams (up to 10)",
      popular: true,
      features: [
        "90-minute live workshop",
        "Role-based scenarios",
        "Admin + end-user tracks",
        "Recording + resource pack",
        "Adoption checklist",
      ],
      cta: "Book a workshop",
    },
    {
      name: "Corporate Program",
      price: "On request",
      unit: "",
      ideal: "Companies & rollouts",
      popular: false,
      features: [
        "Multi-session curriculum",
        "Migration & change management",
        "Train-the-trainer option",
        "Onsite / hybrid available",
        "Custom reporting",
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
  "Microsoft Ignite",
  "AWS Innovate 2019",
  "Google Cloud OnBoard",
  "Microsoft 365 Community",
  "Sophos Firewall Workshop",
  "GITEX Technology Week",
  "Azure Fundamentals Bootcamp",
  "PowerApps Dev Session",
  "Cybersecurity Awareness",
  "Google Workspace Admin",
  "Nextcloud Conf",
  "Docker & Containers Meetup",
];

export const certifications = [
  { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", category: "Microsoft & Azure", icon: "microsoft", detail: "Core Azure services, cloud concepts, security and pricing.", image: "/certs/az-900.jpg", verifyUrl: "https://learn.microsoft.com/en-us/users/KrishnaAndhe-3735/credentials/88C36A0782D3DAE" },
  { title: "Azure Administrator (AZ-104)", issuer: "KodeKloud", category: "Microsoft & Azure", icon: "microsoft", detail: "Managing Azure identities, storage, compute and networking.", image: "/certs/az-104.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2DF633B28FBC-2D143D25FA65" },
  { title: "Azure Solutions Expert (AZ-305)", issuer: "KodeKloud", category: "Microsoft & Azure", icon: "microsoft", detail: "Designing infrastructure, data and application solutions on Azure.", image: "/certs/az-305.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2ED7E870ADB4-2D143D25FA65" },
  { title: "Microsoft 365 Administration", issuer: "LinkedIn Learning", category: "Microsoft & Azure", icon: "microsoft", detail: "M365 tenant administration, governance and security.", image: "/certs/m365-admin.jpg", verifyUrl: "" },
  { title: "M365 Essentials for Administrators", issuer: "LinkedIn Learning", category: "Microsoft & Azure", icon: "microsoft", detail: "Core administrative skills across the Microsoft 365 suite.", image: "/certs/m365-essentials.jpg", verifyUrl: "" },
  { title: "AWS Cloud Practitioner", issuer: "KodeKloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Foundational AWS cloud, services and billing knowledge.", image: "/certs/aws-cp.jpg", verifyUrl: "https://learn.kodekloud.com/certificate/2D144358E78B-2EDF1A84CB0F-2D143D25FA65" },
  { title: "AWS Innovate 2019", issuer: "Amazon Web Services", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Cloud innovation, architecture and modern services.", image: "/certs/aws-innovate.jpg", verifyUrl: "" },
  { title: "GCP Cloud Digital Leader", issuer: "KodeKloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Google Cloud technology and digital transformation.", image: "/certs/gcp-cdl.jpg", verifyUrl: "GCP Cloud Digital Leader Certification" },
  { title: "GCP Fundamentals: Core Infrastructure", issuer: "Coursera / Google Cloud", category: "Cloud (AWS & Google)",  icon: "cloud", detail: "Google Cloud Fundamentals: Core Infrastructure", image: "/certs/gcp-fci.jpg", verifyUrl: "https://coursera.org/verify/AHM6EPZETWVK", },
  { title: "GCP Big Data and Machine Learning Fundamentals", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Foundational knowledge of big data and machine learning on Google Cloud.", image: "/certs/gcp-bdml.jpg", verifyUrl: "https://coursera.org/verify/GU2Z5N5TEMKA", },
  { title: "Google Cloud Onboard: App Development", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Application development on Google Cloud Platform.", image: "/certs/gcp-appdev.jpg", verifyUrl: "" },
  { title: "Google Cloud Essentials", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Application development on Google Cloud Platform.", image: "/certs/gcp-essentials.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/219962" },  
  { title: "Google Cloud Certified in G Suite", issuer: "Google Cloud", category: "Cloud (AWS & Google)", icon: "cloud", detail: "Certified administration of Google's G Suite platform.", image: "/certs/gsuite-certified.jpg", verifyUrl: "" },
  { title: "G Suite Deployment & Customer Success", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Deployment planning and customer success services.", image: "/certs/gsuite-deploy.jpg", verifyUrl: "" },
  { title: "G Suite Deployment Services Specialist", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Specialist exam for G Suite deployment services.", image: "/certs/gsuite-specialist.jpg", verifyUrl: "" },
  { title: "Google Chrome: Deployment Planning", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Planning and rolling out Chrome across an organisation.", image: "/certs/chrome-planning.jpg", verifyUrl: "" },
  { title: "Chrome Deployment Credential", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Credential exam for Chrome enterprise deployment.", image: "/certs/chrome-credential.jpg", verifyUrl: "" },
  { title: "Google Workspace for IT Administrators", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Administering Google Workspace in enterprise IT.", image: "/certs/gws-itadmin.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/2523629" },
  { title: "Google Workspace Essentials", issuer: "Google", category: "Google Workspace & Chrome", icon: "cloud", detail: "Administering Google Workspace in enterprise IT.", image: "/certs/gws-essentials.jpg", verifyUrl: "https://partner.skills.google/public_profiles/166563c8-a655-4700-947c-9afed6679716/badges/149849" },
  { title: "Cisco Certified (CCNA)", issuer: "R.S.T Forum", category: "Networking & Tools", icon: "network", detail: "Routing, switching and core networking fundamentals.", image: "/certs/ccna.jpg", verifyUrl: "" },
  { title: "Sophos Firewall Administration", issuer: "Sophos", category: "Networking & Tools", icon: "network", detail: "Firewall policies, VLAN, VPN and secure remote access.", image: "", verifyUrl: "" },
  { title: "PowerShell Automation", issuer: "Microsoft", category: "Networking & Tools", icon: "powershell", detail: "Scripting and automating administrative tasks.", image: "", verifyUrl: "" },
  { title: "Metabase Analytics", issuer: "Self-hosted", category: "Networking & Tools", icon: "code", detail: "Dashboards and SQL-based reporting.", image: "", verifyUrl: "" },
];

export const education = [
  { title: "MBA – Information Technology", issuer: "Sikkim Manipal University", year: "2012 – 2015", icon: "education", detail: "Postgraduate management degree specialising in IT." },
  { title: "BCA – Computer Applications", issuer: "TMV University, Pune", year: "2009 – 2012", icon: "education", detail: "Bachelor of Computer Applications — IT & development foundations." },
  { title: "HSC", issuer: "Mumbai University", year: "2006 – 2008", icon: "education", detail: "Higher Secondary Certificate." },
  { title: "SSC", issuer: "Mumbai University", year: "2005 – 2006", icon: "education", detail: "Secondary School Certificate." },
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
