"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { experience } from "@/data/portfolio";
import { getIcon } from "./icons";

function Entry({ e, i, open, onToggle }) {
  const Icon = getIcon(e.icon);
  return (
    <div className="relative pl-10 sm:pl-14">
      {/* timeline dot */}
      <span className="absolute left-0 sm:left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent2 ring-4 ring-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
      >
        <button
          data-hover
          onClick={onToggle}
          aria-expanded={open}
          className="w-full text-left glass rounded-2xl p-6 hover:border-accent/60 transition-colors"
        >
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
              <Icon size={20} />
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-lg font-bold">{e.role}</h3>
                <span className="text-accent2 text-sm">· {e.org}</span>
                <span className="ml-auto text-xs font-mono text-accent shrink-0">
                  {e.period}
                </span>
              </div>
              <p className="text-muted text-sm mt-1">{e.summary}</p>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2">
                      {e.details?.map((d, j) => (
                        <li key={j} className="text-muted text-sm flex gap-2">
                          <span className="text-accent mt-0.5">▹</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    {e.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-md border border-line text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                <motion.span animate={{ rotate: open ? 45 : 0 }}>
                  <FiPlus size={14} />
                </motion.span>
                {open ? "Show less" : "Show details"}
              </span>
            </div>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  // First entry open by default; click to toggle each.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
        <p className="text-muted mb-12">
          Click any role to expand the details.
        </p>

        {/* vertical timeline line */}
        <div className="relative">
          <span className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-6">
            {experience.map((e, i) => (
              <Entry
                key={i}
                e={e}
                i={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
