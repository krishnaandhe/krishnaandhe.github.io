"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft, FiCheck, FiEye, FiDownload, FiX, FiFileText,
  FiBookOpen, FiClock, FiAward, FiUser, FiUsers, FiStar,
} from "react-icons/fi";
import { trainingDetails, profile } from "@/data/portfolio";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

function bookLink(name) {
  const m = encodeURIComponent(
    `Hi Krishna, I'm interested in your "${name}" Microsoft 365 training. Could you share availability?`
  );
  return profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${m}`
    : `mailto:${profile.email}?subject=${encodeURIComponent("Training enquiry: " + name)}&body=${m}`;
}

function PreviewModal({ item, onClose }) {
  const src = item.file || item.image;
  const isPdf = item?.type === "pdf" || src?.toLowerCase().endsWith(".pdf");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.94, y: 12, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.94, y: 12, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass rounded-2xl border border-line overflow-hidden">
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <div className="min-w-0"><h3 className="font-bold truncate">{item.name}</h3>
            {item.detail && <p className="text-xs text-muted truncate">{item.detail}</p>}</div>
          <button data-hover onClick={onClose} aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors"><FiX size={18} /></button>
        </div>
        <div className="p-5">
          {isPdf ? (
            <object data={src} type="application/pdf" className="w-full h-[65vh] rounded-lg bg-white">
              <p className="text-muted text-sm">Preview unavailable. <a href={src} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open PDF ↗</a></p>
            </object>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={src} alt={item.name} className="w-full max-h-[65vh] object-contain rounded-lg bg-white" />
          )}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 p-5 border-t border-line">
          <a href={src} target="_blank" rel="noopener noreferrer" data-hover
             className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2"><FiEye size={15} /> Open full</a>
          {item.downloadable && (
            <a href={src} download data-hover
               className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2"><FiDownload size={15} /> Download</a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* small labeled sub-heading inside a column */
function Head({ icon: Icon, children }) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-bold mt-6 mb-3">
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg"><Icon size={14} /></span>
      {children}
    </h4>
  );
}

function TierColumn({ tier, common, onPreview, i }) {
  const materials = tier.materials || common.materials || [];
  const cert = tier.certificate || common.certificate;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={`relative glass rounded-2xl p-6 flex flex-col ${
        tier.popular ? "border-accent/70 shadow-[0_0_32px_-8px_rgb(var(--accent)/0.5)]" : ""
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1 whitespace-nowrap">
          <FiStar size={12} /> Popular
        </span>
      )}

      {/* Header: name + price + features */}
      <h3 className="text-lg font-bold">{tier.name}</h3>
      <p className="text-xs text-muted mt-1">{tier.ideal}</p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gradient">{tier.price}</span>
        {tier.unit && <span className="text-sm text-muted">{tier.unit}</span>}
      </div>
      <ul className="mt-4 space-y-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span>
            <span className="text-muted">{f}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-line my-5" />

      {/* Modules */}
      {tier.modules?.length > 0 && (
        <>
          <Head icon={FiBookOpen}>Course Modules</Head>
          <ul className="space-y-2.5">
            {tier.modules.map((m, k) => (
              <li key={m.title} className="flex gap-2.5">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span>
                <div>
                  <p className="text-sm font-medium leading-tight">{m.title}</p>
                  <p className="text-[11px] text-muted">{m.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Outcomes */}
      {tier.outcomes?.length > 0 && (
        <>
          <Head icon={FiCheck}>What You&apos;ll Be Able To Do</Head>
          <ul className="space-y-2">
            {tier.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-xs">
                <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span>
                <span className="text-muted">{o}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Timing */}
      {tier.timing && (
        <>
          <Head icon={FiClock}>Timing &amp; Schedule</Head>
          <div className="rounded-xl border border-line p-3">
            <p className="text-sm text-accent flex items-center gap-1.5"><FiClock size={13} /> {tier.timing.duration}</p>
            <p className="text-[11px] text-muted mt-1">{tier.timing.when}</p>
          </div>
        </>
      )}

      {/* Materials */}
      {materials.length > 0 && (
        <>
          <Head icon={FiFileText}>Training Materials</Head>
          <div className="space-y-2">
            {materials.map((m) => (
              <button key={m.name} type="button" data-hover
                onClick={() => onPreview({ ...m, detail: "Sample material" })}
                className="w-full text-left flex items-center gap-2.5 rounded-lg border border-line p-2.5 hover:border-accent/60 transition-colors">
                <span className="w-7 h-7 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiFileText size={13} /></span>
                <span className="min-w-0">
                  <span className="text-xs font-medium block truncate">{m.name}</span>
                  <span className="text-[10px] text-accent inline-flex items-center gap-1"><FiEye size={9} /> Preview</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Certificate */}
      {cert && (
        <>
          <Head icon={FiAward}>{cert.label}</Head>
          <button type="button" data-hover
            onClick={() => cert.sample && onPreview({ name: cert.label, file: cert.sample, type: "image", detail: "Sample completion certificate" })}
            className="w-full text-left rounded-xl border border-line p-3 hover:border-accent/60 transition-colors">
            {cert.sample ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cert.sample} alt="Certificate sample" className="w-full rounded-lg bg-white object-contain" />
                <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent"><FiEye size={11} /> Preview certificate</span>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 text-center">
                <FiAward className="text-accent mb-2" size={32} />
                <p className="text-[11px] text-muted">Certificate on completion</p>
              </div>
            )}
          </button>
          {cert.note && <p className="text-[11px] text-muted mt-2">{cert.note}</p>}
        </>
      )}

      {/* Book button — pinned to bottom */}
      <a href={bookLink(tier.name)} target="_blank" rel="noopener noreferrer" data-hover
        className={`mt-6 text-center px-4 py-3 rounded-full text-sm font-semibold transition ${
          tier.popular ? "bg-accent text-bg hover:opacity-90" : "border border-line hover:border-accent hover:text-accent"
        }`}>
        {tier.cta}
      </a>
    </motion.div>
  );
}

export default function TrainingDetailsPage() {
  const [active, setActive] = useState(null);
  const d = trainingDetails;
  const tv = d.trainerVsAttendee;

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
            <a href="/" data-hover
               className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
              <FiArrowLeft size={16} /> Back to home
            </a>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-6">{d.heading}</h1>
            <p className="text-muted mt-4 max-w-2xl">{d.intro}</p>
          </div>
        </section>

        {/* Trainer vs Attendee */}
        {tv && (
          <section className="py-12 border-b border-line">
            <div className="container">
              <div className="max-w-2xl">
                <span className="text-sm font-mono text-accent">✦ HOW IT WORKS</span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">{tv.heading}</h2>
                {tv.subtitle && <p className="text-muted mt-2">{tv.subtitle}</p>}
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg"><FiUser size={20} /></span>
                    <h3 className="font-bold">{tv.trainer.label}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {tv.trainer.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 w-5 h-5 shrink-0 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={12} /></span>
                        <span className="text-muted">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-2xl p-6 border-accent/40">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-accent2 to-accent flex items-center justify-center text-bg"><FiUsers size={20} /></span>
                    <h3 className="font-bold">{tv.attendee.label}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {tv.attendee.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 w-5 h-5 shrink-0 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={12} /></span>
                        <span className="text-muted">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* COLUMN-PER-TIER GRID */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Training Options &amp; Rates</h2>
            <p className="text-muted mb-10 text-sm">Each column has its own price, modules, outcomes, timing, materials & certificate.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {d.tiers.map((tier, i) => (
                <TierColumn key={tier.name} tier={tier} common={d.common} onPreview={setActive} i={i} />
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-line text-center">
          <a href="/" data-hover
             className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition">
            <FiArrowLeft size={16} /> Back to Portfolio
          </a>
        </footer>
      </main>

      <AnimatePresence>
        {active && <PreviewModal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
