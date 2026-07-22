/** @type {import('next').NextConfig} */
// Static-export config for GitHub Pages (repo: krishnaandhe.github.io)
const nextConfig = {
  output: "export",        // generates a static ./out folder
  reactStrictMode: true,
  images: {
    unoptimized: true,     // required: GitHub Pages has no image optimizer
  },
  trailingSlash: true,     // cleaner route resolution on GitHub Pages
};

module.exports = nextConfig;
