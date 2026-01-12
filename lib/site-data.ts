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
    description: "Con Intuitive ERP, puede verificar la disponibilidad y confirmar pedidos con confianza utilizando CTP dinámico (capable-to-promise planning). Analice los requisitos de material con una herramienta de trazabilidad gráfica y aproveche la MRP (material requirements planning) para planificar materiales al instante. Busque automáticamente problemas de capacidad y de material, identifique problemas de programación y obtenga soluciones rápidamente para cumplir con sus fechas de entrega.",
  },
  {
    id: "ingenieria",
    title: "Gestión de ingeniería",
    icon: "cog",
    description:
      "Gestión avanzada para configuración del producto, cambios de ingeniería y trazabilidad del número de serie de los componentes. BOM visual, control de revisiones y fechas con CADLink integrado para SolidWorks, Autodesk Inventor, Creo y Solid Edge.",
  },
  {
    id: "manufactura",
    title: "Administración de manufactura",
    icon: "factory",
    description:
      "Órdenes de trabajo en tiempo real. Shop Floor Manager proporciona a los operadores un panel táctil intuitivo para registrar entrada y salida de órdenes, reportar finalización y movimientos de materiales desde dispositivos móviles con escaneo de códigos de barras.",
  },
  {
    id: "inventario",
    title: "Gestión del inventario",
    icon: "package",
    description:
      "Gestione niveles de inventario por artículo, ubicación y familia de productos. Recuentos cíclicos, trazabilidad completa con números de serie multinivel y visibilidad multi-ubicación para optimizar rotación de inventarios y reducir costos logísticos.",
  },
  {
    id: "prevision",
    title: "Previsión de la demanda",
    icon: "trending-up",
    description: "Pronósticos automáticos con selección inteligente de técnica, modelos avanzados y diagnósticos. Mejore la precisión de planeación analizando tendencias y patrones históricos para optimizar producción evitando exceso o falta de inventario.",
  },
  {
    id: "crm",
    title: "CRM",
    icon: "users",
    description:
      "Gestión integral de oportunidades, campañas e incidentes de soporte. Totalmente alineado con finanzas y pedidos, incluye gestión de contratos y garantías para mejorar la satisfacción del cliente.",
  },
  {
    id: "cotizaciones",
    title: "Procesamiento de cotizaciones y pedidos",
    icon: "file-text",
    description:
      "Configure ítems, BOM y rutas de fabricación en el módulo de cotización. Convierta cotizaciones a órdenes con aprobación jerárquica y matrices de precios personalizadas en un flujo completo de cotización a efectivo.",
  },
]

export const extendedCapabilities = [
  {
    id: "gerente-planta",
    title: "Gerente de planta",
    description:
      "Puede realizar un seguimiento de las transacciones de mano de obra y de inventario en el taller en tiempo real. La herramienta proporciona a los supervisores una visibilidad rápida de las prioridades de producción, el estado de los pedidos, las cargas del centro de trabajo y la utilización de los empleados. Para los operadores del centro de trabajo, Shop Floor Manager proporciona un panel táctil intuitivo que les permite registrar la entrada y salida de las órdenes de trabajo e informar la finalización de la orden de trabajo y los movimientos de materiales desde un dispositivo móvil.",
  },
  {
    id: "recopilacion-datos",
    title: "Recopilación de datos de planta",
    description:
      "Capture datos en tiempo real desde el piso de fabricación utilizando lectores de código de barras, teléfonos, tablets y dispositivos RF. Automatice la recopilación de transacciones de mano de obra, movimientos de inventario y estado de órdenes para reducir errores y mejorar la precisión de datos.",
  },
  {
    id: "unipoint",
    title: "Calidad avanzada por uniPoint",
    description:
      "Gestión integral de no conformidades, acciones correctivas (CAPA), materiales peligrosos (HazMat) y mantenimiento. Soporta ISO 9001, ISO 13485, ISO/TS 16949, AS9100, FDA 21 CFR Part 11 y 820 para cumplimiento normativo de máxima calidad.",
  },
  {
    id: "analytics",
    title: "Intuitive Analytics",
    description: "Dashboards interactivos prediseñados e informes dinámicos para análisis multidimensional de datos. Acceda a información en tiempo real sobre producción, inventario, ventas y finanzas para tomar decisiones estratégicas y tácticas informadas.",
  },
  {
    id: "emf",
    title: "Marco de gestión de eventos (EMF)",
    description: "Configure alertas inteligentes y automatización de procesos con notificaciones y mensajes completamente configurables. Ejecute acciones automáticas basadas en eventos empresariales para mejorar la agilidad operativa.",
  },
  {
    id: "webapi",
    title: "Intuitive Web API",
    description: "Proporciona acceso seguro a la lógica de negocio para integración con sistemas externos, desarrollo de aplicaciones personalizadas y generación de reportes avanzados con control de exposición de datos y usuarios.",
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
