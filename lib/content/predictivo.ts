export type CasoUso = {
  id: string
  title: string
  description: string
  estado: "Disponible" | "En piloto"
}

export const casosDeUso: CasoUso[] = [
  {
    id: "prediccion-demanda",
    title: "Predicción de demanda",
    description:
      "Proyecta pedidos por SKU y familia con estacionalidad y señales de mercado. Alimenta directo tu MRP.",
    estado: "Disponible",
  },
  {
    id: "prediccion-consumo",
    title: "Predicción de consumo de materiales",
    description:
      "Anticipa consumo real vs. BOM teórico y detecta desviaciones y merma antes del cierre de mes.",
    estado: "Disponible",
  },
  {
    id: "mantenimiento-predictivo",
    title: "Mantenimiento predictivo",
    description:
      "Estima ventanas de falla por centro de trabajo a partir del histórico de paros y utilización.",
    estado: "En piloto",
  },
  {
    id: "optimizacion-inventario",
    title: "Optimización de inventario y capacidad",
    description:
      "Encuentra el punto de reorden y la secuencia que minimizan costo sin arriesgar entrega.",
    estado: "En piloto",
  },
]

export const porQueWolfram = [
  {
    title: "Modelado, no adivinanza",
    body:
      "Wolfram Language es la base de cómputo científico usada en investigación e ingeniería. Sus modelos son explícitos: se pueden revisar, auditar y cuestionar. No hay caja negra que 'aprende' patrones que nadie puede verificar.",
  },
  {
    title: "Incertidumbre cuantificada",
    body:
      "Un modelo predictivo que solo entrega un número es la mitad del problema. Nosotros entregamos rangos con probabilidades: cuál es el escenario probable, cuál es el conservador. En planeación industrial, eso es la diferencia entre una decisión y una apuesta.",
  },
  {
    title: "Sobre tu dato, no sobre el promedio",
    body:
      "Los modelos se entrenan con el histórico de TU ERP: tu mezcla de productos, tu estacionalidad, tus paros. No usamos promedios de industria ni datos sintéticos. El modelo refleja lo que pasa en tu planta, no en la de otro.",
  },
]

export const wolframContext =
  "Wolfram Language lleva más de tres décadas en uso en investigación e ingeniería. No es una herramienta nueva; es la que usa quien necesita que el resultado sea auditable."

export const paquetePredictivo = {
  title: "Inteligencia Predictiva",
  bullets: [
    "Diagnóstico de madurez de datos (gratuito)",
    "Modelo piloto sobre un caso de uso",
    "Despliegue e integración al ERP",
  ],
  cta: "/contacto/?tipo=predictivo",
}

export const faqPredictivo = [
  {
    q: "¿Mis datos salen de mi planta?",
    a: "El modelo se entrena con tu histórico y solo con tu histórico. Los datos no se comparten con terceros ni alimentan modelos de otros clientes. El esquema de despliegue se define contigo en el diagnóstico.",
  },
  {
    q: "¿Necesito un data scientist?",
    a: "No para empezar. El diagnóstico y el piloto los ejecutamos nosotros. Si más adelante quieres llevar el modelo in-house, te acompañamos en la transferencia.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "El diagnóstico de madurez de datos toma una sesión. El alcance y los tiempos del piloto se definen a partir de ahí.",
  },
  {
    q: "¿Funciona si mi ERP no es Intuitive?",
    a: "Se puede integrar con otros ERPs, pero la ventaja de Intuitive es la granularidad del dato que facilita modelos más confiables.",
  },
]

export type FAQItem = { q: string; a: string }

export default {
  casosDeUso,
  porQueWolfram,
  paquetePredictivo,
  faqPredictivo,
}
