/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: '3009'
  },
  webpack: (config) => {
    config.externals.push({
      '@canvas/renderer': 'commonjs @canvas/renderer'
    });
    return config;
  },
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [];
  }
}

module.exports = nextConfig; 