"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  FiArrowLeft, FiArrowRight, FiChevronRight, FiCheck, FiX,
} from "react-icons/fi";
import {
  FaMagnifyingGlass, FaBullseye, FaShieldHalved, FaRocket, FaCloudArrowUp,
  FaGraduationCap, FaUsers, FaBolt, FaChartColumn, FaArrowsRotate,
  FaMicrosoft, FaGoogle, FaDropbox, FaServer, FaEnvelope, FaBuilding,
  FaArrowsSpin, FaCloud, FaFolderOpen,
} from "react-icons/fa6";
import { services, STEPS, MIGRATIONS, SHAREPOINT_PHASES } from "@/data/transformation";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const STEP_ICONS = [
  FaMagnifyingGlass, FaBullseye, FaShieldHalved, FaRocket, FaCloudArrowUp,
  FaGraduationCap, FaUsers, FaBolt, FaChartColumn, FaArrowsRotate,
];

function serviceIcon(k) {
  const map = { cycle: FaArrowsSpin, cloud: FaCloud, sharepoint: FaFolderOpen };
  return map[k] || FaCloud;
}
function migIcon(k) {
  const map = { google: FaGoogle, server: FaServer, mail: FaEnvelope, hdd: FaServer, cloud: FaDropbox, building: FaBuilding };
  return map[k] || FaCloud;
}
const normAct = (a) => (typeof a === "string" ? { t: a, pts: [] } : { t: a.t, pts: a.pts || [] });

/* ============ SERVICE CONTENT RENDERERS ============ */

function FullTransformation() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const Icon = STEP_ICONS[active];
  const pct = (active / (STEPS.length - 1)) * 100;

  return (
    <div>
      {/* rail */}
      <div className="overflow-x-auto no-scrollbar -mx-2 px-2 pb-2">
        <div className="relative min-w-[820px] pt-2">
          <div className="absolute left-6 right-6 top-[24px] h-5 rounded-full bg-surface/70 border border-line" />
          <motion.div className="absolute left-6 top-[24px] h-5 rounded-full bg-gradient-to-r from-accent to-accent2 opacity-90"
            animate={{ width: `calc((100% - 48px) * ${pct / 100})` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }} />
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
                      <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${on ? "bg-gradient-to-br from-accent to-accent2 text-bg" : "bg-surface text-accent"}`}>
                        <SIcon size={18} />
                      </span>
                    </span>
                    <span className={`mt-3 text-[11px] font-mono px-2 py-0.5 rounded-full ${on ? "bg-accent/10 text-accent" : "text-muted/70"}`}>{s.n}</span>
                    <span className={`mt-1 text-xs font-semibold ${on ? "text-text" : "text-muted group-hover:text-text"}`}>{s.t}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* step detail */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="rounded-3xl p-6 bg-surface/40 border border-line relative overflow-hidden">
            <span className="absolute -top-6 -right-2 text-[120px] font-black leading-none text-accent/5 select-none pointer-events-none">{step.n}</span>
            <div className="grid md:grid-cols-[260px_1fr] gap-8">
              <div>
                <span className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent2 text-bg items-center justify-center shadow-lg shadow-accent/30">
                  <Icon size={24} />
                </span>
                <div className="text-xs font-mono text-accent mt-4">STEP {step.n} OF 10</div>
                <h3 className="text-2xl font-extrabold mt-1">{step.t}</h3>
                <p className="text-muted text-sm mt-2">{step.d}</p>
              </div>
              <div>
                <div className="text-[11px] font-mono text-accent/70 mb-3">
                  WHAT HAPPENS HERE <span className="text-muted/60">· hover a card</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 items-start">
                  {step.acts.map((raw, k) => {
                    const a = normAct(raw);
                    return (
                      <div key={a.t} data-hover
                        className="group rounded-2xl p-4 bg-surface/70 border border-line hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all">
                        <div className="flex items-start gap-2.5">
                          <span className="w-7 h-7 shrink-0 rounded-lg bg-accent/15 text-accent font-bold text-xs flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent2 group-hover:text-bg transition-all">{k + 1}</span>
                          <p className="text-sm font-semibold leading-snug">{a.t}</p>
                        </div>
                        {a.pts.length > 0 && (
                          <>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                              <div className="overflow-hidden">
                                <ul className="mt-3 pt-3 border-t border-line/70 space-y-1.5">
                                  {a.pts.map((p) => (
                                    <li key={p} className="flex items-start gap-1.5 text-[11px] text-muted leading-snug">
                                      <FiChevronRight size={11} className="mt-0.5 shrink-0 text-accent" />{p}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <span className="mt-2 block text-[10px] text-muted/60 group-hover:hidden">Hover for details →</span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
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
  );
}

function Migrations() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {MIGRATIONS.map((m, i) => {
        const MIcon = migIcon(m.icon);
        return (
          <motion.div key={m.from} data-hover
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="group rounded-2xl p-5 bg-surface/60 border border-line hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center text-text/80"><MIcon size={20} /></span>
              <FiArrowRight className="text-muted" size={18} />
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 text-bg flex items-center justify-center"><FaMicrosoft size={18} /></span>
            </div>
            <h3 className="font-semibold mt-3">{m.from}</h3>
            <p className="text-xs text-accent">→ {m.to}</p>
            <p className="text-[13px] text-muted mt-2 leading-relaxed">{m.d}</p>
            {m.pts?.length > 0 && (
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                <div className="overflow-hidden">
                  <ul className="mt-3 pt-3 border-t border-line/70 space-y-1.5">
                    {m.pts.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-muted leading-snug">
                        <FiCheck size={11} className="mt-0.5 shrink-0 text-accent" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function SharePointUpgrade() {
  return (
    <div>
      <p className="text-muted mb-6 max-w-2xl">
        Move from classic SharePoint to the modern experience — without breaking your
        content, permissions or the way people work.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SHAREPOINT_PHASES.map((p, i) => (
          <motion.div key={p.t} data-hover
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="relative rounded-2xl p-5 bg-surface/60 border border-line hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent2 text-bg font-bold text-sm flex items-center justify-center">{p.n}</span>
              <h4 className="font-bold">{p.t}</h4>
            </div>
            <p className="text-[13px] text-muted mt-2 leading-relaxed">{p.d}</p>
            <ul className="mt-3 space-y-1.5">
              {p.pts.map((x) => (
                <li key={x} className="flex items-start gap-1.5 text-[11px] text-muted leading-snug">
                  <FiCheck size={11} className="mt-0.5 shrink-0 text-accent" />{x}
                </li>
              ))}
            </ul>
            {i < SHAREPOINT_PHASES.length - 1 && (
              <FiArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 z-10" size={16} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ==================== PAGE ==================== */
export default function Transformation() {
  const [openKey, setOpenKey] = useState(null);
  const openService = services.find((s) => s.key === openKey);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen">
        {/* HERO */}
        <section className="relative overflow-hidden pt-16 pb-10 border-b border-line">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent2/15 blur-3xl" />
            <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
          </div>
          <div className="container">
            <a href="/#transformation" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
              <FiArrowLeft size={16} /> Back to home
            </a>
            <div className="text-center mt-8">
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                Let&apos;s do <span className="text-gradient">Digital Transformation</span>
              </h1>
              <p className="text-muted mt-4 max-w-2xl mx-auto">
                Pick a service to explore how I deliver it — end to end, with measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES — morph & expand */}
        <section className="py-14">
          <div className="container">
            <LayoutGroup>
              <AnimatePresence mode="wait">
                {!openKey ? (
                  /* ---------- LANDING CARDS ---------- */
                  <motion.div key="cards" className="grid md:grid-cols-3 gap-6" exit={{ opacity: 0 }}>
                    {services.map((s, i) => {
                      const SIcon = serviceIcon(s.icon);
                      return (
                        <motion.button
                          key={s.key}
                          layoutId={`card-${s.key}`}
                          data-hover
                          onClick={() => setOpenKey(s.key)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.25, delay: i * 0.04 } }}
                          transition={{ duration: 0.45, delay: i * 0.08 }}
                          whileHover={{ y: -6 }}
                          className="text-left glass rounded-3xl p-6 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-all group"
                        >
                          <motion.span layoutId={`icon-${s.key}`}
                            className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent2 text-bg items-center justify-center shadow-lg shadow-accent/30">
                            <SIcon size={24} />
                          </motion.span>
                          <motion.h3 layoutId={`title-${s.key}`} className="text-xl font-extrabold mt-4">{s.label}</motion.h3>
                          <motion.p layoutId={`tag-${s.key}`} className="text-sm text-accent mt-1">{s.tagline}</motion.p>
                          <ul className="mt-4 space-y-1.5">
                            {s.preview.map((p) => (
                              <li key={p} className="flex items-start gap-1.5 text-[12px] text-muted leading-snug">
                                <FiCheck size={12} className="mt-0.5 shrink-0 text-accent" />{p}
                              </li>
                            ))}
                          </ul>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                            Explore <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ) : (
                  /* ---------- EXPANDED PANEL ---------- */
                  <motion.div
                    key="panel"
                    layoutId={`card-${openKey}`}
                    className="glass rounded-3xl p-6 sm:p-8"
                    transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <motion.span layoutId={`icon-${openKey}`}
                          className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent2 text-bg items-center justify-center shadow-lg shadow-accent/30">
                          {(() => { const I = serviceIcon(openService.icon); return <I size={24} />; })()}
                        </motion.span>
                        <div>
                          <motion.h2 layoutId={`title-${openKey}`} className="text-2xl sm:text-3xl font-extrabold">{openService.label}</motion.h2>
                          <motion.p layoutId={`tag-${openKey}`} className="text-sm text-accent mt-0.5">{openService.tagline}</motion.p>
                        </div>
                      </div>
                      <button data-hover onClick={() => setOpenKey(null)}
                        className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
                        <FiX size={15} /> Back to services
                      </button>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.35 }} className="mt-8">
                      {openService.layout === "steps" && openKey === "full" && <FullTransformation />}
                      {openService.layout === "cards" && <Migrations />}
                      {openService.layout === "phases" && <SharePointUpgrade />}
                    </motion.div>

                    <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                      <button data-hover onClick={() => setOpenKey(null)}
                        className="text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
                        ← Back to services
                      </button>
                      <a href="/#contact" data-hover
                        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition">
                        Start this project <FiArrowRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </section>
      </main>
    </>
  );
}
