import { computed, ref, toValue, type MaybeRefOrGetter } from 'vue'
import type { ProjectCategory } from '@/types/content'

export type ProjectFilter = ProjectCategory | 'all'

/** Orden fijo de las pestañas; solo se muestran las categorías con al menos un proyecto. */
const ORDER: readonly ProjectCategory[] = ['app', 'microservice', 'mobile', 'landing']

/** Cuántos proyectos se ven antes de pulsar «Mostrar más». Múltiplo de 3 (rejilla de 3 columnas). */
export const PAGE_SIZE = 9

/**
 * Filtro por categoría y paginación («Mostrar más»). Sustituye a Isotope: son `computed`, el DOM lo
 * mueve Vue.
 *
 * - `filtered`: todo lo que cumple el filtro (la navegación del diálogo recorre esta lista).
 * - `visible`: lo que se pinta ahora.
 */
export function useProjectFilter<T extends { category: ProjectCategory }>(
  items: MaybeRefOrGetter<readonly T[]>
) {
  const active = ref<ProjectFilter>('all')
  const expanded = ref(false)

  const counts = computed(() => {
    const list = toValue(items)
    const result: Record<ProjectFilter, number> = {
      all: list.length,
      app: 0,
      microservice: 0,
      mobile: 0,
      landing: 0
    }
    for (const item of list) result[item.category]++
    return result
  })

  const filters = computed<ProjectFilter[]>(() => [
    'all',
    ...ORDER.filter((category) => counts.value[category] > 0)
  ])

  const filtered = computed(() =>
    active.value === 'all'
      ? toValue(items)
      : toValue(items).filter((item) => item.category === active.value)
  )

  const visible = computed(() =>
    expanded.value ? filtered.value : filtered.value.slice(0, PAGE_SIZE)
  )

  const hiddenCount = computed(() => filtered.value.length - visible.value.length)

  function setFilter(next: ProjectFilter): void {
    active.value = next
    // Cada categoría empieza plegada: si no, el «Mostrar más» de una arrastraría a las demás.
    expanded.value = false
  }

  function expand(): void {
    expanded.value = true
  }

  return { active, counts, filters, filtered, visible, hiddenCount, setFilter, expand }
}
