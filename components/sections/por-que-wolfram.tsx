import Image from "next/image"
import { porQueWolfram, wolframContext } from "@/lib/content/predictivo"

export function PorQueWolfram() {
  return (
    <section className="section-base" aria-labelledby="por-que-wolfram">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-6 mb-6">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-1 self-stretch rounded-full bg-wolfram-red" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-wolfram-red mb-2">Socio tecnológico</p>
                  <h3 id="por-que-wolfram" className="text-2xl sm:text-3xl font-bold">Por qué Wolfram</h3>
                </div>
              </div>
            </div>
            <Image
              src="/img/partners/wolfram.svg"
              alt="Wolfram"
              width={56}
              height={56}
              className="h-14 w-14 flex-shrink-0"
            />
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">Modelado científico y cuantificación de incertidumbre para decisiones operativas.</p>

          <div className="grid sm:grid-cols-3 gap-6">
            {porQueWolfram.map((p) => (
              <div key={p.title} className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-base mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-6 max-w-2xl">
            {wolframContext}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PorQueWolfram
