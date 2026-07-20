import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { casosDeUso } from "@/lib/content/predictivo"
import { Button } from "@/components/ui/button"

export function DeReactivoAPredictivo() {
  return (
    <section className="section-base" id="predictivo">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">Casos de uso</p>
              <h2 className="text-3xl lg:text-4xl font-bold">De reactivo a predictivo</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Tu ERP te cuenta lo que pasó. Nosotros añadimos la capa predictiva que convierte historial en decisión.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {casosDeUso.map((c) => (
                <article
                  key={c.id}
                  className="relative h-full rounded-xl border border-border bg-background p-5 shadow-sm border-l-4 border-l-wolfram-red flex flex-col overflow-hidden"
                >
                  <h3 className="text-base font-semibold leading-snug text-balance">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">
                    {c.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="/contacto/?tipo=predictivo">
                  Solicitar diagnóstico
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h4 className="font-semibold mb-4">Cómo conectamos</h4>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-accent-strong shrink-0">1.</span>
                Extracción y limpieza del histórico del ERP
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent-strong shrink-0">2.</span>
                Modelado con Wolfram y validación contra tu histórico
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent-strong shrink-0">3.</span>
                Integración de predicciones en tu MRP y flujos operativos
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeReactivoAPredictivo
