// Eenvoudige in-memory rate limiter
// Max 5 verzoeken per IP per 10 minuten

const requests = new Map<string, { count: number; reset: number }>()

const MAX_REQUESTS = 5
const WINDOW_MS = 10 * 60 * 1000 // 10 minuten

export function rateLimit(ip: string): { ok: boolean; remaining: number } {
  const now = Date.now()
  const record = requests.get(ip)

  if (!record || now > record.reset) {
    requests.set(ip, { count: 1, reset: now + WINDOW_MS })
    return { ok: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { ok: false, remaining: 0 }
  }

  record.count++
  return { ok: true, remaining: MAX_REQUESTS - record.count }
}
