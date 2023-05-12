/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['en.wikipedia.org', 'upload.wikimedia.org']
  }
}

module.exports = nextConfig
