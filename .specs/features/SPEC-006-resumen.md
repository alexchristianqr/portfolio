# SPEC-006 — Resumen

| Campo           | Valor                                       |
| --------------- | ------------------------------------------- |
| **Estado**      | Implementada                                |
| **Componentes** | `ResumeSection`, `ResumeItem`               |
| **Datos**       | `content.<idioma>.ts` → `resume.categories` |
| **Ancla**       | `#summary`                                  |

## Requisitos funcionales

- **RF-01** — Dos columnas (en pantallas anchas): «Formación Educativa» y «Experiencia
  Profesional», cada una con una línea de tiempo.
- **RF-02** — Cada elemento muestra título, fecha (si la hay), lugar con enlace (si lo hay) y
  una lista de logros.
- **RF-03** — Los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"`.
- **RF-04** — Los enlaces de es y en son idénticos; solo cambia el texto.
