# SPEC-004 — Portafolio

| Campo           | Valor                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------ |
| **Estado**      | Implementada                                                                               |
| **Componentes** | `PortfolioSection`, `ProjectCard`, `FilterTabs`, `ProjectDialog`                           |
| **Datos**       | `projects.data.ts` (invariable) + `content.<idioma>.ts` → `portfolio.projects[id]` (texto) |
| **Lógica**      | `useProjectFilter`, `useContent().projectViews`                                            |
| **Ancla**       | `#portfolio`                                                                               |

## Requisitos funcionales

- **RF-01** — Muestra todos los proyectos (21) en una rejilla de 1, 2 o 3 columnas según el ancho.
- **RF-02** — Cada tarjeta muestra imagen, categoría y título. Toda la tarjeta es un botón.
- **RF-03** — Pestañas de filtro: «Todos» más una por cada categoría **que tenga proyectos**
  (Apps Web, Servicios API, Apps Móviles, Landing Pages). Siempre hay una activa: pulsar la activa
  no la deselecciona.
- **RF-04** — Filtrar anima la entrada y salida de tarjetas (sin animación con movimiento reducido).
- **RF-05** — Pulsar una tarjeta abre un diálogo modal con imagen, categoría, título, resumen,
  lista opcional, tecnologías (iconos) y enlaces.
- **RF-06** — Enlaces del diálogo: «Ver sitio web» siempre; «Ver repositorio público» si el
  repositorio es público; si es privado, una etiqueta desactivada «Este repositorio es privado».
- **RF-07** — El diálogo se cierra con Esc, con el botón de cierre o pulsando fuera; el foco
  vuelve a la tarjeta.
- **RF-08** — Un proyecto sin resumen muestra el diálogo sin ese bloque (no hay campos vacíos).

## Reglas de contenido

- Añadir un proyecto exige entrada en `projects.data.ts` y texto en **ambos** idiomas.
- El orden de la rejilla es el de `projects.data.ts`.
