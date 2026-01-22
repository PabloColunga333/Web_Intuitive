import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
      {/* ===== BACKGROUND LAYER: Imagen adjunta ===== */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/hero/hero-factory-bg.png"
          alt="Planta de manufactura industrial con trabajadores"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ===== OVERLAY LAYER 1: Radial gradient centrado (dark center) ===== */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          background: `radial-gradient(circle at center,
            rgba(0,0,0,0.80) 0%,
            rgba(0,0,0,0.65) 30%,
            rgba(0,0,0,0.40) 55%,
            rgba(0,0,0,0.50) 100%
          )`
        }}
      />

      {/* ===== OVERLAY LAYER 2: Vertical scrim (top/bottom) ===== */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(to bottom,
            rgba(0,0,0,0.60) 0%,
            rgba(0,0,0,0.10) 30%,
            rgba(0,0,0,0.10) 70%,
            rgba(0,0,0,0.65) 100%
          )`
        }}
      />

      {/* ===== OVERLAY LAYER 3: Vignette suave en bordes ===== */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 200px 60px rgba(0,0,0,0.4)`
        }}
      />

      {/* ===== CONTENT LAYER ===== */}
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* H1 grande, centrado */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100 leading-[1.1] tracking-tight">
            Control total de tu{" "}
            <span className="text-primary">
              producción
            </span>
          </h1>

          {/* Subheadline con opacidad */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200 leading-relaxed">
            Planeación, trazabilidad, calidad e ingeniería integrados en una sola plataforma. 
            Visibilidad completa de tu operación en tiempo real.
          </p>

          {/* CTAs centrados */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="text-base h-14 px-8 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <Link href="/contacto?tipo=demo">
                Solicitar demo
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base h-14 px-8 font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto"
            >
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Iniciar conversación por WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Sin gradiente - la siguiente sección se superpone */}
    </section>
  )
}
