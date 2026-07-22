"use client";
import { motion } from "framer-motion";
import { profile, socials } from "@/data/portfolio";
import { getIcon } from "./icons";
import Tilt from "./Tilt";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-line relative overflow-hidden"
    >
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
            Have a project or role in mind? Reach me on any of these.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {socials.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Tilt className="glass rounded-2xl p-5 h-full hover:border-accent/60 transition-colors">
                  <div style={{ transform: "translateZ(35px)" }}>
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg mb-3">
                      <Icon size={20} />
                    </span>
                    <div className="font-semibold text-sm">{s.name}</div>
                    <div className="text-muted text-xs mt-0.5 truncate">
                      {s.handle}
                    </div>
                  </div>
                </Tilt>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={`mailto:${profile.email}`}
            className="text-lg text-gradient font-semibold hover:opacity-80 transition"
          >
            {profile.email}
          </a>
        </div>

        <footer className="mt-16 pt-8 border-t border-line text-sm text-muted text-center">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &
          Tailwind CSS
        </footer>
      </div>
    </section>
  );
}
