"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiDownload } from "react-icons/fi";
import { profile, socials } from "@/data/portfolio";
import { getIcon } from "./icons";
import Tilt from "./Tilt";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const t = document.createElement("textarea");
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-16 border-t border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent2/15 blur-3xl" />
      </div>

      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Let&apos;s build something.
          </motion.h2>
          <p className="mt-4 text-muted max-w-md mx-auto">
            Have a project, role or training in mind? Reach me on any of these.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto grid md:grid-cols-[1fr_260px] gap-6 items-stretch">
          <div className="grid grid-cols-3 grid-rows-2 gap-4" style={{ perspective: "1000px" }}>
            {socials.map((s, i) => {
              const Icon = getIcon(s.icon);
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  title={s.handle}
                  className="block"
                >
                  <Tilt max={12} className="glass rounded-2xl h-full flex flex-col items-center justify-center text-center gap-2 p-4 hover:border-accent/60 transition-colors">
                    <span style={{ transform: "translateZ(28px)" }}
                          className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
                      <Icon size={18} />
                    </span>
                    <span style={{ transform: "translateZ(18px)" }} className="text-sm font-medium">
                      {s.name}
                    </span>
                  </Tilt>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-5 flex flex-col items-center justify-center gap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/qr.png" alt="Scan to save my contact"
                 className="w-40 h-40 rounded-lg bg-white p-2 object-contain" />
            <p className="text-xs text-muted text-center">Scan to save my contact 📇</p>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="relative">
            <button
              data-hover
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-line hover:border-accent hover:text-accent transition-colors text-sm font-medium"
            >
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              {profile.email}
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.9 }}
                  className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-bg whitespace-nowrap"
                >
                  Copied! ✓
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Krishna_Andhe_CV.pdf"
              data-hover
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition"
            >
              <FiDownload size={16} /> Download Resume
            </a>
          )}
        </div>

        <footer className="mt-20 pt-8 border-t border-line text-sm text-muted text-center">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind CSS
        </footer>
      </div>
    </section>
  );
}
