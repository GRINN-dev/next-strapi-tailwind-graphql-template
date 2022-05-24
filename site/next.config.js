const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost:1337'],
    formats: '*',
  },
};

module.exports = nextConfig;
