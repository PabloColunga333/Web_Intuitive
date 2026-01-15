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
  { name: "Giesecke & Devrient", logo: "/logos/GD_Logo_GieseckeDevrientNeu.jpg" },
  { name: "Graphic Packaging", logo: "/logos/Graphic_Packaging_International_Logo.jpg" },
  { name: "Actia de Mexico", logo: "/logos/Logo_Group_Actia_2007.svg.png" },
  { name: "Grupo Polesa", logo: "/logos/polesa.png" },
  { name: "Grupo Graficos San Juan", logo: "/logos/Grupo-Grafico-San-Juan.png" },
  { name: "Hikam Electric De Mexico", logo: "/logos/LOGOTIPOS-HIKAM-03.webp" },
  { name: "Woodcrafters Home Products", logo: "/logos/logo_WoodCrafters.png" },
  { name: "OmexAlimentaria", logo: "/logos/logo_Omex.webp" },
  { name: "GBOX", logo: "/logos/GBOX.png" },
]

export function ClientsCarousel({ title = "Empresas con las que hemos trabajado", autoPlaySpeed = 25, showInfo = true, showTitle = true }: ClientsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    // Detectar si el usuario prefiere reducir movimiento
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

    // Esperar a que el contenido se renderice
    const timeoutId = setTimeout(() => {
      const totalWidth = container.scrollWidth
      const halfWidth = totalWidth / 2

      let scrollPosition = 0
      const speed = 1

      const animate = () => {
        scrollPosition += speed
        // Reiniciar suavemente sin saltos
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
      {/* Título con container normal (centrado, max-width) */}
      {showTitle && (
        <div className="container mx-auto px-4 mb-12 sm:mb-16">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas líderes que confían en Intuitive ERP para optimizar sus procesos de manufactura
            </p>
          </div>
        </div>
      )}

      {/* Carrusel Edge-to-Edge: track full-width sin padding lateral */}
      <div className="relative overflow-x-clip w-full">
        {/* Gradient overlay izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Gradient overlay derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 sm:gap-4 overflow-x-auto scroll-smooth pb-6 hide-scrollbar pl-4 sm:pl-6 lg:pl-8"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Contenido original */}
          {clients.map((client, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 h-24 sm:h-28 px-3 sm:px-4 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={40}
                className="max-h-14 w-auto object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.display = "none"
                  const sibling = img.nextElementSibling as HTMLElement
                  if (sibling) sibling.style.display = "block"
                }}
              />
              <span className="hidden font-medium text-sm sm:text-base text-foreground leading-tight max-w-xs text-center">
                {client.name}
              </span>
            </div>
          ))}

          {/* Contenido duplicado para loop infinito */}
          {clients.map((client, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 h-24 sm:h-28 px-3 sm:px-4 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={40}
                className="max-h-14 w-auto object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.display = "none"
                  const sibling = img.nextElementSibling as HTMLElement
                  if (sibling) sibling.style.display = "block"
                }}
              />
              <span className="hidden font-medium text-sm sm:text-base text-foreground leading-tight max-w-xs text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info texto */}
      {showInfo && (
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              {prefersReducedMotion
                ? "Usa el scroll para ver más empresas"
                : "El carrusel se pausa al pasar el mouse (desktop) • Scroll disponible en móvil"}
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
