"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-line">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
        <p className="text-muted mb-12">
          Projects I&apos;ve designed, built and shipped.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-line bg-surface p-6 hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-accent2 mb-3">{p.subtitle}</p>
              <p className="text-muted text-sm leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md border border-line text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-accent hover:underline"
                >
                  View project ↗
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
