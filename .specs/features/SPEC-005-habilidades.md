# SPEC-005 — Habilidades

| Campo           | Valor                                     |
| --------------- | ----------------------------------------- |
| **Estado**      | Implementada                              |
| **Componentes** | `SkillsSection`, `SkillBar`, `v-progress` |
| **Datos**       | `profile.data.ts` → `skills`              |
| **Ancla**       | `#skills`                                 |

## Requisitos funcionales

- **RF-01** — Cada habilidad muestra icono, nombre y una barra de nivel (0–100).
- **RF-02** — Se listan ordenadas de mayor a menor nivel (el orden está en el dato).
- **RF-03** — La barra se anima de 0 al nivel **una sola vez**, al entrar en pantalla.
- **RF-04** — Cada barra es un `role="progressbar"` con valor y etiqueta («Nombre: N %»).
- **RF-05** — Rejilla de 2, 3 o 6 columnas según el ancho.
