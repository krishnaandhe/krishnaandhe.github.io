"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { getIcon } from "./icons";

export default function Work() {
  return (
    <section id="work" className="py-16">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Selected Work</h2>
        <p className="text-muted mb-12">
          Projects I&apos;ve designed, built and shipped.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = getIcon(p.icon);
            return (
              <motion.article
                key={p.title}
                data-hover
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 hover:border-accent/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Logo + App name */}
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {p.badge}
                  </span>
                </div>

                <p className="text-sm text-accent2 mb-2">{p.subtitle}</p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
