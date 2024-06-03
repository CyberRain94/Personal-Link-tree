/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },

  trailingSlash:true,
  
  distDir:'build',
};

module.exports = nextConfig;
