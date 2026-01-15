import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Hero } from "@/components/sections/hero"
import { ClientsCarousel } from "@/components/sections/clients-carousel"
import { AboutERP } from "@/components/sections/about-erp"
import { Features } from "@/components/sections/features"
import { ServicesPreview } from "@/components/sections/services-preview"
import { siteConfig } from "@/lib/site-data"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Lazy load de componentes pesados
const ExtendedCapabilities = dynamic(() => import("@/components/sections/extended-capabilities").then(mod => ({ default: mod.ExtendedCapabilities })), {
  loading: () => <div className="py-20" />
})
const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="py-20" />
})
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-secondary/20 rounded-lg" />
})

export default function HomePage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Sección Carrusel de Clientes - Full Bleed Edge-to-Edge */}
        <section className="relative -mt-8 sm:-mt-12 lg:-mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
          
          {/* Wrapper Full-Bleed */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-clip">
            <ClientsCarousel showInfo={false} showTitle={false} />
          </div>
        </section>

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
                          <Phone className="icon-md" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Teléfono</p>
                          <a
                            href={`tel:${siteConfig.contact.phoneRaw}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`Llamar al ${siteConfig.contact.phone}`}
                          >
                            {siteConfig.contact.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="icon-container">
                          <Mail className="icon-md" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Correo</p>
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`Enviar correo a ${siteConfig.contact.email}`}
                          >
                            {siteConfig.contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="icon-container">
                          <MapPin className="icon-md" aria-hidden="true" />
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
                      <Button asChild variant="outline" size="default" className="h-auto py-4 flex-col gap-2 bg-transparent min-h-[80px]">
                        <a 
                          href={whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="Enviar mensaje por WhatsApp"
                        >
                          <MessageCircle className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
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
