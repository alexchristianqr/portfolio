export interface ContactForm {
  fullname: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactStatus = 'idle' | 'sending' | 'success' | 'error'
