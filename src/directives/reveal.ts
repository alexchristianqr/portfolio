import type { Directive } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

/**
 * v-reveal — muestra el elemento con una transición al entrar en pantalla (una sola vez).
 * Uso: `v-reveal="120"` (retardo en ms, opcional). Sustituye a AOS.
 * Con `prefers-reduced-motion` el CSS desactiva la transición, así que no hay nada que hacer aquí.
 */
export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.style.transitionDelay = `${typeof binding.value === 'number' ? binding.value : 0}ms`
    el.classList.add('reveal-hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.remove('reveal-hidden')
        el.classList.add('reveal-visible')
        observer.disconnect()
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  }
}
