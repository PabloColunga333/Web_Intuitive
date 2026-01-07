// Datos centralizados del sitio - SOLO datos reales permitidos
export const siteConfig = {
  name: "Intuitive ERP",
  tagline: "Software Integrado de Manufactura ERP/MRP",
  description:
    "Solución de planeación y control en tiempo real con CRM, soporte de decisión y comercio electrónico. Basada en Microsoft para integración, desarrollo y administración.",

  contact: {
    phone: "(427) 274-9160",
    phoneRaw: "4272749160",
    email: "venta@antalm.com.mx",
    emailDestination: "pablocolunga@live.com", // Email real para envío de formularios
    location: "Querétaro, Qro.",
    whatsapp: {
      number: "5214271982038",
      message: "Hola, me gustaría recibir información sobre Intuitive ERP.",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/intuitive-systems-mexico",
    facebook: "https://www.facebook.com/antalmoficial/",
  },

  blog: {
    wordpress: "https://antalm.com.mx/wordpress/blog/",
    html: "https://antalm.com.mx/software-de-manufactura-blog.html",
  },
}

export const benefits = [
  "Optimice operaciones de fabricación",
  "Anticípese a cambios y problemas",
  "Optimice ventas",
  "Mejore calidad e ingeniería",
  "Aumente satisfacción del cliente",
]

export const features = [
  {
    id: "planificacion",
    title: "Planificación y programación dinámicas",
    icon: "calendar",
    description: "CTP dinámico, MRP, capacidad y materiales, trazabilidad gráfica para optimizar la producción.",
  },
  {
    id: "ingenieria",
    title: "Gestión de ingeniería",
    icon: "cog",
    description:
      "BOM visual, control de revisiones y fechas. CADLink con SolidWorks, Autodesk Inventor, Creo, Solid Edge y más.",
  },
  {
    id: "manufactura",
    title: "Administración de manufactura",
    icon: "factory",
    description:
      "Órdenes de trabajo en tiempo real, SFDC, Shop Floor Manager, escaneo móvil y códigos de barras, pantallas táctiles.",
  },
  {
    id: "inventario",
    title: "Gestión del inventario",
    icon: "package",
    description:
      "Niveles por artículo/ubicación/familia, recuentos cíclicos, trazabilidad completa con números de serie multinivel.",
  },
  {
    id: "prevision",
    title: "Previsión de la demanda",
    icon: "trending-up",
    description: "Pronósticos automáticos, selección de técnica, modelos y diagnósticos avanzados.",
  },
  {
    id: "crm",
    title: "CRM",
    icon: "users",
    description:
      "Oportunidades, campañas, incidentes de soporte. Alineado con finanzas y pedidos, contratos y garantías.",
  },
  {
    id: "cotizaciones",
    title: "Cotizaciones y pedidos",
    icon: "file-text",
    description:
      "Configurar ítems/BOM/rutas en el módulo de cotización. Convertir cotizaciones a órdenes, aprobación jerárquica, matrices de precios.",
  },
]

export const extendedCapabilities = [
  {
    id: "gerente-planta",
    title: "Gerente de planta",
    description:
      "Visibilidad para supervisores con panel táctil. Seguimiento de mano de obra e inventario en tiempo real.",
  },
  {
    id: "recopilacion-datos",
    title: "Recopilación de datos de planta",
    description:
      "Lectores de código de barras, teléfonos, tablets y RF. Reduce errores de recepción y mejora precisión.",
  },
  {
    id: "unipoint",
    title: "Calidad avanzada por uniPoint",
    description:
      "No conformidades, CAPA, HazMat, mantenimiento para cumplimiento. ISO 9001, ISO 13485, ISO/TS 16949, AS9100, FDA 21 CFR Part 11 y 820.",
  },
  {
    id: "analytics",
    title: "Intuitive Analytics",
    description: "Dashboards interactivos prediseñados, informes dinámicos y análisis multidimensional.",
  },
  {
    id: "emf",
    title: "Marco de gestión de eventos (EMF)",
    description: "Alertas y automatización, notificaciones y mensajes configurables.",
  },
  {
    id: "webapi",
    title: "Intuitive Web API",
    description: "Acceso a lógica de negocio, integración y reporteo. Control de exposición y usuarios.",
  },
]

export const services = [
  {
    id: "venta",
    title: "Venta",
    icon: "shopping-cart",
    description:
      "Presentaciones conceptuales de soluciones MOM de SIEMENS. Diagnóstico de requerimientos y propuestas personalizadas.",
    items: ["Presentaciones conceptuales", "Diagnóstico de requerimientos", "Propuestas y negociación"],
  },
  {
    id: "consultoria",
    title: "Consultoría",
    icon: "lightbulb",
    description:
      "Soluciones MOM de SIEMENS, automatización industrial, Business Intelligence y alineación de procesos.",
    items: [
      "Soluciones MOM de SIEMENS",
      "Automatización, control y redes industriales",
      "Business Intelligence y Manufacturing Intelligence",
      "Alineación de procesos y KPI's",
      "Lean Manufacturing y Six Sigma",
    ],
  },
  {
    id: "soporte",
    title: "Soporte Técnico",
    icon: "headphones",
    description:
      "Certificado por SIEMENS. Horario de 9 am a 6 pm (L-V) excepto festivos y última semana del año. Urgencias 24/7 vía telefónica.",
    items: [
      "Certificado por SIEMENS",
      "Horario: 9 am - 6 pm (L-V)",
      "Urgencias 24/7 vía telefónica",
      "Excepto festivos y última semana del año",
    ],
  },
]

export const faqs = [
  {
    question: "¿Qué beneficios ofrece Intuitive ERP a las diferentes áreas?",
    answer:
      "Proporciona visibilidad e integridad de datos en toda la empresa. Mejora la planeación y control de la producción, inventarios, compras y finanzas, permitiendo decisiones más informadas y eficientes.",
  },
  {
    question: "¿En qué sectores industriales se puede implementar?",
    answer:
      "Automotriz y aeroespacial, químicos y farmacéutico, bienes de consumo envasados, electrónica y equipamiento eléctrico, comida y bebidas, vidrio, cerámica y materiales básicos.",
  },
  {
    question: "¿Qué tan personalizable es el sistema MRPII?",
    answer:
      "Altamente personalizable: campos y tablas configurables, reglas de secuencia, scripts por evento, integración multi-sitio y gran flexibilidad para adaptarse a procesos únicos de cada empresa.",
  },
  {
    question: "¿Qué resultados se pueden esperar?",
    answer:
      "Mayor rotación de inventarios, reducción de costos logísticos, programación de piso más eficiente, reducción de tiempo muerto y horas extra, planes acordes a capacidad instalada.",
  },
]
