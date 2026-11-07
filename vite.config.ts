import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

/** Variables que el proyecto necesita sí o sí. Ver `.env.example`. */
const REQUIRED_ENV = [
  'VITE_APP_APPURL',
  'VITE_APP_FILENAME_CV',
  'VITE_APP_EMAILJS_BASE_URL',
  'VITE_APP_EMAILJS_SERVICE_ID',
  'VITE_APP_EMAILJS_TEMPLATE_ID',
  'VITE_APP_EMAILJS_PUBLIC_KEY',
  'VITE_APP_TO_NAME',
  'VITE_APP_TO_EMAIL'
] as const

/**
 * `local.development` es tu máquina (`npm run dev`); `production` se publica (`npm run build`).
 * Misma regla que en `landing-havitan`.
 */
const MODOS = ['local.development', 'production']

/**
 * Se valida aquí, en Node, y no dentro de la app: Vite sustituye una variable ausente por
 * `undefined` sin avisar, y eso se publicaría como un formulario de contacto roto. Así `npm run dev`
 * no arranca y `npm run build` no compila si falta algo.
 *
 * `loadEnv` también lee `process.env`, que es de donde salen los valores en GitHub Actions.
 */
const assertEnv = (mode: string): void => {
  // Primero el modo: uno mal escrito carga un `.env.<loQueSea>` inexistente sin quejarse.
  if (!MODOS.includes(mode)) {
    throw new Error(
      `Modo "${mode}" desconocido.\nVálidos: ${MODOS.join(' · ')}.\n` +
        `local.development es tu máquina (npm run dev); production se publica (npm run build).`
    )
  }

  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const missing = REQUIRED_ENV.filter((name) => !env[name])

  if (missing.length) {
    throw new Error(
      `Faltan variables de entorno: ${missing.join(', ')}.\n` +
        `Modo "${mode}". Cópialas de .env.example a .env.${mode}.`
    )
  }
}

export default defineConfig(({ mode }) => {
  assertEnv(mode)

  return {
    plugins: [vue(), tailwindcss()],
    // El sitio vive en https://<usuario>.github.io/portfolio/
    base: '/portfolio/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      sourcemap: false
    }
  }
})
