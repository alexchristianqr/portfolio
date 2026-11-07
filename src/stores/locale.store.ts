import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@/i18n'
import { storage } from '@/services/storage.service'
import type { Locale } from '@/types/i18n'

/** Misma clave que la versión anterior: quien ya eligió idioma conserva su preferencia. */
const STORAGE_KEY = 'lang'

const isLocale = (value: string | null): value is Locale => value === 'es' || value === 'en'

export const useLocaleStore = defineStore('locale', () => {
  const stored = storage.get(STORAGE_KEY)
  const locale = ref<Locale>(isLocale(stored) ? stored : 'es')

  function setLocale(next: Locale): void {
    locale.value = next
  }

  // Único sitio que sincroniza vue-i18n, <html lang> y el almacenamiento con el estado.
  watch(
    locale,
    (value) => {
      i18n.global.locale.value = value
      document.documentElement.lang = value
      storage.set(STORAGE_KEY, value)
    },
    { immediate: true }
  )

  return { locale, setLocale }
})
