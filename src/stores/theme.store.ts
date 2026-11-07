import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { storage } from '@/services/storage.service'
import type { ResolvedTheme, ThemeMode } from '@/types/i18n'

/** Debe coincidir con el script inline de `index.html`, que lo lee antes de cargar el bundle. */
const STORAGE_KEY = 'theme'

const isMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'system'

export const useThemeStore = defineStore('theme', () => {
  const stored = storage.get(STORAGE_KEY)
  const mode = ref<ThemeMode>(isMode(stored) ? stored : 'system')

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const systemDark = ref(media.matches)
  // El store vive lo que la app, por eso este listener no se libera: no hay desmontaje que lo haga.
  media.addEventListener('change', (event) => {
    systemDark.value = event.matches
  })

  const resolved = computed<ResolvedTheme>(() =>
    mode.value === 'system' ? (systemDark.value ? 'dark' : 'light') : mode.value
  )

  function setMode(next: ThemeMode): void {
    mode.value = next
    storage.set(STORAGE_KEY, next)
  }

  watch(
    resolved,
    (value) => {
      document.documentElement.dataset.theme = value
    },
    { immediate: true }
  )

  return { mode, resolved, setMode }
})
