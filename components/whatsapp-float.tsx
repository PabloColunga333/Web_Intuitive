"use client"

import { useState, useEffect } from "react"
import { PiWhatsappLogo, PiX } from "react-icons/pi"
import { siteConfig } from "@/lib/site-data"

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  const handleClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {showTooltip && (
        <div className="glass rounded-2xl p-4 max-w-[200px] animate-fade-up shadow-xl">
          <button
            onClick={() => {
              setShowTooltip(false)
              setHasInteracted(true)
            }}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            aria-label="Cerrar mensaje"
          >
            <PiX className="w-4 h-4" aria-hidden="true" />
          </button>
          <p className="text-sm font-medium mb-1">¿Tienes preguntas?</p>
          <p className="text-xs text-muted-foreground">Escríbenos por WhatsApp</p>
        </div>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 animate-pulse hover:animate-none"
        aria-label="Contactar por WhatsApp"
      >
        <PiWhatsappLogo className="w-9 h-9 text-white" aria-hidden="true" />
      </a>
    </div>
  )
}
