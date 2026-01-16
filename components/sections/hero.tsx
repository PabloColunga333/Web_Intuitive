import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative min-h-[92vh] md:min-h-[95vh] flex items-center overflow-hidden">
      {/* Imagen de fondo - piso de planta */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero/plant-floor.jpg.png"
          alt="Piso de planta de manufactura industrial"
          fill
          priority
          quality={90}
          className="object-cover object-center lg:object-right brightness-[0.6] contrast-[1.1]"
          sizes="100vw"
        />
      </div>

      {/* Overlay oscuro global para mejor contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Overlay gradiente izquierda muy fuerte para legibilidad del texto */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(
            100deg,
            hsl(var(--background)) 0%,
            hsl(var(--background) / 0.98) 25%,
            hsl(var(--background) / 0.92) 40%,
            hsl(var(--background) / 0.70) 55%,
            hsl(var(--background) / 0.35) 70%,
            transparent 85%
          )`
        }}
      />

      {/* Overlay gradiente inferior para transición suave al siguiente contenido */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 -z-10"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)`
        }}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Layout grid: texto a la izquierda, espacio para imagen a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido principal - lado izquierdo con fondo garantizado */}
            <div className="relative">
              {/* Panel de fondo para garantizar legibilidad */}
              <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 bg-background/85 backdrop-blur-sm rounded-3xl -z-10" />
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex justify-start animate-fade-up">
                  <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary/10 border border-primary/25 text-sm font-semibold text-primary shadow-sm">
                    <span>Software integrado de manufactura ERP/MRP</span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-balance animate-fade-up animation-delay-100 leading-[1.1] text-foreground">
                  Planeación y control de producción{" "}
                  <span className="text-primary">
                    en tiempo real
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-foreground/80 text-pretty leading-relaxed animate-fade-up animation-delay-200 max-w-xl">
                  CRM, trazabilidad, calidad e ingeniería integrados. Arquitectura basada en Microsoft para visibilidad
                  completa de tu operación.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-up animation-delay-300">
                  <Button
                    asChild
                    size="lg"
                    className="text-base h-14 px-8 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg glow-primary"
                  >
                    <Link href="/servicios">
                      Ver servicios
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base h-14 px-8 font-semibold text-white bg-[linear-gradient(120deg,#2fe075,#22c35e)] border-[#1fa755] shadow-lg shadow-[#25D366]/35 hover:shadow-[#25D366]/50 hover:-translate-y-[1px] transition-all"
                  >
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                      aria-label="Iniciar conversación por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      <span>Hablar por WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Lado derecho - espacio visual para la imagen de fondo */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
