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
  { name: "Mitsubishi Electric de México", logo: "https://logo.clearbit.com/mitsubishielectric.com" },
  { name: "Giesecke & Devrient", logo: "https://logo.clearbit.com/gi-de.com" },
  { name: "Graphic Packaging", logo: "https://logo.clearbit.com/graphicpkg.com" },
  { name: "Actia de Mexico", logo: "https://logo.clearbit.com/actia.es" },
  { name: "Grupo Polesa", logo: "https://logo.clearbit.com/polesa.com.mx" },
  { name: "Thor Químicos de México", logo: "https://logo.clearbit.com/thorquimicos.com.mx" },
  { name: "Ediciones Fiscales ISEF", logo: "https://logo.clearbit.com/edicionesfiscales.com.mx" },
  { name: "Grupo Graficos San Juan", logo: "https://logo.clearbit.com/ggsa.com.mx" },
  { name: "Bolsas y Plásticos Internacionales", logo: "https://logo.clearbit.com/bolsasyplasticos.com" },
  { name: "Hikam Electric De Mexico", logo: "https://logo.clearbit.com/hikam.com.mx" },
  { name: "Woodcrafters Home Products", logo: "https://logo.clearbit.com/woodcrafters.com" },
  { name: "GU Plumbing", logo: "https://logo.clearbit.com/guplumbing.com" },
  { name: "OmexAlimentaria", logo: "https://logo.clearbit.com/omexalimentaria.com" },
  { name: "Plásticos Arco Iris", logo: "https://logo.clearbit.com/plasticosarcoiris.com.mx" },
  { name: "GBOX", logo: "https://logo.clearbit.com/gbox.com.mx" },
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

    let scrollPosition = 0
    const containerWidth = container.scrollWidth / 2 // Ya que duplicamos el contenido

    const animate = () => {
      scrollPosition += 1
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0
      }
      container.scrollLeft = scrollPosition
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
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
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar pl-4 sm:pl-6 lg:pl-8"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Contenido original */}
          {clients.map((client, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 h-24 sm:h-28 px-6 sm:px-8 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={40}
                className="max-h-16 w-auto object-contain"
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
              className="flex-shrink-0 h-24 sm:h-28 px-6 sm:px-8 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={40}
                className="max-h-16 w-auto object-contain"
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
