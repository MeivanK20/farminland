/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Laisse cette option uniquement si tu veux désactiver l’optimisation d’image de Next.js.
    // Tu peux la retirer complètement si tu veux activer l'optimisation par défaut de Vercel.
    unoptimized: false 
  }
}

module.exports = nextConfig;
