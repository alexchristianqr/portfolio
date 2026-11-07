# SPEC-006 — Resumen

| Campo           | Valor                                          |
| --------------- | ---------------------------------------------- |
| **Estado**      | Implementada                                   |
| **Componentes** | `ResumeSection`, `TimelineItem`, `useTimeline` |
| **Datos**       | `content.<idioma>.ts` → `resume.categories`    |
| **Ancla**       | `#summary`                                     |

## Requisitos funcionales

- **RF-01** — Dos columnas (en pantallas anchas): «Formación Educativa» y «Experiencia
  Profesional», cada una con una línea de tiempo.
- **RF-02** — Cada elemento muestra título, fecha (si la hay), lugar con enlace (si lo hay) y
  una lista de logros.
- **RF-03** — Los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"`.
- **RF-04** — Los enlaces de es y en son idénticos; solo cambia el texto.
- **RF-05** — Las dos columnas son una **línea de tiempo vertical** (`TimelineItem`): riel con
  nodo por elemento, fechas formateadas según el idioma, duración calculada y, si el periodo sigue
  abierto, nodo con pulso y fin «Presente». Sin tarjetas.
- **RF-06** — Las fechas salen del dato (`date`): `MM/AAAA - MM/AAAA`, `AAAA - AAAA` o
  `… - Presente`/`Present`. `useTimeline` las interpreta; la duración es inclusiva y, para
  periodos abiertos, se cuenta hasta hoy.
- **RF-07** — El riel se dibuja y el nodo se rellena al entrar en pantalla (`v-reveal`); con
  `prefers-reduced-motion` aparece ya dibujado y sin pulso.
- **RF-08** — `status` (Egresado / Certificado) es opcional y se muestra como insignia junto a la fecha.
