# Arquitectura

## Stack

| Capa        | Tecnología                                   | Notas                                              |
| ----------- | -------------------------------------------- | -------------------------------------------------- |
| Framework   | Vue 3.5 (`<script setup lang="ts">`)         | Sin router ni SSR.                                 |
| Estado      | Pinia (setup stores)                         | Un store por dominio.                              |
| i18n        | vue-i18n (`legacy: false`)                   | Claves tipadas contra `es.ts`.                     |
| Estilos     | Tailwind CSS v4 (`@tailwindcss/vite`)        | Config en CSS (`@theme`), sin `tailwind.config`.   |
| Componentes | Reka UI                                      | Dialog, Toast, ToggleGroup (headless, accesibles). |
| Iconos      | Phosphor vía `@iconify/tailwind4`            | Clases `icon-[ph--nombre]`; sin fuente ni JS.      |
| Build       | Vite 6 + `vue-tsc`                           | Alias `@` → `src/`, `base: '/portfolio/'`.         |
| Calidad     | ESLint (flat) + Prettier + Husky/lint-staged | Prettier ordena clases de Tailwind.                |
| Runtime     | Node ≥ 22                                    | `.nvmrc`.                                          |

## Estructura

```
assets-src/portfolio/     Imágenes originales de proyectos (no se despliegan)
scripts/                  optimize-images.mjs → public/.../portfolio/{sm,lg}/*.webp
src/
├── main.ts               Arranque: estilos, Pinia, i18n, analítica, mount
├── App.vue               Composición de layout + secciones
├── types/                Contratos (sin lógica): content, contact, i18n, ui
├── i18n/                 vue-i18n + messages/{es,en}.ts (etiquetas cortas)
├── data/                 profile.data, projects.data, content.{es,en} (texto largo)
├── config/env.ts         import.meta.env tipado y congelado
├── lib/asset.ts          Rutas de activos bajo BASE_URL
├── services/             I/O puro, sin Vue ni Pinia: email, analytics, storage, url
├── stores/               Pinia: locale, theme, ui, contact
├── composables/          Lógica local o de ciclo de vida: useContent, useTypewriter, …
├── directives/           v-reveal (IntersectionObserver)
├── styles/main.css       Tokens de tema, modo oscuro, utilidades globales
└── components/
    ├── layout/           Sidebar, menú móvil, pie, volver arriba, idioma, tema
    ├── sections/         Una por sección de la página
    └── ui/               Presentacionales: props + emits, sin stores ni i18n
```

## Capas y reglas de dependencia

```
types ─► data / i18n / config ─► services ─► stores ─► composables ─► sections / layout ─► ui
```

- Una capa solo importa de las que están a su izquierda. `ui/` no conoce stores, i18n ni datos:
  recibe todo ya resuelto por props.
- `services/` no importan Vue ni Pinia, así que se prueban en aislamiento.
- Los **stores** orquestan servicios y guardan el resultado; los **composables** cubren
  observers, temporizadores y derivados, y no tienen estado global propio.
- Fuente de verdad del idioma: `localeStore.locale`. vue-i18n se sincroniza desde ahí con un
  único `watch`.

## Contenido en dos mitades

Para no duplicar nada entre idiomas:

- **Invariable** (URLs, imágenes, nivel de skill, stack de un proyecto): `profile.data.ts`,
  `projects.data.ts`.
- **Traducible** (títulos, resúmenes, resumen profesional): `content.es.ts` / `content.en.ts`,
  tipados con `Content<ProjectId>`. `ProjectId` sale de `projects.data.ts`, así que un proyecto
  sin texto en un idioma no compila.

`useContent()` une ambas mitades según el idioma activo.

## Estilos

1. **Tokens** (`:root` y `[data-theme='dark']`): valores semánticos que cambian con el tema.
2. **`@theme inline`**: los publica como utilidades (`bg-surface`, `text-heading`…).
3. **Utilidades en las plantillas**; CSS propio solo para lo que no exista como utilidad.

Ver [ADR-005](decisions/ADR-005-tokens-y-modo-oscuro.md).

## Decisiones

- [ADR-001 — TypeScript y capas unidireccionales](decisions/ADR-001-typescript-y-capas.md)
- [ADR-002 — Tailwind v4 + Reka UI en lugar de Bootstrap](decisions/ADR-002-tailwind-y-reka.md)
- [ADR-003 — vue-i18n y contenido en dos mitades](decisions/ADR-003-i18n-y-contenido.md)
- [ADR-004 — Pinia por dominio](decisions/ADR-004-pinia-por-dominio.md)
- [ADR-005 — Tokens de tema y modo oscuro](decisions/ADR-005-tokens-y-modo-oscuro.md)
- [ADR-006 — Retirada de las librerías de la plantilla](decisions/ADR-006-retirada-de-librerias.md)
- [ADR-007 — Phosphor como única familia de iconos](decisions/ADR-007-iconos-phosphor.md)
