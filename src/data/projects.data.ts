import type { Project } from '@/types/content'

/**
 * Parte invariable de los proyectos, en el orden en que se muestran. El texto de cada uno
 * (título, resumen) está en `content.<idioma>.ts`, enlazado por `id`.
 */
export const projects = [
  {
    id: 'game-apps',
    category: 'mobile',
    image: 'gameapps.jpg',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/game-apps/#/',
    repository: 'https://github.com/alexchristianqr/game-apps',
    repositoryPublic: true,
    stack: ['angular', 'firebase', 'typescript', 'material-design', 'git']
  },
  {
    id: 'api-de-whatsapp-b2b',
    category: 'landing',
    image: 'sharedapis.png',
    link: 'https://sharedapis.com/',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nuxtjs', 'vue', 'javascript', 'git']
  },
  {
    id: 'clone-de-gmail',
    category: 'mobile',
    image: 'gmailclone.jpg',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/gmail-ghpages/',
    repository: 'https://github.com/alexchristianqr/gmail-ghpages',
    repositoryPublic: true,
    stack: ['ionic', 'angular', 'typescript', 'git']
  },
  {
    id: 'iframe',
    category: 'mobile',
    image: 'iframephone.png',
    link: 'https://alexchristianqr.github.io/iframephone/?src=',
    repository: 'https://github.com/alexchristianqr/iframephone',
    repositoryPublic: true,
    stack: ['javascript', 'html5', 'css', 'git']
  },
  {
    id: 'tasks-crm',
    category: 'app',
    image: 'taskscrm.jpg',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['vue', 'javascript', 'html5', 'git', 'bootstrap']
  },
  {
    id: 'lista-de-tareas',
    category: 'app',
    image: 'todolist.png',
    link: 'https://alexchristianqr.github.io/todolist/',
    repository: 'https://github.com/alexchristianqr/todolist',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'para-ti',
    category: 'app',
    image: 'foryou.png',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/foryou',
    repository: 'https://github.com/alexchristianqr/foryou',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'platcon',
    category: 'app',
    image: 'platcon.png',
    link: 'https://platcon.securitec.pe/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'ticker',
    category: 'app',
    image: 'ticker.png',
    link: 'https://app.ticker.pe/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'sumate-al-exito',
    category: 'app',
    image: 'sumatealexito.png',
    link: 'https://app.sumatealexito.com/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'intellitec',
    category: 'landing',
    image: 'intellitec.png',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'portafolio-personal',
    category: 'landing',
    image: 'portfolio.png',
    link: 'https://alexchristianqr.github.io/portfolio/',
    repository: 'https://github.com/alexchristianqr/portfolio',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'api-en-postman',
    category: 'microservice',
    image: 'api-colors-postman.png',
    link: 'https://documenter.getpostman.com/view/3683906/UVXonZoV',
    repository: 'https://github.com/alexchristianqr/api-colors',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'api-graphql-tasks-crm',
    category: 'microservice',
    image: 'graphqlapi.png',
    link: 'https://documenter.getpostman.com/view/3683906/UVCCfisV',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'api-principal-tasks-crm',
    category: 'microservice',
    image: 'microservicio01.png',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'blog-personal',
    category: 'app',
    image: 'github.png',
    link: 'https://github.com/alexchristianqr/blog',
    repository: 'https://github.com/alexchristianqr/blog',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'api-facturacion-tasks-crm',
    category: 'microservice',
    image: 'microservicio02.png',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'api-socket-tasks-crm',
    category: 'microservice',
    image: 'microservicio03.png',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: []
  },
  {
    id: 'blog-cms-personal',
    category: 'app',
    image: 'github.png',
    link: 'https://github.com/alexchristianqr/cms-blog',
    repository: 'https://github.com/alexchristianqr/cms-blog',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'examen-virtual-en-linea',
    category: 'app',
    image: 'github.png',
    link: 'https://github.com/alexchristianqr/virtual-exam',
    repository: 'https://github.com/alexchristianqr/virtual-exam',
    repositoryPublic: true,
    stack: []
  },
  {
    id: 'restaurante-sushi-delivery',
    category: 'mobile',
    image: 'github.png',
    link: 'https://github.com/alexchristianqr/rollyroll-app',
    repository: 'https://github.com/alexchristianqr/rollyroll-app',
    repositoryPublic: true,
    stack: []
  }
] as const satisfies readonly Project[]

export type ProjectId = (typeof projects)[number]['id']
