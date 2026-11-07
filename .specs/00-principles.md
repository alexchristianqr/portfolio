# Principios

Lo innegociable. Si un cambio los viola, se discute antes de escribir código.

- **P1 — Sitio estático.** Sin backend propio ni SSR. Lo único dinámico es el envío del
  formulario, que va directo a EmailJS desde el navegador.
- **P2 — Una sola fuente del contenido.** Todo texto visible sale de `src/data/` (largo) o
  `src/i18n/messages/` (etiquetas). Ningún texto escrito a mano en una plantilla.
- **P3 — Dos idiomas, mismo contenido.** `es` y `en` comparten forma: el compilador impide
  olvidar una clave o un proyecto en uno de ellos.
- **P4 — Capas con dirección única.** `types → data/i18n/config → services → stores →
composables → sections/layout → ui`. Una capa nunca importa de otra que esté a su derecha.
- **P5 — TypeScript estricto.** Sin `any` ni `@ts-ignore`. Las variables de entorno están
  tipadas y validadas al arrancar.
- **P6 — Estado global mínimo.** Solo lo que dos componentes no relacionados comparten vive en
  Pinia (idioma, tema, menú móvil, envío de contacto). Lo demás es `ref` local.
- **P7 — Los colores viven en un sitio.** Ningún color literal fuera de `src/styles/main.css`.
- **P8 — Accesible por defecto.** Contraste AA en claro y oscuro, foco visible, navegación por
  teclado, `prefers-reduced-motion` respetado.
- **P9 — Nada se queda colgado.** Todo observer, temporizador o listener se libera al
  desmontar el componente.
- **P10 — Un fallo de configuración no se publica.** `vite.config.ts` aborta dev y build si
  falta una variable obligatoria.
