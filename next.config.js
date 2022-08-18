const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/Tapadoo-site' : '',
  assetPrefix: isProd ? '/Tapadoo-site' : '',
  env: {
    siteURL: isProd ? '/Tapadoo-site' : '',
  },
};

module.exports = nextConfig;
