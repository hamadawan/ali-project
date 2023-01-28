/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.entradagroup.com', 'www.links.papareact.com', 'https://links.papareact.com', 'links.papareact.com', 'i.dummyjson.com']
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
