/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== YOUR BRAND PALETTE — tweak these to re-theme instantly =====
        base: "#0a0a0f",        // page background (deep near-black)
        surface: "#12131a",     // cards / panels
        line: "#22242f",        // borders
        primary: "#e6e7ee",     // main text
        muted: "#9aa0b0",       // secondary text
        accent: "#38bdf8",      // accent 1 (cyan)
        accent2: "#8b5cf6",     // accent 2 (violet)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1120px" },
      },
    },
  },
  plugins: [],
};
