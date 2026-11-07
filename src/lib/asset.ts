/**
 * Rutas de activos bajo `base` de Vite (`/portfolio/`). Un solo helper evita mezclar rutas
 * relativas (`assets/...`) con absolutas (`/portfolio/assets/...`), que rompían según la URL.
 */
const base = import.meta.env.BASE_URL

const clean = (path: string): string => path.replace(/^\/+/, '')

export const asset = (path: string): string => `${base}assets/${clean(path)}`

/** Miniatura de tarjeta (720 px de ancho). */
export const projectThumb = (name: string): string => asset(`images/portfolio/sm/${name}.webp`)

/** Imagen grande del diálogo de detalle (1280 px de ancho). */
export const projectImage = (name: string): string => asset(`images/portfolio/lg/${name}.webp`)

export const techIcon = (slugOrFile: string): string =>
  asset(`images/icons/${slugOrFile.endsWith('.svg') ? slugOrFile : `${slugOrFile}.svg`}`)

export const publicFile = (name: string): string => `${base}files/${clean(name)}`
