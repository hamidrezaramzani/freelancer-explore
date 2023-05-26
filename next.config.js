/** @type {import('next').NextConfig} */
<<<<<<< HEAD
=======
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com",
      },
    ],
  },
};
>>>>>>> d822d88 (feat: create sign in and sign up functionality)

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
