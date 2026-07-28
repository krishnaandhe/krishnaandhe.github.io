"use client";
import { motion } from "framer-motion";
import { FiStar, FiArrowRight, FiShield } from "react-icons/fi";
import { training } from "@/data/portfolio";

// Homepage Training = INFO-ONLY summary cards. Whole card links to /training/.
// Uses the NEW data shape (audience/ideal/price) — NO t.features (that was the crash).
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

        {/* 4 summary cards — whole card links to /training/ */}
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
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1 whitespace-nowrap">
                  <FiStar size={12} /> Popular
                </span>
              )}

              <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{t.name}</h3>
              {t.audience && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent inline-block mt-1 w-fit">
                  {t.audience}
                </span>
              )}
              <p className="text-xs text-muted mt-2 flex-1">{t.ideal}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gradient">{t.price}</span>
                {t.unit && <span className="text-sm text-muted">{t.unit}</span>}
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                View details <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTAs below the 4 cards */}
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
