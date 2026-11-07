# SPEC-003 — Perfil

| Campo           | Valor                      |
| --------------- | -------------------------- |
| **Estado**      | Implementada               |
| **Componentes** | `AboutSection`             |
| **Datos**       | `content.about.paragraphs` |
| **Ancla**       | `#profile`                 |

## Requisitos funcionales

- **RF-01** — Título «Perfil» / «Profile» y un párrafo por cada elemento de `paragraphs`.
- **RF-02** — Es texto plano: no se interpreta HTML (se eliminó `v-html`).
- **RF-03** — El texto aparece con `v-reveal` al entrar en pantalla.
