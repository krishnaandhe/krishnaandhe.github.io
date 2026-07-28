"use client";
import { motion } from "framer-motion";
import { FiCheck, FiStar, FiClock, FiVideo, FiBookOpen, FiAward } from "react-icons/fi";
import { training, profile } from "@/data/portfolio";
import { getIcon } from "./icons";

function bookLink(name) {
  const msg = encodeURIComponent(
    `Hi Krishna, I'm interested in your "${name}" Microsoft 365 training. Could you share availability?`
  );
  return profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${msg}`
    : `mailto:${profile.email}?subject=${encodeURIComponent("Training enquiry: " + name)}&body=${msg}`;
}

function Head({ icon: Icon, children }) {
  return (
    <h4 className="text-sm font-bold flex items-center gap-2 mb-3">
      <span className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center">
        <Icon size={13} />
      </span>
      {children}
    </h4>
  );
}

function Tier({ t, i }) {
  const Icon = getIcon(t.icon);
  return (
    <motion.div
      data-hover
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative glass rounded-2xl p-6 flex flex-col ${
        t.popular ? "border-accent/70 shadow-[0_0_32px_-8px_rgb(var(--accent)/0.5)]" : ""
      }`}
    >
      {t.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1 whitespace-nowrap">
          <FiStar size={12} /> Popular
        </span>
      )}

      {/* HEADER */}
      <div style={{ minHeight: 150 }}>
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
            <Icon size={20} />
          </span>
          <div>
            <h3 className="text-lg font-bold leading-tight">{t.name}</h3>
            {t.audience && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent inline-block mt-1">
                {t.audience}
              </span>
            )}
          </div>
        </div>
        <p className="text-xs text-muted mt-3">{t.ideal}</p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-gradient">{t.price}</span>
          {t.unit && <span className="text-sm text-muted">{t.unit}</span>}
        </div>
      </div>

      {/* QUICK FACTS */}
      <div style={{ minHeight: 64 }} className="space-y-1.5 text-[13px]">
        {t.duration && <p className="flex items-center gap-2 text-muted"><FiClock className="text-accent" size={13} /> {t.duration}</p>}
        {t.mode && <p className="flex items-center gap-2 text-muted"><FiVideo className="text-accent" size={13} /> {t.mode}</p>}
      </div>

      <div className="border-t border-line my-4" />

      {/* INCLUDES */}
      <div style={{ minHeight: 170 }}>
        <Head icon={FiCheck}>What&apos;s Included</Head>
        <ul className="space-y-2">
          {t.includes.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={10} /></span>
              <span className="text-muted">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* MODULES */}
      <div style={{ minHeight: 230 }}>
        <Head icon={FiBookOpen}>What We&apos;ll Cover</Head>
        <ul className="space-y-2.5">
          {t.modules.map((m, k) => (
            <li key={m.t} className="flex gap-2.5">
              <span className="mt-0.5 w-5 h-5 shrink-0 rounded bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">{k + 1}</span>
              <div>
                <p className="text-sm font-medium leading-tight">{m.t}</p>
                <p className="text-[11px] text-muted">{m.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* OUTCOMES */}
      <div style={{ minHeight: 130 }}>
        <Head icon={FiAward}>You&apos;ll Walk Away Able To</Head>
        <ul className="space-y-2">
          {t.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 w-4 h-4 shrink-0 rounded bg-accent/15 text-accent flex items-center justify-center"><FiCheck size={9} /></span>
              <span className="text-muted">{o}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* timing note */}
      {t.when && <p className="text-[11px] text-muted mb-5">🗓 {t.when}</p>}

      {/* CTA */}
      <a href={bookLink(t.name)} target="_blank" rel="noopener noreferrer" data-hover className="mt-auto">
        <span className={`block text-center px-4 py-3 rounded-full text-sm font-semibold transition ${
          t.popular ? "bg-accent text-bg hover:opacity-90" : "border border-line hover:border-accent hover:text-accent"
        }`}>
          {t.cta}
        </span>
      </a>
    </motion.div>
  );
}

export default function RateCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {training.tiers.map((t, i) => (
        <Tier key={t.name} t={t} i={i} />
      ))}
    </div>
  );
}
