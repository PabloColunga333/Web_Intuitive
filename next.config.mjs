/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimización de rendimiento
  compress: true,
  poweredByHeader: false,
  // Nota: Los headers async no funcionan con output: "export"
  // Los headers de caché se configuran en public/_headers para Vercel/Netlify
};

export default nextConfig;
