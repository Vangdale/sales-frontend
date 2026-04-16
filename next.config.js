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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que la página se incruste en iframes de otros dominios (clickjacking)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Evita que el navegador adivine el tipo de contenido (MIME sniffing)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Fuerza HTTPS durante 1 año
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // Limita la información del referrer enviada a terceros
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Desactiva funcionalidades del navegador que no se usan
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // Cabecera XSS para navegadores antiguos
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;
