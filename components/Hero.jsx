"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-accent2/20 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

            <div className="container grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold leading-[1.05]"
          >
            Hi, I&apos;m {profile.firstName}{" "}
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            <br />
            <span className="text-gradient">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-base sm:text-lg text-muted max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm font-mono text-accent"
          >
            {profile.locationNote}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-6 py-3 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition">
              See my work →
            </a>
            <a href="#training" className="px-6 py-3 rounded-full border border-line hover:border-accent transition">
              Book training
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Krishna_Andhe_CV.pdf"
                className="px-6 py-3 rounded-full border border-accent text-accent font-semibold flex items-center gap-2 hover:bg-accent hover:text-bg transition"
              >
                <FiDownload size={18} /> Résumé
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] mx-auto md:justify-self-end md:mr-2 lg:mr-6"
        >
          <div className="absolute -inset-3 rounded-[30%] bg-gradient-to-tr from-accent via-transparent to-accent2 blur-md opacity-60 animate-spinSlow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative w-full h-full rounded-[30%] object-cover object-top ring-1 ring-line/50 shadow-2xl shadow-accent/10"
          />
          <div/>
        </motion.div>
      </div>
    </section>
  );
}
