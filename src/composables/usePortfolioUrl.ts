import { watch, type Ref } from 'vue'
import { readQuery, replaceQuery } from '@/services/url.service'
import type { ProjectViewMode } from '@/types/ui'
import type { ProjectFilter } from './useProjectFilter'

/** Nombres de los parámetros: forman parte de los enlaces compartidos, no se renombran. */
const PARAM = { filter: 'cat', view: 'view' } as const

/** Ancla a la que aterriza un enlace compartido. */
const ANCHOR = '#portfolio'

interface Options {
  filter: Ref<ProjectFilter>
  view: Ref<ProjectViewMode>
  /** Filtros válidos ahora mismo; un `cat` que no esté aquí se ignora. */
  filters: Ref<readonly ProjectFilter[]>
  setFilter: (next: ProjectFilter) => void
}

/**
 * Sincroniza filtro y vista con la URL: `?cat=landing&view=list#portfolio`.
 *
 * - **Al crearse** lee la URL y aplica lo válido (valores desconocidos se ignoran en silencio).
 * - **Después** escribe cada cambio. Los valores por defecto (`all`, `grid`) no aparecen: la URL
 *   limpia es la del estado inicial.
 */
export function usePortfolioUrl({ filter, view, filters, setFilter }: Options): void {
  const query = readQuery()

  const cat = filters.value.find((value) => value === query.get(PARAM.filter))
  if (cat) setFilter(cat)

  const mode = query.get(PARAM.view)
  if (mode === 'grid' || mode === 'list') view.value = mode

  watch([filter, view], ([currentFilter, currentView]) => {
    const params: Record<string, string> = {}
    if (currentFilter !== 'all') params[PARAM.filter] = currentFilter
    if (currentView !== 'grid') params[PARAM.view] = currentView
    replaceQuery(params, Object.keys(params).length ? ANCHOR : undefined)
  })
}
