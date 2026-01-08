import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
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
    <html lang="es-MX">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
