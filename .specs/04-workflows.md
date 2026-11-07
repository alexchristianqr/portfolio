# Flujos de trabajo

## Entorno

- Node ≥ 22 (`.nvmrc`), npm ≥ 10.
- `cp .env.example .env.local.development` y rellena las variables. Si falta una obligatoria,
  `npm run dev` no arranca y nombra cuáles faltan.
- Los `.env.*` no se versionan (solo `.env.example`): las claves de EmailJS son públicas una vez
  compiladas, pero no se publican en el repositorio.

| Modo                | Comando         | Archivo                             |
| ------------------- | --------------- | ----------------------------------- |
| `local.development` | `npm run dev`   | `.env.local.development`            |
| `production`        | `npm run build` | `.env.production` o variables de CI |

## Servidor de desarrollo

`npm run dev` escucha siempre en todas las interfaces (`server.host: '0.0.0.0'` en
`vite.config.ts`, no como bandera del script). Vite imprime dos URLs:

- `Local:` para el navegador de tu máquina.
- `Network:` (p. ej. `http://192.168.x.x:5173/portfolio/`) para abrir el sitio desde el móvil o
  desde otro equipo de la misma red.

Ojo: ese puerto queda accesible para toda la red local mientras dure el servidor; úsalo en redes
de confianza.

## Scripts

| Script               | Qué hace                                              |
| -------------------- | ----------------------------------------------------- |
| `npm run dev`        | Servidor de desarrollo.                               |
| `npm run build`      | `vue-tsc --build` + `vite build` (a `dist/`).         |
| `npm run preview`    | Sirve `dist/` (necesita las variables).               |
| `npm run lint`       | ESLint con `--fix`. `lint:check` no modifica.         |
| `npm run format`     | Prettier. `format:check` no modifica.                 |
| `npm run type-check` | `vue-tsc --build`.                                    |
| `npm run images`     | Genera las imágenes WebP de proyectos (ver SPEC-004). |

**Puerta de calidad antes de integrar:** `lint:check`, `format:check`, `type-check`, `build`.

## Despliegue

GitHub Actions (`.github/workflows/deployment.yml`): instala, valida (lint, formato, tipos),
compila y publica `dist/` en la rama `gh-pages`, que es lo que sirve GitHub Pages.

**Cuándo se publica** (solo estos dos casos):

1. **Al fusionar un PR a `main`** (`push` a `main`). Flujo habitual: se trabaja en `dev`, se abre un
   PR `dev` → `main` y, al fusionarlo, se publica. `main` está protegida: solo recibe cambios por PR.
2. **A mano**, en Actions → Deployment → Run workflow, eligiendo la rama. Hay un solo sitio
   publicado: desplegar otra rama sustituye la versión real.

Nada más publica: un push a `dev` o a cualquier otra rama **no** despliega. Dos despliegues
seguidos se encolan (`concurrency`) en vez de solaparse. Es gratis mientras el repositorio sea
público (Pages y los minutos de Actions).

Configuración en el repositorio (Settings → Secrets and variables → Actions):

- **Variables:** `VITE_APP_APPURL`, `VITE_APP_FILENAME_CV`, `VITE_APP_EMAILJS_BASE_URL`,
  `VITE_APP_TO_NAME`, `VITE_APP_TO_EMAIL`.
- **Secretos:** `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`,
  `VITE_APP_EMAILJS_PUBLIC_KEY`, y opcional `VITE_APP_GOOGLE_ANALITYCS`.

El workflow no imprime ninguno de los valores.
