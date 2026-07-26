"use client";
import { motion } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";
import { training, profile } from "@/data/portfolio";

function bookLinks(tierName) {
  const msg = encodeURIComponent(
    `Hi Krishna, I'm interested in your "${tierName}" Microsoft 365 training. Could you share availability?`
  );
  const wa = profile.whatsapp ? `https://wa.me/${profile.whatsapp}?text=${msg}` : null;
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Training enquiry: ${tierName}`
  )}&body=${msg}`;
  return wa || mail;
}

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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {training.tiers.map((t, i) => (
            <motion.div
              key={t.name}
              data-hover
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative glass rounded-2xl p-6 flex flex-col transition-colors ${
                t.popular ? "border-accent/70 shadow-[0_0_32px_-8px_rgb(var(--accent)/0.5)]" : "hover:border-accent/50"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-bg flex items-center gap-1">
                  <FiStar size={12} /> Popular
                </span>
              )}

              <h3 className="text-lg font-bold">{t.name}</h3>
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

              <a
                href={bookLinks(t.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className={`mt-6 text-center px-5 py-3 rounded-full font-semibold transition ${
                  t.popular
                    ? "bg-accent text-bg hover:opacity-90"
                    : "border border-line hover:border-accent hover:text-accent"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {training.note && (
          <p className="text-xs text-muted mt-6">{training.note}</p>
        )}
      </div>
    </section>
  );
}
