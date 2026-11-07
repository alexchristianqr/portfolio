/**
 * Rutas de activos bajo `base` de Vite (`/portfolio/`). Un solo helper evita mezclar rutas
 * relativas (`assets/...`) con absolutas (`/portfolio/assets/...`), que rompían según la URL.
 */
const base = import.meta.env.BASE_URL

const clean = (path: string): string => path.replace(/^\/+/, '')

export const asset = (path: string): string => `${base}assets/${clean(path)}`

export const projectImage = (file: string): string => asset(`images/portfolio/${file}`)

export const techIcon = (slugOrFile: string): string =>
  asset(`images/icons/${slugOrFile.endsWith('.svg') ? slugOrFile : `${slugOrFile}.svg`}`)

export const publicFile = (name: string): string => `${base}files/${clean(name)}`
