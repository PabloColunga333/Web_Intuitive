import type React from "react"
import { extendedCapabilities } from "@/lib/site-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PiArrowRight, PiMonitor, PiScan, PiShieldCheck, PiChartLine, PiBell, PiCode } from "react-icons/pi"

const capabilityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "gerente-planta": PiMonitor,
  "recopilacion-datos": PiScan,
  unipoint: PiShieldCheck,
  analytics: PiChartLine,
  emf: PiBell,
  webapi: PiCode,
}

export function ExtendedCapabilities() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="capacidades">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Capacidades extendidas
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades avanzadas para llevar tu operación al siguiente nivel
            </p>
          </div>

          <Tabs defaultValue={extendedCapabilities[0].id} className="w-full">
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8">
              <TabsList className="inline-flex lg:flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-2 bg-transparent h-auto min-w-full lg:min-w-0">
                {extendedCapabilities.map((cap) => {
                  const Icon = capabilityIcons[cap.id]
                  return (
                    <TabsTrigger
                      key={cap.id}
                      value={cap.id}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:glass data-[state=inactive]:hover:bg-secondary/50 transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      {cap.title}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {extendedCapabilities.map((cap) => {
              const Icon = capabilityIcons[cap.id]
              return (
                <TabsContent key={cap.id} value={cap.id}>
                  <Card className="p-6 sm:p-8 lg:p-12 glass border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg shadow-primary/10">
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{cap.title}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                          {cap.description}
                        </p>
                        <Button asChild className="group w-full sm:w-auto h-11 sm:h-10">
                          <Link href="/contacto?tipo=demo">
                            Solicitar evaluación
                            <PiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                      <div className="icon-container" style={{ width: "fit-content", padding: "1rem" }}>
                        <Icon className="icon-lg" />
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
