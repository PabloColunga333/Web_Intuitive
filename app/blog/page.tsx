"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Clock } from "lucide-react"


const blogPosts = [
  {
    id: 1,
    title: "Software de Manufactura: Guía Completa",
    excerpt: "Descubre cómo el software de manufactura puede transformar tu operación y optimizar procesos.",
    image: "/software-manufacturing-dashboard-with-production-m.jpg",
    date: "15 de marzo, 2024",
    readTime: "8 min",
    category: "Tecnología",
    content: `
      <h2>Introducción al Software de Manufactura</h2>
      <p>El software de manufactura moderno es una herramienta fundamental para las empresas industriales que buscan optimizar sus operaciones y mantenerse competitivas en el mercado actual.</p>
      
      <h3>¿Qué es el Software de Manufactura?</h3>
      <p>Es un conjunto de aplicaciones integradas que permiten gestionar todos los aspectos de la producción industrial, desde la planeación hasta el control de calidad y la entrega.</p>
      
      <h3>Beneficios Clave</h3>
      <ul>
        <li><strong>Visibilidad en tiempo real:</strong> Monitoreo continuo de la producción y recursos</li>
        <li><strong>Reducción de costos:</strong> Optimización de inventarios y materiales</li>
        <li><strong>Mejor calidad:</strong> Control y trazabilidad completa</li>
        <li><strong>Mayor eficiencia:</strong> Automatización de procesos repetitivos</li>
      </ul>
      
      <h3>Componentes Principales</h3>
      <p>Un sistema completo de manufactura incluye módulos de planeación de producción, gestión de inventarios, control de calidad, mantenimiento y análisis de datos.</p>
      
      <h3>Consideraciones de Implementación</h3>
      <p>La implementación exitosa requiere un análisis detallado de procesos, capacitación del personal y un plan de migración bien estructurado.</p>
    `,
  },
  {
    id: 2,
    title: "Optimización de la Planeación de Producción",
    excerpt: "Estrategias y herramientas para mejorar la planeación y programación de tu manufactura.",
    image: "/production-planning-gantt-chart-with-scheduling.jpg",
    date: "10 de marzo, 2024",
    readTime: "6 min",
    category: "Operaciones",
    content: `
      <h2>Planeación de Producción Efectiva</h2>
      <p>La planeación de producción es el corazón de cualquier operación manufacturera exitosa. Una buena planeación reduce costos, mejora tiempos de entrega y aumenta la satisfacción del cliente.</p>
      
      <h3>Principios Fundamentales</h3>
      <p>La planeación debe considerar la capacidad instalada, disponibilidad de materiales, restricciones de recursos y prioridades de producción.</p>
      
      <h3>Herramientas Clave</h3>
      <ul>
        <li><strong>MRP (Material Requirements Planning):</strong> Cálculo de necesidades de materiales</li>
        <li><strong>CRP (Capacity Requirements Planning):</strong> Análisis de capacidad</li>
        <li><strong>Programación finita:</strong> Optimización de secuencias de producción</li>
        <li><strong>Simulación:</strong> Prueba de escenarios antes de ejecutar</li>
      </ul>
      
      <h3>Mejores Prácticas</h3>
      <p>Utilice datos históricos, mantenga información actualizada, involucre a todos los departamentos y revise planes regularmente.</p>
      
      <h3>KPIs de Planeación</h3>
      <p>Mida efectividad con métricas como cumplimiento de plan, utilización de capacidad, tiempo de ciclo y nivel de inventario en proceso.</p>
    `,
  },
  {
    id: 3,
    title: "ERP vs MRP: ¿Cuál necesita tu empresa?",
    excerpt: "Conoce las diferencias entre ERP y MRP y cuál es la mejor opción para tu operación.",
    image: "/erp-mrp-comparison-business-systems-integration.jpg",
    date: "5 de marzo, 2024",
    readTime: "7 min",
    category: "Sistemas",
    content: `
      <h2>Diferencias entre ERP y MRP</h2>
      <p>Muchas empresas se preguntan si necesitan un sistema ERP completo o si un MRP es suficiente para sus necesidades. Entender las diferencias es crucial para tomar la decisión correcta.</p>
      
      <h3>¿Qué es MRP?</h3>
      <p>Material Requirements Planning es un sistema enfocado en la gestión de materiales y producción. Calcula qué, cuánto y cuándo producir basándose en la demanda.</p>
      
      <h3>¿Qué es ERP?</h3>
      <p>Enterprise Resource Planning integra todos los procesos de negocio: producción, finanzas, ventas, compras, recursos humanos y más en una sola plataforma.</p>
      
      <h3>Comparación Detallada</h3>
      <ul>
        <li><strong>Alcance:</strong> MRP se enfoca en manufactura, ERP cubre toda la empresa</li>
        <li><strong>Integración:</strong> MRP puede estar aislado, ERP integra todos los departamentos</li>
        <li><strong>Costo:</strong> MRP generalmente menos costoso que ERP completo</li>
        <li><strong>Complejidad:</strong> MRP más simple de implementar que ERP</li>
      </ul>
      
      <h3>¿Cuál Elegir?</h3>
      <p>Si su enfoque principal es manufactura y tiene sistemas separados que funcionan bien para otras áreas, MRP puede ser suficiente. Si busca integración total y visibilidad empresarial, ERP es la mejor opción.</p>
    `,
  },
  {
    id: 4,
    title: "Gestión de Calidad en la Manufactura",
    excerpt: "Implementa sistemas de calidad efectivos con herramientas digitales y cumplimiento normativo.",
    image: "/quality-control-manufacturing-inspection-digital-t.jpg",
    date: "28 de febrero, 2024",
    readTime: "9 min",
    category: "Calidad",
    content: `
      <h2>Sistemas de Gestión de Calidad</h2>
      <p>La calidad es un diferenciador competitivo crítico. Los sistemas digitales modernos permiten gestionar la calidad de manera proactiva y sistemática.</p>
      
      <h3>Componentes de un SGC Digital</h3>
      <p>Un sistema completo incluye control de inspecciones, no conformidades, acciones correctivas y preventivas (CAPA), auditorías y control de documentos.</p>
      
      <h3>Normas y Cumplimiento</h3>
      <ul>
        <li><strong>ISO 9001:</strong> Sistema de gestión de calidad general</li>
        <li><strong>ISO 13485:</strong> Dispositivos médicos</li>
        <li><strong>ISO/TS 16949:</strong> Industria automotriz</li>
        <li><strong>AS9100:</strong> Aeroespacial</li>
        <li><strong>FDA 21 CFR Part 11:</strong> Registros electrónicos</li>
      </ul>
      
      <h3>Herramientas Digitales</h3>
      <p>Inspección móvil con tablets, control estadístico de procesos en tiempo real, trazabilidad automática y análisis de tendencias predictivo.</p>
      
      <h3>Beneficios Medibles</h3>
      <p>Reducción de defectos, menos retrabajo, mejor satisfacción del cliente, cumplimiento normativo consistente y reducción de costos de calidad.</p>
    `,
  },
  {
    id: 5,
    title: "Trazabilidad en la Industria",
    excerpt: "La importancia de la trazabilidad completa desde materia prima hasta producto terminado.",
    image: "/supply-chain-traceability-barcode-tracking-system.jpg",
    date: "20 de febrero, 2024",
    readTime: "6 min",
    category: "Operaciones",
    content: `
      <h2>Trazabilidad Industrial Completa</h2>
      <p>La trazabilidad es la capacidad de seguir el historial, ubicación y aplicación de un producto mediante identificaciones registradas. Es fundamental para calidad, seguridad y cumplimiento.</p>
      
      <h3>¿Por qué es Crítica?</h3>
      <p>Permite recalls precisos, identifica causas raíz de problemas, cumple requisitos regulatorios y genera confianza en clientes.</p>
      
      <h3>Tipos de Trazabilidad</h3>
      <ul>
        <li><strong>Hacia adelante:</strong> De materia prima a producto terminado</li>
        <li><strong>Hacia atrás:</strong> De producto terminado a materias primas</li>
        <li><strong>Interna:</strong> Procesos y transformaciones dentro de la planta</li>
      </ul>
      
      <h3>Tecnologías Habilitadoras</h3>
      <p>Códigos de barras, RFID, números de serie, lotes, escaneo móvil y bases de datos relacionales permiten captura y consulta eficiente de información de trazabilidad.</p>
      
      <h3>Implementación Efectiva</h3>
      <p>Defina puntos críticos de captura, establezca nomenclaturas claras, capacite al personal y valide el sistema con simulacros de recall.</p>
    `,
  },
  {
    id: 6,
    title: "Integración CAD con ERP",
    excerpt: "Conecta tu diseño con la producción mediante integración CAD-ERP efectiva.",
    image: "/cad-software-integration-with-erp-system-engineeri.jpg",
    date: "15 de febrero, 2024",
    readTime: "7 min",
    category: "Tecnología",
    content: `
      <h2>Integración CAD-ERP</h2>
      <p>La integración entre sistemas de diseño (CAD) y gestión empresarial (ERP) elimina la entrada manual de datos, reduce errores y acelera el proceso de ingeniería a producción.</p>
      
      <h3>Beneficios de la Integración</h3>
      <p>Lista de materiales (BOM) automática, sincronización de revisiones, reducción de errores de transcripción y menor tiempo de lanzamiento de nuevos productos.</p>
      
      <h3>Sistemas CAD Soportados</h3>
      <ul>
        <li><strong>SolidWorks:</strong> Integración nativa bidireccional</li>
        <li><strong>Autodesk Inventor:</strong> Exportación de estructura de producto</li>
        <li><strong>Creo (Pro/Engineer):</strong> Sincronización de BOM</li>
        <li><strong>Solid Edge:</strong> Transferencia de datos de diseño</li>
      </ul>
      
      <h3>Proceso de Integración</h3>
      <p>El sistema CAD genera la estructura del producto que se transfiere automáticamente al ERP. Los cambios de ingeniería se gestionan con control de revisiones y aprobaciones.</p>
      
      <h3>Mejores Prácticas</h3>
      <p>Establezca nomenclaturas consistentes, defina flujos de aprobación claros, sincronice periódicamente y mantenga una fuente única de verdad para datos maestros.</p>
    `,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Blog</h1>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                Recursos y artículos sobre software de manufactura y mejores prácticas industriales
              </p>
            </div>
          </div>
        </section>

        {/* Listado de posts */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 flex flex-col"
                  >
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{post.title}</h2>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      <Button
                        onClick={() => setSelectedPost(post)}
                        variant="outline"
                        size="sm"
                        className="w-full h-10 sm:h-9 text-sm"
                      >
                        Leer más
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 w-[95vw] sm:w-full">
            <ScrollArea className="h-full max-h-[90vh]">
              {selectedPost && (
                <>
                  <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                    <img
                      src={selectedPost.image || "/placeholder.svg"}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6">
                      <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        {selectedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <DialogHeader className="mb-5 sm:mb-6">
                      <DialogTitle className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        {selectedPost.title}
                      </DialogTitle>
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {selectedPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {selectedPost.readTime} de lectura
                        </span>
                      </div>
                    </DialogHeader>

                    <div
                      className="prose prose-sm sm:prose-base prose-slate dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />

                    <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-muted/50 rounded-lg border-2">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        ¿Interesado en implementar estas soluciones?
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        Contáctanos para una demostración personalizada de Intuitive ERP
                      </p>
                      <Button
                        onClick={() => (window.location.href = "/contacto")}
                        className="w-full sm:w-auto h-11 sm:h-10"
                      >
                        Solicitar demostración
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
