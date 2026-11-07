# Convenciones

ESLint, Prettier y `vue-tsc` son la autoridad sobre el formato. Aquí, lo que no pueden verificar.

## Nomenclatura

| Elemento                  | Convención                                 | Ejemplo                  |
| ------------------------- | ------------------------------------------ | ------------------------ |
| Sección de la página      | `PascalCase` + `Section`                   | `PortfolioSection.vue`   |
| Componente único global   | Prefijo `The`                              | `TheSidebar.vue`         |
| Componente presentacional | `PascalCase` descriptivo                   | `ProjectCard.vue`        |
| Store                     | `<dominio>.store.ts`, `useXStore`          | `locale.store.ts`        |
| Servicio                  | `<dominio>.service.ts`                     | `email.service.ts`       |
| Composable                | `useXxx.ts`                                | `useTypewriter.ts`       |
| Datos                     | `<nombre>.data.ts` / `content.<idioma>.ts` | `projects.data.ts`       |
| Tipos                     | `PascalCase` singular                      | `Project`, `ResumeItem`  |
| `id` de sección           | minúsculas, en inglés                      | `#portfolio`, `#summary` |

Los `id` de sección son anclas públicas: no se renombran.

## Componentes Vue

- Siempre `<script setup lang="ts">`. Orden: `<template>`, `<script>`.
- Props por genérico: `defineProps<{ title: string }>()`; eventos con `defineEmits<{ open: [] }>()`.
- `ui/` es presentacional: sin stores, sin `useI18n`, sin importar `data/`. Recibe textos ya
  traducidos por props.
- Directivas se importan donde se usan (`import { reveal as vReveal } …`), no globales: así
  quedan tipadas.
- Toda función declarada indica su tipo de retorno.
- Listas con `:key` estable (un campo del dato), nunca el índice si hay identificador.
- Cada `setTimeout`, `addEventListener` o `IntersectionObserver` se libera al desmontar.

## Contenido

- Texto largo → `src/data/`. Etiquetas, botones, avisos y `aria-label` → `src/i18n/messages/`.
- Añadir una clave a `es.ts` obliga a añadirla a `en.ts` (el tipo lo exige).
- Añadir un proyecto: una entrada en `projects.data.ts` **y** su texto en ambos
  `content.<idioma>.ts`; si falta uno, no compila.
- Imágenes de proyecto: el original va a `assets-src/portfolio/` (no se despliega) y `npm run images`
  genera las versiones WebP de `public/`. Las rutas se piden siempre a `lib/asset.ts`
  (`projectThumb`, `projectImage`). Nunca se copia un original de varios MB a `public/`.

## Estilos

- Utilidades de Tailwind primero; CSS propio solo si no existe utilidad.
- **Ningún color literal fuera de `src/styles/main.css`** (ni `#fff`, ni `text-white` para un
  color de marca). Un color nuevo se añade primero como token.
- Texto sobre `--brand` (#149ddd) no llega a contraste AA: para texto y botones se usa
  `brand-text` / `brand-solid`.
- Animaciones con `motion-safe:` / `motion-reduce:`; foco con `focus-visible`.
- Las clases las ordena `prettier-plugin-tailwindcss`: no se ordenan a mano.
- **Iconos:** siempre la clase Phosphor **literal y completa** (`icon-[ph--user]`), también en los
  datos (`navLinks`, `socials`…). Nunca se construye con plantillas (`` `icon-[ph--${x}]` ``):
  Tailwind solo emite el CSS de lo que lee escrito y el icono saldría vacío sin ningún error.
  Tamaño con `text-*`, color con `text-<token>` (el icono usa `currentColor`). El margen es
  `mr-*`/`ml-*`, no `p*`: el icono mide `1em` con `border-box` y el relleno lo encogería.

## TypeScript

- Sin `any` ni `@ts-ignore`. Importaciones de solo tipos con `import type`.
- Temporizadores portables: `ReturnType<typeof setTimeout>`.

## Comentarios

En español, explican **por qué**, no qué hace la línea.

## Commits y ramas

- `main` es la rama principal; el trabajo va en ramas `feat/…`, `fix/…`.
- Mensajes en español, imperativo, una línea: `agrega filtro de proyectos`.
- El hook `pre-commit` ejecuta lint-staged (ESLint + Prettier). No se usa `--no-verify`.
- Un commit no mezcla cambio de comportamiento con reformateo masivo.
