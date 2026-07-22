"use client";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative bg-glow pt-36 pb-24">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-sm mb-4"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-extrabold leading-[1.05] max-w-3xl"
        >
          {profile.name}. <br />
          <span className="text-gradient">{profile.role}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-muted max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-accent text-base font-semibold hover:opacity-90 transition"
          >
            See my work →
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-line hover:border-accent transition"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
