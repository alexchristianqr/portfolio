import type { MessageSchema } from './es'

export const en: MessageSchema = {
  nav: {
    profile: 'Profile',
    portfolio: 'Portfolio',
    skills: 'Skills',
    summary: 'Summary',
    contact: 'Contact',
    cv: 'Curriculum Vitae'
  },
  layout: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Navigation menu',
    backToTop: 'Back to top',
    language: 'Language',
    copyright: 'Copyright'
  },
  theme: {
    label: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System'
  },
  portfolio: {
    filtersLabel: 'Filter projects by category',
    filters: {
      all: 'All',
      app: 'Web Apps',
      microservice: 'API Services',
      mobile: 'Mobile Apps',
      landing: 'Landing Pages'
    },
    categories: {
      app: 'Web app',
      microservice: 'API service',
      mobile: 'Mobile app',
      landing: 'Landing page'
    },
    viewDetails: 'View details of {title}',
    viewSite: 'Visit website',
    repositoryPublic: 'View public repository',
    repositoryPrivate: 'This repository is private',
    stack: 'Technologies',
    close: 'Close',
    showing: 'Showing {shown} of {total} projects',
    showMore: 'Show more ({count})',
    prev: 'Previous project',
    next: 'Next project',
    position: '{current} of {total}'
  },
  skills: { levelOf: '{name}: {level} %' },
  contact: {
    activeMedia: 'Active Media',
    activeMediaText:
      'I am active by these means of communication, you can contact me at any time and I will answer.',
    email: 'Email',
    phone: 'WhatsApp',
    location: 'Location',
    social: 'Social Networks',
    socialText: "Contact me by sending a message at any time and let's talk like good friends.",
    form: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      optional: '(optional)',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...'
    },
    toast: {
      success: 'Message sent successfully',
      error: 'The message was not sent. Please try again.',
      close: 'Close notice'
    }
  }
}
