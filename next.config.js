/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiBaseUri: 'http://localhost:4000'
  }
}

module.exports = nextConfig
