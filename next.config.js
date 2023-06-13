/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "/my-mon-app",
  images: {
    domains: ["images.dog.ceo"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
