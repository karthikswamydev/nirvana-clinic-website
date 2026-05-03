/** Public site label (browser title suffix and Open Graph site name). */
export const SITE_NAME = 'Nirvana Integrated Clinic'

/**
 * Canonical origin for absolute URLs (Open Graph, JSON-LD, canonical links).
 * Set `VITE_SITE_URL` in production if the deploy URL differs — no trailing slash.
 */
export function getSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv?.trim()) return fromEnv.replace(/\/$/, '')
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin
  return 'https://nirvanaintegratedclinic.com'
}

export function absoluteUrl(path: string): string {
  const origin = getSiteOrigin()
  if (!path) return origin
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const p = path.startsWith('/') ? path : `/${path}`
  return `${origin}${p}`
}
