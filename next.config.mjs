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
  reactStrictMode: true,
  
  // Optimizar compilación para navegadores modernos
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración de Turbopack para mejor rendimiento
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
    ],
  },
  
  // Nota: Los headers async no funcionan con output: "export"
  // Los headers de caché se configuran en:
  // - vercel.json para deployment en Vercel
  // - public/_headers para Netlify/Cloudflare Pages
};

export default nextConfig;
