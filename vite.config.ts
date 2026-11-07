import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

/** Variables que el proyecto necesita sí o sí. Ver `.env.example`. */
const REQUIRED_ENV = [
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

/** Ejecuta un comando de git; sin git (o fuera de un repo) devuelve cadena vacía en vez de fallar. */
const git = (command: string): string => {
  try {
    return execSync(command, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return ''
  }
}

/**
 * Marca de compilación: qué versión del código es la que está publicada.
 *
 * En GitHub Actions el commit y la rama salen de `GITHUB_SHA` / `GITHUB_REF_NAME`; en local, de git.
 * Con un push a `main` (el merge de un PR) el commit es el del propio merge, no el de `dev`.
 */
const buildInfo = (() => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string }
  return {
    version: pkg.version,
    commit: (process.env.GITHUB_SHA ?? git('git rev-parse HEAD')).slice(0, 7) || 'sin-git',
    branch:
      process.env.GITHUB_REF_NAME ?? (git('git rev-parse --abbrev-ref HEAD') || 'desconocida'),
    builtAt: new Date().toISOString()
  }
})()

/**
 * Publica la marca de dos formas, además de la que pinta el pie de página:
 *  - `<meta name="build">` en el HTML (se ve con «ver código fuente», sin ejecutar JS).
 *  - `build.json` junto al sitio, consultable con `curl`: <https://…/portfolio/build.json>.
 */
const buildMarker = (): Plugin => ({
  name: 'build-marker',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: {
        name: 'build',
        content: `${buildInfo.version}+${buildInfo.commit} (${buildInfo.branch}) ${buildInfo.builtAt}`
      },
      injectTo: 'head'
    }
  ],
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'build.json',
      source: `${JSON.stringify(buildInfo, null, 2)}\n`
    })
  }
})

export default defineConfig(({ mode }) => {
  assertEnv(mode)

  return {
    plugins: [vue(), tailwindcss(), buildMarker()],
    // Constante que Vite sustituye al compilar; se lee desde `src/config/build.ts`.
    define: {
      __APP_BUILD__: JSON.stringify(buildInfo)
    },
    // El sitio vive en https://<usuario>.github.io/portfolio/
    base: '/portfolio/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // El servidor de desarrollo escucha en todas las interfaces (`0.0.0.0`) para abrir el sitio
    // desde el móvil por la red local. Va aquí y no como `--host` en el script `dev`, así vale para
    // cualquier forma de arrancar (`npm run dev`, `npx vite`, el IDE). Vite imprime la línea
    // `Network:` con la URL a teclear en el móvil.
    server: {
      host: '0.0.0.0'
    },
    build: {
      sourcemap: false
    }
  }
})
