"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import {
  FaRocket, FaCloud, FaUsers, FaShieldHalved, FaChartColumn, FaStar,
} from "react-icons/fa6";
import { profile, stats } from "@/data/portfolio";

function statIcon(key) {
  const map = {
    rocket: FaRocket,
    cloud: FaCloud,
    users: FaUsers,
    shield: FaShieldHalved,
    chart: FaChartColumn,
    star: FaStar,
  };
  return map[key] || FaStar;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-accent2/20 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="container">
        {/* ---------- TOP: text + photo ---------- */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 lg:gap-24 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold leading-[1.05]"
            >
              Hi, I&apos;m {profile.firstName}{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl font-bold mt-3 text-gradient leading-snug"
            >
              {profile.role}
            </motion.p>

            {/* handwritten tagline (Style C) */}
            {profile.handwritten && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative inline-block mt-4"
              >
                <span className="font-hand text-accent text-3xl sm:text-4xl leading-none select-none">
                  {profile.handwritten}
                </span>
                <motion.svg
                  viewBox="0 0 300 18" fill="none" preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent" aria-hidden="true"
                >
                  <motion.path
                    d="M3 12 C 60 4, 120 4, 180 9 S 260 14, 297 6"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                  />
                </motion.svg>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-muted max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-4 text-sm font-mono text-accent"
            >
              {profile.locationNote}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <a href="#projects" data-hover
                className="px-6 py-3 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
                See my work →
              </a>
              <a href="#training" data-hover
                className="px-6 py-3 rounded-full border border-line hover:border-accent transition">
                Book training
              </a>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" download="Krishna_Andhe_CV.pdf" data-hover
                  className="px-6 py-3 rounded-full border border-accent text-accent font-semibold flex items-center gap-2 hover:bg-accent hover:text-bg transition">
                  <FiDownload size={18} className="animate-bob" /> Résumé
                </a>
              )}
            </motion.div>
          </div>

          {/* photo — squircle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] mx-auto md:justify-self-end md:mr-2 lg:mr-6"
          >
            <div className="absolute -inset-3 rounded-[30%] bg-gradient-to-tr from-accent via-transparent to-accent2 blur-md opacity-70 animate-spinSlow" />
            <div className="relative w-full h-full rounded-[30%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photo} alt={profile.name}
                className="w-full h-full rounded-[28%] object-cover object-top bg-surface" />
            </div>
          </motion.div>
        </div>

        {/* ---------- STATS STRIP ----------
            MOBILE  : 2-column grid (wraps, no horizontal scroll)
            TABLET  : 3-column grid
            DESKTOP : single row with vertical dividers                */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 glass rounded-2xl px-3 sm:px-4 py-5 sm:py-6"
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-y-5 gap-x-2">
            {stats.map((s, i) => {
              const Icon = statIcon(s.icon);
              return (
                <li
                  key={s.label}
                  className={`flex items-center gap-3 px-2 sm:px-3 lg:px-6 lg:flex-1
                    ${i < stats.length - 1 ? "lg:border-r lg:border-line/70" : ""}`}
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 220, damping: 14 }}
                    className="shrink-0 text-accent"
                  >
                    <Icon size={24} />
                  </motion.span>
                  <span className="min-w-0">
                    <span className="block text-2xl sm:text-3xl font-extrabold leading-none">
                      {s.value}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-muted mt-1 leading-snug">
                      {s.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
