import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures URLs have trailing slashes
  assetPrefix: './', // Use relative paths for assets
};

export default nextConfig;