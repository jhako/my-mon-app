const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //basePath: "/my-mon-app",
  images: {
    unoptimized: true,
    domains: ["images.dog.ceo"],
  },
  assetPrefix: isProd ? "/my-mon-app/" : "",
  reactStrictMode: true,
};

const pwaConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  ...nextConfig,
  ...pwaConfig,
};
