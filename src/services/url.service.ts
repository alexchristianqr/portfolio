/**
 * Estado compartible en la URL. I/O puro, sin Vue: lee y escribe `location` / `history`.
 *
 * Se usa la *query string* (`?cat=landing`) y no el hash: un hash como `#portfolio?cat=landing` no
 * coincide con ningún `id`, así que el navegador no bajaría a la sección. Con la query, el hash
 * sigue siendo el ancla y el enlace compartido aterriza en la sección con el estado restaurado.
 */
export function readQuery(): URLSearchParams {
  return new URLSearchParams(window.location.search)
}

/**
 * Sustituye la query de la URL actual **sin añadir una entrada al historial** (`replaceState`):
 * filtrar no debe obligar a pulsar «atrás» veinte veces. Con `params` vacío la query desaparece.
 *
 * @param hash ancla a poner en la URL; si se omite se conserva la actual.
 */
export function replaceQuery(params: Record<string, string>, hash?: string): void {
  try {
    const search = new URLSearchParams(params).toString()
    const url = `${window.location.pathname}${search ? `?${search}` : ''}${hash ?? window.location.hash}`
    window.history.replaceState(window.history.state, '', url)
  } catch {
    // Sin History API (p. ej. iframe aislado): el estado funciona, solo que la URL no lo refleja.
  }
}
