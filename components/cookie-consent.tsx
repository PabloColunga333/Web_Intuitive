"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"

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
      <div className="container mx-auto max-w-6xl">
        <div className="glass border border-border/50 rounded-2xl shadow-2xl shadow-background/50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Icono */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                🍪 Uso de Cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, 
                analizar el tráfico y personalizar el contenido. Al hacer clic en "Aceptar", 
                consientes el uso de todas las cookies.{" "}
                <a 
                  href="/privacidad" 
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={declineCookies}
                variant="outline"
                className="w-full sm:w-auto border-border/50 hover:bg-muted/50"
              >
                Rechazar
              </Button>
              <Button
                onClick={acceptCookies}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Aceptar Cookies
              </Button>
            </div>

            {/* Botón cerrar (opcional) */}
            <button
              onClick={declineCookies}
              className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
