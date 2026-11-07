import { onUnmounted, ref, toValue, watch, type MaybeRefOrGetter, type Ref } from 'vue'

export interface TypewriterOptions {
  typeSpeed?: number
  backSpeed?: number
  backDelay?: number
  startDelay?: number
}

/**
 * Escribe y borra en bucle las frases dadas. Sustituye a Typed.js y, a diferencia de aquel,
 * reacciona al cambio de idioma: si las frases cambian, reinicia con las nuevas.
 * Con `prefers-reduced-motion` muestra la primera frase fija.
 */
export function useTypewriter(
  phrases: MaybeRefOrGetter<readonly string[]>,
  options: TypewriterOptions = {}
): Ref<string> {
  const { typeSpeed = 100, backSpeed = 50, backDelay = 2000, startDelay = 300 } = options
  const text = ref('')

  let timer: ReturnType<typeof setTimeout> | undefined
  let index = 0
  let length = 0
  let deleting = false

  function stop(): void {
    clearTimeout(timer)
    timer = undefined
  }

  function tick(): void {
    const list = toValue(phrases)
    if (!list.length) return
    const current = list[index % list.length]

    if (!deleting) {
      length++
      text.value = current.slice(0, length)
      if (length === current.length) {
        deleting = true
        timer = setTimeout(tick, backDelay)
      } else {
        timer = setTimeout(tick, typeSpeed)
      }
      return
    }

    length--
    text.value = current.slice(0, length)
    if (length === 0) {
      deleting = false
      index = (index + 1) % list.length
      timer = setTimeout(tick, typeSpeed)
    } else {
      timer = setTimeout(tick, backSpeed)
    }
  }

  function restart(): void {
    stop()
    index = 0
    length = 0
    deleting = false
    text.value = ''
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      text.value = toValue(phrases)[0] ?? ''
      return
    }
    timer = setTimeout(tick, startDelay)
  }

  watch(() => toValue(phrases), restart, { immediate: true })
  onUnmounted(stop)

  return text
}
