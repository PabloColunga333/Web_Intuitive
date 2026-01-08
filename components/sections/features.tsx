"use client"

import type React from "react"
import { useState } from "react"
import { features } from "@/lib/site-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, Cog, Factory, Package, TrendingUp, Users, FileText, ChevronRight } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  cog: Cog,
  factory: Factory,
  package: Package,
  "trending-up": TrendingUp,
  users: Users,
  "file-text": FileText,
}

const featureBullets: Record<string, string[]> = {
  planificacion: ["CTP dinámico", "MRP y capacidad", "Trazabilidad gráfica"],
  ingenieria: ["BOM visual", "Control de revisiones", "CADLink integrado"],
  manufactura: ["Órdenes en tiempo real", "Shop Floor Manager", "Escaneo móvil"],
  inventario: ["Niveles multi-ubicación", "Recuentos cíclicos", "Trazabilidad serie"],
  prevision: ["Pronósticos automáticos", "Selección de técnica", "Diagnósticos"],
  crm: ["Oportunidades", "Campañas", "Incidentes de soporte"],
  cotizaciones: ["Configurador BOM/rutas", "Aprobación jerárquica", "Matrices de precios"],
}

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="caracteristicas">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Características principales
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Herramientas completas para optimizar cada aspecto de tu manufactura
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon]
              const bullets = featureBullets[feature.id] || []

              return (
                <Card
                  key={feature.id}
                  className="p-5 sm:p-6 glass border border-primary/30 group hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 transition-all cursor-pointer active:scale-[0.98] bg-gradient-to-br from-primary/5 to-accent/5"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-center">
                    {feature.title}
                  </h3>

                  <ul className="space-y-2 mb-4 text-center">
                    {bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-sm text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                    >
                      Ver detalle
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="glass border-border/50 max-w-lg mx-4 sm:mx-auto">
          {selectedFeature && (
            <>
              <DialogHeader>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                    {(() => {
                      const Icon = iconMap[selectedFeature.icon]
                      return <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    })()}
                  </div>
                  <DialogTitle className="text-lg sm:text-xl">{selectedFeature.title}</DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {selectedFeature.description}
              </DialogDescription>
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button asChild className="w-full h-11 sm:h-10">
                  <a href="/contacto">Solicitar información</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
