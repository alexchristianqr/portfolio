# Portfolio

Portafolio personal de **Alex Quispe**, ingeniero de software y desarrollador
Full Stack. Publicado en <https://alexchristianqr.github.io/portfolio/>.

**Stack:** Vue 3 · TypeScript · Pinia · vue-i18n · Tailwind CSS v4 · Reka UI · Vite.
Español e inglés, tema claro/oscuro.

## Empezar

Requiere Node ≥ 22 (`nvm use`).

```bash
npm install
cp .env.example .env.local.development   # rellena las variables
npm run dev
```

Si falta una variable obligatoria, `npm run dev` y `npm run build` se detienen y dicen cuál.

## Scripts

| Script                            | Qué hace                              |
| --------------------------------- | ------------------------------------- |
| `npm run dev`                     | Servidor de desarrollo                |
| `npm run build`                   | Tipos + build de producción (`dist/`) |
| `npm run lint` / `lint:check`     | ESLint (con / sin corrección)         |
| `npm run format` / `format:check` | Prettier (con / sin escritura)        |
| `npm run type-check`              | `vue-tsc`                             |
| `npm run images`                  | Optimiza las imágenes de proyectos    |

## Documentación

Todo lo que importa para trabajar aquí está en [`.specs/`](.specs/): principios, arquitectura,
convenciones, una especificación por sección y las decisiones tomadas.

## Despliegue

Manual desde GitHub Actions (`Deployment`) hacia la rama `gh-pages`. Ver
[`.specs/04-workflows.md`](.specs/04-workflows.md) para las variables y secretos que necesita.
