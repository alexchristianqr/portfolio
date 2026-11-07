# SPEC-002 — Portada

| Campo           | Valor                                          |
| --------------- | ---------------------------------------------- |
| **Estado**      | Implementada                                   |
| **Componentes** | `HeroSection`, `composables/useTypewriter.ts`  |
| **Datos**       | `profile.fullName`, `content.hero` (`phrases`) |
| **Ancla**       | `#hero`                                        |

## Requisitos funcionales

- **RF-01** — Ocupa toda la altura de la ventana con la imagen `banner.jpeg` y una capa oscura.
- **RF-02** — Muestra el nombre completo y, debajo, un rol que se escribe y se borra en bucle.
  Cada frase es un rol completo y se lee sola, sin «Soy» / «I'm».
- **RF-03** — Las frases salen del idioma activo. Al cambiar de idioma el efecto **se reinicia**
  con las frases nuevas.
- **RF-04** — Con `prefers-reduced-motion` se muestra la primera frase fija, sin animación.
- **RF-05** — Al abandonar la página el temporizador se cancela.
- **RF-06** — El texto va siempre a la izquierda y nunca tapa al sujeto de la foto. Desde `md`
  se centra en vertical y el degradado es lateral; en móvil se ancla abajo, con degradado
  vertical y tamaños reducidos. La frase más larga debe caber en una línea en 320 px para que
  la altura no salte al escribir.
  La sección usa `h-svh` (con mínimo de 30 rem) para respetar la barra del navegador móvil.
- **RF-07** — Dos llamadas a la acción: «Portafolio» (`#portfolio`) y «Contacto» (`#contact`),
  con las etiquetas de `nav.*`.
- **RF-08** — Una flecha animada al pie lleva a `#profile`. El contenido entra con un fundido;
  con `prefers-reduced-motion` ni la entrada ni la flecha se animan.

Parámetros del efecto: escribir 100 ms/letra, borrar 50 ms/letra, pausa de 2 s al completar.
