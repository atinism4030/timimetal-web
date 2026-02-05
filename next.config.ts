/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! Dangerously allow production builds to successfully complete even if
    // !! your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
