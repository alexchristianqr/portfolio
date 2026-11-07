type GtagArgs = [command: string, ...params: unknown[]]

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: GtagArgs) => void
  }
}

/** Carga gtag.js solo si hay un ID. Sin ID la app no hace ninguna petición a Google. */
export function loadAnalytics(id: string | undefined): void {
  if (!id || window.gtag) return

  window.dataLayer = window.dataLayer ?? []
  // gtag.js lee `arguments` (no un array), por eso es una función normal y no una flecha.
  window.gtag = function gtag(...args: GtagArgs): void {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', id)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

export function trackEvent(action: string): void {
  window.gtag?.('event', action, { event_category: 'navigation', value: 1 })
}
