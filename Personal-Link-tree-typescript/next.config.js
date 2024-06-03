/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },

  trailingSlash:true,
  
  distDir:'build',

  output:'export'
};

module.exports = nextConfig;
