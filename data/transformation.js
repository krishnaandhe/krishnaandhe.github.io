// =====================================================================
//  Digital Transformation — services + content
//  Add a new service later: add to `services` + its data block.
// =====================================================================

export const services = [
  {
    key: "full",
    label: "Full Transformation",
    tagline: "The complete 10-step lifecycle",
    icon: "cycle",
    layout: "steps",
    preview: [
      "Discover → Strategise → Secure → Pilot",
      "Migrate → Enable → Adopt → Automate",
      "Measure → Sustain (train-the-trainer)",
    ],
  },
  {
    key: "migration",
    label: "Migrations",
    tagline: "Move to Microsoft 365 — from anywhere",
    icon: "cloud",
    layout: "cards",
    preview: [
      "Google Workspace → Microsoft 365",
      "On-prem Exchange, IMAP, Zoho & Zimbra",
      "File servers, Dropbox & tenant-to-tenant",
    ],
  },
  {
    key: "sharepoint",
    label: "SharePoint Online Upgrade",
    tagline: "Classic → Modern UI, done properly",
    icon: "sharepoint",
    layout: "phases",
    preview: [
      "Assess classic sites & customisations",
      "Re-architect hubs, sites & permissions",
      "Migrate then modernise the experience",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  1) FULL TRANSFORMATION — 10 steps (activities have hover points)   */
/* ------------------------------------------------------------------ */
export const STEPS = [
  { n: "01", t: "Discover", d: "Understand your current tools, gaps & goals.",
    acts: [
      { t: "Current-state audit", pts: ["Inventory apps, licences & subscriptions", "Map infrastructure, servers & mail platform", "Review security posture & risks", "Identify duplicate or unused tools"] },
      { t: "Stakeholder interviews", pts: ["Meet department heads & key users", "Capture day-to-day pain points", "Understand business goals", "Identify potential champions"] },
      { t: "Gap analysis", pts: ["Compare current vs desired state", "Highlight capability & skills gaps", "Flag compliance shortfalls", "Prioritise quick wins"] },
    ] },
  { n: "02", t: "Strategise", d: "Design a tailored transformation roadmap.",
    acts: [
      { t: "Target architecture", pts: ["Define the future-state design", "Choose identity & tenant structure", "Plan integrations", "Document standards"] },
      { t: "Phased roadmap", pts: ["Break delivery into phases", "Set milestones & owners", "Sequence quick wins first", "Define success criteria"] },
      { t: "Licensing & cost plan", pts: ["Right-size licences per role", "Forecast monthly & annual cost", "Identify savings from retired tools", "Plan for growth"] },
    ] },
  { n: "03", t: "Secure", d: "Build a secure, well-governed foundation.",
    acts: [
      { t: "MFA & Conditional Access", pts: ["Enforce multi-factor authentication", "Risk-based access policies", "Block legacy authentication", "Trusted locations & devices"] },
      { t: "DLP & compliance", pts: ["Data loss prevention rules", "Sensitivity labels", "Retention policies", "Audit logging & alerts"] },
      { t: "Governance framework", pts: ["Group & site creation policy", "Sharing & guest access rules", "Naming & lifecycle standards", "Least-privilege admin roles"] },
    ] },
  { n: "04", t: "Pilot", d: "Prove value with a low-risk first rollout.",
    acts: [
      { t: "Pilot group", pts: ["Select representative users", "Mix roles & skill levels", "Prepare accounts & licences", "Brief them on goals"] },
      { t: "Success criteria", pts: ["Measurable pilot outcomes", "Adoption & satisfaction targets", "Go/no-go decision points", "Risks & mitigations"] },
      { t: "Feedback loop", pts: ["Check-ins during the pilot", "Collect structured feedback", "Refine config & training", "Report to stakeholders"] },
    ] },
  { n: "05", t: "Migrate", d: "Move email, files & apps with minimal disruption.",
    acts: [
      { t: "Mail migration", pts: ["Prepare domains & DNS records", "Stage mailbox batches", "Migrate mail, calendar & contacts", "Validate then cut over"] },
      { t: "Files → OneDrive/SharePoint", pts: ["Map shares to target libraries", "Preserve structure & permissions", "Migrate in waves", "Verify data integrity"] },
      { t: "Coexistence", pts: ["Run hybrid during transition", "Keep mail flow both ways", "Maintain rollback plan", "Decommission legacy safely"] },
    ] },
  { n: "06", t: "Enable", d: "Role-based training that actually sticks.",
    acts: [
      { t: "Role tracks", pts: ["Tailor content per role", "Separate user & admin tracks", "Job-relevant scenarios", "Right depth per audience"] },
      { t: "Live + recorded", pts: ["Live interactive sessions", "Recordings for absentees", "Q&A and hands-on practice", "Follow-up office hours"] },
      { t: "Resource packs", pts: ["Quick-reference guides", "Cheat-sheets & checklists", "Internal help hub", "Completion certificates"] },
    ] },
  { n: "07", t: "Adopt", d: "Drive real usage through change management.",
    acts: [
      { t: "Champions network", pts: ["Recruit departmental champions", "Early access & extra training", "Empower peer support", "Regular wins sharing"] },
      { t: "Comms plan", pts: ["Announce changes early", "Explain 'what's in it for me'", "Staged reminders & tips", "Celebrate milestones"] },
      { t: "Resistance handling", pts: ["Listen to concerns early", "Answer fears clearly", "Extra 1-on-1 support", "Show quick wins"] },
    ] },
  { n: "08", t: "Automate", d: "Streamline workflows with Power Platform.",
    acts: [
      { t: "Power Automate flows", pts: ["Find repetitive manual tasks", "Approval & notification flows", "Connect M365 to other systems", "Error handling & monitoring"] },
      { t: "Power Apps", pts: ["Replace paper & spreadsheets", "Simple role-aware apps", "Connect SharePoint / Dataverse", "Publish & share securely"] },
      { t: "Process digitisation", pts: ["Map the manual process", "Redesign digital-first", "Automate hand-offs", "Measure time saved"] },
    ] },
  { n: "09", t: "Measure", d: "Track adoption and prove ROI.",
    acts: [
      { t: "Adoption dashboards", pts: ["Active usage per app & team", "Compare against targets", "Spot low uptake early", "Share with leadership"] },
      { t: "Usage analytics", pts: ["Collaboration patterns", "Licence utilisation", "Training needs from data", "Month-over-month trends"] },
      { t: "ROI reporting", pts: ["Quantify time & cost savings", "Reduction in support tickets", "Productivity improvements", "Justify next phase"] },
    ] },
  { n: "10", t: "Sustain", d: "Build lasting, self-sufficient capability.",
    acts: [
      { t: "Train-the-trainer", pts: ["Upskill internal champions", "Trainer decks & materials", "Coach first sessions", "Sustainable training cycle"] },
      { t: "Documentation", pts: ["Config & standards documented", "Admin runbooks & how-tos", "Searchable help hub", "Kept up to date"] },
      { t: "Ongoing support", pts: ["Support & escalation model", "Periodic health checks", "Advise on new features", "Plan next improvement phase"] },
    ] },
];

/* ------------------------------------------------------------------ */
/*  2) MIGRATIONS — source → Microsoft 365                             */
/* ------------------------------------------------------------------ */
export const MIGRATIONS = [
  { icon: "google", from: "Google Workspace", to: "Microsoft 365", d: "Gmail, Drive, Calendar & Contacts → Exchange Online, OneDrive & SharePoint.",
    pts: ["Mailbox & calendar migration", "Drive → OneDrive/SharePoint", "Contacts & groups mapped", "Coexistence during cutover"] },
  { icon: "server", from: "On-Prem Exchange", to: "Exchange Online", d: "Legacy Exchange servers → Exchange Online (hybrid or cutover).",
    pts: ["Hybrid or cutover approach", "Public folders & shared mailboxes", "Autodiscover & DNS handled", "Decommission legacy servers"] },
  { icon: "mail", from: "IMAP / POP / Zoho / Zimbra", to: "Exchange Online", d: "Any IMAP-based mail system → Exchange Online mailboxes.",
    pts: ["Bulk IMAP mailbox migration", "Folder structure preserved", "DNS & mail-flow cutover", "Client reconfiguration"] },
  { icon: "hdd", from: "File Servers / NAS", to: "OneDrive & SharePoint", d: "Shared drives & folders → OneDrive & SharePoint libraries.",
    pts: ["Share-to-library mapping", "NTFS permissions translated", "Wave-based migration", "Sync client rollout"] },
  { icon: "cloud", from: "Dropbox / Box / Drive", to: "OneDrive & SharePoint", d: "Cloud file storage → OneDrive & SharePoint with permissions mapped.",
    pts: ["Content & version history", "Sharing links remapped", "External shares reviewed", "Source decommissioned"] },
  { icon: "building", from: "Tenant-to-Tenant", to: "Microsoft 365", d: "M365 → M365 during mergers, acquisitions or rebrands.",
    pts: ["Identity & domain cutover", "Mail, files & Teams moved", "Coexistence period", "Rebrand & cleanup"] },
];

/* ------------------------------------------------------------------ */
/*  3) SHAREPOINT ONLINE UPGRADE — 4 phases (classic → modern)         */
/* ------------------------------------------------------------------ */
export const SHAREPOINT_PHASES = [
  {
    n: "01", t: "Assess",
    d: "Understand what you have today — classic sites, customisations and content.",
    pts: [
      "Inventory classic sites, subsites & lists",
      "Identify custom master pages, web parts & branding",
      "Flag unsupported code (sandbox / farm solutions)",
      "Analyse content volume, age & ownership",
      "Review permissions sprawl & broken inheritance",
    ],
  },
  {
    n: "02", t: "Architect",
    d: "Design the modern information architecture before moving anything.",
    pts: [
      "Replace subsites with flat, hub-connected sites",
      "Design hub sites, navigation & search scopes",
      "Plan metadata, content types & site columns",
      "Define permissions model & M365 group alignment",
      "Set naming, lifecycle & governance standards",
    ],
  },
  {
    n: "03", t: "Migrate",
    d: "Move content safely with structure, metadata and permissions intact.",
    pts: [
      "Pilot migration with one department first",
      "Migrate documents, lists & libraries in waves",
      "Preserve version history & metadata",
      "Re-map permissions to the new model",
      "Validate content and run a cutover checklist",
    ],
  },
  {
    n: "04", t: "Modernise",
    d: "Rebuild the experience on modern UI — and make it stick.",
    pts: [
      "Rebuild pages with modern web parts",
      "Communication sites for news & intranet",
      "Replace SharePoint Designer workflows with Power Automate",
      "Apply modern branding via site themes/templates",
      "Train editors & owners, then hand over with docs",
    ],
  },
];
