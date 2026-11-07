# SPEC-005 — Habilidades

| Campo           | Valor                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| **Estado**      | Implementada                                                               |
| **Componentes** | `SkillsSection`, `SkillBar`, `ConceptItem`, `v-progress`                   |
| **Datos**       | `profile.data.ts` → `skills`, `concepts`; `content.<idioma>.ts` → `skills` |
| **Ancla**       | `#skills`                                                                  |

## Requisitos funcionales

- **RF-01** — Cada habilidad muestra icono, nombre y una barra de nivel (0–100).
- **RF-02** — Se listan ordenadas de mayor a menor nivel (el orden está en el dato).
- **RF-03** — La barra se anima de 0 al nivel **una sola vez**, al entrar en pantalla.
- **RF-04** — Cada barra es un `role="progressbar"` con valor y etiqueta («Nombre: N %»).
- **RF-05** — Rejilla de 2, 3 o 9 columnas según el ancho.
- **RF-06** — Todos los logos ocupan una caja idéntica de 56 px (logo de 36 px, `object-contain`)
  sobre una base clara en ambos temas (`--logo-tile`), porque los SVG tienen proporciones distintas
  y varios son negros. Resultado: en cada fila los nombres y las barras quedan a la misma altura.
- **RF-07** — Un nombre largo se recorta con puntos suspensivos (no salta de línea), para no
  desalinear la barra; el nombre completo queda en `title`.
- **RF-08** — «Stack principal» lista solo lo que se domina a fondo (nivel ≥ 75): JavaScript,
  TypeScript, Node.js, Express, NestJS, Vue, Git, Docker y AWS. Lo que no se domina no se lista.
- **RF-09** — Bajo el stack, «IA y metodologías» (`ConceptItem`): SDD, Claude, MCP, Kiro,
  Copilot, ChatGPT, SOLID y TDD, cada uno con logo y una **definición** analítica (qué es y cómo
  se usa). Sin barras de nivel: son criterios de trabajo, no destrezas medibles.
- **RF-10** — Los títulos, la introducción y las definiciones existen en español e inglés
  (`Content.skills`); si falta una definición en un idioma, no compila.
