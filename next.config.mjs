import i18nextConfig from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.entradagroup.com",
      "www.links.papareact.com",
      "https://links.papareact.com",
      "links.papareact.com",
      "i.dummyjson.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: i18nextConfig.i18n,
};

export default nextConfig;
