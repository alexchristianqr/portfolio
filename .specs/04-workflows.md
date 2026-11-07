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

### Cómo saber qué versión está publicada

Cada compilación lleva una marca (la genera `vite.config.ts`: versión, commit corto, rama y hora UTC):

- **En el pie de la página**: `© Copyright 2026 · a1b2c3d`. Al pasar el ratón muestra versión, rama y
  hora de compilación.
- **En el HTML**: `<meta name="build" content="4.0.0+a1b2c3d (main) …">` (ver código fuente).
- **Como archivo**: `https://alexchristianqr.github.io/portfolio/build.json`, consultable desde la
  terminal: `curl -s https://alexchristianqr.github.io/portfolio/build.json`.

Para saber si un cambio ya está publicado, compara ese commit con el de `main`
(`git rev-parse --short origin/main`). Un despliegue disparado por un merge lleva el commit **del
merge**, no el del último commit de `dev`; el PR fusionado muestra ese commit. Un despliegue manual
lleva el último commit de la rama elegida.

GitHub Pages guarda en caché unos minutos: si aún ves el commit anterior, espera o añade un
parámetro (`build.json?x=1`) para saltarte la caché.

Configuración en el repositorio (Settings → Secrets and variables → Actions):

- **Variables:** `VITE_APP_FILENAME_CV`, `VITE_APP_EMAILJS_BASE_URL`, `VITE_APP_TO_NAME`,
  `VITE_APP_TO_EMAIL`, y opcional `VITE_APP_APPURL` (hoy no se lee en el código).
- **Secretos:** `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`,
  `VITE_APP_EMAILJS_PUBLIC_KEY`, y opcional `VITE_APP_GOOGLE_ANALITYCS`.

El workflow no imprime ninguno de los valores.
