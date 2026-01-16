import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden hero-mesh">
      {/* Grid sutil como ::before en CSS */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/6 via-transparent to-background -z-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/18 rounded-full blur-[140px] -z-10 animate-float-soft" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[110px] -z-10 animate-float-soft" />

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div className="space-y-8">
              <div className="flex justify-start mb-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium text-muted-foreground border border-border/50">
                  <span>Software integrado de manufactura ERP/MRP</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance animate-fade-up animation-delay-100 leading-[1.1]">
                Planeación y control de producción{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  en tiempo real
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed animate-fade-up animation-delay-200 max-w-2xl">
                CRM, trazabilidad, calidad e ingeniería integrados. Arquitectura basada en Microsoft para visibilidad
                completa de tu operación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up animation-delay-300">
                <Button asChild size="lg" className="text-base h-14 px-8 glow-primary font-semibold">
                  <Link href="/contacto" className="flex items-center gap-2" aria-label="Solicitar demostración gratuita del producto">
                    <span>Solicitar demo gratuita</span>
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
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                    <span>Hablar por WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Panel visual abstracto (enterprise) */}
            <div className="hidden lg:block relative animate-fade-up animation-delay-400">
              <div className="relative aspect-square max-w-xl mx-auto">
                {/* Card principal con efecto dashboard */}
                <div className="absolute inset-0 glass rounded-2xl border border-border/50 p-8 shadow-2xl shadow-primary/10">
                  {/* Header simulado */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-2">
                      <div className="h-3 w-32 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full" />
                      <div className="h-2 w-24 bg-muted rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20" />
                      <div className="w-8 h-8 rounded-lg bg-accent/20" />
                    </div>
                  </div>

                  {/* Métricas simuladas */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <div className="h-2 w-16 bg-muted/50 rounded-full mb-3" />
                      <div className="h-6 w-20 bg-gradient-to-r from-primary to-primary/70 rounded-lg" />
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <div className="h-2 w-16 bg-muted/50 rounded-full mb-3" />
                      <div className="h-6 w-20 bg-gradient-to-r from-accent to-accent/70 rounded-lg" />
                    </div>
                  </div>

                  {/* Gráfico simulado */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-end gap-2 h-32">
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[45%]" />
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[70%]" />
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[55%]" />
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[85%]" />
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[65%]" />
                      <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-t-lg h-[90%]" />
                    </div>
                  </div>

                  {/* Elementos de lista */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-3/4 bg-muted/50 rounded-full" />
                          <div className="h-2 w-1/2 bg-muted/30 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elementos flotantes decorativos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl glass border border-border/50 p-4 shadow-xl">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-accent/40 to-accent/20" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl glass border border-border/50 p-4 shadow-xl">
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                    <div className="h-2 w-4/5 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                    <div className="h-2 w-3/5 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                  </div>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
