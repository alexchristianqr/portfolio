# ADR-006 — Retirada de las librerías de la plantilla

| Campo        | Valor                                         |
| ------------ | --------------------------------------------- |
| **Estado**   | aceptada                                      |
| **Fecha**    | 2026-11-06                                    |
| **Afecta a** | `package.json`, `directives/`, `composables/` |

## Contexto

La plantilla traía Typed.js, GLightbox, Isotope, Waypoints, AOS, Swiper, PureCounter, jQuery,
Boxicons, axios y vue-toastification. Manipulaban el DOM directamente, tres (Swiper, PureCounter,
jQuery) no se usaban y las inicializaciones colgaban de `window.load`, que en una SPA puede no
llegar a dispararse.

## Decisión

Se sustituyen por Vue nativo y se eliminan: Typed.js → `useTypewriter`; Isotope →
`useProjectFilter` + `TransitionGroup`; GLightbox → `ProjectDialog`; AOS → `v-reveal`;
Waypoints → `v-progress`; axios → `fetch`; vue-toastification → `AppToast`; Boxicons → Bootstrap
Icons; Vuex → Pinia. Swiper, PureCounter y jQuery se retiran sin sustituto.

## Alternativas consideradas

| Alternativa                | Ventajas            | Por qué se descartó                               |
| -------------------------- | ------------------- | ------------------------------------------------- |
| Envolverlas en composables | Menos código propio | Siguen tocando el DOM por selectores y pesan más. |

## Consecuencias

**A favor:** el JS publicado queda en ~107 kB gzip (Vue, Pinia, vue-i18n y Reka UI incluidos);
todo se libera al desmontar; sin globales.

**En contra:** ~170 líneas de código propio (efecto de escritura, filtro, dos directivas).

**Compromisos:** no se añaden librerías de efectos sin ADR.
