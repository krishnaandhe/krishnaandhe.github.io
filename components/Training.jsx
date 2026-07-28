"use client";
import { motion } from "framer-motion";
import { FiCheck, FiStar, FiArrowRight, FiShield } from "react-icons/fi";
import { training } from "@/data/portfolio";

// Homepage Training section — info-only cards + two CTAs BELOW the 4 columns.
export default function Training() {
  return (
    <section id="training" className="py-24 border-t border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-accent">🎓 TRAINER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">{training.heading}</h2>
          <p className="text-muted mt-3">{training.intro}</p>
        </div>

        {/* 4 tier cards — whole card links to /training/ */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {training.tiers.map((t, i) => (
            <motion.a
              key={t.name}
              href="/training/"
              data-hover
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative glass rounded-2xl p-6 flex flex-col transition-colors ${
                t.popular ? "border-accent/70 shadow-[0_0_32px_-8px_rgb(var(--accent)/0.5)]" : "hover:border-accent/50"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1">
                  <FiStar size={12} /> Popular
                </span>
              )}
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{t.name}</h3>
              <p className="text-xs text-muted mt-1">{t.ideal}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gradient">{t.price}</span>
                {t.unit && <span className="text-sm text-muted">{t.unit}</span>}
              </div>
              <ul className="mt-5 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-md bg-accent/15 text-accent flex items-center justify-center">
                      <FiCheck size={12} />
                    </span>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                View details <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* TWO CTAs placed BELOW the 4 cards */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/training/" data-hover
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
            View full training details &amp; topics <FiArrowRight size={18} />
          </a>
          <a href="/verify/" data-hover
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-accent text-accent font-semibold hover:bg-accent hover:text-bg transition-colors">
            <FiShield size={18} /> Verify your credential
          </a>
        </div>

        {training.note && <p className="text-xs text-muted mt-6 text-center">{training.note}</p>}
      </div>
    </section>
  );
}
