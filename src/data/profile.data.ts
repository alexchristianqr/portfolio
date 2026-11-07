import type { NavLink, Profile, Skill } from '@/types/content'

/** Datos personales que no cambian con el idioma. */
export const profile: Profile = {
  fullName: 'Alex Christian Quispe Roque',
  displayName: 'Alex Christian',
  email: 'alexchristianqr@gmail.com',
  phone: '(+51) 955588297',
  location: 'Peru',
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/alexchristianqr/',
      icon: 'bi-linkedin',
      inSidebar: true
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/alexchristianqr',
      icon: 'bi-github',
      inSidebar: true
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://facebook.com/alexchristianqr/',
      icon: 'bi-facebook',
      inSidebar: true
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      url: 'https://twitter.com/alexchristianqr/',
      icon: 'bi-twitter-x',
      inSidebar: false
    }
  ]
}

/** Orden del menú. La etiqueta sale de `nav.<id>` en el diccionario i18n. */
export const navLinks: readonly NavLink[] = [
  { id: 'profile', icon: 'bi-person' },
  { id: 'portfolio', icon: 'bi-journal-text' },
  { id: 'skills', icon: 'bi-hand-thumbs-up' },
  { id: 'summary', icon: 'bi-file-earmark-text' },
  { id: 'contact', icon: 'bi-envelope' }
]

/** Ya ordenados de mayor a menor nivel (antes se ordenaban en `onMounted`). */
export const skills: readonly Skill[] = [
  { name: 'HTML', level: 100, icon: 'html5.svg' },
  { name: 'Websocket', level: 100, icon: 'nodejs.svg' },
  { name: 'Javascript', level: 90, icon: 'javascript.svg' },
  { name: 'Express', level: 90, icon: 'express.svg' },
  { name: 'Nodejs', level: 90, icon: 'nodejs.svg' },
  { name: 'Git', level: 90, icon: 'git.svg' },
  { name: 'Vuejs', level: 90, icon: 'vue.svg' },
  { name: 'AWS', level: 80, icon: 'aws.svg' },
  { name: 'Docker', level: 80, icon: 'docker.svg' },
  { name: 'Typescript', level: 75, icon: 'typescript.svg' },
  { name: 'NestJS', level: 75, icon: 'nestjs.svg' },
  { name: 'Mongodb', level: 72, icon: 'mongodb.svg' },
  { name: 'MySQL', level: 72, icon: 'mysql.svg' },
  { name: 'Java', level: 70, icon: 'java.svg' },
  { name: 'PHP', level: 70, icon: 'php.svg' },
  { name: 'Bash', level: 54, icon: 'bash.svg' },
  { name: 'WebRTC', level: 25, icon: 'webrtc.svg' }
]
