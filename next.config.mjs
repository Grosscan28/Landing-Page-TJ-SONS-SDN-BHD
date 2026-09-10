/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/media/:path*', destination: '/Photos/media/:path*' },
      { source: '/vendor/:path*', destination: '/Photos/vendor/:path*' },
      { source: '/Work-photos/:path*', destination: '/Photos/Work-photos/:path*' },
      { source: '/Company-logo/:path*', destination: '/Photos/Company-logo/:path*' },
    ]
  },
}

export default nextConfig
