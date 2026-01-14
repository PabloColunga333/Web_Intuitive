import Link from "next/link"
import { PiLinkedinLogo, PiFacebookLogo, PiPhone, PiEnvelope, PiMapPin, PiClock, PiArrowUpRight } from "react-icons/pi"
import { siteConfig } from "@/lib/site-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Soporte técnico", href: "/soporte-tecnico" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ]

  const featureLinks = [
    { name: "Planificación", href: "/#caracteristicas" },
    { name: "Ingeniería", href: "/#caracteristicas" },
    { name: "Manufactura", href: "/#caracteristicas" },
    { name: "Inventario", href: "/#caracteristicas" },
    { name: "CRM", href: "/#caracteristicas" },
  ]

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="font-semibold text-lg">
                <span className="text-primary">Intuitive</span>
                <span className="text-foreground ml-1">ERP</span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 sm:mb-6">
              Software integrado de manufactura ERP/MRP. Planeación y control en tiempo real.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                aria-label="Visitar perfil de LinkedIn de Intuitive ERP"
              >
                <PiLinkedinLogo className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                aria-label="Visitar página de Facebook de Intuitive ERP"
              >
                <PiFacebookLogo className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navegación</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group py-0.5"
                  >
                    {link.name}
                    <PiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Características</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {featureLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group py-0.5"
                  >
                    {link.name}
                    <PiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group py-0.5"
                  aria-label={`Llamar al teléfono ${siteConfig.contact.phone}`}
                >
                  <PiPhone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group py-0.5 break-all"
                  aria-label={`Enviar correo a ${siteConfig.contact.email}`}
                >
                  <PiEnvelope className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <PiMapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <PiClock className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <span className="block">L-V: 9am - 6pm</span>
                  <span className="block text-[10px] sm:text-xs">Urgencias 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
              <Link 
                href="/privacidad"
                className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
              >
                Aviso de Privacidad
              </Link>
              <span className="text-border/50">|</span>
              <p className="text-muted-foreground max-w-md">
                Otros nombres mencionados son marcas registradas de sus respectivos propietarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
