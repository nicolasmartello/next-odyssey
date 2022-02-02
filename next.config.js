/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiBaseUri: 'http://localhost:3000/api/graphql'
  }
}

module.exports = nextConfig
