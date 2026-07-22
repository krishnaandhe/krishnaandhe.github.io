/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1140px" },
      },
      keyframes: {
        wave: {
          "0%,60%,100%": { transform: "rotate(0deg)" },
          "10%,30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glowPulse: {
          "0%,100%": {
            boxShadow: "0 0 0 0 rgb(var(--accent) / 0)",
            borderColor: "rgb(var(--line))",
          },
          "50%": {
            boxShadow: "0 0 18px 0 rgb(var(--accent) / 0.35)",
            borderColor: "rgb(var(--accent) / 0.6)",
          },
        },
      },
      animation: {
        wave: "wave 2.2s ease-in-out infinite",
        blob: "blob 16s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
