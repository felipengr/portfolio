/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig