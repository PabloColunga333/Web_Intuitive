"use client"

import { useEffect, useRef, useState } from "react"

interface ClientsCarouselProps {
  title?: string
  autoPlaySpeed?: number
}

const clients = [
  "Mitsubishi Electric de México",
  "Giesecke & Devrient",
  "Graphic Packaging",
  "Actia de Mexico",
  "Grupo Polesa",
  "Thor Químicos de México",
  "Ediciones Fiscales ISEF",
  "Grupo Graficos San Juan",
  "Bolsas y Plásticos Internacionales",
  "Hikam Electric De Mexico",
  "Woodcrafters Home Products",
  "GU Plumbing",
  "OmexAlimentaria",
  "Plásticos Arco Iris",
  "GBOX",
]

export function ClientsCarousel({ title = "Empresas con las que hemos trabajado", autoPlaySpeed = 25 }: ClientsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
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
    if (!container || prefersReducedMotion || isHovering) return

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
  }, [prefersReducedMotion, isHovering])

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas líderes que confían en Intuitive ERP para optimizar sus procesos de manufactura
            </p>
          </div>

          {/* Carrusel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlay izquierda */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Gradient overlay derecha */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
              style={{
                scrollBehavior: "auto",
                WebkitOverflowScrolling: "touch",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Contenido original */}
              {clients.map((client, index) => (
                <div
                  key={`original-${index}`}
                  className="flex-shrink-0 h-24 sm:h-28 px-6 sm:px-8 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center text-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
                >
                  <p className="font-medium text-sm sm:text-base text-foreground leading-tight max-w-xs">
                    {client}
                  </p>
                </div>
              ))}

              {/* Contenido duplicado para loop infinito */}
              {clients.map((client, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 h-24 sm:h-28 px-6 sm:px-8 rounded-xl sm:rounded-2xl glass border border-border/50 shadow-sm shadow-primary/5 bg-gradient-to-br from-card/50 to-primary/5 flex items-center justify-center text-center hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default min-w-max"
                >
                  <p className="font-medium text-sm sm:text-base text-foreground leading-tight max-w-xs">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info texto */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              {prefersReducedMotion
                ? "Usa el scroll para ver más empresas"
                : "El carrusel se pausa al pasar el mouse (desktop) • Scroll disponible en móvil"}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
