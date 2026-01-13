import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { services, siteConfig } from "@/lib/site-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Lightbulb, Headphones, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios | Intuitive ERP – Venta, Consultoría y Soporte Técnico",
  description:
    "Venta, consultoría y soporte técnico certificado por SIEMENS para sistemas de manufactura ERP/MRP. Paquetes personalizables.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shopping-cart": ShoppingCart,
  lightbulb: Lightbulb,
  headphones: Headphones,
}

export default function ServiciosPage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent("Hola, me gustaría información sobre sus servicios.")}`

  return (
    <>
      <Header />
      <main>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 industrial-grid -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background -z-10" />

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-up">Nuestros servicios</h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
                Todos nuestros paquetes son personalizables. Te ofrecemos un análisis completamente gratis.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon]
                const isSupport = service.id === "soporte"

                return (
                  <Card
                    key={service.id}
                    className={`p-8 lg:p-10 glass border-border/50 relative overflow-hidden ${
                      isSupport ? "border-primary/30" : ""
                    }`}
                  >
                    {isSupport && (
                      <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        Urgencias 24/7
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                        <div className="mb-6">
                          <h3 className="font-semibold mb-3">Qué incluye:</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild className="group">
                          <Link href="/contacto">
                            Hablar con un especialista
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 lg:p-12 glass border-primary/20 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">¿Listo para optimizar tu manufactura?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contáctanos para un análisis gratis y descubre cómo Intuitive ERP puede transformar tu operación
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="glow-primary">
                  <Link href="/contacto">
                    Solicitar información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 bg-transparent"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
