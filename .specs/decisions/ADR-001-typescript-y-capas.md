# ADR-001 — TypeScript estricto y capas unidireccionales

| Campo        | Valor                                              |
| ------------ | -------------------------------------------------- |
| **Estado**   | aceptada                                           |
| **Fecha**    | 2026-11-06                                         |
| **Afecta a** | todo `src/`, `tsconfig*.json`, `eslint.config.mjs` |

## Contexto

La versión 3 estaba en JavaScript. `App.vue` mezclaba 380 líneas de manipulación del DOM,
listeners sin liberar y datos; el estado compartido pasaba por un mixin y Vuex. Cambiar una
sección obligaba a leer todo.

## Decisión

El proyecto es TypeScript estricto y se organiza en capas con una sola dirección de dependencia:
`types → data/i18n/config → services → stores → composables → sections/layout → ui`. Se adopta la
base de `landing-havitan` (ESLint flat, Prettier, Husky, `vue-tsc` en el build).

## Alternativas consideradas

| Alternativa                          | Ventajas                  | Por qué se descartó                                             |
| ------------------------------------ | ------------------------- | --------------------------------------------------------------- |
| JavaScript con JSDoc                 | Sin migración de sintaxis | Los errores de forma de datos (es/en) se detectan en ejecución. |
| Estructura plana por tipo de archivo | Simple                    | No expresa qué puede depender de qué.                           |

## Consecuencias

**A favor:** el compilador detecta datos incompletos y claves ausentes; cada capa se entiende y
prueba por separado.

**En contra:** más archivos pequeños; hay que decidir a qué capa pertenece cada cosa.

**Compromisos:** sin `any`; un import hacia una capa «superior» exige un ADR nuevo.
