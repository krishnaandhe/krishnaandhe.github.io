"use client";
import { motion } from "framer-motion";
import { about, services } from "@/data/portfolio";
import { getIcon } from "./icons";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </motion.div>

        <div className="grid gap-4">
          {services.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <motion.div
                key={s.title}
                data-hover
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-5 hover:border-accent/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {/* Logo + name */}
                  <span className="mt-0.5 w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
