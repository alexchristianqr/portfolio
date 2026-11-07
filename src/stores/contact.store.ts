import { ref } from 'vue'
import { defineStore } from 'pinia'
import { env } from '@/config/env'
import { sendContactEmail } from '@/services/email.service'
import type { ContactForm, ContactStatus } from '@/types/contact'

export const useContactStore = defineStore('contact', () => {
  const status = ref<ContactStatus>('idle')

  /** Devuelve `true` si el correo salió, para que el formulario sepa si debe limpiarse. */
  async function send(form: ContactForm): Promise<boolean> {
    if (status.value === 'sending') return false
    status.value = 'sending'

    try {
      await sendContactEmail(
        {
          baseUrl: env.emailjs.baseUrl,
          serviceId: env.emailjs.serviceId,
          templateId: env.emailjs.templateId,
          publicKey: env.emailjs.publicKey,
          toName: env.recipient.name,
          toEmail: env.recipient.email
        },
        form
      )
      status.value = 'success'
      return true
    } catch (error) {
      console.error('[contact.send]', error)
      status.value = 'error'
      return false
    }
  }

  function reset(): void {
    status.value = 'idle'
  }

  return { status, send, reset }
})
