import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Clock, AlertCircle, Award } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Soporte Técnico | Intuitive ERP",
  description: "Soporte técnico certificado por SIEMENS. Horario de 9 am a 6 pm (L-V) y urgencias 24/7 vía telefónica.",
}

export default function SoporteTecnicoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Soporte técnico</h1>
              <p className="text-xl text-muted-foreground">
                Certificado por SIEMENS. Respaldo profesional cuando lo necesites.
              </p>
            </div>
          </div>
        </section>

        {/* Información de soporte */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Horario regular</h2>
                  <p className="text-lg text-muted-foreground mb-4">Lunes a Viernes</p>
                  <p className="text-3xl font-bold text-primary">9:00 am - 6:00 pm</p>
                  <p className="text-sm text-muted-foreground mt-4">Excepto días festivos y última semana del año</p>
                </Card>

                <Card className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <AlertCircle className="w-7 h-7 text-destructive" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Urgencias</h2>
                  <p className="text-lg text-muted-foreground mb-4">Soporte telefónico</p>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground mt-4">Disponible todos los días del año</p>
                </Card>
              </div>

              <Card className="p-8 lg:p-12 bg-primary/5 border-primary/20 mb-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-3">Certificado por SIEMENS</h2>
                    <p className="text-lg leading-relaxed">
                      Nuestro equipo técnico cuenta con certificación oficial de SIEMENS, garantizando soporte
                      profesional y actualizado con los más altos estándares de la industria.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">¿Qué incluye nuestro soporte?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-lg">Asistencia técnica especializada en Intuitive ERP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-lg">Resolución de incidencias y problemas técnicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-lg">Asesoría en el uso y configuración del sistema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-lg">Actualizaciones y mejoras del software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-lg">Capacitación continua para su equipo</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Contacto */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">¿Necesitas soporte técnico?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comunícate con nosotros y nuestro equipo certificado te atenderá
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href={`tel:${siteConfig.contact.phoneRaw}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar ahora
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">Enviar mensaje</Link>
                </Button>
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
