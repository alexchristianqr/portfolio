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
