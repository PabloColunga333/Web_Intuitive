import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Hero } from "@/components/sections/hero"
import { AboutERP } from "@/components/sections/about-erp"
import { Features } from "@/components/sections/features"
import { ExtendedCapabilities } from "@/components/sections/extended-capabilities"
import { ServicesPreview } from "@/components/sections/services-preview"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-data"
import { PiPhone, PiEnvelope, PiMapPin, PiWhatsappLogo } from "react-icons/pi"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutERP />
        <Features />
        <ExtendedCapabilities />
        <ServicesPreview />
        <FAQ />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto section-shell p-10 md:p-12">
              {/* Header con gancho */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Hablemos de tu operación</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cuéntanos cómo es tu proceso de manufactura y te orientamos al paquete ideal. Análisis completamente
                  gratis.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="p-6 glass border-border/50">
                    <h3 className="font-semibold text-lg mb-5">Información de contacto</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="icon-container">
                          <PiPhone className="icon-md" />
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
                        <div className="icon-container">
                          <PiEnvelope className="icon-md" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Correo</p>
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {siteConfig.contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="icon-container">
                          <PiMapPin className="icon-md" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Ubicación</p>
                          <p className="text-muted-foreground">{siteConfig.contact.location}</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 glass border-border/50">
                    <h3 className="font-semibold mb-4">Acciones rápidas</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Button asChild variant="outline" size="sm" className="h-auto py-3 flex-col gap-1 bg-transparent">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <PiWhatsappLogo className="w-7 h-7 text-[#25D366]" />
                          <span className="text-xs">WhatsApp</span>
                        </a>
                      </Button>
                      
                    </div>
                  </Card>

                  <Card className="p-6 bg-primary/10 border-primary/20">
                    <p className="text-sm leading-relaxed">
                      Todos nuestros paquetes son personalizables. Te ofrecemos un análisis completamente gratis para
                      entender tus necesidades.
                    </p>
                  </Card>
                </div>

                <Card className="lg:col-span-3 p-6 lg:p-8 glass border-border/50">
                  <h3 className="font-semibold text-xl mb-6">Envíanos un mensaje</h3>
                  <ContactForm subject="Solicitud de información – Intuitive ERP" source="home-contacto" />
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
