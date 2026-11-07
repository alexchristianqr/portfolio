# SPEC-001 — Navegación

| Campo              | Valor                                                                             |
| ------------------ | --------------------------------------------------------------------------------- |
| **Estado**         | Implementada                                                                      |
| **Componentes**    | `TheSidebar`, `SidebarPanel`, `TheMobileNav`, `TheFooter`, `BackToTop`, `App.vue` |
| **Estado (Pinia)** | `ui.store` (`mobileNavOpen`, `activeSection`)                                     |
| **Depende de**     | SPEC-008 (idioma), SPEC-009 (tema)                                                |

## Propósito

Llevar al visitante a cualquier sección y mostrarle dónde está.

## Requisitos funcionales

- **RF-01** — Desde 1200 px de ancho hay una barra lateral fija de 300 px con foto, nombre,
  redes (LinkedIn, GitHub, Facebook), selector de idioma, selector de tema y el menú. El
  contenido se desplaza 300 px a la derecha.
- **RF-02** — El menú lista Perfil, Portafolio, Habilidades, Resumen y Contacto (en ese orden) y
  un enlace de descarga del CV que abre en pestaña nueva.
- **RF-03** — Por debajo de 1200 px la barra se oculta y aparece un botón flotante (arriba a la
  derecha) que abre el mismo panel como diálogo lateral.
- **RF-04** — El panel móvil se cierra con la tecla Esc, con el botón de cierre, pulsando fuera o
  al elegir un enlace.
- **RF-05** — Pulsar un enlace salta a su sección con desplazamiento suave (sin animación si el
  usuario prefiere movimiento reducido).
- **RF-06** — La sección visible se marca en el menú (`aria-current="true"`): es la que cruza la
  línea situada al 40 % de la altura de la ventana.
- **RF-07** — Un botón «volver arriba» aparece tras desplazar más de 100 px y lleva a `#hero`.
- **RF-08** — Un enlace «Saltar al contenido» es el primer elemento enfocable.
- **RF-09** — El pie (© año) queda fijo bajo la barra en escritorio y fluye al final de la página
  en pantallas pequeñas.
- **RF-10** — Cada clic del menú se registra como evento de analítica, si está configurada.

## Criterios de aceptación

- Con teclado se llega a todo el menú y el foco es visible.
- Al abrir el panel móvil el foco queda dentro y al cerrarlo vuelve al botón.
- No hay desplazamiento horizontal en 390 px ni en 1440 px.
