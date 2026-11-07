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
- **RF-04** — El perfil incluye, en primera persona, el enfoque de trabajo con **Spec Driven
  Development** y la configuración de herramientas de IA (Kiro, Claude Code, MCP), en es y en.
- **RF-05** — Son **dos párrafos como máximo**, en primera persona y sin adjetivos genéricos. El
  primero explica el cambio de la industria (el código ya no es lo escaso; sí la especificación y
  la revisión), hacia dónde va el mercado y por qué SDD. El segundo, las herramientas que combino
  y el resultado buscado: proyectos estables, escalables y rentables. Las herramientas y
  tecnologías citadas deben coincidir con `skills.concepts` y `resume`.
- **RF-06** — Frases cortas, con pocas comas. Toda cifra de mercado cita su fuente y año y se
  verificó en la fuente primaria (hoy: Stack Overflow Developer Survey 2025, 84 % y 46 %).
