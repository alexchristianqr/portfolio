import { createI18n } from 'vue-i18n'
import { en } from './messages/en'
import { es, type MessageSchema } from './messages/es'

// Con esto `t('nav.perfil')` (clave inexistente) falla al compilar en vez de mostrar la clave.
declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
}

/**
 * El idioma activo NO se decide aquí: lo gobierna `stores/locale.store.ts`, que sincroniza
 * `i18n.global.locale` (un solo `watch`). Así no hay dos estados que puedan divergir.
 */
export const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: { es, en }
})
