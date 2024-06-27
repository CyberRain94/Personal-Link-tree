/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true } ,
  
  distDir:'build',

  output:'export'
};

module.exports = nextConfig;
