const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'i.pravatar.cc', 'picsum.photos'],
  },
};

module.exports = nextConfig;
