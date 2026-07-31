"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft, FiArrowRight, FiCheck, FiStar, FiBookOpen, FiAward, FiClock,
  FiImage, FiX, FiExternalLink, FiGift,
} from "react-icons/fi";
import { profile, topics, formats, tierMeta, plans } from "@/data/trainingPlans";
import { getIcon } from "@/components/icons";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const TIER_ORDER = ["basics", "advanced", "pro", "expert", "onrequest"];

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
  const [material, setMaterial] = useState(null);

  const topicObj = topics.find((t) => t.key === topic);
  const availableFormats = topicObj.formats;
  const availableTiers = useMemo(
    () => TIER_ORDER.filter((k) => plans[topic]?.[format]?.[k]),
    [topic, format]
  );

  const pickTopic = (k) => {
    const tObj = topics.find((x) => x.key === k);
    const newFormat = tObj.formats[0];
    const tiers = TIER_ORDER.filter((tt) => plans[k]?.[newFormat]?.[tt]);
    setTopic(k); setFormat(newFormat);
    setTier(tiers.includes(tier) ? tier : tiers[0]);
  };
  const pickFormat = (f) => {
    const tiers = TIER_ORDER.filter((tt) => plans[topic]?.[f]?.[tt]);
    setFormat(f);
    setTier(tiers.includes(tier) ? tier : tiers[0]);
  };

  const plan = plans[topic]?.[format]?.[tier];
  const formatObj = formats[format];
  const isPhased = Boolean(plan?.isPhased);
  const cardTitle = `${topicObj.label} · ${formatObj.label} · ${tierMeta[tier]?.label ?? ""}`;

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
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-6">Training <span className="text-gradient">Catalogue</span></h1>
            <p className="text-muted mt-4 max-w-2xl">Choose an application, your format, then a package.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {/* 1 · APPLICATION */}
            <p className="text-xs font-mono text-accent mb-3">1 · CHOOSE APPLICATION</p>
            <div className="flex flex-wrap gap-3">
              {topics.map((t) => {
                const Icon = getIcon(t.icon); const on = t.key === topic;
                return (
                  <button key={t.key} data-hover onClick={() => pickTopic(t.key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-bold transition-all ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:border-accent/50 hover:text-text"}`}>
                    <Icon size={18} /> {t.label}
                  </button>
                );
              })}
            </div>
            <p className="text-muted text-sm mt-2">{topicObj.blurb}</p>

            {/* 2 · FORMAT */}
            <p className="text-xs font-mono text-accent mt-8 mb-3">2 · CHOOSE FORMAT</p>
            <div className="flex flex-wrap gap-3">
              {availableFormats.map((f) => {
                const Icon = getIcon(formats[f].icon); const on = f === format;
                return (
                  <button key={f} data-hover onClick={() => pickFormat(f)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:border-accent/50 hover:text-text"}`}>
                    <Icon size={16} /> {formats[f].label}
                  </button>
                );
              })}
            </div>
            <p className="text-muted text-sm mt-2">{formatObj.blurb}</p>

            {/* 3 · PACKAGE */}
            <p className="text-xs font-mono text-accent mt-8 mb-3">3 · CHOOSE PACKAGE</p>
            <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl border border-line bg-surface/50">
              {availableTiers.map((k) => {
                const on = k === tier;
                return (
                  <button key={k} data-hover onClick={() => setTier(k)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${on ? "bg-gradient-to-r from-accent to-accent2 text-bg shadow" : "text-muted hover:text-text"}`}>
                    {tierMeta[k].label}
                    <span className={`ml-1.5 text-[11px] font-mono ${on ? "text-bg/80" : "text-muted"}`}>{tierMeta[k].mins}</span>
                  </button>
                );
              })}
            </div>

            {/* DETAIL CARD */}
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
                        <p className="text-xs font-mono text-accent mt-2 flex items-center gap-1.5"><FiClock size={13} /> {tierMeta[tier].mins}</p>
                      </div>
                      <div className="text-4xl font-extrabold text-gradient">{plan.price}</div>
                    </div>

                    {/* ---------- CORPORATE: 4-PHASE VIEW ---------- */}
                    {isPhased ? (
                      <>
                        {plan.summary && <p className="text-muted mt-5 max-w-3xl">{plan.summary}</p>}

                        <div className="mt-6">
                          <div className="text-[11px] font-mono text-accent/70 mb-4">THE 4-PHASE PROGRAMME</div>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {plan.phases.map((p, i) => (
                              <motion.div key={p.t} data-hover
                                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                                whileHover={{ y: -4 }}
                                className={`relative rounded-2xl p-5 border transition-colors ${p.free ? "border-emerald-500/50 bg-emerald-500/5" : "border-line bg-surface/60 hover:border-accent/60"}`}>
                                {/* free badge */}
                                {p.free && (
                                  <span className="absolute -top-3 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white flex items-center gap-1">
                                    <FiGift size={11} /> FREE
                                  </span>
                                )}
                                <div className="flex items-center gap-2">
                                  <span className={`w-8 h-8 rounded-lg text-bg font-bold text-sm flex items-center justify-center ${p.free ? "bg-emerald-500" : "bg-gradient-to-br from-accent to-accent2"}`}>
                                    {p.n}
                                  </span>
                                  <h4 className="font-bold">{p.t}</h4>
                                </div>
                                <p className="text-[13px] text-muted mt-2 leading-relaxed">{p.d}</p>
                                <ul className="mt-3 space-y-1.5">
                                  {p.acts.map((a) => (
                                    <li key={a} className="flex items-start gap-1.5 text-[11px] text-muted">
                                      <FiCheck size={11} className={`mt-0.5 shrink-0 ${p.free ? "text-emerald-500" : "text-accent"}`} /> {a}
                                    </li>
                                  ))}
                                </ul>
                                {/* connector arrow */}
                                {i < plan.phases.length - 1 && (
                                  <FiArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 z-10" size={16} />
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* ---------- STANDARD: includes / modules / outcomes ---------- */
                      <div className="mt-6 grid md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={13} /></span>What&apos;s Included</h3>
                          <ul className="space-y-2">{plan.includes.map((f) => (<li key={f} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span><span className="text-muted">{f}</span></li>))}</ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiBookOpen size={13} /></span>What We&apos;ll Cover</h3>
                          <ul className="space-y-2">{plan.modules.map((m, k) => (<li key={m} className="flex gap-2.5 text-sm"><span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span><span className="text-muted">{m}</span></li>))}</ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiAward size={13} /></span>Outcomes</h3>
                          <ul className="space-y-2">{plan.outcomes.map((o) => (<li key={o} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span><span className="text-muted">{o}</span></li>))}</ul>
                        </div>
                      </div>
                    )}

                    {/* CTA row */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href={bookLink(topicObj.label, formatObj.label, tierMeta[tier].label)} target="_blank" rel="noopener noreferrer" data-hover
                        className="px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
                        {plan.cta || "Book this package"} →
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
