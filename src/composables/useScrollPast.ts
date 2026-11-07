import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/** `true` cuando el documento se desplazó más de `threshold` píxeles. */
export function useScrollPast(threshold = 100): Ref<boolean> {
  const past = ref(false)
  const update = (): void => {
    past.value = window.scrollY > threshold
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })
  onUnmounted(() => window.removeEventListener('scroll', update))

  return past
}
