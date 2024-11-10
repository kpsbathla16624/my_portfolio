import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Custom configuration options
  async headers() {
    return [
      {
        source: '/:path*', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-src 'self'; object-src 'none';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
