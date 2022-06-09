const { config } = require('process');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: [
      'tailwindui.com',
      'placehold.co',
      'localhost',
      'i.pravatar.cc',
      'picsum.photos',
      'images.unsplash.com',
      'unsplash.com',
    ],
  },
};

module.exports = nextConfig;
