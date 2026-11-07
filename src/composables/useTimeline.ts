import { computed, type ComputedRef } from 'vue'
import { useLocaleStore } from '@/stores/locale.store'
import type { ResumeItem } from '@/types/content'

/** Un elemento del resumen con sus fechas ya interpretadas y formateadas. */
export interface TimelineEntry {
  item: ResumeItem
  /** Inicio formateado («abr 2024» o «2022»). Vacío si el dato no tiene fecha. */
  from: string
  /** Fin formateado; `null` si el periodo sigue abierto. */
  to: string | null
  /** Año de inicio, para agrupar visualmente. */
  year: number | null
  /** Duración legible («1 año 8 meses»); vacía si no se puede calcular. */
  duration: string
  ongoing: boolean
}

interface Point {
  year: number
  /** 1–12, o `null` cuando la fecha es solo un año. */
  month: number | null
}

/** Acepta `2022`, `04/2024`; cualquier otra cosa («Presente», «Present») es un periodo abierto. */
function parsePoint(raw: string): Point | null {
  const match = /^(?:(\d{1,2})\/)?(\d{4})$/.exec(raw.trim())
  if (!match) return null
  return { year: Number(match[2]), month: match[1] ? Number(match[1]) : null }
}

function toMonths(point: Point, edge: 'start' | 'end'): number {
  const month = point.month ?? (edge === 'start' ? 1 : 12)
  return point.year * 12 + month - 1
}

/**
 * Convierte `ResumeItem.date` («04/2024 - Presente», «2022 - 2026») en fechas reales: formatea
 * según el idioma activo, calcula la duración y marca lo que sigue en curso.
 */
export function useTimeline(items: () => readonly ResumeItem[]): ComputedRef<TimelineEntry[]> {
  const localeStore = useLocaleStore()

  return computed<TimelineEntry[]>(() => {
    const locale = localeStore.locale
    const monthYear = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' })
    const unit = (value: number, name: 'year' | 'month'): string =>
      new Intl.NumberFormat(locale, { style: 'unit', unit: name, unitDisplay: 'long' }).format(
        value
      )

    const format = (point: Point): string =>
      point.month === null
        ? String(point.year)
        : monthYear.format(new Date(point.year, point.month - 1, 1)).replace('.', '')

    const now = new Date()
    const nowPoint: Point = { year: now.getFullYear(), month: now.getMonth() + 1 }

    return items().map((item) => {
      const [rawStart = '', rawEnd = ''] = (item.date ?? '').split(/\s+-\s+/)
      const start = parsePoint(rawStart)
      const end = parsePoint(rawEnd)
      const ongoing = start !== null && end === null
      if (!start) return { item, from: '', to: null, year: null, duration: '', ongoing: false }

      const last = end ?? nowPoint
      // Cuenta inclusiva: «01/2016 - 06/2016» son 6 meses, no 5.
      const months = Math.max(toMonths(last, 'end') - toMonths(start, 'start') + 1, 1)
      const years = Math.floor(months / 12)
      const rest = months % 12
      const duration =
        end && end.month === null && start.month === null
          ? unit(end.year - start.year, 'year')
          : [years ? unit(years, 'year') : '', rest ? unit(rest, 'month') : '']
              .filter(Boolean)
              .join(' ')

      return {
        item,
        from: format(start),
        to: end ? format(end) : null,
        year: start.year,
        duration,
        ongoing
      }
    })
  })
}
