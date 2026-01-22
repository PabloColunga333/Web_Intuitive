import { benefits } from "@/lib/site-data"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutERP() {
  return (
    <section className="py-4 sm:py-5 lg:py-6 relative overflow-hidden" id="que-es">
      {/* Fondo con gradiente radial sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background -z-10" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              ¿Qué es Intuitive ERP?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Software integrado diseñado específicamente para fabricantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            {/* Columna de contenido */}
            <div className="order-2 lg:order-1">
              <div className="space-y-5 sm:space-y-6 mb-8">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Intuitive ERP es un sistema ERP/MRP diseñado para entornos de{" "}
                  <span className="text-foreground font-semibold">producción repetitivos y de alta mezcla</span>, así como
                  industrias reguladas: electrónica, dispositivos médicos y aeroespaciales.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Ofrece herramientas avanzadas para{" "}
                  <span className="text-foreground font-semibold">
                    configuración de producto, gestión de calidad, cambios de ingeniería y trazabilidad por número de
                    serie
                  </span>
                  . La funcionalidad de cotización a efectivo proporciona visibilidad completa para decisiones
                  estratégicas.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Con un proceso de implementación probado, entrenamiento completo, guías y manuales, tu empresa puede
                  implementar Intuitive ERP y comenzar a ver resultados.
                </p>
              </div>

              <Button asChild className="group h-12 px-6 w-full sm:w-auto">
                <Link href="/contacto">
                  Hablemos de tu operación
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Columna de visual - Hero dinámico sin frame */}
            <div className="order-1 lg:order-2 relative group">
              {/* Animación de entrada */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* Contenedor principal de la imagen */}
                <div className="relative [perspective:1000px]">
                  {/* Glow de fondo que se intensifica en hover */}
                  <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Imagen principal con efectos */}
                  <div className="relative transition-all duration-700 ease-out group-hover:[transform:rotateY(-3deg)_rotateX(2deg)_scale(1.02)] [transform-style:preserve-3d]">
                    {/* Contenedor de imagen con bordes redondeados y sombra dramática */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                      <Image
                        src="/erp-dashboard-hero.png"
                        alt="Equipo industrial usando dashboard de Intuitive ERP en planta de manufactura"
                        width={800}
                        height={600}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      
                      {/* Overlay con gradiente sutil para integración de color */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                      
                      {/* Grid blueprint muy sutil */}
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="industrial-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#industrial-grid)" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Borde decorativo con efecto glow */}
                    <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary/20 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                  </div>
                </div>
                
                {/* Sombra/reflejo inferior */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          {/* Sección de beneficios abajo */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-foreground">
              ¿Por qué Intuitive ERP?
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
