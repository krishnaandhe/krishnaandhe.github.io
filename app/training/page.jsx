"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft, FiArrowRight, FiCheck, FiStar, FiBookOpen, FiAward, FiClock,
  FiImage, FiX, FiExternalLink,
} from "react-icons/fi";
import { profile, topics, formats, tierMeta, plans } from "@/data/trainingPlans";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const TIER_ORDER = ["basics", "advanced", "pro", "expert"];

function bookLink(topicLabel, formatLabel, tierLabel) {
  const msg = encodeURIComponent(
    `Hi Krishna, I'm interested in "${topicLabel} · ${formatLabel} · ${tierLabel}" training. Could you share availability?`
  );
  return profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${msg}`
    : `mailto:${profile.email}?subject=${encodeURIComponent(`Training: ${topicLabel} · ${formatLabel} · ${tierLabel}`)}&body=${msg}`;
}

/* ---- Material image popup ---- */
function MaterialModal({ src, title, onClose }) {
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
          <div className="min-w-0">
            <h3 className="font-bold truncate">Training Material</h3>
            <p className="text-xs text-muted truncate">{title}</p>
          </div>
          <button data-hover onClick={onClose} aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
            <FiX size={18} />
          </button>
        </div>
        <div className="p-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${title} — training material`} className="w-full max-h-[65vh] object-contain rounded-lg bg-white" />
        </div>
        <div className="flex items-center justify-end gap-3 p-5 border-t border-line">
          <a href={src} target="_blank" rel="noopener noreferrer" data-hover
            className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
            <FiExternalLink size={15} /> Open full
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TrainingPage() {
  const [topic, setTopic] = useState(topics[0].key);
  const [format, setFormat] = useState(topics[0].formats[0]);
  const [tier, setTier] = useState("basics");
  const [material, setMaterial] = useState(null); // { src, title } | null

  const topicObj = topics.find((t) => t.key === topic);
  const availableFormats = topicObj.formats;
  const availableTiers = useMemo(
    () => TIER_ORDER.filter((k) => plans[topic]?.[format]?.[k]),
    [topic, format]
  );

  const pickFormat = (f) => {
    const tiers = TIER_ORDER.filter((tt) => plans[topic]?.[f]?.[tt]);
    setFormat(f);
    setTier(tiers.includes(tier) ? tier : tiers[0]);
  };

  const plan = plans[topic]?.[format]?.[tier];
  const isCorporate = format === "corporate";
  const formatObj = formats[format];
  const cardTitle = `${topicObj.label} · ${formatObj.label} · ${tierMeta[tier].label}`;

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen">
        <section className="relative overflow-hidden pt-16 pb-10 border-b border-line">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          </div>
          <div className="container">
            <a href="/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
              <FiArrowLeft size={16} /> Back to home
            </a>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-6">Microsoft 365 <span className="text-gradient">Training</span></h1>
            <p className="text-muted mt-4 max-w-2xl">Choose your format & package. Preview the training material or book directly.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {/* format */}
            <p className="text-xs font-mono text-accent mb-3">1 · CHOOSE YOUR FORMAT</p>
            <div className="flex flex-wrap gap-3">
              {availableFormats.map((f) => {
                const on = f === format;
                return (
                  <button key={f} data-hover onClick={() => pickFormat(f)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:border-accent/50 hover:text-text"}`}>
                    {formats[f].label}
                  </button>
                );
              })}
            </div>

            {/* tier */}
            <p className="text-xs font-mono text-accent mt-8 mb-3">2 · CHOOSE YOUR PACKAGE</p>
            <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl border border-line bg-surface/50">
              {availableTiers.map((k) => {
                const on = k === tier;
                return (
                  <button key={k} data-hover onClick={() => setTier(k)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${on ? "bg-gradient-to-r from-accent to-accent2 text-bg shadow" : "text-muted hover:text-text"}`}>
                    {tierMeta[k].label}<span className={`ml-1.5 text-[11px] font-mono ${on ? "text-bg/80" : "text-muted"}`}>{tierMeta[k].mins}</span>
                  </button>
                );
              })}
            </div>

            {/* detail card */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {plan && (
                  <motion.div key={topic + format + tier} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
                    className={`glass rounded-2xl p-6 sm:p-8 relative ${plan.popular ? "border-accent/70 shadow-[0_0_40px_-10px_rgb(var(--accent)/0.5)]" : ""}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-8 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1"><FiStar size={12} /> Most Popular</span>
                    )}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-extrabold">{cardTitle}</h2>
                        <p className="text-muted text-sm mt-1">{plan.ideal}</p>
                        <p className="text-xs font-mono text-accent mt-2 flex items-center gap-1.5"><FiClock size={13} /> {tierMeta[tier].mins} · live online</p>
                      </div>
                      <div className="text-4xl font-extrabold text-gradient">{plan.price}</div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={13} /></span>{isCorporate ? "Deliverables" : "What's Included"}</h3>
                        <ul className="space-y-2">{plan.includes.map((f) => (<li key={f} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span><span className="text-muted">{f}</span></li>))}</ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiBookOpen size={13} /></span>{isCorporate ? "Phase Activities" : "What We'll Cover"}</h3>
                        <ul className="space-y-2">{plan.modules.map((m, k) => (<li key={m} className="flex gap-2.5 text-sm"><span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span><span className="text-muted">{m}</span></li>))}</ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiAward size={13} /></span>Outcomes</h3>
                        <ul className="space-y-2">{plan.outcomes.map((o) => (<li key={o} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span><span className="text-muted">{o}</span></li>))}</ul>
                      </div>
                    </div>

                    {/* CTA row — Book + Training Material (if material exists) */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href={bookLink(topicObj.label, formatObj.label, tierMeta[tier].label)} target="_blank" rel="noopener noreferrer" data-hover
                        className="px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
                        {isCorporate ? "Request a proposal" : "Book this package"} →
                      </a>

                      {plan.material && (
                        <button data-hover onClick={() => setMaterial({ src: plan.material, title: cardTitle })}
                          className="px-7 py-3.5 rounded-full border border-accent text-accent font-semibold hover:bg-accent hover:text-bg transition-colors inline-flex items-center gap-2">
                          <FiImage size={16} /> Training Material
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {material && <MaterialModal src={material.src} title={material.title} onClose={() => setMaterial(null)} />}
      </AnimatePresence>
    </>
  );
}
