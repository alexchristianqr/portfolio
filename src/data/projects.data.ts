import type { Project } from '@/types/content'

/**
 * Parte invariable de los proyectos, en el orden en que se muestran. El texto de cada uno
 * (título, resumen) está en `content.<idioma>.ts`, enlazado por `id`.
 */
export const projects = [
  {
    id: 'havitan-landing',
    category: 'landing',
    image: 'havitan',
    link: 'https://havitan.com',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['vue', 'typescript', 'bootstrap', 'git']
  },
  {
    id: 'bicinav',
    category: 'mobile',
    image: 'github',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['kotlin', 'android', 'material-design', 'git']
  },
  {
    id: 'game-apps',
    category: 'mobile',
    image: 'gameapps',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/game-apps/#/',
    repository: 'https://github.com/alexchristianqr/game-apps',
    repositoryPublic: true,
    stack: ['angular', 'firebase', 'typescript', 'material-design', 'git']
  },
  {
    id: 'api-de-whatsapp-b2b',
    category: 'landing',
    image: 'sharedapis',
    link: 'https://sharedapis.com/',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nuxtjs', 'vue', 'javascript', 'git']
  },
  {
    id: 'clone-de-gmail',
    category: 'mobile',
    image: 'gmailclone',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/gmail-ghpages/',
    repository: 'https://github.com/alexchristianqr/gmail-ghpages',
    repositoryPublic: true,
    stack: ['ionic', 'angular', 'typescript', 'git']
  },
  {
    id: 'iframe',
    category: 'mobile',
    image: 'iframephone',
    link: 'https://alexchristianqr.github.io/iframephone/?src=',
    repository: 'https://github.com/alexchristianqr/iframephone',
    repositoryPublic: true,
    stack: ['javascript', 'html5', 'css', 'git']
  },
  {
    id: 'tasks-crm',
    category: 'app',
    image: 'taskscrm',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['vue', 'javascript', 'html5', 'git', 'bootstrap']
  },
  {
    id: 'lista-de-tareas',
    category: 'app',
    image: 'todolist',
    link: 'https://alexchristianqr.github.io/todolist/',
    repository: 'https://github.com/alexchristianqr/todolist',
    repositoryPublic: true,
    stack: ['javascript', 'html5', 'css', 'git']
  },
  {
    id: 'para-ti',
    category: 'app',
    image: 'foryou',
    link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/foryou',
    repository: 'https://github.com/alexchristianqr/foryou',
    repositoryPublic: true,
    stack: ['javascript', 'html5', 'css', 'git']
  },
  {
    id: 'platcon',
    category: 'app',
    image: 'platcon',
    link: 'https://platcon.securitec.pe/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['laravel', 'nodejs', 'vue', 'mysql']
  },
  {
    id: 'ticker',
    category: 'app',
    image: 'ticker',
    link: 'https://app.ticker.pe/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nodejs', 'vue', 'mongodb', 'git']
  },
  {
    id: 'sumate-al-exito',
    category: 'app',
    image: 'sumatealexito',
    link: 'https://app.sumatealexito.com/login',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['laravel', 'nodejs', 'vue', 'mysql']
  },
  {
    id: 'intellitec',
    category: 'landing',
    image: 'intellitec',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['vue', 'typescript', 'bootstrap', 'git']
  },
  {
    id: 'portafolio-personal',
    category: 'landing',
    image: 'portfolio',
    link: 'https://alexchristianqr.github.io/portfolio/',
    repository: 'https://github.com/alexchristianqr/portfolio',
    repositoryPublic: true,
    stack: ['vue', 'typescript', 'git']
  },
  {
    id: 'api-en-postman',
    category: 'microservice',
    image: 'api-colors-postman',
    link: 'https://documenter.getpostman.com/view/3683906/UVXonZoV',
    repository: 'https://github.com/alexchristianqr/api-colors',
    repositoryPublic: true,
    stack: ['nodejs', 'express', 'mongodb', 'git']
  },
  {
    id: 'api-graphql-tasks-crm',
    category: 'microservice',
    image: 'graphqlapi',
    link: 'https://documenter.getpostman.com/view/3683906/UVCCfisV',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nodejs', 'express', 'mongodb', 'git']
  },
  {
    id: 'api-principal-tasks-crm',
    category: 'microservice',
    image: 'microservicio01',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nodejs', 'express', 'mongodb', 'docker']
  },
  {
    id: 'blog-personal',
    category: 'app',
    image: 'github',
    link: 'https://github.com/alexchristianqr/blog',
    repository: 'https://github.com/alexchristianqr/blog',
    repositoryPublic: true,
    stack: ['laravel', 'vue', 'mysql', 'php']
  },
  {
    id: 'api-facturacion-tasks-crm',
    category: 'microservice',
    image: 'microservicio02',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nodejs', 'express', 'mongodb', 'git']
  },
  {
    id: 'api-socket-tasks-crm',
    category: 'microservice',
    image: 'microservicio03',
    link: 'https://wa.link/r28uwd',
    repository: 'https://wa.link/r28uwd',
    repositoryPublic: false,
    stack: ['nodejs', 'express', 'mongodb', 'docker']
  },
  {
    id: 'blog-cms-personal',
    category: 'app',
    image: 'github',
    link: 'https://github.com/alexchristianqr/cms-blog',
    repository: 'https://github.com/alexchristianqr/cms-blog',
    repositoryPublic: true,
    stack: ['laravel', 'php', 'mysql', 'git']
  },
  {
    id: 'examen-virtual-en-linea',
    category: 'app',
    image: 'github',
    link: 'https://github.com/alexchristianqr/virtual-exam',
    repository: 'https://github.com/alexchristianqr/virtual-exam',
    repositoryPublic: true,
    stack: ['laravel', 'vue', 'mysql', 'php']
  },
  {
    id: 'restaurante-sushi-delivery',
    category: 'mobile',
    image: 'github',
    link: 'https://github.com/alexchristianqr/rollyroll-app',
    repository: 'https://github.com/alexchristianqr/rollyroll-app',
    repositoryPublic: true,
    stack: ['ionic', 'angular', 'typescript', 'firebase']
  }
] as const satisfies readonly Project[]

export type ProjectId = (typeof projects)[number]['id']
