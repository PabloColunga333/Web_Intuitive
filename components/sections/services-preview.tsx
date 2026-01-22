"use client"

import type React from "react"
import { services } from "@/lib/site-data"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Lightbulb, Headphones, Check, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shopping-cart": ShoppingCart,
  lightbulb: Lightbulb,
  headphones: Headphones,
}

export function ServicesPreview() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <section className="py-4 sm:py-5 lg:py-6 relative" id="servicios">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Paquetes y servicios
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Todos nuestros paquetes son personalizables. Análisis completamente gratis.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const isHighlighted = service.id === "soporte"

              return (
                <motion.div
                  key={service.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={
                    isDesktop
                      ? {
                          y: isHighlighted ? -20 : 0,
                          opacity: 1,
                          x: index === 2 ? -30 : index === 0 ? 30 : 0,
                          scale: index === 0 || index === 2 ? 0.94 : 1.0,
                        }
                      : { y: 0, opacity: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.4,
                    type: "spring",
                    stiffness: 60,
                    damping: 35,
                    delay: 0.2 + index * 0.15,
                    opacity: { duration: 0.8 },
                  }}
                  className={cn(
                    "rounded-2xl border p-6 sm:p-8 bg-background text-left lg:flex lg:flex-col lg:justify-start relative",
                    isHighlighted ? "border-primary border-2" : "border-border",
                    "flex flex-col",
                    !isHighlighted && "mt-5 md:mt-0",
                    index === 0 || index === 2
                      ? "z-0"
                      : "z-10",
                    index === 0 && "origin-right",
                    index === 2 && "origin-left"
                  )}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-auto space-y-2.5 flex-1">
                    {service.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contacto"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group relative w-full gap-2 overflow-hidden text-sm sm:text-base font-semibold tracking-tight mt-6",
                      "transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-md",
                      isHighlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground hover:bg-secondary"
                    )}
                  >
                    Hablar con un especialista
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
