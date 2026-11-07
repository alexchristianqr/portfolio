import { computed, ref, toValue, type MaybeRefOrGetter } from 'vue'
import type { ProjectCategory } from '@/types/content'

export type ProjectFilter = ProjectCategory | 'all'

/** Orden fijo de las pestañas; solo se muestran las categorías con al menos un proyecto. */
const ORDER: readonly ProjectCategory[] = ['app', 'microservice', 'mobile', 'landing']

/** Filtro por categoría. Sustituye a Isotope: es un `computed`, el DOM lo mueve Vue. */
export function useProjectFilter<T extends { category: ProjectCategory }>(
  items: MaybeRefOrGetter<readonly T[]>
) {
  const active = ref<ProjectFilter>('all')

  const filters = computed<ProjectFilter[]>(() => {
    const present = new Set(toValue(items).map((item) => item.category))
    return ['all', ...ORDER.filter((category) => present.has(category))]
  })

  const filtered = computed(() =>
    active.value === 'all'
      ? toValue(items)
      : toValue(items).filter((item) => item.category === active.value)
  )

  function setFilter(next: ProjectFilter): void {
    active.value = next
  }

  return { active, filters, filtered, setFilter }
}
