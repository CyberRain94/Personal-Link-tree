/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  distDir: 'out',

  trailingSlash:true,
  
  output:'export',
};

module.exports = nextConfig;
