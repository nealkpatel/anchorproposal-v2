/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep browser QA builds separate from an application currently being served.
  distDir: process.env.ANCHOR_QA_BUILD === '1' ? '.next-qa' : '.next',
  transpilePackages: ['@anchorproposal/shared'],
  async headers() {
    const noIndexPaths = [
      '/login/:path*',
      '/register/:path*',
      '/forgot-password/:path*',
      '/reset-password/:path*',
      '/dashboard/:path*',
      '/profiles/:path*',
      '/applications/:path*',
      '/templates/:path*',
      '/settings/:path*',
      '/users/:path*',
      '/job-pool/:path*',
      '/resume/:path*',
      '/backend/:path*',
    ];

    return noIndexPaths.map((source) => ({
      source,
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex',
        },
      ],
    }));
  },
  // Proxy API through the web app so a single ngrok tunnel (port 3000) is enough.
  // Browser calls /backend/* → Next forwards to local Nest on 3001.
  async rewrites() {
    // Use 127.0.0.1 (not localhost) — on Windows localhost often resolves to [::1] and fails.
    const api = process.env.API_PROXY_TARGET || 'http://127.0.0.1:3001';
    return [
      {
        source: '/backend/:path*',
        destination: `${api}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
