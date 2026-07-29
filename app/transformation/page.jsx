"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FaMagnifyingGlass, FaBullseye, FaShieldHalved, FaRocket, FaCloudArrowUp,
  FaGraduationCap, FaUsers, FaBolt, FaChartColumn, FaArrowsRotate,
  FaMicrosoft, FaGoogle, FaDropbox, FaServer, FaEnvelope, FaBuilding,
} from "react-icons/fa6";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const STEPS = [
  { n: "01", t: "Discover", d: "Understand your current tools, gaps & goals.", acts: ["Current-state audit", "Stakeholder interviews", "Gap analysis"] },
  { n: "02", t: "Strategise", d: "Design a tailored transformation roadmap.", acts: ["Target architecture", "Phased roadmap", "Licensing & cost plan"] },
  { n: "03", t: "Secure", d: "Build a secure, well-governed foundation.", acts: ["MFA & Conditional Access", "DLP & compliance", "Governance framework"] },
  { n: "04", t: "Pilot", d: "Prove value with a low-risk first rollout.", acts: ["Pilot group", "Success criteria", "Feedback loop"] },
  { n: "05", t: "Migrate", d: "Move email, files & apps with minimal disruption.", acts: ["Mail migration", "Files → OneDrive/SharePoint", "Coexistence"] },
  { n: "06", t: "Enable", d: "Role-based training that actually sticks.", acts: ["Role tracks", "Live + recorded", "Resource packs"] },
  { n: "07", t: "Adopt", d: "Drive real usage through change management.", acts: ["Champions network", "Comms plan", "Resistance handling"] },
  { n: "08", t: "Automate", d: "Streamline workflows with Power Platform.", acts: ["Power Automate flows", "Power Apps", "Process digitisation"] },
  { n: "09", t: "Measure", d: "Track adoption and prove ROI.", acts: ["Adoption dashboards", "Usage analytics", "ROI reporting"] },
  { n: "10", t: "Sustain", d: "Build lasting, self-sufficient capability.", acts: ["Train-the-trainer", "Documentation", "Ongoing support"] },
];

// icons EXACTLY as the Style D mockup
const STEP_ICONS = [
  FaMagnifyingGlass, // 01 Discover
  FaBullseye,        // 02 Strategise
  FaShieldHalved,    // 03 Secure
  FaRocket,          // 04 Pilot
  FaCloudArrowUp,    // 05 Migrate
  FaGraduationCap,   // 06 Enable
  FaUsers,           // 07 Adopt
  FaBolt,            // 08 Automate
  FaChartColumn,     // 09 Measure
  FaArrowsRotate,    // 10 Sustain
];

// migration paths with brand logos
const MIGRATIONS = [
  { Icon: FaGoogle, from: "Google Workspace", to: "Microsoft 365", d: "Gmail, Drive, Calendar & Contacts → Exchange, OneDrive & SharePoint." },
  { Icon: FaServer, from: "On-Prem Exchange", to: "Exchange Online", d: "Legacy Exchange servers → Exchange Online (hybrid or cutover)." },
  { Icon: FaEnvelope, from: "IMAP / POP / Zoho / Zimbra", to: "Exchange Online", d: "Any IMAP mail system → Exchange Online mailboxes." },
  { Icon: FaServer, from: "File Servers / NAS", to: "OneDrive & SharePoint", d: "Shared drives & folders → OneDrive & SharePoint libraries." },
  { Icon: FaDropbox, from: "Dropbox / Box / Drive", to: "OneDrive & SharePoint", d: "Cloud file storage → OneDrive & SharePoint, permissions mapped." },
  { Icon: FaBuilding, from: "Tenant-to-Tenant", to: "Microsoft 365", d: "M365 → M365 during mergers, acquisitions or rebrands." },
];

export default function Transformation() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const Icon = STEP_ICONS[active];
  const pct = (active / (STEPS.length - 1)) * 100;

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-8 border-b border-line">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent2/15 blur-3xl" />
          </div>
          <div className="container">
            <a href="/#transformation" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
              <FiArrowLeft size={16} /> Back to home
            </a>
            <div className="text-center mt-8">
              <h1 className="text-3xl sm:text-5xl font-extrabold">
                The Complete <span className="text-gradient">Digital Transformation</span> Lifecycle
              </h1>
              <p className="text-muted mt-4 max-w-2xl mx-auto">A proven 10-step journey — from strategy to sustained impact. Hover a step to explore.</p>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-12 border-b border-line">
          <div className="container">
            {/* STYLE D RAIL: gradient-ring badges on a soft ribbon */}
            <div className="overflow-x-auto no-scrollbar -mx-2 px-2 pb-2">
              <div className="relative min-w-[820px] pt-2">
                <div className="absolute left-6 right-6 top-[24px] h-5 rounded-full bg-surface/70 border border-line" />
                <motion.div
                  className="absolute left-6 top-[24px] h-5 rounded-full bg-gradient-to-r from-accent to-accent2 opacity-90"
                  animate={{ width: `calc((100% - 48px) * ${pct / 100})` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
                <ul className="relative flex justify-between">
                  {STEPS.map((s, i) => {
                    const on = i === active, done = i < active, SIcon = STEP_ICONS[i];
                    return (
                      <li key={s.t} className="flex-1 flex flex-col items-center text-center">
                        <button data-hover onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                          className="group flex flex-col items-center">
                          <span className={`relative rounded-full p-[3px] transition-all duration-300 ${
                            on ? "bg-gradient-to-br from-accent to-accent2 scale-110 shadow-lg shadow-accent/40"
                               : done ? "bg-gradient-to-br from-accent to-accent2"
                               : "bg-line group-hover:bg-gradient-to-br group-hover:from-accent/60 group-hover:to-accent2/60"}`}>
                            <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                              on ? "bg-gradient-to-br from-accent to-accent2 text-bg" : "bg-surface text-accent"}`}>
                              <SIcon size={18} />
                            </span>
                            {on && <span className="absolute -inset-1 rounded-full ring-2 ring-accent/40 animate-pulse" />}
                          </span>
                          <span className={`mt-3 text-[11px] font-mono px-2 py-0.5 rounded-full ${on ? "bg-accent/10 text-accent" : "text-muted/70"}`}>{s.n}</span>
                          <span className={`mt-1 text-xs font-semibold transition-colors ${on ? "text-text" : "text-muted group-hover:text-text"}`}>{s.t}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* DETAIL CARD */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                  <span className="absolute -top-6 -right-2 text-[120px] font-black leading-none text-accent/5 select-none pointer-events-none">{step.n}</span>
                  <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    <div>
                      <motion.span initial={{ rotate: -12, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent2 text-bg items-center justify-center shadow-lg shadow-accent/30">
                        <Icon size={26} />
                      </motion.span>
                      <div className="text-xs font-mono text-accent mt-4">STEP {step.n} OF 10</div>
                      <h3 className="text-3xl font-extrabold mt-1">{step.t}</h3>
                      <p className="text-muted mt-3">{step.d}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-accent/70 mb-3">WHAT HAPPENS AT THIS STAGE</div>
                      <div className="flex flex-col sm:flex-row items-stretch gap-3">
                        {step.acts.map((a, k) => (
                          <motion.div key={a} initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.12 + k * 0.1, type: "spring", stiffness: 200, damping: 16 }} className="flex-1 flex items-center gap-3">
                            <div className="flex-1 rounded-2xl p-4 bg-surface/60 border border-line hover:border-accent/60 transition-colors h-full">
                              <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent font-bold text-sm flex items-center justify-center">{k + 1}</div>
                              <p className="text-sm font-medium mt-2 leading-snug">{a}</p>
                            </div>
                            {k < step.acts.length - 1 && <FiArrowRight className="hidden sm:block text-accent/50 shrink-0" size={18} />}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between relative">
                    <button data-hover onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}
                      className="text-sm font-semibold px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors disabled:opacity-30">← Prev</button>
                    <span className="text-xs text-muted font-mono">{active + 1} / {STEPS.length}</span>
                    <button data-hover onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))} disabled={active === STEPS.length - 1}
                      className="text-sm font-semibold px-4 py-2 rounded-full bg-accent text-bg hover:opacity-90 transition disabled:opacity-30">Next →</button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* MIGRATION PATHS — with brand logos */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-mono text-accent mb-2">MIGRATION EXPERTISE</p>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Migrate to <span className="text-gradient">Microsoft 365</span> — from anywhere
                </h2>
                <p className="text-muted mt-3">Whatever you&apos;re on today, I plan and execute a smooth, secure migration with minimal disruption and zero data loss.</p>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MIGRATIONS.map((m, i) => (
                <motion.div key={m.from} data-hover initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: (i % 3) * 0.06 }} whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 hover:border-accent/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center text-text/80"><m.Icon size={22} /></span>
                    <FiArrowRight className="text-muted" size={18} />
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 text-bg flex items-center justify-center"><FaMicrosoft size={20} /></span>
                  </div>
                  <h3 className="font-semibold mt-3">{m.from}</h3>
                  <p className="text-xs text-accent">→ {m.to}</p>
                  <p className="text-[13px] text-muted mt-2 leading-relaxed">{m.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-line text-center">
          <a href="/#contact" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition">
            Start your migration &amp; transformation →
          </a>
        </footer>
      </main>
    </>
  );
}
