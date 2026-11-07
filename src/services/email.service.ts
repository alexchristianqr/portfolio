import type { ContactForm } from '@/types/contact'

export interface EmailConfig {
  baseUrl: string
  serviceId: string
  templateId: string
  publicKey: string
  toName: string
  toEmail: string
}

/**
 * Envía el formulario por la API REST de EmailJS.
 *
 * Los nombres de `template_params` (`fullname_invited`, …) son los que usa la plantilla
 * configurada en el panel de EmailJS: cambiarlos aquí sin cambiarlos allí deja el correo vacío.
 */
export async function sendContactEmail(config: EmailConfig, form: ContactForm): Promise<void> {
  const response = await fetch(`${config.baseUrl}/email/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        fullname_invited: form.fullname,
        phone_invited: form.phone,
        subject_invited: form.subject,
        message: form.message,
        reply_to: form.email,
        to_name: config.toName,
        to_email: config.toEmail
      }
    })
  })

  if (!response.ok) {
    throw new Error(`EmailJS respondió ${response.status}: ${await response.text()}`)
  }
}
