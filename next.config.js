// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "next start",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oc-integrateur-web-p12.s3.eu-west-3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;