import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { PiPhone, PiEnvelope, PiMapPin, PiWhatsappLogo, PiClock } from "react-icons/pi"
import { siteConfig } from "@/lib/site-data"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contacto | Intuitive ERP – Hablemos de tu operación",
  description:
    "Cuéntanos sobre tu proceso de manufactura y te orientamos al paquete ideal. Análisis completamente gratis.",
}

export default function ContactoPage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <>
      <Header />
      <main>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 industrial-grid -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-up">
                Hablemos de tu operación
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
                Cuéntanos cómo es tu proceso de manufactura y te orientamos al paquete ideal. Análisis completamente
                gratis.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Información de contacto */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="p-6 glass border-border/50">
                    <h2 className="font-semibold text-xl mb-6">Información de contacto</h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <PiPhone className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Teléfono</p>
                          <a
                            href={`tel:${siteConfig.contact.phoneRaw}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {siteConfig.contact.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <PiEnvelope className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Correo electrónico</p>
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {siteConfig.contact.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <PiMapPin className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Ubicación</p>
                          <p className="text-muted-foreground">{siteConfig.contact.location}</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Quick actions */}
                  <Card className="p-6 glass border-border/50">
                    <h3 className="font-semibold mb-4">Acciones rápidas</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Button asChild className="h-auto py-3 flex-col gap-1 bg-[#25D366] hover:bg-[#20BA5A]">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <PiWhatsappLogo className="w-7 h-7" />
                          <span className="text-xs">WhatsApp</span>
                        </a>
                      </Button>
                      
                    </div>
                  </Card>

                  <Card className="p-6 glass border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <PiClock className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Horario de atención</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong>Lunes a Viernes:</strong> 9:00 am - 6:00 pm
                          <br />
                          (Excepto días festivos y última semana del año)
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Urgencias:</strong> Disponibles 24/7 vía telefónica
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Formulario */}
                <Card className="lg:col-span-3 p-6 lg:p-8 glass border-border/50">
                  <h2 className="font-semibold text-xl mb-6">Envíanos un mensaje</h2>
                  <ContactForm subject="Solicitud de contacto – Intuitive ERP" source="pagina-contacto" />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
