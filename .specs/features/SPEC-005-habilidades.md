# SPEC-005 — Habilidades

| Campo           | Valor                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| **Estado**      | Implementada                                                               |
| **Componentes** | `SkillsSection`, `SkillTile`, `ConceptItem`                                |
| **Datos**       | `profile.data.ts` → `skills`, `concepts`; `content.<idioma>.ts` → `skills` |
| **Ancla**       | `#skills`                                                                  |

## Requisitos funcionales

- **RF-01** — Cada habilidad muestra icono y nombre. **Sin barras ni porcentajes** (ADR-008).
- **RF-02** — Se listan en el orden del dato (de más a menos dominio).
- **RF-03** — Cada habilidad aparece con `v-reveal` al entrar en pantalla.
- **RF-04** — Los logos son decorativos (`alt=""`); el nombre visible es el texto accesible.
- **RF-05** — Rejilla de 2, 3 o 9 columnas según el ancho.
- **RF-06** — Todos los logos ocupan una caja idéntica de 64 px (logo de 40 px, `object-contain`)
  sobre una base clara en ambos temas (`--logo-tile`), porque los SVG tienen proporciones distintas
  y varios son negros. Resultado: en cada fila los nombres quedan a la misma altura.
- **RF-07** — Un nombre largo se recorta con puntos suspensivos (no salta de línea), para no
  desalinear la fila; el nombre completo queda en `title`.
- **RF-08** — «Stack principal» lista solo lo que se domina a fondo: JavaScript,
  TypeScript, Node.js, Express, NestJS, Vue, Git, Docker y AWS. Lo que no se domina no se lista.
- **RF-09** — Bajo el stack, «IA y metodologías» (`ConceptItem`): SDD, Claude, MCP, Kiro,
  Copilot, ChatGPT, SOLID y TDD, cada uno con logo y una **definición** analítica (qué es y cómo
  se usa). Sin niveles: son criterios de trabajo, no destrezas medibles.
- **RF-10** — Los títulos, la introducción y las definiciones existen en español e inglés
  (`Content.skills`); si falta una definición en un idioma, no compila.
