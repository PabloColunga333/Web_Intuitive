import { faqs, siteConfig } from "@/lib/site-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiWhatsappLogo, PiQuestion } from "react-icons/pi"

export function FAQ() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent("Hola, tengo una pregunta sobre Intuitive ERP.")}`

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">Preguntas frecuentes</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Respuestas a las dudas más comunes sobre Intuitive ERP</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-start gap-3">
                    <PiQuestion className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-base">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-8 sm:mt-10 p-5 sm:p-6 glass border-border/50 text-center">
            <h3 className="font-semibold text-base sm:text-lg mb-2">¿No encuentras respuesta a tu pregunta?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Escríbenos directamente y te ayudamos con tu caso específico</p>
            <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <PiWhatsappLogo className="w-7 h-7 mr-2" />
                Preguntar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
