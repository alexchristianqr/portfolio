/**
 * Contratos de datos. Aquí no hay lógica: solo la forma de lo que viven en `data/` y `i18n/`.
 *
 * El contenido se parte en dos para no duplicar nada entre idiomas:
 *  - lo que NO cambia con el idioma (URLs, imágenes, nivel de un skill)  → `Profile`, `Project`, `Skill`
 *  - lo que SÍ cambia (textos)                                           → `Content`, uno por idioma
 */

/** Ancla pública de cada sección. No se renombran: romperían enlaces externos. */
export type SectionId = 'hero' | 'profile' | 'portfolio' | 'skills' | 'summary' | 'contact'

export type NavId = Exclude<SectionId, 'hero'>

export interface NavLink {
  id: NavId
  /** Clase de Bootstrap Icons (`bi-*`). */
  icon: string
}

export type SocialId = 'linkedin' | 'github' | 'facebook' | 'twitter'

export interface SocialLink {
  id: SocialId
  /** Nombre de marca (no se traduce). */
  label: string
  url: string
  icon: string
  /** Si aparece también en la barra lateral (en contacto salen todas). */
  inSidebar: boolean
}

export interface Profile {
  fullName: string
  displayName: string
  email: string
  phone: string
  location: string
  socials: SocialLink[]
}

export interface Skill {
  name: string
  /** 0–100. */
  level: number
  /** Archivo en `public/assets/images/icons/`. */
  icon: string
}

export type ProjectCategory = 'app' | 'microservice' | 'mobile' | 'landing'

/** Nombre del archivo SVG (sin extensión) en `public/assets/images/icons/`. */
export type TechSlug =
  | 'angular'
  | 'bootstrap'
  | 'css'
  | 'firebase'
  | 'git'
  | 'html5'
  | 'ionic'
  | 'javascript'
  | 'material-design'
  | 'nuxtjs'
  | 'typescript'
  | 'vue'

/** Parte invariable de un proyecto. El texto vive en `ProjectText`, enlazado por `id`. */
export interface Project {
  id: string
  category: ProjectCategory
  /** Archivo en `public/assets/images/portfolio/`. */
  image: string
  link: string
  repository: string
  repositoryPublic: boolean
  stack: readonly TechSlug[]
}

export interface ProjectText {
  title: string
  summary?: string
  list?: { label: string; items: string[] }
}

export interface ResumeItem {
  title: string
  date?: string
  place: string
  link?: string
  bullets: string[]
}

export type ResumeCategoryId = 'education' | 'experience'

export interface ResumeCategory {
  id: ResumeCategoryId
  title: string
  items: ResumeItem[]
}

/** Todo el texto largo de un idioma. `Id` ata los proyectos a los de `projects.data.ts`. */
export interface Content<Id extends string = string> {
  hero: { intro: string; phrases: string[] }
  about: { paragraphs: string[] }
  skills: { intro: string }
  portfolio: { intro: string; projects: Record<Id, ProjectText> }
  resume: { categories: ResumeCategory[] }
  contact: { intro: string }
}
