"use client";
import { motion } from "framer-motion";
import {
  FiArrowRight, FiCompass,
} from "react-icons/fi";
import {
  FaMagnifyingGlass, FaBullseye, FaShieldHalved, FaRocket, FaCloudArrowUp,
  FaGraduationCap, FaUsers, FaBolt, FaChartColumn, FaArrowsRotate,
} from "react-icons/fa6";

// 10 steps + matching Style-D icons
const STEPS = [
  { n: "01", t: "Discover", d: "Assess current tools, gaps & goals", Icon: FaMagnifyingGlass },
  { n: "02", t: "Strategise", d: "Design a tailored roadmap", Icon: FaBullseye },
  { n: "03", t: "Secure", d: "Secure, governed foundation", Icon: FaShieldHalved },
  { n: "04", t: "Pilot", d: "Prove value, low-risk rollout", Icon: FaRocket },
  { n: "05", t: "Migrate", d: "Email, files & apps moved", Icon: FaCloudArrowUp },
  { n: "06", t: "Enable", d: "Role-based training that sticks", Icon: FaGraduationCap },
  { n: "07", t: "Adopt", d: "Drive usage via change mgmt", Icon: FaUsers },
  { n: "08", t: "Automate", d: "Streamline with Power Platform", Icon: FaBolt },
  { n: "09", t: "Measure", d: "Track adoption & prove ROI", Icon: FaChartColumn },
  { n: "10", t: "Sustain", d: "Train-the-trainer + support", Icon: FaArrowsRotate },
];

export default function DigitalTransformation() {
  return (
    <section id="transformation" className="py-10 border-t border-line relative overflow-hidden">
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

        {/* smaller cards · icon LEFT · number TOP-RIGHT · hover animation */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
                whileHover={{ y: -4 }}
                className="group relative glass rounded-xl p-3.5 hover:border-accent/60 transition-colors"
              >
                {/* number — top-right corner */}
                <span className="absolute top-2.5 right-3 text-[11px] font-mono text-muted/50 group-hover:text-accent transition-colors">
                  {s.n}
                </span>

                {/* icon — left */}
                <span className="inline-flex w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent2 text-bg items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Icon size={16} />
                </span>

                {/* text */}
                <div className="mt-2.5">
                  <div className="font-bold text-sm group-hover:text-accent transition-colors">{s.t}</div>
                  <div className="text-[11px] text-muted mt-0.5 leading-snug">{s.d}</div>
                </div>
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
