# SPEC-007 — Contacto

| Campo           | Valor                                                          |
| --------------- | -------------------------------------------------------------- |
| **Estado**      | Implementada                                                   |
| **Componentes** | `ContactSection`, `ContactForm`, `AppToast`, `SocialLinks`     |
| **Lógica**      | `useContactForm`, `contact.store`, `services/email.service.ts` |
| **Entorno**     | `VITE_APP_EMAILJS_*`, `VITE_APP_TO_NAME`, `VITE_APP_TO_EMAIL`  |
| **Ancla**       | `#contact`                                                     |

## Requisitos funcionales

- **RF-01** — Columna de información: correo (enlace `mailto:`), ubicación y las cuatro redes.
- **RF-02** — Formulario: nombre\*, email\*, teléfono (opcional), asunto\*, mensaje\*. La validación
  de obligatorios y del formato de email es la nativa del navegador.
- **RF-03** — Al enviar, el botón queda desactivado y dice «Enviando...». No se admite un segundo
  envío mientras hay uno en curso.
- **RF-04** — Se hace `POST {EMAILJS_BASE_URL}/email/send` con `service_id`, `template_id`,
  `user_id` y `template_params`: `fullname_invited`, `phone_invited`, `subject_invited`,
  `message`, `reply_to` (= email del visitante), `to_name`, `to_email`.
- **RF-05** — **Éxito** (HTTP 2xx): aviso «Mensaje enviado con éxito» y el formulario se vacía.
- **RF-06** — **Error** (cualquier otro caso): aviso «El mensaje no fue enviado. Inténtalo de
  nuevo.» y el formulario **conserva lo escrito**.
- **RF-07** — El aviso se cierra solo a los 4,5 s o con su botón; es anunciado a lectores de pantalla.
- **RF-08** — Los campos tienen borde con contraste ≥ 3:1 frente al fondo (`border-muted/70`) en
  ambos temas. Las redes de esta sección usan `SocialLinks tone="page"` (fondo `chip`, icono
  `brand-text`), de modo que siguen el tema; en la barra lateral se mantiene `tone="sidebar"`.

## Notas

Los nombres de `template_params` pertenecen a la plantilla configurada en el panel de EmailJS.
Cambiarlos en el código sin cambiarlos allí deja el correo vacío.

Histórico: hasta la v3 los campos del formulario no estaban enlazados al objeto que se enviaba y
el correo salía con nombre, asunto y mensaje vacíos.
