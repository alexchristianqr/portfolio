# SPEC-004 — Portafolio

| Campo           | Valor                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------ |
| **Estado**      | Implementada                                                                               |
| **Componentes** | `PortfolioSection`, `ProjectCard`, `FilterTabs`, `ProjectDialog`                           |
| **Datos**       | `projects.data.ts` (invariable) + `content.<idioma>.ts` → `portfolio.projects[id]` (texto) |
| **Lógica**      | `useProjectFilter`, `usePortfolioUrl`, `services/url.service.ts`                           |
| **Imágenes**    | `assets-src/portfolio/` (originales) → `npm run images` → `public/.../portfolio/{sm,lg}/`  |
| **Ancla**       | `#portfolio`                                                                               |

## Requisitos funcionales

- **RF-01** — Rejilla de 1, 2 o 3 columnas según el ancho. Al inicio se ven **9** proyectos
  (`PAGE_SIZE`); si hay más, un botón «Mostrar más (N)» muestra el resto de golpe.
- **RF-02** — Cada tarjeta muestra imagen (16:10), categoría, título, resumen (máx. 2 líneas) y
  hasta 4 iconos de tecnologías (+N si hay más). Los proyectos con repositorio privado llevan una
  insignia de candado. Las tarjetas de una misma fila tienen la misma altura.
- **RF-03** — Toda la tarjeta es clicable mediante el botón del título (enlace extendido). El
  foco por teclado se muestra alrededor de la tarjeta entera.
- **RF-04** — Pestañas de filtro: «Todos» más una por cada categoría **que tenga proyectos**,
  cada una con su **contador**. Siempre hay una activa: pulsar la activa no la deselecciona.
- **RF-05** — Cambiar de filtro vuelve a plegar la lista a 9 (el «Mostrar más» de una categoría
  no arrastra a las demás).
- **RF-06** — Una línea de estado «Mostrando X de Y proyectos» (`role="status"`) refleja el
  filtro y la ampliación, y se anuncia a lectores de pantalla.
- **RF-07** — Las tarjetas aparecen escalonadas (`v-reveal`, 80 ms por columna) al entrar en
  pantalla o al aparecer por filtrar/ampliar.
- **RF-08** — Pulsar una tarjeta abre un diálogo modal con imagen grande, categoría, título,
  resumen, lista opcional, tecnologías (con nombre) y enlaces.
- **RF-09** — Enlaces del diálogo: «Ver sitio web» siempre; «Ver repositorio público» si es
  público; si es privado, una etiqueta desactivada «Este repositorio es privado».
- **RF-10** — El diálogo permite ir al proyecto **anterior/siguiente** dentro del filtro activo
  (todos los que cumplen el filtro, no solo los visibles), con botones o con las flechas ←/→. Da
  la vuelta al llegar al final y muestra la posición («3 de 21»).
- **RF-11** — El diálogo se cierra con Esc, con el botón de cierre o pulsando fuera; el foco
  vuelve a la tarjeta que lo abrió.
- **RF-12** — Un proyecto sin resumen muestra tarjeta y diálogo sin ese bloque (no hay campos
  vacíos).
- **RF-13** — Dos vistas, conmutables con un selector (Cuadrícula / Lista): la **rejilla** de
  tarjetas y una **lista compacta** de filas (miniatura, categoría, título de hasta 2 líneas,
  resumen, tecnologías e insignia de privado). En pantallas pequeñas la fila oculta los iconos de
  tecnologías. Filtros, «Mostrar más» y diálogo funcionan igual en ambas.
- **RF-14** — El filtro y la vista **viajan en la URL**: `?cat=landing&view=list#portfolio`.
  Parámetros: `cat` = `app` · `microservice` · `mobile` · `landing`; `view` = `list`. Los valores por
  defecto (`all`, `grid`) no aparecen: el estado inicial tiene la URL limpia.
- **RF-15** — Al cargar un enlace con parámetros se aplica el estado antes del primer pintado y
  la página aterriza en `#portfolio`. Un valor desconocido (`?cat=inventada`) se ignora; el orden
  de los parámetros da igual; se puede dar solo uno.
- **RF-16** — Cada cambio reemplaza la URL (`history.replaceState`): **no añade entradas al
  historial**. Abrir el diálogo no la modifica.

## Reglas de contenido

- Añadir un proyecto exige entrada en `projects.data.ts` y texto en **ambos** idiomas.
- El orden de la rejilla es el de `projects.data.ts`.
- `image` es el nombre base (sin extensión). Se coloca el original en `assets-src/portfolio/` y
  se ejecuta `npm run images`, que genera `sm/<nombre>.webp` (720 px, tarjetas) y
  `lg/<nombre>.webp` (1280 px, diálogo). Los originales no se despliegan.

## Notas

- **Por qué query y no hash:** `#portfolio?cat=landing` no coincide con ningún `id`, así que el
  navegador no bajaría a la sección. Con la query, el hash sigue siendo el ancla.
- Los nombres de parámetro (`cat`, `view`) forman parte de enlaces ya compartidos: no se renombran.

- Las flechas se escuchan en un `div` interior y no en `<DialogContent>`: Reka reenvía los
  atributos por varias capas y el manejador se ejecutaba dos veces por pulsación.
- Los proyectos «Blog Personal», «Blog CMS Personal», «Exámen Virtual» y «Restaurante Sushi
  Delivery» usan la imagen genérica de GitHub; conviene sustituirla por una captura real.
