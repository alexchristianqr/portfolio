# ADR-007 — Phosphor como única familia de iconos

| Campo        | Valor                                                                     |
| ------------ | ------------------------------------------------------------------------- |
| **Estado**   | aceptada                                                                  |
| **Fecha**    | 2026-11-06                                                                |
| **Afecta a** | `src/styles/main.css`, `src/data/profile.data.ts`, `components/`, ADR-002 |

## Contexto

Tras retirar Bootstrap (ADR-002) quedó Bootstrap Icons «por comodidad». Se usan 20 iconos de
~2000; para ellos se publicaban una fuente de 131 kB (woff2) y ~100 kB de CSS. Además era una
familia ajena al resto del sistema y las marcas (LinkedIn, GitHub…) venían con otro trazo.

## Decisión

Una sola familia, **Phosphor** (trazo regular), con el plugin `@iconify/tailwind4`. Cada icono es
una clase `icon-[ph--nombre]` que Tailwind convierte en una máscara SVG solo si la lee escrita en
el código. Phosphor incluye también los logos de marca, así que las cuatro redes salen del mismo
set. Se retira `bootstrap-icons`.

Los logos de tecnologías (`public/assets/images/icons/*.svg`) siguen siendo archivos aparte: son
logos de marca a color, no iconos de interfaz.

## Alternativas consideradas

| Alternativa               | Ventajas      | Por qué se descartó                                |
| ------------------------- | ------------- | -------------------------------------------------- |
| Lucide + Simple Icons     | Muy extendido | Lucide ya no incluye marcas: dos familias, no una. |
| Bootstrap Icons recortado | Cambio mínimo | No unifica nada y mantiene una familia ajena.      |

## Consecuencias

**A favor (medido en `npm run build`):** CSS de 105 kB → 41 kB (20 → 9 kB gzip) y cero archivos de
fuente en `dist`. Una sola familia con el mismo trazo; color y tamaño siguen al texto
(`currentColor`, `text-*`), también en modo oscuro.

**En contra:** son monocromos (máscara): un icono multicolor no es posible por este camino. Un
nombre mal escrito o construido dinámicamente no da error, solo un icono vacío.

**Compromisos:** el nombre del icono se escribe literal y completo (ver `03-conventions.md`).
