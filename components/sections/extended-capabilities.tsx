import { extendedCapabilities } from "@/lib/site-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const capabilityImages: Record<string, string> = {
  "gerente-planta": "/capabilities/gerente-planta.jpg",
  "recopilacion-datos": "/capabilities/recopilacion-datos.jpg",
  unipoint: "/capabilities/unipoint.jpg",
  analytics: "/capabilities/analytics.jpg",
  emf: "/capabilities/emf.jpg",
  webapi: "/capabilities/webapi.jpg",
}

export function ExtendedCapabilities() {
  return (
    <section className="py-4 sm:py-5 lg:py-6 relative" id="capacidades">
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
                  return (
                    <TabsTrigger
                      key={cap.id}
                      value={cap.id}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium data-[state=inactive]:bg-secondary/80 data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:hover:bg-secondary transition-all"
                      aria-label={`Ver capacidad: ${cap.title}`}
                    >
                      <span>{cap.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {extendedCapabilities.map((cap) => {
              return (
                <TabsContent key={cap.id} value={cap.id}>
                  <Card className="!p-0 !gap-0 bg-card border border-primary/25 shadow-xl shadow-primary/10 overflow-hidden">
                    <div className="flex flex-col lg:flex-row relative min-h-[400px]">
                      <div className="flex-1 p-6 sm:p-8 lg:p-12 z-10 relative">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{cap.title}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                          {cap.description}
                        </p>
                        <Button asChild className="group w-full sm:w-auto h-11 sm:h-10">
                          <Link href="/contacto?tipo=demo" aria-label={`Solicitar evaluación de ${cap.title}`}>
                            <span>Solicitar evaluación</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
                      <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 w-full h-64 lg:h-full relative">
                        <Image
                          src={capabilityImages[cap.id]}
                          alt={cap.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent" />
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
