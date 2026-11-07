/**
 * `localStorage` puede lanzar (modo privado, cookies bloqueadas) o no existir. Un fallo aquí
 * nunca debe tumbar la app: se pierde la preferencia, no la página.
 */
export const storage = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, value)
    } catch {
      // Sin persistencia: la preferencia vale solo para esta sesión.
    }
  }
}
