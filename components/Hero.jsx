"use client";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    // Shorter hero: min-h ~ 88vh so the marquee below peeks into view.
    <section className="relative overflow-hidden pt-32 pb-14 min-h-[88vh] flex flex-col justify-center">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-accent2/20 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-sm mb-4"
        >
          📍 {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-extrabold leading-[1.05] max-w-4xl"
        >
          Hi, I&apos;m {profile.firstName}{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          <br />
          <span className="text-gradient">{profile.role}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base sm:text-lg text-muted max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition"
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
          className="mt-12 grid grid-cols-3 gap-6 max-w-md"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#work"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
      >
        <FiChevronDown size={26} className="animate-bounceDown" />
      </a>
    </section>
  );
}
