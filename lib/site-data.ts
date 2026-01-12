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
      "Controle los costes de producción y gestione los recursos de forma más eficiente con las herramientas de gestión de ingeniería flexibles de Intuitive. Cree múltiples listas de materiales visuales (BOM) para cada artículo, manteniendo una revisión completa y un control de fecha efectivo para rastrear y controlar los cambios de ingeniería. Aproveche el módulo CADLink para integrar datos de elementos maestros y listas de materiales con aplicaciones CAD populares como SolidWorks, Autodesk Inventor, Creo, Solid Edge y más. Intuitive también le permite generar y mantener rutas flexibles con múltiples versiones de rutas por número de pieza.",
  },
  {
    id: "manufactura",
    title: "Administración de manufactura",
    icon: "factory",
    description:
      "Intuitive le permite rastrear y monitorear órdenes de trabajo, estado de producción y capacidad de material y equipo en tiempo real. Con la herramienta Shop Floor Data Collection (SFDC), puede utilizar lectores móviles de códigos de barras para realizar un seguimiento eficiente de los problemas de materiales, recibos de órdenes de trabajo, movimientos de inventario y transacciones laborales a medida que ocurren en el taller. El módulo Shop Floor Manager permite a los supervisores controlar las prioridades de producción, el estado de los pedidos, las cargas del centro de trabajo y la utilización de los empleados de un vistazo. Los operadores pueden usar pantallas táctiles para registrar la entrada y salida de las órdenes de trabajo y para informar la finalización de la orden de trabajo y los movimientos de materiales.",
  },
  {
    id: "inventario",
    title: "Gestión del inventario",
    icon: "package",
    description:
      "Intuitive proporciona las herramientas que necesita para controlar con precisión las transacciones de inventario, los costos de los productos y el uso de materiales. Le brinda acceso instantáneo a datos en tiempo real para que pueda rastrear los niveles de inventario por artículo, ubicación, familia de productos y uso histórico, todo con el clic de un botón. También puede realizar recuentos cíclicos, inventarios físicos y análisis de información de costos. El seguimiento completo de la cuna a la tumba de los números de serie de varios niveles ayuda al cumplimiento de las normas de trazabilidad.",
  },
  {
    id: "prevision",
    title: "Previsión de la demanda",
    icon: "trending-up",
    description: "Genere pronósticos más precisos con el clic de un mouse, sin necesidad de conocimientos de estadísticas o pronósticos. Intuitive puede calcular pronósticos automáticamente analizando sus datos de uso y seleccionando la técnica de pronóstico óptima entre una variedad de métodos. Si prefiere dictar su propio enfoque, Intuitive ofrece una selección completa de modelos de pronóstico y todas las ayudas de diagnóstico que necesita para crear pronósticos usted mismo.",
  },
  {
    id: "crm",
    title: "CRM",
    icon: "users",
    description:
      "Con el CRM integrado de Intuitive, puede gestionar los datos de los clientes, las oportunidades, las campañas de marketing y los incidentes de soporte en una única plataforma, al tiempo que garantiza la alineación con los datos financieros y de procesamiento de pedidos de su ERP. Administre fácilmente la información de contactos y cuentas, vea datos de estado actuales e históricos y vincule citas, documentos, correos electrónicos y actividades a clientes u oportunidades específicos. Cree registros detallados de cada incidente de soporte, calcule los costos asociados con la resolución de incidentes, realice un seguimiento de las garantías y administre los contratos de servicio.",
  },
  {
    id: "cotizaciones",
    title: "Procesamiento de cotizaciones y pedidos",
    icon: "file-text",
    description:
      "Maximice la eficiencia de su fuerza de ventas con las funciones de procesamiento de pedidos y cotizaciones fáciles de usar de Intuitive. Dentro del módulo de cotización del sistema, puede configurar nuevos elementos, listas de materiales y rutas sobre la marcha; aplicar descuentos por volumen o específicos para el cliente; y generar Solicitudes de cotización (RFQ) de proveedores para cualquier línea de una cotización. Convierta automáticamente cotizaciones en órdenes de venta y mantenga fácilmente órdenes de venta de todos los niveles de complejidad con un sistema electrónico de aprobación jerárquica. Incluso puede procesar compras en el punto de venta y mantener matrices de precios desde dentro del sistema.",
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
      "Los operadores pueden usar lectores de códigos de barras móviles para capturar de manera eficiente una amplia gama de datos, incluidos problemas de materiales, recibos de órdenes de trabajo, movimientos de inventario y transacciones laborales, en el taller en tiempo real. Disponible en teléfonos inteligentes, tabletas, unidades cableadas y dispositivos portátiles de RF, SFDC permite a los empleados ingresar datos de forma remota en cualquier lugar y ayuda a reducir los errores de recepción al permitir que el material entrante se escanee en Intuitive inmediatamente después de su llegada.",
  },
  {
    id: "unipoint",
    title: "Calidad avanzada por uniPoint",
    description:
      "Permite a los fabricantes de industrias reguladas rastrear y medir tanto el costo como la frecuencia de los eventos de calidad. Le ayuda a iniciar fácilmente no conformidades y acciones preventivas correctivas, así como a gestionar la documentación de HazMat. La solución también admite la gestión del mantenimiento para el cumplimiento de la norma ISO, incluidas las normas ISO 9001, ISO 13485, ISO / TS 16949, AS9100 y FDA 21 CFR Parte 11 y Parte 820.",
  },
  {
    id: "analytics",
    title: "Intuitive Analytics",
    description: "Puede identificar fácilmente y compartir conocimientos comerciales con las partes interesadas relevantes para acelerar las decisiones y acciones comerciales. Aprovechando el rápido análisis multidimensional y multifuncional, Intuitive Analytics presenta inteligencia en paneles interactivos prediseñados e informes dinámicos que brindan información sobre sus operaciones y le permiten profundizar para examinar las causas raíz.",
  },
  {
    id: "emf",
    title: "Marco de gestión de eventos (EMF)",
    description: "Es una solución de alerta integral que se puede utilizar para automatizar una amplia gama de tareas. Use EMF para monitorear varios procesos, notificar a los miembros del personal sobre inquietudes, responder a excepciones, responder consultas y automatizar la comunicación con empleados, clientes y proveedores. EMF puede predecir y reaccionar ante eventos en Intuitive ERP y luego entregar información crítica a las partes interesadas y departamentos relevantes a través de notificaciones, mensajes de texto o correos electrónicos automatizados. Fácilmente integrado con Intuitive, EMF es una ventanilla única para todos sus requisitos de alerta.",
  },
  {
    id: "webapi",
    title: "Intuitive Web API",
    description: "Proporciona a su organización acceso completo a la lógica empresarial de Intuitive, lo que le permite manipular, actualizar y compartir información desde fuera de la interfaz de Intuitive. Aproveche la API para crear soluciones de informes personalizadas, integre Intuitive con otros sistemas empresariales y más, todo mientras se adhiere a las reglas comerciales y la configuración de control maestro de Intuitive. Las herramientas de configuración fáciles de usar le brindan un control preciso sobre las acciones y los recursos intuitivos que desea exponer y los usuarios que pueden acceder a ellos.",
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
    question: "¿Qué áreas se ven beneficiadas con su Sistemas Integrados de Manufactura ERP?",
    answer:
      "La integridad de datos a través de los ciclos de su empresa asegura que usted tenga mayor visibilidad en todas las áreas de su negocio de las operaciones diarias a un nivel estratégico de decisión, planeación y control en la producción, inventarios, compras y los datos financieros.",
  },
  {
    question: "¿Qué tipo de sectores se benefician más?",
    answer:
      "Muchas empresas, desde pequeñas y medianas empresas hasta grandes corporaciones se benefician con nuestro software ERP, por poner unos ejemplos Automotriz y aeroespacial, Productos químicos y farmacéuticos, Bienes de consumo envasados, Electrónica y equipamiento eléctrico. Comida y bebidas, Vidrio, cerámica y materiales básicos.",
  },
  {
    question: "¿Es un software Integrado de Manufactura MRPII personalizable?",
    answer:
      "Los campos y las tablas de datos en su base de datos se pueden agregar o cambiar. Se pueden crear reglas de secuencia únicas. Los scripts de comunicación por evento pueden ser instalados con una estrecha integración con otros sistemas en múltiples sitios. Su flexibilidad es incomparable.",
  },
  {
    question: "¿Qué resultados se pueden esperar con este sistema ERP?",
    answer:
      "Mejorar los resultados gerenciales con mayor rotación de inventarios, Permitiendo al mismo tiempo reducir sus costos logísticos. El programar más eficiente el piso de fabricación reduce tiempo muerto y horas extras, haciendo planes acorde a la realidad de su capacidad instalada.",
  },
  {
    question: "¿Qué diferencia Intuitive de otros ERP?",
    answer:
      "Su arquitectura exclusiva basada en Microsoft asegura una fácil administración así como integración y desarrollo para requisitos particulares, entrega una infraestructura tecnológica estable y escalable. Intuitive ERP es pionero en el uso de tecnología Microsoft punto Net y proporciona un nuevo nivel de funciones avanzadas.",
  },
  {
    question: "¿INTUITIVE software puede resolver problemas específicos?",
    answer:
      "Cuenta con opciones personalizadas para resolver problemas específicos de programación y crear herramientas de manipulación de datos personalizados para usar con el motor de flujo de trabajo.",
  },
  {
    question: "¿Qué retorno de inversión puedo esperar?",
    answer:
      "Intuitive ERP proporciona una constante y sólida ventaja financiera medible dentro del primer año después de su implementación. Aumento en la satisfacción del cliente basado en mejorar sus tiempos de entrega, calidad creciente, plazos de entrega acortados, etc.",
  },
  {
    question: "¿Puedo disponer de una demo del sistema para mi empresa?",
    answer:
      "Ofrecemos un demo de un mes para que tengas la posibilidad de conocer a detalle los beneficios de cada uno de los módulos correspondientes a cada paquete y así puedas resolver y aclarar cualquier duda, guiado por la asesoría de un consultor.",
  },
  {
    question: "¿Qué tipo de soporte ofrece la empresa, es únicamente en Querétaro?",
    answer:
      "Contamos con el mejor servicio a usuarios. Telefónico, chat y conexión remota",
  },
  {
    question: "¿El sistema para pymes MRP II cuenta con manuales o videos?",
    answer:
      "CONTAMOS CON EL MEJOR SISTEMA DE CAPACITACIÓN, Videos, tutoriales, manuales de usuario en línea. Todo al alcance de tu mano.",
  },
]
