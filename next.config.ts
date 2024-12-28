import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/toeflassist' : '',
  assetPrefix: isProd ? '/toeflassist/' : '',
  trailingSlash: true, // Ensures that all routes and assets have a trailing slash for static deployment
};

export default nextConfig;