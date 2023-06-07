/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['https://secure.gravatar.com/avatar/'],
    unoptimized: true
  },
  async redirects() {
    return JSON.parse(process.env.REDIRECTS)
  }
}

module.exports = nextConfig
