/** Contratos de los componentes presentacionales de `components/ui/`. */

export interface ProjectDetailLink {
  label: string
  icon: string
  /** Sin `href` el enlace se muestra desactivado (repositorio privado). */
  href?: string
}

export interface ProjectDetail {
  id: string
  title: string
  image: string
  categoryLabel: string
  summary?: string
  list?: { label: string; items: string[] }
  stack: { slug: string; src: string }[]
  stackLabel: string
  /** Ya formateado: «3 de 21». */
  position: string
  prevLabel: string
  nextLabel: string
  links: ProjectDetailLink[]
  closeLabel: string
}

/** Lo que necesitan la tarjeta y la fila de un proyecto: son dos vistas del mismo dato. */
export interface ProjectItem {
  title: string
  image: string
  categoryLabel: string
  summary?: string
  stack: readonly { slug: string; src: string }[]
  isPrivate: boolean
  /** Textos ya traducidos: `ui/` no conoce i18n. */
  privateLabel: string
  openLabel: string
}

export type ProjectViewMode = 'grid' | 'list'

export interface ViewOption {
  value: ProjectViewMode
  label: string
  /** Clase de icono literal y completa (`icon-[ph--...]`). */
  icon: string
}

export interface ContactFormLabels {
  name: string
  email: string
  phone: string
  optional: string
  subject: string
  message: string
  send: string
  sending: string
}

export interface FilterOption {
  value: string
  label: string
  /** Proyectos de esta categoría; se muestra junto a la etiqueta. */
  count?: number
}
