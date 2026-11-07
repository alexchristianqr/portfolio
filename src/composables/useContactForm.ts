import { reactive } from 'vue'
import { useContactStore } from '@/stores/contact.store'
import type { ContactForm } from '@/types/contact'

const empty = (): ContactForm => ({ fullname: '', email: '', phone: '', subject: '', message: '' })

/**
 * Campos del formulario. La validación (obligatorios, formato de email) la hace el propio
 * navegador con los atributos `required`/`type="email"`; aquí solo se envía y se limpia.
 */
export function useContactForm() {
  const contact = useContactStore()
  const form = reactive<ContactForm>(empty())

  async function submit(): Promise<void> {
    // Copia: el store no debe retener el objeto reactivo que luego se vacía.
    const sent = await contact.send({ ...form })
    if (sent) Object.assign(form, empty())
  }

  return { form, submit }
}
