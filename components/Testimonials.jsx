"use client";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { testimonials } from "@/data/portfolio";

// Short & simple testimonials strip — placed under Training.
export default function Testimonials() {
  if (!testimonials?.length) return null;

  return (
    <section id="testimonials" className="pb-24 -mt-4">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              data-hover
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <FiMessageSquare className="text-accent mb-3" size={22} />
              <blockquote className="text-sm leading-relaxed text-text">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-muted">
                <span className="font-semibold text-text">{t.name}</span>
                {t.role ? ` · ${t.role}` : ""}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
