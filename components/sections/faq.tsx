"use client"

import { useState, useEffect } from "react"
import { faqs, siteConfig } from "@/lib/site-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react"

export function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent("Hola, tengo una pregunta sobre Intuitive ERP.")}`

  // Auto-scroll cada 5 segundos
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faqs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % faqs.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">Preguntas frecuentes</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Respuestas a las dudas más comunes sobre Intuitive ERP</p>
          </div>

          {/* Carrusel de preguntas */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-border/50 flex items-center justify-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all active:scale-95"
              aria-label="Pregunta anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>

            {/* Tarjeta de pregunta actual */}
            <Card className="glass border-border/50 p-6 sm:p-8 min-h-[280px] sm:min-h-[240px] flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-base sm:text-lg text-foreground leading-snug">
                  {faqs[currentIndex].question}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                {faqs[currentIndex].answer}
              </p>
              <div className="mt-4 pt-4 border-t border-border/30 text-xs sm:text-sm text-muted-foreground">
                Pregunta {currentIndex + 1} de {faqs.length}
              </div>
            </Card>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-border/50 flex items-center justify-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all active:scale-95"
              aria-label="Pregunta siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          </div>

          {/* Indicadores de posición */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
            {faqs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border/50 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Ir a pregunta ${idx + 1}`}
              />
            ))}
          </div>

          {/* Tarjeta de contacto */}
          <Card className="mt-8 sm:mt-10 p-5 sm:p-6 glass border-border/50 text-center">
            <h3 className="font-semibold text-base sm:text-lg mb-2">¿No encuentras respuesta a tu pregunta?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Escríbenos directamente y te ayudamos con tu caso específico</p>
            <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Preguntar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
