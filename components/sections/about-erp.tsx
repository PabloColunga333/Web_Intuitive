import { benefits } from "@/lib/site-data"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutERP() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="que-es">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              ¿Qué es Intuitive ERP?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Software integrado diseñado específicamente para fabricantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Intuitive ERP es un sistema ERP/MRP diseñado para entornos de{" "}
                <span className="text-foreground font-medium">producción repetitivos y de alta mezcla</span>, así como
                industrias reguladas: electrónica, dispositivos médicos y aeroespaciales.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Ofrece herramientas avanzadas para{" "}
                <span className="text-foreground font-medium">
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

              <Button asChild variant="outline" className="mt-4 group bg-transparent h-11 sm:h-auto w-full sm:w-auto">
                <Link href="/contacto">
                  Hablemos de tu operación
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <Card className="p-6 sm:p-8 glass border-border/50">
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </span>
                ¿Por qué Intuitive ERP?
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
