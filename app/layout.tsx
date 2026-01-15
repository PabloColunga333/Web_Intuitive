import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "Intuitive ERP | Planeación y Control de Manufactura en Tiempo Real",
  description:
    "Software integrado de manufactura ERP/MRP. Planeación, control de producción, trazabilidad, calidad e ingeniería. Arquitectura Microsoft. Soporte certificado SIEMENS.",
  generator: "v0.app",
  keywords: [
    "ERP",
    "MRP",
    "manufactura",
    "software industrial",
    "Siemens",
    "Querétaro",
    "México",
    "producción",
    "trazabilidad",
    "calidad",
  ],
  openGraph: {
    title: "Intuitive ERP | Planeación y Control de Manufactura en Tiempo Real",
    description: "Software integrado de manufactura ERP/MRP con CRM, trazabilidad y soporte certificado SIEMENS.",
    type: "website",
    locale: "es_MX",
    siteName: "Intuitive ERP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intuitive ERP | Software de Manufactura",
    description: "Planeación y control de producción en tiempo real para manufactura.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var e=document.documentElement.classList;e.remove('no-js'),e.add('js')}();`,
          }}
        />
      </head>
      <body className={`${manrope.className} font-sans antialiased`}>
        <ThemeProvider>
          <div className="background-canvas min-h-screen">
            {children}
            <Toaster />
            <CookieConsent />
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
