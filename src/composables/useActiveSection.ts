import { onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/ui.store'
import type { SectionId } from '@/types/content'

/**
 * Scrollspy: marca en `uiStore.activeSection` la sección que cruza una línea situada al 40 %
 * del alto de la ventana. Con `IntersectionObserver` no hay listener de scroll que limpiar.
 */
export function useActiveSection(ids: readonly SectionId[]): void {
  const ui = useUiStore()
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) ui.setActiveSection(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-40% 0px -59% 0px' }
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => observer?.disconnect())
}
