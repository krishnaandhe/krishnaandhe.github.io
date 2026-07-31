"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";
import {
  FaMagnifyingGlass, FaBullseye, FaShieldHalved, FaRocket, FaCloudArrowUp,
  FaGraduationCap, FaUsers, FaBolt, FaChartColumn, FaArrowsRotate,
} from "react-icons/fa6";

// 10 steps + Style-D icons
const STEPS = [
  { n: "01", t: "Discover",   d: "Assess current tools, gaps & goals",  Icon: FaMagnifyingGlass },
  { n: "02", t: "Strategise", d: "Design a tailored roadmap",           Icon: FaBullseye },
  { n: "03", t: "Secure",     d: "Secure, governed foundation",         Icon: FaShieldHalved },
  { n: "04", t: "Pilot",      d: "Prove value, low-risk rollout",       Icon: FaRocket },
  { n: "05", t: "Migrate",    d: "Email, files & apps moved",           Icon: FaCloudArrowUp },
  { n: "06", t: "Enable",     d: "Role-based training that sticks",     Icon: FaGraduationCap },
  { n: "07", t: "Adopt",      d: "Drive usage via change mgmt",         Icon: FaUsers },
  { n: "08", t: "Automate",   d: "Streamline with Power Platform",      Icon: FaBolt },
  { n: "09", t: "Measure",    d: "Track adoption & prove ROI",          Icon: FaChartColumn },
  { n: "10", t: "Sustain",    d: "Train-the-trainer + support",         Icon: FaArrowsRotate },
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

        {/* cards with GIANT ghost number watermark */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {STEPS.map((s, i) => {
            const { Icon } = s;
            return (
              <motion.div
                key={s.t}
                data-hover
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl p-4 bg-surface/60 border border-line
                           hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-all"
              >
                {/* GIANT ghost number watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -top-5 -right-3 leading-none font-black
                             text-[90px] text-accent/[0.15] group-hover:text-accent/[0.14]
                             group-hover:scale-110 group-hover:-translate-y-1
                             transition-all duration-500 ease-out"
                >
                  {s.n}
                </span>

                {/* icon — top-left */}
                <span className="relative z-10 inline-flex w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2
                                 text-white items-center justify-center shadow-md shadow-accent/25
                                 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon size={17} />
                </span>

                {/* text */}
                <div className="relative z-10 mt-3">
                  <div className="font-bold text-[15px] group-hover:text-accent transition-colors">{s.t}</div>
                  <div className="text-[11.5px] text-muted mt-1 leading-snug">{s.d}</div>
                </div>

                {/* subtle arrow reveal on hover */}
                <span className="relative z-10 mt-2 flex items-center gap-1 text-[11px] font-semibold text-accent
                                 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                                 transition-all duration-300">
                  Details <FiArrowRight size={11} />
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA — centered */}
        <div className="mt-10 flex justify-center">
          <a
            href="/transformation/"
            data-hover
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition"
          >
            <FiCompass size={18} /> Explore the full journey <FiArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
