"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { experience } from "@/data/portfolio";
import { getIcon } from "./icons";

function Entry({ e, i, open, setOpen }) {
  const Icon = getIcon(e.icon);
  return (
    <div className="relative pl-10 sm:pl-14">
      <span className="absolute left-0 sm:left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent2 ring-4 ring-bg" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: i * 0.06 }}
        onHoverStart={() => setOpen(i)}
        onHoverEnd={() => setOpen(-1)}
        onClick={() => setOpen(open ? -1 : i)}
        whileHover={{ y: -4 }}
        className={`glass rounded-2xl p-6 transition-colors cursor-pointer ${
          open ? "border-accent/60 shadow-[0_0_28px_-6px_rgb(var(--accent)/0.4)]" : "hover:border-accent/40"
        }`}
        data-hover
      >
        <div className="flex items-start gap-4">
          <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg">
            <Icon size={20} />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="text-lg font-bold">{e.role}</h3>
              <span className="text-accent2 text-sm">· {e.org}</span>
              <span className="ml-auto flex items-center gap-2 text-xs font-mono text-accent shrink-0">
                {e.period}
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FiChevronDown size={14} />
                </motion.span>
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
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + j * 0.04 }}
                        className="text-muted text-sm flex gap-2"
                      >
                        <span className="text-accent mt-0.5">▹</span>
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                  {e.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md border border-line text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="py-16 border-t border-line">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
        <p className="text-muted mb-12">Hover a role to reveal the details.</p>
        <div className="relative">
          <span className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-6">
            {experience.map((e, i) => (
              <Entry key={i} e={e} i={i} open={open === i} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
