/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.xyz.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
