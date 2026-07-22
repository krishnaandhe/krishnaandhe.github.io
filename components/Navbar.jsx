"use client";
import { useState, useEffect } from "react";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5" aria-label={profile.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="KA logo" className="w-9 h-9" />
          <span className="font-bold tracking-tight hidden sm:inline">
            {profile.firstName}
          </span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-text transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-block text-sm px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
