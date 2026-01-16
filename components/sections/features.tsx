"use client"

import React, { useState, useEffect } from "react"
import { features } from "@/lib/site-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, Cog, Factory, Package, TrendingUp, Users, FileText, ChevronRight, ChevronLeft } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  cog: Cog,
  factory: Factory,
  package: Package,
  "trending-up": TrendingUp,
  users: Users,
  "file-text": FileText,
}

const featureBullets: Record<string, string[]> = {
  planificacion: ["CTP dinámico", "MRP en tiempo real", "Trazabilidad gráfica", "Análisis de capacidad"],
  ingenieria: ["BOM visual", "Control de revisiones", "CADLink integrado"],
  manufactura: ["Órdenes en tiempo real", "Shop Floor Manager", "Escaneo móvil"],
  inventario: ["Niveles multi-ubicación", "Recuentos cíclicos", "Trazabilidad serie"],
  prevision: ["Pronósticos automáticos", "Selección de técnica", "Diagnósticos"],
  crm: ["Oportunidades", "Campañas", "Incidentes de soporte"],
  cotizaciones: ["Configurador BOM/rutas", "Aprobación jerárquica", "Matrices de precios"],
}

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [maxHeight, setMaxHeight] = useState<number | null>(null)
  const cardRef = React.useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  // Para móvil: 1 tarjeta, tablet: 2, desktop: 3
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    setVisibleCards(getVisibleCards())
    const handleResize = () => setVisibleCards(getVisibleCards())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleFeatures = features.slice(currentIndex, currentIndex + visibleCards)
  const wrapAround = visibleFeatures.length < visibleCards
  
  if (wrapAround) {
    visibleFeatures.push(...features.slice(0, visibleCards - visibleFeatures.length))
  }

  // Calcular altura máxima de las tarjetas
  useEffect(() => {
    const updateMaxHeight = () => {
      if (cardRef.current) {
        const cards = cardRef.current.querySelectorAll('[data-card]')
        let maxH = 0
        cards.forEach((card) => {
          const height = (card as HTMLElement).offsetHeight
          if (height > maxH) maxH = height
        })
        if (maxH > 0) setMaxHeight(maxH)
      }
    }

    updateMaxHeight()
    window.addEventListener("resize", updateMaxHeight)
    const timer = setTimeout(updateMaxHeight, 100)
    return () => {
      window.removeEventListener("resize", updateMaxHeight)
      clearTimeout(timer)
    }
  }, [visibleCards, currentIndex])

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="caracteristicas">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Características principales
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Herramientas completas para optimizar cada aspecto de tu manufactura
            </p>
          </div>

          {/* Carrusel */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Botón Anterior */}
            <button
              onClick={prevSlide}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>

            {/* Tarjetas del Carrusel */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={cardRef}
                key={`${currentIndex}-${visibleCards}-${direction}`}
                className={`features-grid gap-4 sm:gap-6 transform-gpu ${
                  direction === "right" ? "animate-carousel-right" : "animate-carousel-left"
                }`}
              >
                {visibleFeatures.map((feature) => {
                  const Icon = iconMap[feature.icon]
                  const bullets = featureBullets[feature.id] || []

                  return (
                    <Card
                      key={feature.id}
                      data-card
                      style={maxHeight ? { height: `${maxHeight}px` } : {}}
                      className="p-5 sm:p-6 bg-card border border-border shadow-sm group hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer active:scale-[0.98] flex flex-col"
                      onClick={() => setSelectedFeature(feature)}
                    >
                      <div className="flex items-center justify-center mb-4 sm:mb-5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      <ul className="space-y-2 mb-4 flex-grow">
                        {bullets.map((bullet, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-sm text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                      >
                        Ver detalle
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={nextSlide}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          </div>

          {/* Indicadores de Posición */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: features.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? "right" : "left")
                  setCurrentIndex(idx)
                }}
                className={`min-w-[44px] min-h-[44px] p-3 rounded-full transition-all flex items-center justify-center ${
                  idx >= currentIndex && idx < currentIndex + visibleCards
                    ? "bg-primary/20"
                    : "bg-transparent hover:bg-primary/10"
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              >
                <span className={`block h-2 rounded-full transition-all ${
                  idx >= currentIndex && idx < currentIndex + visibleCards
                    ? "bg-primary w-8"
                    : "bg-border/50 w-2"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="glass border-border/50 max-w-lg mx-4 sm:mx-auto">
          {selectedFeature && (
            <>
              <DialogHeader>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center mb-2">
                  <div className="flex items-center justify-center">
                    {(() => {
                      const Icon = iconMap[selectedFeature.icon]
                      return <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-primary" />
                    })()}
                  </div>
                  <DialogTitle className="text-lg sm:text-xl">{selectedFeature.title}</DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {selectedFeature.description}
              </DialogDescription>
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button asChild className="w-full h-11 sm:h-10">
                  <a href="/contacto">Solicitar información</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
