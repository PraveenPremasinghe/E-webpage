/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Add this for GSAP
  transpilePackages: ['gsap'],
}

module.exports = nextConfig
