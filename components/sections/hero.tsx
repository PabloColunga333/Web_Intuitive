import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden">
      {/* Imagen de fondo - piso de planta */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero/plant-floor.jpg.png"
          alt="Piso de planta de manufactura industrial"
          fill
          priority
          quality={85}
          className="object-cover object-center lg:object-right brightness-[0.85]"
          sizes="100vw"
        />
      </div>

      {/* Overlay oscuro global para mejor contraste */}
      <div className="absolute inset-0 bg-foreground/20 -z-10" />

      {/* Overlay gradiente izquierda más fuerte para legibilidad del texto */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(
            to right,
            hsl(var(--background) / 0.97) 0%,
            hsl(var(--background) / 0.92) 25%,
            hsl(var(--background) / 0.75) 45%,
            hsl(var(--background) / 0.40) 65%,
            hsl(var(--background) / 0.15) 80%,
            transparent 100%
          )`
        }}
      />

      {/* Overlay gradiente inferior para transición suave */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 -z-10"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)`
        }}
      />

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Contenido principal - lado izquierdo con panel glassmorphism */}
          <div className="max-w-2xl">
            <div className="backdrop-blur-md bg-background/60 rounded-3xl p-8 sm:p-10 lg:p-12 border border-border/50 shadow-2xl shadow-foreground/5 space-y-6 sm:space-y-8">
              <div className="flex justify-start animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Software integrado de manufactura ERP/MRP</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance animate-fade-up animation-delay-100 leading-[1.15] text-foreground">
                Planeación y control de producción{" "}
                <span className="text-primary">
                  en tiempo real
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-up animation-delay-200">
                CRM, trazabilidad, calidad e ingeniería integrados. Arquitectura basada en Microsoft para visibilidad
                completa de tu operación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-up animation-delay-300">
                <Button asChild size="lg" className="text-base h-13 sm:h-14 px-6 sm:px-8 glow-primary font-semibold">
                  <Link href="/contacto" className="flex items-center gap-2" aria-label="Solicitar demostración gratuita del producto">
                    <span>Solicitar demo gratuita</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base h-13 sm:h-14 px-6 sm:px-8 font-semibold text-white bg-[linear-gradient(120deg,#2fe075,#22c35e)] border-[#1fa755] shadow-lg shadow-[#25D366]/35 hover:shadow-[#25D366]/50 hover:-translate-y-[1px] transition-all"
                >
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2"
                    aria-label="Iniciar conversación por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    <span>Hablar por WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
