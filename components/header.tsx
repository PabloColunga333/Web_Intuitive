"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  // En páginas distintas al inicio, el header siempre es visible
  const visible = isHome ? isScrolled : true

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "IA predictiva", href: "/predictivo" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Soporte", href: "/soporte-tecnico" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ]

  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-hidden transition-[opacity,transform,max-height,background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border max-h-24"
          : "bg-transparent backdrop-blur-none shadow-none border-b border-transparent max-h-0"
      } ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Link href="/" className="flex items-center group" aria-label="Ir al inicio de Intuitive Systems México">
            <span className="relative block h-8 w-[170px] overflow-hidden xl:h-10 xl:w-[213px]">
              <Image
                src="/logos/intuitive-systems-mexico.png"
                alt=""
                width={525}
                height={177}
                priority
                className="absolute -left-[12px] -top-[17px] h-[66px] w-[195px] max-w-none mix-blend-multiply xl:-left-[15px] xl:-top-[21px] xl:h-[82px] xl:w-[244px]"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 font-medium"
            >
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button asChild size="sm" className="glow-primary font-semibold">
              <Link href="/contacto" aria-label="Solicitar demostración del producto" className="flex items-center gap-1.5">
                <span>Solicitar demo</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                <Button asChild variant="outline" size="default" className="justify-center bg-transparent min-h-[44px] font-medium">
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
                <Button asChild size="default" className="justify-center min-h-[44px] font-semibold">
                  <Link 
                    href="/contacto" 
                    onClick={() => setIsOpen(false)}
                    aria-label="Solicitar demostración del producto"
                  >
                    <span>Solicitar demo</span>
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
