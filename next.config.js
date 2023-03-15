/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['homapilot.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
