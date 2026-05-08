/**
 * Contact form de la landing pega a tmed-api (Resend + /contact compartido
 * con teriumed.com y teriumschool.com). VITE_CONTACT_API_URL se setea en
 * Vercel; por defecto local.
 */
const CONTACT_API =
  (import.meta.env.VITE_CONTACT_API_URL as string | undefined) ??
  'http://localhost:3030/api/v1'

export interface ContactPayload {
  nombre: string
  email: string
  telefono?: string
  organizacion?: string
  mensaje?: string
  honeypot?: string
}

export interface ApiError extends Error {
  status: number
  payload?: unknown
}

export async function submitContact(payload: ContactPayload): Promise<{ ok: boolean }> {
  const res = await fetch(`${CONTACT_API}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, source: 'teriumx' }),
  })
  const contentType = res.headers.get('content-type') ?? ''
  const body = contentType.includes('application/json')
    ? await res.json().catch(() => null)
    : await res.text().catch(() => null)

  if (!res.ok) {
    const msg =
      body && typeof body === 'object' && 'message' in (body as Record<string, unknown>)
        ? String((body as { message?: unknown }).message ?? `HTTP ${res.status}`)
        : `HTTP ${res.status}`
    const err = new Error(msg) as ApiError
    err.status = res.status
    err.payload = body
    throw err
  }
  return body as { ok: boolean }
}
