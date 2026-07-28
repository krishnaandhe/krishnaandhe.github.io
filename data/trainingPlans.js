export const profile = { email: "krishna.andhe@gmail.com", whatsapp: "256770761363" };

// ── DIMENSION 1: TOPICS (top-level) ──
// Each topic declares which FORMATS it offers (formats can differ per topic).
export const topics = [
  { key: "m365", label: "Microsoft 365", icon: "microsoft", blurb: "Productivity, collaboration, admin & Power Platform.",
    formats: ["1on1", "group", "admin", "corporate"] },
  { key: "metabase", label: "Metabase", icon: "metabase", blurb: "Dashboards, questions & analytics on your data.",
    formats: ["1on1", "group", "corporate"] }, // no separate "admin" tenant track
];

// ── DIMENSION 2: FORMATS ──
export const formats = {
  "1on1":      { label: "1-on-1", icon: "user", blurb: "Personalised, tailored to you." },
  group:       { label: "Group / Team", icon: "users", blurb: "Learn together as a team." },
  admin:       { label: "Admin", icon: "admin", blurb: "For IT admins & power users." },
  corporate:   { label: "Corporate", icon: "corporate", blurb: "Company-wide transformation." },
};

// ── DIMENSION 3: TIERS ──
export const tierMeta = {
  basics:   { label: "Basics",   mins: "60 min" },
  advanced: { label: "Advanced", mins: "90 min" },
  pro:      { label: "Pro",      mins: "120 min" },
  expert:   { label: "Expert",   mins: "180 min" },
};

// ── PLANS[topic][format][tier] ──
export const plans = {
  // ===================== MICROSOFT 365 =====================
  m365: {
    "1on1": {
      basics:   { price: "$25", popular: false, ideal: "New / everyday users",
        includes: ["1-on-1 live, tailored", "Your own files & inbox", "Follow-up notes", "Completion certificate"],
        modules: ["Outlook — mail, calendar, rules", "Word — styles & templates", "Excel — core formulas & charts", "PowerPoint — slides & Designer", "OneDrive — save, sync, share", "Security — MFA & phishing"],
        outcomes: ["Use core M365 apps confidently", "Share files the right way", "Work faster daily", "Avoid security risks"] },
      advanced: { price: "$40", popular: true, ideal: "Confident users",
        includes: ["Everything in Basics", "Collaboration deep-dive", "Recording + resource pack", "Completion certificate"],
        modules: ["Teams — chat, meetings, channels", "SharePoint — sites & sharing", "OneNote — synced notebooks", "Forms — surveys & quizzes", "To Do & Planner — tasks", "Bookings & Whiteboard"],
        outcomes: ["Collaborate across the suite", "Manage tasks & notes", "Run better meetings", "Pick the right app"] },
      pro:      { price: "$60", popular: false, ideal: "Power users",
        includes: ["Everything in Advanced", "Automation intro", "Copilot walkthrough", "Completion certificate"],
        modules: ["Power Automate — templates & flows", "Power Apps — list-to-app intro", "Viva — Insights & Engage", "Copilot — AI across M365", "Excel PivotTables", "Search & mobile apps"],
        outcomes: ["Automate simple tasks", "Use AI to work smarter", "Advanced Office skills", "Leverage Viva"] },
      expert:   { price: "$90", popular: false, ideal: "Makers & analysts",
        includes: ["Everything in Pro", "Full Power Platform", "Hands-on build", "Completion certificate"],
        modules: ["Power Apps — canvas & model-driven", "Power Automate — advanced flows", "Power BI — reports & dashboards", "Power Pages — portals", "Dataverse overview", "Governance & best practice"],
        outcomes: ["Build apps & automations", "Create BI dashboards", "Publish portals", "Apply governance"] },
    },
    group: {
      basics:   { price: "$120", popular: false, ideal: "Teams (up to 10)",
        includes: ["90-min team workshop", "Neutral demo data", "Recording + cheat-sheets", "Certificate per attendee"],
        modules: ["Outlook — shared calendars & scheduling", "Word/Excel/PowerPoint essentials", "OneDrive — team sharing", "Security baseline — MFA for all"],
        outcomes: ["Consistent team baseline", "Secure sharing habits", "Everyday productivity", "Shared etiquette"] },
      advanced: { price: "$220", popular: true, ideal: "Collaborating teams",
        includes: ["Everything in Basics", "Team collaboration focus", "Adoption checklist", "Certificate per attendee"],
        modules: ["Teams — channels, norms, meetings", "SharePoint — sites & permissions", "Planner & To Do — team tasks", "OneNote & Forms", "Bookings & Whiteboard"],
        outcomes: ["Collaborate consistently", "Structured team files", "Shared task tracking", "Better meetings"] },
      pro:      { price: "$320", popular: false, ideal: "Progressive teams",
        includes: ["Everything in Advanced", "Automation for the team", "Copilot rollout basics", "Certificate per attendee"],
        modules: ["Power Automate — approvals & alerts", "Power Apps — shared team app", "Viva Engage & Insights", "Copilot for teams", "Excel PivotTables & Lists"],
        outcomes: ["Automate team workflows", "AI-assisted teamwork", "Shared dashboards intro", "Higher productivity"] },
      expert:   { price: "On request", popular: false, ideal: "Advanced teams",
        includes: ["Everything in Pro", "Full Power Platform for teams", "Governance guidance", "Certificate per attendee"],
        modules: ["Power Apps (deep)", "Power Automate (deep)", "Power BI — team dashboards", "Power Pages", "Dataverse overview", "Team governance"],
        outcomes: ["Team-built solutions", "Shared BI reporting", "Sustainable practices", "Governed platform use"] },
    },
    admin: {
      basics:   { price: "$60", popular: false, ideal: "New admins",
        includes: ["Admin-focused session", "Live admin-center demos", "Admin checklist", "Completion certificate"],
        modules: ["M365 Admin Center tour", "User management & bulk add", "License management", "Groups & roles (intro)", "Enable MFA & Security Defaults", "Service health & message center"],
        outcomes: ["Navigate the admin center", "Manage users & licenses", "Set up basic security", "Monitor service health"] },
      advanced: { price: "$90", popular: true, ideal: "Working admins",
        includes: ["Everything in Basics", "Core service admin", "Best-practice guidance", "Completion certificate"],
        modules: ["Exchange admin & mail flow", "Domains & DNS (SPF/DKIM/DMARC)", "SharePoint & OneDrive admin", "Teams admin & policies", "Defender basics", "Usage reporting"],
        outcomes: ["Administer core workloads", "Manage domains & mail flow", "Control sharing policies", "Read adoption reports"] },
      pro:      { price: "$130", popular: false, ideal: "Senior admins",
        includes: ["Everything in Advanced", "Identity & compliance", "PowerShell scripting", "Completion certificate"],
        modules: ["Entra ID & Conditional Access", "SSPR & identity protection", "DLP, retention & labels", "eDiscovery & audit", "PowerShell for M365", "Intune (intro)"],
        outcomes: ["Enforce Conditional Access", "Apply compliance controls", "Automate with PowerShell", "Run eDiscovery"] },
      expert:   { price: "$190", popular: false, ideal: "IT leads / architects",
        includes: ["Everything in Pro", "Governance & automation", "Platform admin", "Completion certificate"],
        modules: ["Governance framework & lifecycle", "Advanced Conditional Access / Zero Trust", "Graph API & advanced PowerShell", "Intune (deep)", "Power Platform admin & DLP", "Secure Score & licensing strategy"],
        outcomes: ["Design governance", "Automate at scale", "Manage devices & platform", "Optimise security & cost"] },
    },
    corporate: {
      basics:   { price: "On request", popular: false, ideal: "Discovery & Awareness",
        includes: ["Current-state discovery", "Opportunity overview", "Executive awareness", "Roadmap outline"],
        modules: ["Discovery of current tools", "M365 opportunity map", "High-level gap analysis", "Proposed roadmap"],
        outcomes: ["Clear starting point", "Leadership alignment", "Prioritised quick wins", "Next-step plan"] },
      advanced: { price: "On request", popular: true, ideal: "Planning & Pilot",
        includes: ["Needs assessment", "Migration assessment", "Security baseline", "Pilot definition"],
        modules: ["Department needs analysis", "Migration readiness", "Security & compliance review", "Adoption strategy draft", "Licensing & cost plan"],
        outcomes: ["Detailed plan", "De-risked pilot", "Cost clarity", "Change plan draft"] },
      pro:      { price: "On request", popular: false, ideal: "Rollout & Enablement",
        includes: ["Migration guidance", "Role-based training", "Security implementation", "Adoption tracking"],
        modules: ["Email & file migration", "Role-based training tracks", "MFA / Conditional Access rollout", "Teams/SharePoint governance", "Change management & champions"],
        outcomes: ["Smooth migration", "Trained workforce", "Secured environment", "Early adoption metrics"] },
      expert:   { price: "On request", popular: false, ideal: "Transform & Optimise",
        includes: ["Process automation", "Analytics & AI", "Train-the-trainer", "ROI measurement"],
        modules: ["Power Automate/Apps process digitisation", "Power BI business analytics", "Copilot & AI adoption", "Advanced governance & Secure Score", "Train-the-trainer", "Continuous improvement & ROI"],
        outcomes: ["Digitised processes", "Data-driven decisions", "Self-sustaining capability", "Measurable ROI"] },
    },
  },

  // ===================== METABASE =====================
  metabase: {
    "1on1": {
      basics:   { price: "$30", popular: false, ideal: "New to Metabase",
        includes: ["1-on-1 live, hands-on", "Your own data source", "Follow-up notes", "Completion certificate"],
        modules: ["Metabase tour & concepts", "Connecting a database", "Asking Questions (no SQL)", "Basic visualisations", "Saving & organising"],
        outcomes: ["Explore data without SQL", "Build basic charts", "Save & find questions", "Read your data confidently"] },
      advanced: { price: "$50", popular: true, ideal: "Regular users",
        includes: ["Everything in Basics", "Dashboards deep-dive", "Filters & parameters", "Completion certificate"],
        modules: ["Building dashboards", "Interactive filters & parameters", "Custom visualisations", "Drill-through & click behaviour", "Sharing & subscriptions"],
        outcomes: ["Design useful dashboards", "Add interactive filters", "Share & schedule reports", "Guide viewers with drill-through"] },
      pro:      { price: "$70", popular: false, ideal: "Analysts",
        includes: ["Everything in Advanced", "SQL & the query editor", "Models & metrics", "Completion certificate"],
        modules: ["Native SQL queries", "Variables & SQL filters", "Models (reusable datasets)", "Joins & custom columns", "Performance & caching tips"],
        outcomes: ["Write SQL-backed questions", "Create reusable models", "Combine multiple tables", "Optimise slow queries"] },
      expert:   { price: "$110", popular: false, ideal: "Power users / owners",
        includes: ["Everything in Pro", "Admin & embedding", "Permissions & governance", "Completion certificate"],
        modules: ["Users, groups & permissions", "Data sandboxing & row-level security", "Public links & embedding", "Alerts & subscriptions at scale", "Self-hosting & maintenance basics"],
        outcomes: ["Administer Metabase", "Control data access", "Embed analytics", "Run it reliably"] },
    },
    group: {
      basics:   { price: "$140", popular: false, ideal: "Teams (up to 10)",
        includes: ["90-min team workshop", "Shared demo dataset", "Recording + cheat-sheets", "Certificate per attendee"],
        modules: ["Metabase concepts for teams", "Asking Questions together", "Reading dashboards", "Collections & organisation"],
        outcomes: ["Team explores data", "Consistent dashboard use", "Shared collections", "Data-literate team"] },
      advanced: { price: "$240", popular: true, ideal: "Collaborating teams",
        includes: ["Everything in Basics", "Dashboards for the team", "Subscriptions & alerts", "Certificate per attendee"],
        modules: ["Team dashboards & filters", "Scheduled subscriptions", "Alerts on key metrics", "Sharing & permissions overview"],
        outcomes: ["Team-wide dashboards", "Automated report delivery", "Metric alerts", "Clear sharing model"] },
      pro:      { price: "$340", popular: false, ideal: "Data-driven teams",
        includes: ["Everything in Advanced", "SQL & models for analysts", "Governance basics", "Certificate per attendee"],
        modules: ["SQL questions & variables", "Reusable models & metrics", "Joins & custom columns", "Collections governance"],
        outcomes: ["Analysts write SQL", "Reusable data models", "Governed collections", "Trustworthy metrics"] },
    },
    corporate: {
      basics:   { price: "On request", popular: false, ideal: "Discovery & Setup",
        includes: ["Current-state & data-source review", "Deployment options (cloud/self-host)", "Roadmap outline"],
        modules: ["Data landscape discovery", "Cloud vs self-hosted plan", "Security & access model", "Rollout roadmap"],
        outcomes: ["Clear analytics plan", "Right deployment choice", "Access model defined", "Roadmap agreed"] },
      advanced: { price: "On request", popular: true, ideal: "Rollout & Enablement",
        includes: ["Install & connect sources", "Team enablement training", "Core dashboards built", "Governance setup"],
        modules: ["Deployment & DB connections", "Role-based training", "Starter dashboards & KPIs", "Permissions & collections"],
        outcomes: ["Live Metabase", "Enabled teams", "Key dashboards", "Governed access"] },
      pro:      { price: "On request", popular: false, ideal: "Scale & Optimise",
        includes: ["Embedding & data models", "Row-level security", "Performance tuning", "Train-the-trainer"],
        modules: ["Embedded analytics in apps", "Sandboxing / RLS", "Model layer & caching", "Internal champions"],
        outcomes: ["Embedded insights", "Secure multi-tenant data", "Fast dashboards", "Self-sustaining capability"] },
    },
  },
};
