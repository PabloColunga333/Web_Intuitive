import { faqs, siteConfig } from "@/lib/site-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FAQ() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent("Hola, tengo una pregunta sobre Intuitive ERP.")}`

  return (
    <section className="relative" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Respuestas a las dudas más comunes sobre Intuitive ERP
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-border/60 rounded-2xl px-6 sm:px-8 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 sm:py-7 gap-4">
                  <span className="font-semibold text-base sm:text-lg leading-snug pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 sm:pb-7 text-base sm:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-10 sm:mt-12 p-6 sm:p-8 glass border-border/60 text-center rounded-2xl shadow-lg">
            <h3 className="font-semibold text-lg sm:text-xl mb-3">¿No encuentras respuesta a tu pregunta?</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Escríbenos directamente y te ayudamos con tu caso específico
            </p>
            <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto font-semibold h-12 px-8">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Preguntar por WhatsApp sobre dudas específicas"
              >
                <MessageCircle className="w-6 h-6 mr-2" aria-hidden="true" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
