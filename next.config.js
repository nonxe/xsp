/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://mp4-cdn77.xvideos-cdn.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
