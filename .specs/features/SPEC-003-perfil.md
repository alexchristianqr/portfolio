# SPEC-003 — Perfil

| Campo           | Valor                      |
| --------------- | -------------------------- |
| **Estado**      | Implementada               |
| **Componentes** | `AboutSection`, `RichText` |
| **Datos**       | `content.about.paragraphs` |
| **Ancla**       | `#profile`                 |

## Requisitos funcionales

- **RF-01** — Título «Perfil» / «Profile» y un párrafo por cada elemento de `paragraphs`.
- **RF-02** — No se interpreta HTML (se eliminó `v-html`). Solo hay marcado en línea propio
  (`src/lib/inlineMarkup.ts`): `**negrita**` y `==resaltado==`, renderizados por `RichText` como
  `<strong>` y `<mark>`; no se anidan.
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
- **RF-07** — Resaltado (`==…==`) solo para conclusiones: 3 en total entre ambos párrafos. Negrita
  (`**…**`) solo para datos y herramientas: cifras, metodología, herramientas, cargo. El énfasis no
  supera ~10 % del texto.
- **RF-08** — El texto se limita a `max-w-prose` (65 ch) para una línea cómoda de leer.
  El resaltador usa el token `--mark` (claro y oscuro) y el texto conserva contraste AA en ambos
  temas.
