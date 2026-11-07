import type { Concept, NavLink, Profile, Skill } from '@/types/content'

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
      icon: 'icon-[ph--linkedin-logo]',
      inSidebar: true
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/alexchristianqr',
      icon: 'icon-[ph--github-logo]',
      inSidebar: true
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://facebook.com/alexchristianqr/',
      icon: 'icon-[ph--facebook-logo]',
      inSidebar: true
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      url: 'https://twitter.com/alexchristianqr/',
      icon: 'icon-[ph--x-logo]',
      inSidebar: false
    }
  ]
}

/** Orden del menú. La etiqueta sale de `nav.<id>` en el diccionario i18n. */
export const navLinks: readonly NavLink[] = [
  { id: 'profile', icon: 'icon-[ph--user]' },
  { id: 'portfolio', icon: 'icon-[ph--notebook]' },
  { id: 'skills', icon: 'icon-[ph--thumbs-up]' },
  { id: 'summary', icon: 'icon-[ph--file-text]' },
  { id: 'contact', icon: 'icon-[ph--envelope-simple]' }
]

/** Solo lo que domino a fondo. Ya ordenados de mayor a menor nivel. */
export const skills: readonly Skill[] = [
  { name: 'Javascript', level: 90, icon: 'javascript.svg' },
  { name: 'Express', level: 90, icon: 'express.svg' },
  { name: 'Nodejs', level: 90, icon: 'nodejs.svg' },
  { name: 'Git', level: 90, icon: 'git.svg' },
  { name: 'Vuejs', level: 90, icon: 'vue.svg' },
  { name: 'AWS', level: 80, icon: 'aws.svg' },
  { name: 'Docker', level: 80, icon: 'docker.svg' },
  { name: 'Typescript', level: 75, icon: 'typescript.svg' },
  { name: 'NestJS', level: 75, icon: 'nestjs.svg' }
]

/** IA y metodologías. El texto de cada una está en `content.<idioma>.ts` → `skills.concepts`. */
export const concepts: readonly Concept[] = [
  { id: 'sdd', name: 'SDD', icon: 'sdd.svg' },
  { id: 'claude', name: 'Claude', icon: 'claude.svg' },
  { id: 'mcp', name: 'MCP', icon: 'mcp.svg' },
  { id: 'kiro', name: 'Kiro', icon: 'kiro.svg' },
  { id: 'copilot', name: 'Copilot', icon: 'githubcopilot.svg' },
  { id: 'chatgpt', name: 'ChatGPT', icon: 'openai.svg' },
  { id: 'solid', name: 'SOLID', icon: 'solid.svg' },
  { id: 'tdd', name: 'TDD', icon: 'tdd.svg' }
]
