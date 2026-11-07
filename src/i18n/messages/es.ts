/**
 * Textos cortos de interfaz (etiquetas, botones, avisos). El texto largo —sobre mí, resumen,
 * proyectos— vive en `data/content.es.ts`. Este diccionario es la fuente de las claves:
 * `en.ts` está tipado contra él, así que olvidar una traducción no compila.
 */
export const es = {
  nav: {
    profile: 'Perfil',
    portfolio: 'Portafolio',
    skills: 'Habilidades',
    summary: 'Resumen',
    contact: 'Contacto',
    cv: 'Curriculum Vitae'
  },
  layout: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menu: 'Menú de navegación',
    backToTop: 'Volver arriba',
    language: 'Idioma',
    copyright: 'Copyright',
    build: 'Versión {version} · rama {branch} · compilado el {date}'
  },
  theme: {
    label: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema'
  },
  portfolio: {
    filtersLabel: 'Filtrar proyectos por categoría',
    filters: {
      all: 'Todos',
      app: 'Apps Web',
      microservice: 'Servicios API',
      mobile: 'Apps Móviles',
      landing: 'Landing Pages'
    },
    categories: {
      app: 'App web',
      microservice: 'Servicio API',
      mobile: 'App móvil',
      landing: 'Landing page'
    },
    viewDetails: 'Ver detalles de {title}',
    viewSite: 'Ver sitio web',
    repositoryPublic: 'Ver repositorio público',
    repositoryPrivate: 'Este repositorio es privado',
    stack: 'Tecnologías',
    close: 'Cerrar',
    showing: 'Mostrando {shown} de {total} proyectos',
    showMore: 'Mostrar más ({count})',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    position: '{current} de {total}',
    viewLabel: 'Cambiar vista',
    viewGrid: 'Cuadrícula',
    viewList: 'Lista'
  },
  skills: { levelOf: '{name}: {level} %' },
  contact: {
    activeMedia: 'Medios Activos',
    activeMediaText:
      'Estoy activo por estos medios de comunicación, puedes contactarme en cualquier momento y contestaré.',
    email: 'Email',
    phone: 'WhatsApp',
    location: 'Ubicación',
    social: 'Redes Sociales',
    socialText:
      'Contáctame enviando un mensaje en cualquier momento y conversemos como buenos amigos.',
    form: {
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      optional: '(opcional)',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...'
    },
    toast: {
      success: 'Mensaje enviado con éxito',
      error: 'El mensaje no fue enviado. Inténtalo de nuevo.',
      close: 'Cerrar aviso'
    }
  }
}

/** Ensancha los literales (`'Perfil'`) a `string` para que otros idiomas puedan tipar contra la forma. */
type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> }

export type MessageSchema = Widen<typeof es>
