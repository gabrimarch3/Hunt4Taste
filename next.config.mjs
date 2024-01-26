import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

const isProduction = process.env.NODE_ENV === 'production';

// Base Next.js configuration
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'www.cignano.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// PWA specific configuration
const nextConfig = withPWA({
    dest: 'public',
    disable: !isProduction,
    runtimeCaching
  })(
    config
  );
export default nextConfig;
