"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ClientsCarouselProps {
  title?: string
  autoPlaySpeed?: number
  showInfo?: boolean
  showTitle?: boolean
}

interface Client {
  name: string
  logo: string
}

const clients: Client[] = [
  { name: "Mitsubishi Electric de México", logo: "/logos/Mitsubishi_Electric_logo.svg.png" },
  { name: "Giesecke & Devrient", logo: "/logos/GD_Logo_GieseckeDevrientNeu.png" },
  { name: "Graphic Packaging", logo: "/logos/Graphic_Packaging_International_Logo.png" },
  { name: "Gerber Technology", logo: "/logos/gerber-logo-blue.svg" },
  { name: "Grupo Polesa", logo: "/logos/polesa.png" },
  { name: "Grupo Gráficos San Juan", logo: "/logos/Grupo-Grafico-San-Juan.png" },
  { name: "Hikam Electric", logo: "/logos/LOGOTIPOS-HIKAM-03.webp" },
  { name: "Woodcrafters Home", logo: "/logos/logo_WoodCrafters.png" },
  { name: "Omex Alimentaria", logo: "/logos/logo_Omex.webp" },
  { name: "Loydeal", logo: "/logos/loydeal.avif" },
  { name: "Orbe", logo: "/logos/orbe_xx1.avif" },
  { name: "Orgullosamente Mexicano", logo: "/logos/orgullosamente-el-mexicano.svg" },
  { name: "Paosa", logo: "/logos/paosa.avif" },
  { name: "Tecno Agrax", logo: "/logos/tecno-agrax.avif" },
]

export function ClientsCarousel({ title = "Empresas que confían en nosotros", autoPlaySpeed = 25, showInfo = true, showTitle = true }: ClientsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || prefersReducedMotion) return

    const timeoutId = setTimeout(() => {
      const totalWidth = container.scrollWidth
      const halfWidth = totalWidth / 2

      let scrollPosition = 0
      const speed = 0.5  // Velocidad más suave y lenta

      const animate = () => {
        scrollPosition += speed
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0
        }
        container.scrollLeft = scrollPosition
        animationRef.current = requestAnimationFrame(animate)
      }

      animationRef.current = requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [prefersReducedMotion])

  return (
    <div className="relative">
      {showTitle && (
        <div className="container mx-auto px-4 mb-12 sm:mb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Marcas que han trabajado con Intuitive ERP en proyectos de implementación y mejora operativa
            </p>
          </div>
        </div>
      )}

      <div className="relative overflow-x-clip w-full">
        {/* Fade gradients más amplios y suaves - usando colores que combinan con section-highlight */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 z-10 pointer-events-none" 
          style={{ background: 'linear-gradient(to right, oklch(0.94 0.015 230) 0%, oklch(0.94 0.015 230 / 0.8) 40%, transparent 100%)' }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 z-10 pointer-events-none" 
          style={{ background: 'linear-gradient(to left, oklch(0.94 0.015 230) 0%, oklch(0.94 0.015 230 / 0.8) 40%, transparent 100%)' }}
        />

        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-7 lg:gap-10 overflow-x-auto scroll-smooth pb-4 hide-scrollbar px-8 sm:px-12 lg:px-16"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 h-16 sm:h-20 lg:h-24 px-6 sm:px-8 lg:px-10 rounded-xl bg-white/80 border border-border/40 shadow-sm flex items-center justify-center transition-all duration-700 cursor-default group hover:shadow-lg hover:border-primary/30 hover:bg-white"
              aria-label={`Cliente: ${client.name}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  width={120}
                  height={60}
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    img.style.display = "none"
                    const sibling = img.nextElementSibling as HTMLElement
                    if (sibling) sibling.style.display = "flex"
                  }}
                />
                <span className="hidden absolute inset-0 items-center justify-center font-medium text-sm text-foreground/80 text-center px-4">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showInfo && (
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {prefersReducedMotion
                ? "Usa el scroll para ver más empresas"
                : "Scroll automático continuo • Pausa al pasar el mouse"}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
