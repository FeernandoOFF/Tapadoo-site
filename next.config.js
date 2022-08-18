const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.siteURL,
  assetPrefix: process.env.siteURL,
  env: {
    siteURL: isProd ? '/Tapadoo-site' : '',
  },
};

module.exports = nextConfig;
