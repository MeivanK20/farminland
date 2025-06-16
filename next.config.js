// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Désactive l’optimisation (obligatoire pour l’export statique)
  },
};

module.exports = nextConfig;
