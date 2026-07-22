"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile, socials } from "@/data/portfolio";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-line bg-glow">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let&apos;s build something.
        </motion.h2>

        <p className="mt-4 text-muted max-w-md mx-auto">
          Have a project or role in mind? I&apos;m always open to a good
          conversation.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block mt-8 text-lg text-gradient font-semibold hover:opacity-80 transition"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          {socials.map((s) => {
            const Icon = iconMap[s.icon] || FaEnvelope;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <footer className="mt-16 pt-8 border-t border-line text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &
          Tailwind CSS
        </footer>
      </div>
    </section>
  );
}
