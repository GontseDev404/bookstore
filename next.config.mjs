/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable standalone output for Docker optimization
  output: 'standalone',
  // Experimental features for better performance
  experimental: {
    // Enable server components
    serverComponentsExternalPackages: [],
  },
  // Optimize for production
  swcMinify: true,
  // Compress static assets
  compress: true,
}

export default nextConfig
