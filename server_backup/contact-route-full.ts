// Backup removed: server-side contact route removed to keep project static.

// Original implementation not retained in repository to avoid server-side code.

export {};

// Rate limiting en memoria
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minuto
const MAX_REQUESTS = 10

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  return true
}

function getEmailSubject(type?: string): string {
  switch (type) {
    case "demo":
      return "Solicitud de demo – Intuitive ERP"
    case "video":
      return "Solicitud de video informativo – Intuitive ERP"
    case "quote":
      return "Solicitud de cotización – Intuitive ERP"
    case "support":
      return "Solicitud de soporte técnico – Intuitive ERP"
    default:
      return "Contacto – Intuitive ERP"
  }
}

export async function POST(request: Request) {
  try {
    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY no está configurada")
      return NextResponse.json(
        {
          ok: false,
          error: "Configuración del servidor incompleta. Falta RESEND_API_KEY",
        },
        { status: 500 },
      )
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
        { status: 429 },
      )
    }

    let body: any
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ ok: false, error: "Formato de datos inválido" }, { status: 400 })
    }

    const { name, company, email, phone, message, honeypot, subject, source, type } = body

    // Honeypot anti-spam
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ ok: true })
    }

    // Validaciones
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "El nombre debe tener al menos 2 caracteres" }, { status: 400 })
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "El email es requerido" }, { status: 400 })
    }

    // Backup removed: server-side contact route removed to keep project static.

    // Original implementation not retained in repository to avoid server-side code.

    export {};
    const emailSubject = subject || getEmailSubject(type)
