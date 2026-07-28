"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiShield, FiCheck, FiStar, FiBookOpen, FiAward, FiClock } from "react-icons/fi";
import { profile, topics, formats, tierMeta, plans } from "@/data/trainingPlans";
import { getIcon } from "@/components/icons";
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

export default function TrainingPage() {
  const [topic, setTopic] = useState(topics[0].key);
  const [format, setFormat] = useState(topics[0].formats[0]);
  const [tier, setTier] = useState("advanced");

  const topicObj = topics.find((t) => t.key === topic);

  // formats available for the current topic
  const availableFormats = topicObj.formats;
  // tiers available for current topic+format (some have fewer, e.g. no expert)
  const availableTiers = useMemo(
    () => TIER_ORDER.filter((k) => plans[topic]?.[format]?.[k]),
    [topic, format]
  );

  // pick topic → reset format & tier to valid values
  const pickTopic = (k) => {
    const tObj = topics.find((x) => x.key === k);
    const newFormat = tObj.formats[0];
    const tiers = TIER_ORDER.filter((tt) => plans[k]?.[newFormat]?.[tt]);
    setTopic(k);
    setFormat(newFormat);
    setTier(tiers.includes(tier) ? tier : (tiers.includes("advanced") ? "advanced" : tiers[0]));
  };

  // pick format → keep tier if valid else fall back
  const pickFormat = (f) => {
    const tiers = TIER_ORDER.filter((tt) => plans[topic]?.[f]?.[tt]);
    setFormat(f);
    setTier(tiers.includes(tier) ? tier : (tiers.includes("advanced") ? "advanced" : tiers[0]));
  };

  const plan = plans[topic]?.[format]?.[tier];
  const isCorporate = format === "corporate";
  const formatObj = formats[format];
  const prevTierIndex = TIER_ORDER.indexOf(tier) - 1;
  const prevTierKey = prevTierIndex >= 0 ? TIER_ORDER[prevTierIndex] : null;
  const showIncludesNote = prevTierKey && availableTiers.includes(prevTierKey);

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
            <p className="text-muted mt-4 max-w-2xl">Choose a topic, your format, then a package. Each package builds on the one before it.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {/* STEP 1 — TOPIC */}
            <p className="text-xs font-mono text-accent mb-3">1 · CHOOSE YOUR TOPIC</p>
            <div className="flex flex-wrap gap-3">
              {topics.map((t) => {
                const Icon = getIcon(t.icon);
                const on = t.key === topic;
                return (
                  <button key={t.key} data-hover onClick={() => pickTopic(t.key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-bold transition-all ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:border-accent/50 hover:text-text"}`}>
                    <Icon size={18} /> {t.label}
                  </button>
                );
              })}
            </div>
            <p className="text-muted text-sm mt-2">{topicObj.blurb}</p>

            {/* STEP 2 — FORMAT (filtered by topic) */}
            <p className="text-xs font-mono text-accent mt-8 mb-3">2 · CHOOSE YOUR FORMAT</p>
            <div className="flex flex-wrap gap-3">
              {availableFormats.map((f) => {
                const Icon = getIcon(formats[f].icon);
                const on = f === format;
                return (
                  <button key={f} data-hover onClick={() => pickFormat(f)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:border-accent/50 hover:text-text"}`}>
                    <Icon size={16} /> {formats[f].label}
                  </button>
                );
              })}
            </div>
            <p className="text-muted text-sm mt-2">{formatObj.blurb}</p>

            {/* STEP 3 — TIER (filtered by topic+format) */}
            <p className="text-xs font-mono text-accent mt-8 mb-3">3 · CHOOSE YOUR PACKAGE</p>
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
                  <motion.div
                    key={topic + format + tier}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className={`glass rounded-2xl p-6 sm:p-8 relative ${plan.popular ? "border-accent/70 shadow-[0_0_40px_-10px_rgb(var(--accent)/0.5)]" : ""}`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-8 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1"><FiStar size={12} /> Most Popular</span>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-extrabold">{topicObj.label} · {formatObj.label} · {tierMeta[tier].label}</h2>
                        <p className="text-muted text-sm mt-1">{plan.ideal}</p>
                        <p className="text-xs font-mono text-accent mt-2 flex items-center gap-1.5"><FiClock size={13} /> {tierMeta[tier].mins} · live online</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-extrabold text-gradient">{plan.price}</div>
                      </div>
                    </div>

                    {showIncludesNote && (
                      <p className="mt-4 text-xs text-muted inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line">
                        ✓ Includes everything in {tierMeta[prevTierKey].label}
                      </p>
                    )}

                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={13} /></span>{isCorporate ? "Deliverables" : "What's Included"}</h3>
                        <ul className="space-y-2">
                          {plan.includes.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span><span className="text-muted">{f}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiBookOpen size={13} /></span>{isCorporate ? "Phase Activities" : "What We'll Cover"}</h3>
                        <ul className="space-y-2">
                          {plan.modules.map((m, k) => (
                            <li key={m} className="flex gap-2.5 text-sm"><span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span><span className="text-muted">{m}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-3"><span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center"><FiAward size={13} /></span>Outcomes</h3>
                        <ul className="space-y-2">
                          {plan.outcomes.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm"><span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span><span className="text-muted">{o}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href={bookLink(topicObj.label, formatObj.label, tierMeta[tier].label)} target="_blank" rel="noopener noreferrer" data-hover
                        className="px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
                        {isCorporate ? "Request a proposal" : "Book this package"} →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-line">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-accent text-bg hover:opacity-90 transition"><FiArrowLeft size={16} /> Back to Portfolio</a>
            <a href="/verify/" data-hover className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-bg transition-colors"><FiShield size={16} /> Verify your credential</a>
          </div>
        </footer>
      </main>
    </>
  );
}
