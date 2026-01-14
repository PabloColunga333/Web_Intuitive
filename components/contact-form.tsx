"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { PiSpinner, PiCheck, PiWarning } from "react-icons/pi"

interface ContactFormProps {
  subject?: string
  source?: string
  defaultType?: string
}

export function ContactForm({
  subject = "Solicitud de contacto",
  source = "formulario-contacto",
  defaultType = "",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requestType: defaultType,
    message: "",
    honeypot: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es obligatorio"
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
        return ""
      case "email":
        if (!value.trim()) return "El correo electrónico es obligatorio"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Ingresa un correo electrónico válido"
        return ""
      case "company":
        if (!value.trim()) return "El nombre de la empresa es obligatorio"
        return ""
      case "phone":
        if (!value.trim()) return "El teléfono es obligatorio"
        if (value.length < 10) return "Ingresa un teléfono válido (mínimo 10 dígitos)"
        return ""
      case "requestType":
        if (!value) return "Debes seleccionar un tipo de solicitud"
        return ""
      default:
        return ""
    }
  }

  const handleFieldChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, formData[name as keyof typeof formData] as string)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    const fieldsToValidate = ["name", "email", "company", "phone", "requestType"]

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData] as string)
      if (error) newErrors[field] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({
        name: true,
        email: true,
        company: true,
        phone: true,
        requestType: true,
      })
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos obligatorios correctamente.",
        variant: "destructive",
      })
      return
    }

    if (formData.honeypot) {
      return
    }

    setLoading(true)

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
    if (!endpoint) {
      setLoading(false)
      toast({
        title: "Error",
        description: "No está configurado el endpoint de contacto. Define NEXT_PUBLIC_CONTACT_ENDPOINT.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `${subject} - ${formData.requestType || "General"}`,
          source,
        }),
      })

      const data = await response.json()

      if (response.ok && (data.ok || data.success)) {
        setSuccess(true)
        toast({
          title: "¡Mensaje enviado con éxito!",
          description: "Nos pondremos en contacto contigo pronto.",
        })
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          requestType: "",
          message: "",
          honeypot: "",
        })
        setErrors({})
        setTouched({})
      } else {
        let errorMessage = "No se pudo enviar el mensaje. Intenta de nuevo."
        if (data.detail && data.detail.includes("Missing env var")) {
          errorMessage = `Configuración del servidor incompleta: ${data.detail}`
        } else if (data.error) {
          errorMessage = data.error
        }
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor. Verifica tu conexión.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mx-auto mb-5 sm:mb-6 animate-in zoom-in duration-300">
          <PiCheck className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-500">¡Mensaje enviado con éxito!</h3>
        <p className="text-muted-foreground mb-2 text-base sm:text-lg">Hemos recibido tu mensaje correctamente.</p>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
          Nos pondremos en contacto contigo a la brevedad posible.
        </p>
        <Button variant="outline" onClick={() => setSuccess(false)} className="px-6 sm:px-8 h-11 sm:h-10">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
            Nombre completo <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Tu nombre"
            className={`bg-secondary/30 border-border/50 focus:border-primary h-11 sm:h-10 text-sm sm:text-base ${
              errors.name && touched.name ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <PiWarning className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
            Empresa <span className="text-primary">*</span>
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => handleFieldChange("company", e.target.value)}
            onBlur={() => handleBlur("company")}
            placeholder="Nombre de tu empresa"
            className={`bg-secondary/30 border-border/50 focus:border-primary h-11 sm:h-10 text-sm sm:text-base ${
              errors.company && touched.company ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.company && touched.company && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <PiWarning className="w-3 h-3" />
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
            Correo electrónico <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="tu@email.com"
            className={`bg-secondary/30 border-border/50 focus:border-primary h-11 sm:h-10 text-sm sm:text-base ${
              errors.email && touched.email ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <PiWarning className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
            Teléfono <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="(123) 456-7890"
            className={`bg-secondary/30 border-border/50 focus:border-primary h-11 sm:h-10 text-sm sm:text-base ${
              errors.phone && touched.phone ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <PiWarning className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="requestType" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
          Tipo de solicitud <span className="text-primary">*</span>
        </label>
        <Select
          name="requestType"
          value={formData.requestType}
          onValueChange={(value) => {
            handleFieldChange("requestType", value)
          }}
        >
          <SelectTrigger
            className={`bg-secondary/30 border-border/50 focus:border-primary h-11 sm:h-10 text-sm sm:text-base ${
              errors.requestType && touched.requestType ? "border-red-500 focus:border-red-500" : ""
            }`}
            onBlur={() => handleBlur("requestType")}
            aria-label="Tipo de solicitud"
          >
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="demo">Demo del software</SelectItem>
            <SelectItem value="video">Video informativo</SelectItem>
            <SelectItem value="cotizacion">Cotización</SelectItem>
            <SelectItem value="soporte">Soporte técnico</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>
        {errors.requestType && touched.requestType && (
          <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
            <PiWarning className="w-3 h-3" />
            {errors.requestType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
          Mensaje <span className="text-muted-foreground text-xs">(opcional)</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Cuéntanos sobre tu operación y te orientamos al mejor paquete..."
          className="resize-none bg-secondary/30 border-border/50 focus:border-primary text-sm sm:text-base"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full h-12 text-base glow-primary font-semibold" aria-label="Enviar formulario de contacto">
        {loading ? (
          <>
            <PiSpinner className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
            <span>Enviando...</span>
          </>
        ) : (
          <span>Enviar mensaje</span>
        )}
      </Button>

      <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
        Al enviar aceptas que te contactemos para dar seguimiento a tu solicitud.
      </p>
    </form>
  )
}
