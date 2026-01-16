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
          src="/hero/plant-floor.jpg"
          alt="Piso de planta de manufactura industrial"
          fill
          priority
          quality={85}
          className="object-cover object-right-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay oscuro sutil global para evitar que se "queme" la imagen */}
      <div className="absolute inset-0 bg-foreground/5 -z-10" />

      {/* Overlay gradiente izquierda para legibilidad del texto */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(
            to right,
            hsl(var(--background) / 0.88) 0%,
            hsl(var(--background) / 0.75) 25%,
            hsl(var(--background) / 0.45) 50%,
            hsl(var(--background) / 0.15) 70%,
            transparent 100%
          )`
        }}
      />

      {/* Overlay gradiente inferior para transición suave */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 -z-10"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)`
        }}
      />

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal - lado izquierdo */}
            <div className="space-y-8">
              <div className="flex justify-start mb-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-semibold text-primary shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Software integrado de manufactura ERP/MRP</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance animate-fade-up animation-delay-100 leading-[1.1] drop-shadow-sm">
                Planeación y control de producción{" "}
                <span className="text-primary">
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

            {/* Panel UI de producción - lado derecho (solo desktop) */}
            <div className="hidden lg:block relative animate-fade-up animation-delay-400" aria-hidden="true">
              <div className="relative max-w-md ml-auto">
                {/* Panel principal glassmorphism */}
                <div className="backdrop-blur-xl bg-background/70 rounded-2xl border border-border/80 p-6 shadow-2xl shadow-foreground/10">
                  {/* Header del panel */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">Panel de Producción</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    </div>
                  </div>

                  {/* Widget 1: Mini Gantt */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Gantt - Órdenes</span>
                    </div>
                    <div className="space-y-2 pl-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground/70 w-12 shrink-0">OP-001</span>
                        <div className="flex-1 h-4 bg-secondary/50 rounded overflow-hidden">
                          <div className="h-full w-[85%] bg-gradient-to-r from-primary to-primary/70 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground/70 w-12 shrink-0">OP-002</span>
                        <div className="flex-1 h-4 bg-secondary/50 rounded overflow-hidden">
                          <div className="h-full w-[60%] bg-gradient-to-r from-primary to-primary/70 rounded ml-[15%]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground/70 w-12 shrink-0">OP-003</span>
                        <div className="flex-1 h-4 bg-secondary/50 rounded overflow-hidden">
                          <div className="h-full w-[45%] bg-gradient-to-r from-accent to-accent/70 rounded ml-[30%]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground/70 w-12 shrink-0">OP-004</span>
                        <div className="flex-1 h-4 bg-secondary/50 rounded overflow-hidden">
                          <div className="h-full w-[70%] bg-gradient-to-r from-primary to-primary/70 rounded ml-[5%]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground/70 w-12 shrink-0">OP-005</span>
                        <div className="flex-1 h-4 bg-secondary/50 rounded overflow-hidden">
                          <div className="h-full w-[55%] bg-gradient-to-r from-accent to-accent/70 rounded ml-[25%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Widget 2: Carga de Capacidad */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Carga de Capacidad</span>
                    </div>
                    <div className="space-y-2.5 pl-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/70 w-16 shrink-0">Línea A</span>
                        <div className="flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground/80 w-8 text-right">92%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/70 w-16 shrink-0">Línea B</span>
                        <div className="flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground/80 w-8 text-right">78%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/70 w-16 shrink-0">Ensamble</span>
                        <div className="flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden">
                          <div className="h-full w-[65%] bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground/80 w-8 text-right">65%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/70 w-16 shrink-0">Pruebas</span>
                        <div className="flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden">
                          <div className="h-full w-[41%] bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground/80 w-8 text-right">41%</span>
                      </div>
                    </div>
                  </div>

                  {/* Widget 3: WIP / Órdenes */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">WIP - Estado</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pl-3">
                      {/* En curso */}
                      <div className="p-3 rounded-lg bg-secondary/60 border border-border/50">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-2 h-2 rounded-full bg-primary/80" />
                          <span className="text-[9px] text-muted-foreground font-medium">En curso</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">12</span>
                      </div>
                      {/* En espera */}
                      <div className="p-3 rounded-lg bg-secondary/60 border border-border/50">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                          <span className="text-[9px] text-muted-foreground font-medium">En espera</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">5</span>
                      </div>
                      {/* Completada */}
                      <div className="p-3 rounded-lg bg-secondary/60 border border-border/50">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                          <span className="text-[9px] text-muted-foreground font-medium">Completada</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">28</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo flotante */}
                <div className="absolute -top-4 -left-4 backdrop-blur-lg bg-background/60 rounded-xl border border-border/60 px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-foreground/80">Sincronizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Versión compacta del panel para tablet (oculto en mobile y desktop) */}
      <div className="hidden md:block lg:hidden absolute bottom-8 right-4 left-4 animate-fade-up animation-delay-400" aria-hidden="true">
        <div className="backdrop-blur-xl bg-background/70 rounded-xl border border-border/80 p-4 shadow-xl max-w-md mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-foreground/80">Panel de Producción</span>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">12 en curso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                <span className="text-muted-foreground">5 espera</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                <span className="text-muted-foreground">28 listas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
