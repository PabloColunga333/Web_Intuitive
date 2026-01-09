"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Aviso de Privacidad</h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Información sobre el tratamiento de tus datos personales
              </p>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base prose-slate dark:prose-invert max-w-none">
              <div className="bg-accent/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-foreground mb-2">Última actualización: 9 de enero de 2026</p>
                <p className="text-sm text-muted-foreground">
                  Este Aviso de Privacidad describe cómo Intuitive ERP recopila, utiliza y protege tus datos personales.
                </p>
              </div>

              <h2>Responsable del Tratamiento de Datos Personales</h2>
              <p>
                <strong>Intuitive ERP</strong> es responsable de recabar tus datos personales, del uso que se le dé a los mismos y de su protección, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>

              <h2>Finalidades del Tratamiento de Datos</h2>
              <p>
                Tus datos personales serán utilizados para las siguientes finalidades:
              </p>
              <ul>
                <li>Envío de información comercial y actualizaciones sobre nuestros productos y servicios</li>
                <li>Atención a consultas, solicitudes de demostración y soporte técnico</li>
                <li>Mejora continua de nuestros servicios y experiencia del usuario</li>
                <li>Cumplimiento de obligaciones legales y regulatorias</li>
              </ul>

              <h2>Datos Personales Recabados</h2>
              <p>
                Para las finalidades mencionadas anteriormente, recabamos los siguientes datos personales:
              </p>
              <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
                <li>Nombre de la empresa</li>
                <li>Cargo en la empresa</li>
                <li>Información adicional que proporcionas en formularios de contacto</li>
              </ul>
              <p className="font-semibold">
                No recabamos datos personales sensibles (datos sobre origen racial o étnico, vida sexual, información de salud, etc.) sin tu consentimiento expreso.
              </p>

              <h2>Obtención de Datos Personales</h2>
              <p>
                Obtenemos tus datos personales de distintas formas:
              </p>
              <ul>
                <li>A través de formularios en línea en nuestro sitio web</li>
                <li>Mediante correos electrónicos y comunicaciones directas</li>
                <li>Por contacto telefónico</li>
                <li>A través de encuestas y retroalimentación</li>
                <li>De registros de interacción con nuestros servicios</li>
              </ul>

              <h2>Transferencia de Datos Personales</h2>
              <p>
                <strong>No realizamos transferencias de tus datos personales a terceros</strong> sin tu consentimiento previo, salvo en los casos que la ley lo permita o requiera. Tus datos se tratarán exclusivamente para los fines establecidos en este Aviso de Privacidad.
              </p>

              <h2>Derechos ARCO</h2>
              <p>
                Conforme a la legislación aplicable, tienes los siguientes derechos:
              </p>
              <ul>
                <li><strong>Acceso:</strong> Acceder a tus datos personales</li>
                <li><strong>Rectificación:</strong> Corregir datos personales inexactos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos personales</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos personales</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, o para revocar el consentimiento que nos hayas otorgado, puedes ponerte en contacto con nuestro equipo:
              </p>
              <ul>
                <li>📧 <strong>Correo electrónico:</strong> contacto@intuitive-erp.com</li>
                <li>📞 <strong>Teléfono:</strong> 427 274 9002</li>
              </ul>

              <h2>Uso de Cookies y Web Beacons</h2>
              <p>
                En nuestro sitio web, Intuitive ERP utiliza cookies para mejorar la experiencia de navegación, personalizar contenidos y analizar el tráfico. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo y nos permiten:
              </p>
              <ul>
                <li>Recordar tus preferencias</li>
                <li>Mejorar y optimizar nuestros servicios</li>
                <li>Analizar cómo se utiliza nuestro sitio</li>
              </ul>

              <h3>Tipos de Cookies Utilizadas</h3>
              <ul>
                <li>
                  <strong>Cookies funcionales:</strong> Esenciales para el funcionamiento del sitio web, permiten el correcto desempeño de sus funciones básicas
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Nos ayudan a analizar el uso del sitio y a mejorar su rendimiento
                </li>
              </ul>

              <p className="text-sm italic">
                Las cookies no recaban información personal directa. Puedes controlar el uso de cookies a través de las configuraciones de tu navegador web.
              </p>

              <h2>Seguridad de Datos Personales</h2>
              <p>
                Implementamos medidas técnicas, administrativas y físicas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún sistema de seguridad es completamente impenetrable, por lo que no podemos garantizar seguridad absoluta.
              </p>

              <h2>Modificaciones al Aviso de Privacidad</h2>
              <p>
                Nos reservamos el derecho de efectuar, en cualquier momento, modificaciones o actualizaciones al presente Aviso de Privacidad para:
              </p>
              <ul>
                <li>Atender novedades legislativas o jurisprudenciales</li>
                <li>Cambios en políticas internas</li>
                <li>Nuevos requerimientos para la prestación de nuestros servicios</li>
                <li>Prácticas del mercado emergentes</li>
              </ul>
              <p>
                Las modificaciones estarán disponibles en nuestro sitio web. Te recomendamos revisar este Aviso de Privacidad periódicamente.
              </p>

              <h2>Procedimientos de Protección de Derechos</h2>
              <p>
                Si consideras que tu derecho ha sido lesionado por alguna conducta de nuestros empleados, o presumes que en el tratamiento de tus datos personales existe alguna violación a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, puedes interponer la queja o denuncia correspondiente ante el <strong>INAI</strong> (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales).
              </p>
              <p>
                Para mayor información, visita:{" "}
                <a 
                  href="https://home.inai.org.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  https://home.inai.org.mx/
                </a>
              </p>

              <h2>Contacto</h2>
              <p>
                Si tienes preguntas adicionales sobre este Aviso de Privacidad o sobre cómo tratamos tus datos personales, no dudes en contactarnos:
              </p>
              <ul>
                <li>📧 <strong>Correo:</strong> contacto@intuitive-erp.com</li>
                <li>📞 <strong>Teléfono:</strong> 427 274 9002</li>
                <li>🌐 <strong>Sitio Web:</strong> https://intuitive-erp.com</li>
              </ul>

              <hr className="my-8" />

              <p className="text-sm text-muted-foreground text-center">
                © 2026 Intuitive ERP. Todos los derechos reservados.<br />
                Este documento está protegido bajo la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center">
              <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">¿Preguntas sobre tu privacidad?</h2>
                <p className="text-muted-foreground mb-6">
                  Estamos aquí para ayudarte. Contáctanos si tienes dudas sobre nuestro tratamiento de datos.
                </p>
                <Link href="/contacto">
                  <Button size="lg" className="gap-2">
                    Contactarnos
                  </Button>
                </Link>
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
