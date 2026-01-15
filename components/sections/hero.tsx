import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck, Star } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden hero-mesh">
      <div className="absolute inset-0 hero-grid-premium -z-10" />
      <div className="absolute inset-0 hero-grid-overlay -z-9" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background -z-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/22 rounded-full blur-[128px] -z-10 animate-float-soft" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/18 rounded-full blur-[100px] -z-10 animate-float-soft" />

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <span>Software integrado de manufactura ERP/MRP</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-4 sm:mb-6 text-balance animate-fade-up animation-delay-100">
            Planeación y control de producción <span className="text-primary">en tiempo real</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-center mb-8 sm:mb-10 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-up animation-delay-200">
            CRM, trazabilidad, calidad e ingeniería integrados. Arquitectura basada en Microsoft para visibilidad
            completa de tu operación.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="text-base glow-primary">
              <Link href="/contacto" className="flex items-center gap-2" aria-label="Solicitar demostración gratuita del producto">
                <span>Solicitar demo gratuita</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base text-white bg-[linear-gradient(120deg,#2fe075,#22c35e)] border-[#1fa755] shadow-lg shadow-[#25D366]/35 hover:shadow-[#25D366]/50 hover:-translate-y-[1px] transition-transform"
            >
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
                aria-label="Iniciar conversación por WhatsApp"
              >
                <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} aria-hidden="true" />
                <span>Hablar por WhatsApp</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-fade-up animation-delay-400">
            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass border border-primary/30 shadow-lg shadow-primary/10 text-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex justify-center mb-3">
                <div className="icon-container">
                  <TrendingUp className="icon-md" aria-hidden="true" />
                </div>
              </div>
              <p className="font-semibold text-sm sm:text-base mb-2 text-foreground">Implementación probada</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Proceso con tiempo de entrega definido</p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass border border-primary/30 shadow-lg shadow-primary/10 text-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex justify-center mb-3">
                <div className="icon-container">
                  <ShieldCheck className="icon-md" aria-hidden="true" />
                </div>
              </div>
              <p className="font-semibold text-sm sm:text-base mb-2 text-foreground">Visibilidad total</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Decisiones informadas en tiempo real</p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass border border-primary/30 shadow-lg shadow-primary/10 text-center bg-gradient-to-br from-primary/5 to-accent/5 sm:col-span-2 md:col-span-1">
              <div className="flex justify-center mb-3">
                <div className="icon-container">
                  <Star className="icon-md" aria-hidden="true" />
                </div>
              </div>
              <p className="font-semibold text-sm sm:text-base mb-2 text-foreground">Soporte certificado</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Respaldado por SIEMENS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
