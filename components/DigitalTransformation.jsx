"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";

// 10-step journey (polished one-word labels + short descriptions)
const STEPS = [
  { n: "01", t: "Discover", d: "Assess current tools, gaps & goals" },
  { n: "02", t: "Strategise", d: "Design a tailored roadmap" },
  { n: "03", t: "Secure", d: "Build a secure, governed foundation" },
  { n: "04", t: "Pilot", d: "Prove value with a low-risk rollout" },
  { n: "05", t: "Migrate", d: "Move email, files & apps smoothly" },
  { n: "06", t: "Enable", d: "Role-based training that sticks" },
  { n: "07", t: "Adopt", d: "Drive usage via change management" },
  { n: "08", t: "Automate", d: "Streamline with Power Platform" },
  { n: "09", t: "Measure", d: "Track adoption & prove ROI" },
  { n: "10", t: "Sustain", d: "Train-the-trainer + ongoing support" },
];

export default function DigitalTransformation() {
  return (
    <section id="transformation" className="py-16 border-t border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-accent2/15 blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-accent">⚡ WHAT I DELIVER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            End-to-End <span className="text-gradient">Digital Transformation</span>
          </h2>
          <p className="text-muted mt-3">
            I lead organisations through the full journey — from first assessment to lasting
            adoption — turning Microsoft 365 into measurable business value.
          </p>
        </div>

        {/* 10-step journey grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.t}
              data-hover
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-4 hover:border-accent/60 transition-colors"
            >
              <div className="text-xs font-mono text-accent/70">{s.n}</div>
              <div className="font-bold mt-1">{s.t}</div>
              <div className="text-[11px] text-muted mt-1 leading-snug">{s.d}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA → sub-page */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/transformation/"
            data-hover
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition"
          >
            <FiCompass size={18} /> Explore the full journey <FiArrowRight size={18} />
          </a>
          <span className="text-xs text-muted">
            10-step lifecycle · Microsoft 365 · Power Platform · Adoption & ROI
          </span>
        </div>
      </div>
    </section>
  );
}
