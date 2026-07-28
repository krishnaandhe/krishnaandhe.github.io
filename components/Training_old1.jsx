"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { training } from "@/data/portfolio";
import RateCard from "./RateCard";

export default function Training() {
  return (
    <section id="training" className="py-24 border-t border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-mono text-accent">🎓 TRAINER</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">{training.heading}</h2>
            <p className="text-muted mt-3">{training.intro}</p>
          </div>

          {/* NEW: link to the details sub-page */}
          <a
            href="/training/"
            data-hover
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-bg transition"
          >
            View training details <FiArrowRight size={16} />
          </a>
        </div>

        <div className="mt-12">
          <RateCard />
        </div>

        {training.note && <p className="text-xs text-muted mt-6">{training.note}</p>}
      </div>
    </section>
  );
}
