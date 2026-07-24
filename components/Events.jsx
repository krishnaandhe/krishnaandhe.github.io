"use client";
import { motion } from "framer-motion";
import { events } from "@/data/portfolio";

// Small, informational chip cloud. Each chip wobbles / jumps playfully
// on hover (random rotate + lift) — purely for fun, no claims.
export default function Events() {
  return (
    <section id="events" className="py-20 border-t border-line">
      <div className="container">
        <span className="text-sm font-mono text-accent">✦ ALWAYS LEARNING</span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">Trainings &amp; Events Attended</h2>
        <p className="text-muted mt-2 mb-8">
          A few of the events, bootcamps and sessions I&apos;ve taken part in. (Hover for fun!)
        </p>

        <div className="flex flex-wrap gap-3">
          {events.map((name, i) => {
            // deterministic-ish random values per chip
            const rot = ((i * 37) % 14) - 7; // -7..+7 deg
            const dx = ((i * 53) % 16) - 8; // -8..+8 px
            return (
              <motion.span
                key={name}
                data-hover
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 10) * 0.04 }}
                whileHover={{
                  rotate: rot,
                  x: dx,
                  y: -6,
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 320, damping: 12 },
                }}
                className="cursor-default select-none px-4 py-2 rounded-full border border-line bg-surface text-sm text-muted hover:text-accent hover:border-accent"
              >
                {name}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
