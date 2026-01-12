"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Aviso de Privacidad</h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Información completa sobre cómo recopilamos, utilizamos y protegemos tus datos personales
              </p>
            </div>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Banner Importante */}
              <div className="bg-muted border border-border rounded-lg p-6 sm:p-8 mb-10">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Última actualización</p>
                <p className="text-sm text-foreground font-medium mb-3">9 de enero de 2026</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Este Aviso de Privacidad describe cómo recopilamos, utilizamos y protegemos tus datos personales conforme a la legislación vigente en México.
                </p>
              </div>

              {/* 1. Responsable */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Responsable del Tratamiento</h2>
                </div>
                <Card className="p-6 sm:p-8 border border-border">
                  <p className="text-foreground">
                    <strong className="text-lg">Intuitive ERP</strong> es responsable de recabar tus datos personales, del uso que se le dé a los mismos y de su protección.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Ubicación</p>
                        <p className="text-foreground">Querétaro, Qro.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Teléfono</p>
                        <a href="tel:+524272749160" className="text-primary hover:text-primary/80 transition-colors">(427) 274-9160</a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 2. Finalidades */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Finalidades del Tratamiento</h2>
                </div>
                <p className="text-muted-foreground mb-5">Tus datos personales serán utilizados para:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Envío de información comercial sobre nuestros productos",
                    "Atención a consultas y solicitudes de demostración",
                    "Soporte técnico y atención al cliente",
                    "Mejora continua de nuestros servicios",
                    "Cumplimiento de obligaciones legales",
                    "Análisis y estadísticas de uso"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-border/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Datos Recabados */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Datos Personales Recabados</h2>
                </div>
                <Card className="p-6 sm:p-8 border border-border mb-6">
                  <p className="text-foreground mb-5">Recabamos los siguientes datos:</p>
                  <ul className="space-y-3">
                    {[
                      "Nombre completo",
                      "Correo electrónico",
                      "Número telefónico",
                      "Nombre de la empresa",
                      "Cargo o puesto en la empresa",
                      "Información adicional en formularios de contacto"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
                <div className="bg-muted border border-border rounded-lg p-4 sm:p-6">
                  <p className="text-sm text-foreground">
                    <strong>Nota:</strong> No recabamos datos personales sensibles sin tu consentimiento expreso.
                  </p>
                </div>
              </div>

              {/* 4. Obtención de Datos */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">4</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Obtención de Datos Personales</h2>
                </div>
                <p className="text-muted-foreground mb-5">Obtenemos tus datos a través de:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Formularios en línea en nuestro sitio web",
                    "Comunicaciones por correo electrónico",
                    "Contacto telefónico directo",
                    "Encuestas y retroalimentación",
                    "Registros de interacción con nuestros servicios",
                    "Eventos y webinars"
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Transferencia */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">5</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Transferencia de Datos</h2>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">No realizamos transferencias de datos a terceros</p>
                  <p className="text-sm text-muted-foreground">
                    Tus datos personales no serán compartidos con terceros sin tu consentimiento previo, excepto cuando la ley lo requiera.
                  </p>
                </div>
              </div>

              {/* 6. Derechos ARCO */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">6</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Derechos ARCO</h2>
                </div>
                <p className="text-muted-foreground mb-6">Tienes los siguientes derechos sobre tus datos:</p>
                <div className="grid gap-4 mb-8">
                  {[
                    { title: "Acceso", desc: "Acceder a tus datos personales en nuestro poder" },
                    { title: "Rectificación", desc: "Corregir datos personales inexactos o incompletos" },
                    { title: "Cancelación", desc: "Solicitar la eliminación de tus datos" },
                    { title: "Oposición", desc: "Oponerte al tratamiento de tus datos" }
                  ].map((item, idx) => (
                    <Card key={idx} className="p-5 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-6 sm:p-8 border border-border">
                  <p className="font-semibold text-foreground mb-4">Para ejercer tus derechos, contacta a nuestro equipo:</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Correo</p>
                        <a href="mailto:venta@antalm.com.mx" className="text-primary hover:text-primary/80 transition-colors text-sm">
                          venta@antalm.com.mx
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Teléfono</p>
                        <a href="tel:+524272749160" className="text-primary hover:text-primary/80 transition-colors text-sm">
                          (427) 274-9160
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 7. Cookies */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">7</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Uso de Cookies</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Utilizamos cookies para mejorar tu experiencia, analizar tráfico y personalizar contenido. Las cookies son archivos pequeños que se almacenan en tu dispositivo.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Tipos de Cookies Utilizadas</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="p-5 border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Cookies Funcionales</h4>
                      <p className="text-sm text-muted-foreground">Esenciales para el funcionamiento básico del sitio web</p>
                    </Card>
                    <Card className="p-5 border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Cookies Analíticas</h4>
                      <p className="text-sm text-muted-foreground">Nos ayudan a mejorar el rendimiento y experiencia del sitio</p>
                    </Card>
                  </div>
                </div>
                <div className="bg-muted border border-border rounded-lg p-4 sm:p-6">
                  <p className="text-sm text-foreground">
                    <strong>Nota:</strong> Las cookies no recaban información personal directa. Puedes controlar su uso a través de las configuraciones de tu navegador.
                  </p>
                </div>
              </div>

              {/* 8. Seguridad */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">8</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Seguridad de Datos</h2>
                </div>
                <Card className="p-6 sm:p-8 border border-border">
                  <p className="text-foreground mb-5">
                    Implementamos medidas técnicas, administrativas y físicas para proteger tus datos contra acceso no autorizado, alteración, divulgación y destrucción.
                  </p>
                  <p className="text-sm text-muted-foreground italic border-t border-border pt-4">
                    Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar seguridad absoluta.
                  </p>
                </Card>
              </div>

              {/* 9. Modificaciones */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">9</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Modificaciones al Aviso</h2>
                </div>
                <Card className="p-6 sm:p-8 border border-border">
                  <p className="text-foreground mb-4">
                    Nos reservamos el derecho de efectuar modificaciones para atender novedades legislativas, cambios en políticas internas y nuevos requerimientos de servicios.
                  </p>
                  <p className="text-sm text-muted-foreground pt-5 border-t border-border mt-5">
                    Te recomendamos revisar este aviso periódicamente. Los cambios se publicarán en nuestro sitio web.
                  </p>
                </Card>
              </div>

              {/* 10. Derechos ante INAI */}
              <div className="mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">10</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Protección de Derechos</h2>
                </div>
                <Card className="p-6 sm:p-8 border border-border">
                  <p className="text-foreground mb-4">
                    Si consideras que tu derecho ha sido lesionado, puedes interponer una queja o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
                  </p>
                  <a 
                    href="https://home.inai.org.mx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold inline-flex items-center gap-2"
                  >
                    Visita https://home.inai.org.mx/ →
                  </a>
                </Card>
              </div>

              {/* Footer */}
              <div className="border-t border-border pt-10 sm:pt-14 mt-10 sm:mt-14">
                <div className="bg-muted rounded-lg p-8 sm:p-10 text-center mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">¿Preguntas sobre tu privacidad?</h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Estamos aquí para ayudarte. Contacta con nosotros si tienes dudas sobre nuestro tratamiento de datos.
                  </p>
                  <Link href="/contacto">
                    <Button size="lg" className="gap-2">
                      Enviar Consulta
                    </Button>
                  </Link>
                </div>

                <div className="text-center pt-8 border-t border-border">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    © 2026 Intuitive ERP. Todos los derechos reservados.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Documento protegido bajo la legislación mexicana de protección de datos personales.
                  </p>
                </div>
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
