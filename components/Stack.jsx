"use client";
import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";
import { getIcon } from "./icons";

export default function Stack() {
  return (
    <section id="stack" className="py-16 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack &amp; Proficiency</h2>
        <p className="text-muted mt-2 mb-10">Technologies I work with day to day.</p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {stack.map((tech, i) => {
            const Icon = getIcon(tech.icon);
            return (
              <motion.div
                key={tech.name}
                data-hover
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2.5 font-medium">
                    <Icon className="text-accent group-hover:scale-110 transition-transform" size={20} />
                    {tech.name}
                  </span>
                  <span className="text-xs font-mono text-muted">{tech.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-line/60 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 + (i % 6) * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
