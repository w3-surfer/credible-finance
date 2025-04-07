/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
    serverComponentsExternalPackages: ['sharp'],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    // Otimizações do webpack
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };

    // Configuração do Critters
    if (!dev && !isServer) {
      const Critters = require('critters');
      const critters = new Critters({
        preload: 'swap',
        preloadFonts: true,
        fonts: true,
        noscriptFallback: true,
      });

      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.compilation.tap('Critters', (compilation) => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
              'Critters',
              async (data, cb) => {
                try {
                  data.html = await critters.process(data.html);
                  cb(null, data);
                } catch (err) {
                  cb(err);
                }
              }
            );
          });
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig; 