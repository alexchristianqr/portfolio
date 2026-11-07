/// <reference types="vite/client" />

/**
 * Variables de entorno de la app. Tiparlas aquí hace que `import.meta.env.VITE_APP_X` sea `string`
 * y no `any`. Que existan en ejecución lo garantiza `vite.config.ts` (aborta si falta alguna);
 * por eso las obligatorias son `string` y solo Analytics, que es opcional, es `string | undefined`.
 */
interface ImportMetaEnv {
  readonly VITE_APP_APPURL: string
  readonly VITE_APP_FILENAME_CV: string
  readonly VITE_APP_EMAILJS_BASE_URL: string
  readonly VITE_APP_EMAILJS_SERVICE_ID: string
  readonly VITE_APP_EMAILJS_TEMPLATE_ID: string
  readonly VITE_APP_EMAILJS_PUBLIC_KEY: string
  readonly VITE_APP_TO_NAME: string
  readonly VITE_APP_TO_EMAIL: string
  /** Opcional: sin ID no se carga Google Analytics. */
  readonly VITE_APP_GOOGLE_ANALITYCS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
