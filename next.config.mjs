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
  // Server external packages configuration
  serverExternalPackages: [],
  // Optimize for production
  compress: true,
  // Enable experimental features
  experimental: {
    // Add any experimental features here if needed
  },
}

export default nextConfig
