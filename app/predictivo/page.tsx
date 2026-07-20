import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DeReactivoAPredictivo } from "@/components/sections/de-reactivo-a-predictivo"
import { PorQueWolfram } from "@/components/sections/por-que-wolfram"
import { paquetePredictivo, faqPredictivo } from "@/lib/content/predictivo"

function PredictionGraphic() {
  return (
    <svg
      viewBox="0 0 1040 460"
      className="w-full h-auto"
      role="img"
      aria-label="Gráfico ilustrativo: serie histórica sólida y proyección punteada con banda de incertidumbre ensanchada hacia la derecha"
    >
      <defs>
        <linearGradient id="band" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      {/* Ejes mínimos */}
      <path d="M 90 360 H 980" stroke="var(--border)" strokeWidth="1.5" />
      <path d="M 90 360 V 40" stroke="var(--border)" strokeWidth="1.5" />

      {/* Serie histórica - línea sólida */}
      <path
        d="M 120 300 C 210 260, 280 240, 360 248 C 450 256, 540 220, 620 205 C 720 186, 800 205, 870 178 C 930 155, 960 138, 980 118"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Banda de incertidumbre - elemento principal, bien ancha */}
      <path
        d="M 980 118 C 1010 106, 1028 92, 1038 80 L 1038 320 C 1028 334, 1010 345, 980 352 Z"
        fill="url(#band)"
      />

      {/* Proyección punteada */}
      <path
        d="M 980 118 C 1010 106, 1028 92, 1038 80"
        fill="none"
        stroke="var(--accent-strong, #186B8A)"
        strokeWidth="2.5"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />

      {/* Punto de transición histórico-proyección */}
      <circle cx="980" cy="118" r="6" fill="var(--accent-strong, #186B8A)" />
      <circle cx="120" cy="300" r="4" fill="currentColor" />

      {/* Línea divisoria histórico / proyección */}
      <path d="M 980 30 V 372" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Etiquetas */}
      <text x="120" y="398" fill="currentColor" fontSize="22" opacity="0.75">Serie histórica</text>
      <text x="1000" y="398" textAnchor="end" fill="var(--accent-strong, #186B8A)" fontSize="22">Proyección con rango</text>
    </svg>
  )
}

function ProcessTimeline() {
  const steps = [
    {
      n: "01",
      title: "Dato del ERP",
      desc: "Extraemos y normalizamos el histórico de transacciones: órdenes, consumos y capacidades para crear una base confiable.",
    },
    {
      n: "02",
      title: "Modelado Wolfram",
      desc: "Construimos modelos de series de tiempo y optimización sobre tu dato real para estimar demanda y consumo con trazabilidad.",
    },
    {
      n: "03",
      title: "Validación",
      desc: "Aplicamos backtesting con periodos históricos fuera de entrenamiento para comprobar precisión antes de operar.",
    },
    {
      n: "04",
      title: "Predicción operativa",
      desc: "Entregamos rangos probabilísticos listos para planeación de MRP con escenarios pesimista, probable y optimista.",
    },
  ]

  return (
    <div
      className="relative rounded-2xl border border-border bg-card/70 p-5 sm:p-6 lg:p-7 shadow-sm"
      role="img"
      aria-label="Flujo vertical de predicción desde dato ERP hasta predicción operativa"
    >
      <div
        aria-hidden="true"
        className="absolute left-[15px] sm:left-[19px] top-12 bottom-12 w-px bg-gradient-to-b from-wolfram-red/80 via-wolfram-red/45 to-wolfram-red/10"
      />
      <ol className="space-y-4 sm:space-y-5">
        {steps.map((step) => (
          <li key={step.n} className="relative pl-8 sm:pl-11">
            <span className="absolute left-0 top-1 inline-flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-wolfram-red/50 bg-background text-[11px] sm:text-xs font-semibold tracking-wide text-wolfram-red">
              {step.n}
            </span>
            <div className="rounded-xl border border-border bg-background/90 p-3.5 sm:p-4.5 lg:p-5">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-1.5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function PredictivoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-base">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 xl:gap-20 items-center">
                <div className="space-y-8 lg:space-y-10">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Inteligencia Predictiva</p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Modelos que anticipan tu operación</h1>
                  </div>
                  <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    Modelos que anticipan tu demanda, tu consumo y tus fallas usando el histórico que tu ERP ya está generando.
                  </p>

                  <div className="flex items-center gap-6 py-5 px-7 bg-slate-50 rounded-xl border border-border w-fit">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">Modelado científico mediante</p>
                      <p className="text-base font-medium text-foreground">Wolfram Language</p>
                    </div>
                    <Image
                      src="/img/partners/wolfram.svg"
                      alt="Wolfram"
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] flex-shrink-0"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="h-14 px-10 text-base font-semibold bg-primary text-primary-foreground">
                      <Link href={paquetePredictivo.cta}>Solicitar diagnóstico</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-semibold">
                      <Link href="#predictivo">Ver casos de uso</Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:scale-[1.2] xl:scale-[1.25] origin-center lg:-mr-6 xl:-mr-10">
                  <PredictionGraphic />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DeReactivoAPredictivo />

        <section className="section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">Cómo funciona</h2>
              <div className="max-w-4xl mx-auto">
                <ProcessTimeline />
              </div>
            </div>
          </div>
        </section>

        <PorQueWolfram />

        <section className="section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Requisitos para empezar</h2>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                Un modelo predictivo no compensa un dato malo. Antes de proponerte un piloto, verificamos que tu operación tenga la base para sostenerlo.
              </p>
              <div className="space-y-0 divide-y divide-border">
                {[
                  {
                    title: "Histórico de datos",
                    desc: "Mínimo 18-24 meses de transacciones en tu ERP. Sin suficiente historia no hay estacionalidad detectable, y sin estacionalidad la predicción de demanda es ruido.",
                  },
                  {
                    title: "Catálogo consistente",
                    desc: "BOM definida y consumos trazables por orden. Si el mismo material tiene tres códigos distintos, el modelo aprende tres patrones donde hay uno.",
                  },
                  {
                    title: "Colaboración técnica",
                    desc: "Acceso a datos operativos y alguien de tu equipo que conozca el proceso. Los datos dicen qué pasó; tu gente dice por qué.",
                  },
                ].map((req) => (
                  <div key={req.title} className="grid md:grid-cols-3 gap-2 md:gap-8 py-6">
                    <h3 className="font-semibold text-sm md:text-base">{req.title}</h3>
                    <p className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">{req.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground border-t border-border pt-6">
                Si algo de esto falta, te lo decimos en el diagnóstico. Preferimos no arrancar un piloto que no va a funcionar.
              </p>
            </div>
          </div>
        </section>

        <section className="section-base">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">Preguntas frecuentes</h2>
              <div className="space-y-4">
                {faqPredictivo.map((f) => (
                  <div key={f.q} className="p-6 border border-border rounded-lg bg-card">
                    <h4 className="font-semibold mb-2 text-foreground">{f.q}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-highlight">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">¿Listo para anticipar tu operación?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Solicita un diagnóstico gratuito de madurez de datos. Sin compromiso.</p>
              <Button asChild size="lg" className="h-12 px-8 font-semibold bg-primary text-primary-foreground">
                <Link href={paquetePredictivo.cta}>Solicitar diagnóstico</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
