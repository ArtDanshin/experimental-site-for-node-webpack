/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:7000/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:7000/uploads/:path*'
      }
    ];
  },
};

module.exports = nextConfig;
