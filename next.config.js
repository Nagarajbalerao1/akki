/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [''],
  },
  // Uncomment this if you need to handle specific rewrites or redirects
  // async rewrites() {
  //   return [
  //     // Add your rewrites here
  //   ];
  // },
};

module.exports = nextConfig;