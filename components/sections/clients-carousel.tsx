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
      const speed = 0.8

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
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-4 hide-scrollbar pl-6 sm:pl-8 lg:pl-10"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 h-20 sm:h-24 px-8 sm:px-10 rounded-2xl glass border border-border/60 shadow-sm flex items-center justify-center transition-all duration-500 cursor-default group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              aria-label={`Cliente: ${client.name}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  width={140}
                  height={70}
                  className="h-14 sm:h-16 w-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
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
