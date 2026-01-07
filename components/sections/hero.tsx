import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, BarChart3, Shield, Zap } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 industrial-grid -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background -z-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] -z-10" />

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
            <Button asChild size="lg" className="text-base h-12 sm:h-14 px-6 sm:px-8 glow-primary w-full sm:w-auto">
              <Link href="/contacto">
                Solicitar demo gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base h-12 sm:h-14 px-6 sm:px-8 bg-transparent border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-4 rounded-xl sm:rounded-2xl glass group hover:bg-secondary/30 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">Implementación probada</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Proceso con tiempo de entrega definido</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-4 rounded-xl sm:rounded-2xl glass group hover:bg-secondary/30 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">Visibilidad total</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Decisiones informadas en tiempo real</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-4 rounded-xl sm:rounded-2xl glass group hover:bg-secondary/30 transition-colors sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">Soporte certificado</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Respaldado por SIEMENS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
