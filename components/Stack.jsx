"use client";
import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";
import { getIcon } from "./icons";

// Static glowing grid (2–3 rows depending on width). Each pill has a
// staggered pulsing glow + a stronger glow on hover.
export default function Stack() {
  return (
    <section id="stack" className="py-20 border-y border-line bg-surface/40">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack &amp; Tools</h2>
        <p className="text-muted mt-2 mb-10">
          Technologies I work with day to day.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {stack.map((tech, i) => {
            const Icon = getIcon(tech.icon);
            return (
              <motion.span
                key={tech.name}
                data-hover
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                style={{ animationDelay: `${(i % 6) * 0.5}s` }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border bg-surface text-sm font-medium animate-glowPulse hover:!shadow-[0_0_24px_0_rgb(var(--accent)/0.5)] hover:!border-accent transition-shadow"
              >
                <Icon className="text-accent" size={20} />
                {tech.name}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
