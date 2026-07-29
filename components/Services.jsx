"use client";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-10 border-t border-line">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 mb-4 flex items-center justify-center font-bold text-base">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
