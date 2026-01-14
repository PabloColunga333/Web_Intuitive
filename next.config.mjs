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
  
  // Optimizar compilación para navegadores modernos
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración de Turbopack para mejor rendimiento
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react', '@radix-ui/react-accordion'],
  },
  
  // Nota: Los headers async no funcionan con output: "export"
  // Los headers de caché se configuran en:
  // - vercel.json para deployment en Vercel
  // - public/_headers para Netlify/Cloudflare Pages
};

export default nextConfig;
