import type { Directive } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

/**
 * v-progress — anima el ancho de una barra de 0 al valor al entrar en pantalla (una sola vez).
 * Uso: `v-progress="75"`. La transición de `width` la define el CSS. Sustituye a Waypoints.
 */
export const progress: Directive<HTMLElement, number> = {
  mounted(el, binding) {
    el.style.width = '0%'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.width = `${binding.value}%`
        observer.disconnect()
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  }
}
