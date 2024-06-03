/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },

  trailingSlash:true,
  
  distDir:'build',

  output:'export'
};

module.exports = nextConfig;
