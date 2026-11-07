/**
 * Único punto de lectura de `import.meta.env`. El resto de la app importa `env`, nunca
 * `import.meta.env` directamente, para que lo que necesita cada capa quede a la vista.
 *
 * Que existan lo garantiza `vite.config.ts` (aborta si falta una obligatoria).
 */
export const env = Object.freeze({
  appUrl: import.meta.env.VITE_APP_APPURL,
  cvFilename: import.meta.env.VITE_APP_FILENAME_CV,
  googleAnalyticsId: import.meta.env.VITE_APP_GOOGLE_ANALITYCS || undefined,
  emailjs: {
    baseUrl: import.meta.env.VITE_APP_EMAILJS_BASE_URL,
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  },
  recipient: {
    name: import.meta.env.VITE_APP_TO_NAME,
    email: import.meta.env.VITE_APP_TO_EMAIL
  }
})
