// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/juegos-menos-de-5-euros",
        destination: "/juegos-gratis-pc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
