import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros | Intuitive ERP",
  description:
    "Especialistas en venta, implementación y soporte técnico de sistemas de manufactura con soluciones MOM de SIEMENS.",
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre nosotros</h1>
              <p className="text-xl text-muted-foreground">
                Especialistas en sistemas de manufactura para empresas de cualquier sector
              </p>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6">¿Quiénes somos?</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Nos dedicamos a la venta, implementación y soporte técnico de sistemas de manufactura,
                    especializados en las áreas de planeación, programación y control de la producción para empresas de
                    cualquier sector de manufactura.
                  </p>
                  <p>
                    Trabajamos con soluciones MOM de SIEMENS y ofrecemos servicios integrales que incluyen
                    automatización industrial, Business Intelligence, Manufacturing Intelligence y consultoría en
                    metodologías como Lean Manufacturing y Six Sigma.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Nuestra misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proveer soluciones de software industrial que generen incrementos reales en productividad y servicio
                    para nuestros clientes.
                  </p>
                </Card>

                <Card className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Nuestra visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser una empresa de prestigio en software industrial, reconocida por nuestro alto nivel de servicio y
                    soluciones líderes en el mercado.
                  </p>
                </Card>

                <Card className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Nuestro compromiso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entender las necesidades específicas de cada cliente y entregar soluciones de valor que transformen
                    sus operaciones.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Propuesta de valor */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12 bg-primary/5 border-primary/20">
                <h2 className="text-3xl font-bold mb-6 text-center">Nuestro enfoque</h2>
                <p className="text-lg text-center leading-relaxed">
                  Combinamos tecnología de vanguardia con un profundo conocimiento de los procesos de manufactura para
                  ofrecer soluciones que no solo resuelven problemas actuales, sino que preparan a su empresa para los
                  desafíos del futuro industrial.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
