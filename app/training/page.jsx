"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft, FiShield, FiCheck, FiStar, FiBookOpen, FiClock,
  FiFileText, FiAward, FiEye, FiX, FiDownload,
} from "react-icons/fi";
import { trainingDetails, profile } from "@/data/portfolio";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

function bookLink(name) {
  const m = encodeURIComponent(`Hi Krishna, I'm interested in your "${name}" Microsoft 365 training. Could you share availability?`);
  return profile.whatsapp ? `https://wa.me/${profile.whatsapp}?text=${m}` : `mailto:${profile.email}?subject=${encodeURIComponent("Training enquiry: " + name)}&body=${m}`;
}

function PreviewModal({ item, onClose }) {
  const src = item.file || item.image;
  const isPdf = item?.type === "pdf" || src?.toLowerCase().endsWith(".pdf");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.95, y: 10, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 10, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl glass rounded-2xl border border-line overflow-hidden">
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <h3 className="font-bold truncate">{item.name}</h3>
          <button data-hover onClick={onClose} className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors"><FiX size={18} /></button>
        </div>
        <div className="p-5">
          {isPdf
            ? <object data={src} type="application/pdf" className="w-full h-[65vh] rounded-lg bg-white"><p className="text-muted text-sm">Preview unavailable. <a href={src} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open PDF ↗</a></p></object>
            : /* eslint-disable-next-line @next/next/no-img-element */ <img src={src} alt={item.name} className="w-full max-h-[65vh] object-contain rounded-lg bg-white" />}
        </div>
        <div className="flex items-center justify-end gap-3 p-5 border-t border-line">
          <a href={src} target="_blank" rel="noopener noreferrer" data-hover className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2"><FiEye size={15} /> Open full</a>
          {item.downloadable && <a href={src} download data-hover className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2"><FiDownload size={15} /> Download</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Head({ icon: Icon, children }) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-bold mb-3">
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg"><Icon size={14} /></span>
      {children}
    </h4>
  );
}

export default function TrainingDetailsPage() {
  const [active, setActive] = useState(null);
  const d = trainingDetails;
  const materials = d.common?.materials || [];
  const cert = d.common?.certificate;

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-12 border-b border-line">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          </div>
          <div className="container">
            <a href="/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
              <FiArrowLeft size={16} /> Back to home
            </a>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-6">{d.heading}</h1>
            <p className="text-muted mt-4 max-w-2xl">{d.intro}</p>
          </div>
        </section>

        {/* Columns — row-aligned via per-section min-heights */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {d.tiers.map((t, i) => (
                <motion.div key={t.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative glass rounded-2xl p-6 flex flex-col ${t.popular ? "border-accent/70 shadow-[0_0_32px_-8px_rgb(var(--accent)/0.5)]" : ""}`}>
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1 whitespace-nowrap"><FiStar size={12} /> Popular</span>
                  )}

                  {/* HEADER — fixed height so prices align */}
                  <div style={{ minHeight: 132 }}>
                    <h3 className="text-lg font-bold">{t.name}</h3>
                    <p className="text-xs text-muted mt-1">{t.ideal}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-gradient">{t.price}</span>
                      {t.unit && <span className="text-sm text-muted">{t.unit}</span>}
                    </div>
                  </div>

                  {/* FEATURES — fixed height so the divider aligns */}
                  <div style={{ minHeight: 150 }}>
                    <ul className="space-y-2">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span>
                          <span className="text-muted">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-line my-4" />

                  {/* MODULES */}
                  <div style={{ minHeight: 210 }}>
                    <Head icon={FiBookOpen}>Course Modules</Head>
                    <ul className="space-y-2.5">
                      {t.modules.map((m, k) => (
                        <li key={m.title} className="flex gap-2.5">
                          <span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span>
                          <div>
                            <p className="text-sm font-medium leading-tight">{m.title}</p>
                            <p className="text-[11px] text-muted">{m.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-line my-4" />
                  {/* OUTCOMES */}
                  <div style={{ minHeight: 120 }}>
                    <Head icon={FiCheck}>What You&apos;ll Be Able To Do</Head>
                    <ul className="space-y-2">
                      {t.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs">
                          <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span>
                          <span className="text-muted">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-line my-4" />
                  {/* TIMING */}
                  <div style={{ minHeight: 110 }}>
                    <Head icon={FiClock}>Timing &amp; Schedule</Head>
                    <div className="rounded-xl border border-line p-3">
                      <p className="text-sm text-accent flex items-center gap-1.5"><FiClock size={13} /> {t.timing.duration}</p>
                      <p className="text-[11px] text-muted mt-1">{t.timing.when}</p>
                    </div>
                  </div>
                  <div className="border-t border-line my-4" />
                  {/* CERTIFICATE note */}
                  {cert && (
                    <div style={{ minHeight: 72 }}>
                      <Head icon={FiAward}>{cert.label}</Head>
                      <p className="text-[11px] text-muted -mt-1">{cert.note}</p>
                    </div>
                  )}

                  {/* BOOK — pinned bottom */}
                  <a href={bookLink(t.name)} target="_blank" rel="noopener noreferrer" data-hover
                    className={`mt-auto pt-5 text-center`}>
                    <span className={`block px-4 py-3 rounded-full text-sm font-semibold transition ${t.popular ? "bg-accent text-bg hover:opacity-90" : "border border-line hover:border-accent hover:text-accent"}`}>
                      {t.cta}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* shared materials row */}
            {materials.length > 0 && (
              <div className="mt-14">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FiFileText className="text-accent" /> Training Materials</h3>
                <p className="text-muted text-sm mb-5">Click to preview — samples only, full materials provided with booking.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {materials.map((m) => (
                    <button key={m.name} type="button" data-hover onClick={() => setActive(m)}
                      className="text-left glass rounded-xl p-4 flex items-center gap-3 hover:border-accent/60 transition-colors">
                      <span className="w-10 h-10 shrink-0 rounded-lg bg-accent/15 text-accent flex items-center justify-center"><FiFileText size={18} /></span>
                      <span><span className="text-sm font-medium block">{m.name}</span><span className="text-[11px] text-accent inline-flex items-center gap-1"><FiEye size={11} /> Preview</span></span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER — Back to Portfolio + Verify your credential (side by side) */}
        <footer className="py-12 border-t border-line">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition">
              <FiArrowLeft size={16} /> Back to Portfolio
            </a>
            <a href="/verify/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-bg transition-colors">
              <FiShield size={16} /> Verify your credential
            </a>
          </div>
        </footer>
      </main>

      <AnimatePresence>{active && <PreviewModal item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </>
  );
}
