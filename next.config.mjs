/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/dmcl/terms.html',
        destination: '/dmcl/terms',
      },
      {
        source: '/dmcl/privacy.html',
        destination: '/dmcl/privacy',
      },
    ]
  },
}

export default nextConfig
