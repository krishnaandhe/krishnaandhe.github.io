/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",        // ← creates the ./out folder for GitHub Pages
  images: {
    unoptimized: true,     // ← required (GitHub Pages has no image optimizer)
  },
}

module.exports = nextConfig