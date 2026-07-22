"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { getIcon } from "./icons";
import Tilt from "./Tilt";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
        <p className="text-muted mb-12">Concise, informative — the essentials.</p>

        {/* 3D tilt cards that reveal on scroll */}
        <div
          className="grid sm:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {experience.map((e, i) => {
            const Icon = getIcon(e.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Tilt
                  data-hover
                  className="glass rounded-2xl p-6 h-full hover:border-accent/60 transition-colors"
                >
                  <div style={{ transform: "translateZ(40px)" }}>
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg mb-4">
                      <Icon size={20} />
                    </span>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-semibold">{e.role}</h3>
                      <span className="text-xs font-mono text-accent shrink-0">
                        {e.period}
                      </span>
                    </div>
                    <p className="text-accent2 text-sm mt-0.5">{e.org}</p>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {e.summary}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
