"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Mostrar el banner después de un pequeño delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-background/95 border border-border rounded-lg shadow-md p-4 md:p-5 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Contenido */}
            <div className="flex-1 space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio. 
                Al continuar navegando, aceptas nuestro uso de cookies.{" "}
                <a 
                  href="/privacidad" 
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  Más información
                </a>
              </p>
            </div>

            {/* Botones */}
            <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
              <Button
                onClick={declineCookies}
                variant="ghost"
                className="text-xs px-3 py-1.5 h-auto hover:bg-muted"
              >
                Rechazar
              </Button>
              <Button
                onClick={acceptCookies}
                className="text-xs px-3 py-1.5 h-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
