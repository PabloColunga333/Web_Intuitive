import type React from "react"
import { services } from "@/lib/site-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Lightbulb, Headphones, CheckCircle2, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shopping-cart": ShoppingCart,
  lightbulb: Lightbulb,
  headphones: Headphones,
}

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="servicios">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Paquetes y servicios
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos nuestros paquetes son personalizables. Análisis completamente gratis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const isHighlighted = service.id === "soporte"

              return (
                <Card
                  key={service.id}
                  className={`p-6 sm:p-8 flex flex-col relative overflow-hidden group transition-all hover:shadow-xl ${
                    isHighlighted
                      ? "glass border-primary/30 hover:border-primary/50"
                      : "glass border-border/50 hover:border-primary/20"
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/20 text-primary text-[10px] sm:text-xs font-medium">
                      24/7 urgencias
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-colors ${
                      isHighlighted
                        ? "bg-primary/30 group-hover:bg-primary/40"
                        : "bg-primary/20 group-hover:bg-primary/30"
                    }`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5 sm:mb-6">
                    {service.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={isHighlighted ? "default" : "outline"}
                    className="w-full group/btn h-11 sm:h-10 text-sm sm:text-base"
                  >
                    <Link href="/contacto">
                      Hablar con un especialista
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
