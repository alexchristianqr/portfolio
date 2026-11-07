import { computed } from 'vue'
import { contentEn } from '@/data/content.en'
import { contentEs } from '@/data/content.es'
import { concepts, profile, navLinks, skills } from '@/data/profile.data'
import { projects, type ProjectId } from '@/data/projects.data'
import { useLocaleStore } from '@/stores/locale.store'
import type { Content, Project, ProjectText } from '@/types/content'
import type { Locale } from '@/types/i18n'

const contents: Record<Locale, Content<ProjectId>> = { es: contentEs, en: contentEn }

/** Un proyecto listo para pintar: la parte invariable más el texto del idioma activo. */
export type ProjectView = Project & ProjectText

/** Contenido del idioma activo. Reactivo: cambia al llamar a `localeStore.setLocale`. */
export function useContent() {
  const localeStore = useLocaleStore()

  const content = computed(() => contents[localeStore.locale])

  const projectViews = computed<ProjectView[]>(() =>
    projects.map((project) => ({ ...project, ...content.value.portfolio.projects[project.id] }))
  )

  return { content, projectViews, profile, navLinks, skills, concepts }
}
