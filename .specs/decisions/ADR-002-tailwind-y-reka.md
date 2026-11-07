# ADR-002 — Tailwind CSS v4 + Reka UI en lugar de Bootstrap

| Campo        | Valor                                                  |
| ------------ | ------------------------------------------------------ |
| **Estado**   | aceptada                                               |
| **Fecha**    | 2026-11-06                                             |
| **Afecta a** | `src/styles/main.css`, `vite.config.ts`, `components/` |

## Contexto

El sitio usaba Bootstrap 5 más una hoja de 1.046 líneas de la plantilla iPortfolio con ~97
colores literales, imposible de tematizar y sin modo oscuro. Se quería conservar la identidad
visual y poder escalarla.

## Decisión

Estilos con **Tailwind CSS v4** (configuración en CSS con `@theme`) y componentes interactivos
con **Reka UI** (Dialog, Toast, ToggleGroup: sin estilos, con foco, teclado y ARIA resueltos).
Bootstrap se retira; de Bootstrap Icons solo se conserva la fuente de iconos.

## Alternativas consideradas

| Alternativa                          | Ventajas                            | Por qué se descartó                                                                                                    |
| ------------------------------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Bootstrap 5.3 modernizado            | Menor cambio; es lo que usa Havitan | El tema y el modo oscuro dependen de sobrescribir CSS de terceros; la identidad se parece a cualquier sitio Bootstrap. |
| Tailwind sin librería de componentes | Menos dependencias                  | Diálogo, toast y grupos de botones accesibles son fáciles de hacer mal.                                                |

## Consecuencias

**A favor:** CSS final más pequeño, tema por variables, modo oscuro sin duplicar estilos,
componentes accesibles.

**En contra:** las plantillas llevan muchas clases (las ordena Prettier); se aleja de la base
Bootstrap de `landing-havitan`.

**Compromisos:** no se reintroduce CSS de Bootstrap; los componentes interactivos nuevos parten
de Reka UI.
