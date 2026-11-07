# SPEC-002 — Portada

| Campo           | Valor                                                   |
| --------------- | ------------------------------------------------------- |
| **Estado**      | Implementada                                            |
| **Componentes** | `HeroSection`, `composables/useTypewriter.ts`           |
| **Datos**       | `profile.fullName`, `content.hero` (`intro`, `phrases`) |
| **Ancla**       | `#hero`                                                 |

## Requisitos funcionales

- **RF-01** — Ocupa toda la altura de la ventana con la imagen `banner.jpeg` y una capa oscura.
- **RF-02** — Muestra el nombre completo y, debajo, la frase de introducción («Soy» / «I'm»)
  seguida de una palabra que se escribe y se borra en bucle.
- **RF-03** — Las frases salen del idioma activo. Al cambiar de idioma el efecto **se reinicia**
  con las frases nuevas.
- **RF-04** — Con `prefers-reduced-motion` se muestra la primera frase fija, sin animación.
- **RF-05** — Al abandonar la página el temporizador se cancela.
- **RF-06** — Desde `md` el texto se alinea a la izquierda para no tapar al sujeto de la foto
  (a la derecha); en móvil va centrado. Dos degradados (lateral y vertical) dan contraste.
- **RF-07** — Dos llamadas a la acción: «Portafolio» (`#portfolio`) y «Contacto» (`#contact`),
  con las etiquetas de `nav.*`.
- **RF-08** — Una flecha animada al pie lleva a `#profile`. El contenido entra con un fundido;
  con `prefers-reduced-motion` ni la entrada ni la flecha se animan.

Parámetros del efecto: escribir 100 ms/letra, borrar 50 ms/letra, pausa de 2 s al completar.
