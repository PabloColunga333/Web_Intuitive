import { benefits } from "@/lib/site-data"
import { ArrowRight } from "lucide-react"
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
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <Card className="p-6 sm:p-8 lg:p-10 bg-card border border-primary/25 shadow-xl shadow-primary/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
                ¿Por qué Intuitive ERP?
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground leading-relaxed font-medium">{benefit}</span>
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
