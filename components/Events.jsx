"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiEye, FiAward } from "react-icons/fi";
import { events } from "@/data/portfolio";

// Normalise: allow plain strings OR objects {name, image, link, detail}
function norm(e) {
  return typeof e === "string" ? { name: e } : e;
}

function Modal({ item, onClose }) {
  const isPdf = item?.image?.toLowerCase().endsWith(".pdf");
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.94, y: 12, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 12, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass rounded-2xl border border-line overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 p-5 border-b border-line">
          <div className="min-w-0">
            <h3 className="font-bold truncate">{item.name}</h3>
            {item.detail && <p className="text-xs text-muted truncate">{item.detail}</p>}
          </div>
          <button
            data-hover
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="p-5">
          {item.image ? (
            isPdf ? (
              <object data={item.image} type="application/pdf" className="w-full h-[60vh] rounded-lg bg-white">
                <p className="text-muted text-sm">
                  Preview unavailable.{" "}
                  <a href={item.image} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open PDF ↗</a>
                </p>
              </object>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={item.image} alt={item.name} className="w-full max-h-[60vh] object-contain rounded-lg bg-white" />
            )
          ) : (
            <div className="text-center py-10">
              <FiAward className="mx-auto text-accent mb-3" size={40} />
              <p className="text-muted text-sm">{item.detail || item.name}</p>
            </div>
          )}
        </div>

        {item.link && (
          <div className="flex items-center justify-end gap-3 p-5 border-t border-line">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="text-sm px-4 py-2 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition flex items-center gap-2"
            >
              <FiExternalLink size={15} /> View credential
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [active, setActive] = useState(null);
  const list = (events || []).map(norm);

  return (
    <section id="events" className="py-10 border-t border-line">
      <div className="container">
        <span className="text-sm font-mono text-accent">✦ ALWAYS LEARNING</span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Trainings Given &amp; Events Attended
        </h2>
        <p className="text-muted mt-2 mb-8">
          Sessions I&apos;ve delivered and events I&apos;ve taken part in. Click any with a
          badge to preview the certificate.
        </p>

        <div className="flex flex-wrap gap-3">
          {list.map((ev, i) => {
            const rot = ((i * 37) % 14) - 7;
            const dx = ((i * 53) % 16) - 8;
            const clickable = Boolean(ev.image || ev.link);
            return (
              <motion.button
                key={ev.name + i}
                data-hover
                type="button"
                onClick={() => clickable && setActive(ev)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 10) * 0.04 }}
                whileHover={{
                  rotate: rot,
                  x: dx,
                  y: -6,
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 320, damping: 12 },
                }}
                className={`select-none inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm transition-colors ${
                  clickable
                    ? "cursor-pointer border-accent/50 text-text hover:text-accent hover:border-accent bg-surface"
                    : "cursor-default border-line text-muted bg-surface hover:text-accent hover:border-accent"
                }`}
              >
                {clickable && <FiAward size={13} className="text-accent" />}
                {ev.name}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && <Modal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
