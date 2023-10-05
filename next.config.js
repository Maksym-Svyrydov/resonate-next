/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
