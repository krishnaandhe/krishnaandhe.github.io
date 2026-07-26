"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft, FiCheck, FiEye, FiDownload, FiX, FiFileText, FiBookOpen,
} from "react-icons/fi";
import { trainingDetails, profile } from "@/data/portfolio";
import RateCard from "@/components/RateCard";

/* -------- material preview modal (cert-style) -------- */
function MaterialModal({ item, onClose }) {
  const isPdf = item?.type === "pdf" || item?.file?.toLowerCase().endsWith(".pdf");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.94, y: 12, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 12, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass rounded-2xl border border-line overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <div className="min-w-0">
            <h3 className="font-bold truncate">{item.name}</h3>
            {item.detail && <p className="text-xs text-muted truncate">{item.detail}</p>}
          </div>
          <button data-hover onClick={onClose} aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
            <FiX size={18} />
          </button>
        </div>

        <div className="p-5">
          {isPdf ? (
            <object data={item.file} type="application/pdf" className="w-full h-[65vh] rounded-lg bg-white">
              <p className="text-muted text-sm">
                Preview unavailable.{" "}
                <a href={item.file} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open PDF ↗</a>
              </p>
            </object>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={item.file} alt={item.name} className="w-full max-h-[65vh] object-contain rounded-lg bg-white" />
          )}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 p-5 border-t border-line">
          <a href={item.file} target="_blank" rel="noopener noreferrer" data-hover
             className="text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
            <FiEye size={15} /> Open full
          </a>
          {item.downloadable && (
            <a href={item.file} download data-hover
               className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2">
              <FiDownload size={15} /> Download
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TrainingDetailsPage() {
  const [active, setActive] = useState(null);
  const d = trainingDetails;

  return (
    <main className="min-h-screen">
      {/* Hero + back link */}
      <section className="relative overflow-hidden pt-16 pb-14 border-b border-line">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
        </div>
        <div className="container">
          <a href="/" data-hover
             className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
            <FiArrowLeft size={16} /> Back to home
          </a>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-6">{d.heading}</h1>
          <p className="text-muted mt-4 max-w-2xl">{d.intro}</p>
        </div>
      </section>

      {/* Modules (simple list) + Outcomes */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiBookOpen className="text-accent" /> Course Modules
            </h2>
            <ul className="space-y-4">
              {d.modules.map((m, i) => (
                <motion.li key={m.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-3">
                  <span className="mt-0.5 w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent2 text-bg text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-muted text-sm">{m.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">What You&apos;ll Be Able To Do</h2>
            <ul className="space-y-3">
              {d.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 glass rounded-xl p-4">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-md bg-accent/15 text-accent flex items-center justify-center">
                    <FiCheck size={14} />
                  </span>
                  <span className="text-sm">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Materials — preview cards */}
      {d.materials?.length > 0 && (
        <section className="py-16 border-t border-line">
          <div className="container">
            <h2 className="text-2xl font-bold mb-3">Training Materials</h2>
            <p className="text-muted mb-8 text-sm">
              Click to preview. Samples only — full materials provided with booking.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {d.materials.map((m, i) => (
                <motion.button
                  key={m.name} type="button" data-hover
                  onClick={() => setActive(m)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="text-left glass rounded-2xl p-5 hover:border-accent/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
                      <FiFileText size={20} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight">{m.name}</h3>
                      {m.sample && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent mt-1 inline-block">
                          SAMPLE
                        </span>
                      )}
                    </div>
                  </div>
                  {m.detail && <p className="text-muted text-sm mt-3">{m.detail}</p>}
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <FiEye size={13} /> Preview
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rate card (reused) */}
      <section className="py-16 border-t border-line">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Training Options &amp; Rates</h2>
          <p className="text-muted mb-10 text-sm">Pick the format that fits — book directly via WhatsApp or email.</p>
          <RateCard />
        </div>
      </section>

      <footer className="py-10 border-t border-line text-center text-sm text-muted">
        <a href="/" className="text-accent hover:underline">← Back to portfolio</a>
      </footer>

      <AnimatePresence>
        {active && <MaterialModal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </main>
  );
}
