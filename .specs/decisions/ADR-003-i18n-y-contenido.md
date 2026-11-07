# ADR-003 — vue-i18n y contenido en dos mitades

| Campo        | Valor                              |
| ------------ | ---------------------------------- |
| **Estado**   | aceptada                           |
| **Fecha**    | 2026-11-06                         |
| **Afecta a** | `src/i18n/`, `src/data/`, SPEC-008 |

## Contexto

Había dos diccionarios gigantes (`es.json.js`, `en.json.js`) indexados por posición
(`Header.menu[8]`). Los proyectos de inglés estaban en **distinto orden** y con descripciones
desplazadas respecto al español; el menú y los datos no tenían forma garantizada.

## Decisión

- **vue-i18n** para etiquetas cortas (`i18n/messages/{es,en}.ts`), con `en` tipado contra `es`.
- El contenido largo se parte en **invariable** (`profile.data.ts`, `projects.data.ts`) y
  **traducible** (`content.{es,en}.ts`, tipado `Content<ProjectId>`), unidos por `id`.
- Los textos de proyecto en inglés se reescribieron para coincidir con los de español.

## Alternativas consideradas

| Alternativa                             | Ventajas          | Por qué se descartó                                                 |
| --------------------------------------- | ----------------- | ------------------------------------------------------------------- |
| Composable propio sin librería          | Cero dependencias | Se pidió vue-i18n; aporta interpolación y formatos si se necesitan. |
| Un solo diccionario por idioma con todo | Simple            | Duplica URLs e imágenes y permite que se desincronicen.             |

## Consecuencias

**A favor:** olvidar una traducción no compila; añadir un idioma es añadir dos archivos.

**En contra:** dos sitios donde mirar (etiquetas y contenido).

**Compromisos:** el idioma activo se decide solo en `locale.store` (ver ADR-004).
