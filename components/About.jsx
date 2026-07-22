"use client";
import { motion } from "framer-motion";
import { about, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="container grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-mono text-accent mb-4">TECH STACK</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-lg border border-line bg-surface text-sm hover:border-accent/60 hover:text-accent transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
