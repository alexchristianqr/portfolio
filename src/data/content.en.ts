import type { Content } from '@/types/content'
import type { ProjectId } from './projects.data'

/** Textos en inglés. Los datos invariantes viven en `projects.data.ts` y `profile.data.ts`. */
export const contentEn: Content<ProjectId> = {
  hero: {
    intro: "I'm",
    phrases: ['a Software Engineer', 'a Full Stack Developer', 'a Tech Lead with AI and SDD']
  },
  about: {
    paragraphs: [
      "Writing code is no longer the hard part. AI agents generate it in seconds. The hard part is deciding what to build, within which limits, and checking it came out right. According to Stack Overflow 2025, 84% of developers already use AI and 46% don't trust what it produces. That favors whoever has the judgment to direct and review. That is why I work with Spec Driven Development (SDD). Before coding I write the requirements, the architecture decisions (ADRs) and one SPEC per feature. That specification is the source of truth for me and for the AI. If the code contradicts it, there is a bug.",
      'I have over 8 years in backend and full stack, in tourism and insurance among other sectors. Today I am Tech Lead at LimaTours and I run a team of 3 people that works with SDD. On that base I use Kiro to go from requirements to design and tasks, Claude Code with Skills, Hooks and subagents, and MCP servers that give agents access to code and data. All of it on TypeScript, NestJS and serverless AWS. AI executes faster when the specification is clear. Direction and review stay with me, and nothing is merged without passing lint, types, build and the spec. That is how projects end up stable, scalable and profitable: every decision is written down, can be reviewed, and nobody redoes what no one understood. This portfolio is built that way.'
    ]
  },
  skills: {
    intro:
      'This is the technical foundation I know in depth, plus the tools and practices I use to analyse, design and validate software.',
    stackTitle: 'Core stack',
    conceptsTitle: 'AI and methodologies',
    conceptsIntro:
      "I don't just use the tools: I define which problem they solve and how I verify the result.",
    concepts: {
      sdd: "The written spec is the contract: requirements, ADRs and acceptance criteria. If the code contradicts it, it's a bug.",
      claude:
        'Claude Code built into the workflow: Hooks that run lint and build, subagents and headless mode in CI.',
      mcp: 'Open protocol that connects AI to tools and data. I integrate servers like CodeGraph, read-only.',
      kiro: 'Specs split into requirements (EARS), design and tasks, with steering to pin project conventions.',
      copilot:
        'Agent that opens PRs from an issue and reviews the diff; nothing merges without passing the pipeline checks.',
      chatgpt: 'I compare alternatives and their trade-offs before fixing a decision in an ADR.',
      solid:
        'Five design principles; I apply them with dependency injection in NestJS to isolate infrastructure.',
      tdd: "Red, green, refactor: the test defines the behaviour and CI won't deploy without green."
    }
  },
  portfolio: {
    intro:
      'Throughout my career as a professional developer, I have had the opportunity to work on numerous personal and professional projects. Below are some of them.',
    projects: {
      'havitan-landing': {
        title: 'Havítan Landing',
        summary:
          'Website for Havítan, the condominium management platform: common-area bookings, security and access control, announcements and billing. Vue 3 + Vite, 100% static and built with Spec Driven Development.'
      },
      bicinav: {
        title: 'Bicinav',
        summary:
          'Android app for cyclists with a map, routes and a user account, built with Jetpack Compose and Material 3.'
      },
      'game-apps': {
        title: 'Game apps',
        summary:
          'An interactive web application of classic games, the ones that had their golden age between 1995 and 2000. It is designed to run responsively on the web.',
        list: {
          label: 'Available games',
          items: ['Tic-tac-toe']
        }
      },
      'api-de-whatsapp-b2b': {
        title: 'B2B WhatsApp API',
        summary:
          'A landing page website offering an integration service for the unofficial WhatsApp API.'
      },
      'clone-de-gmail': {
        title: 'Gmail clone',
        summary: 'A hybrid mobile application to send emails, with an inbox and unread messages.'
      },
      iframe: {
        title: 'Iframe',
        summary:
          'A web application that wraps other applications so they can be viewed responsively.'
      },
      'tasks-crm': {
        title: 'Tasks CRM',
        summary:
          'A web application designed as a SaaS (Software as a Service) platform. This CRM integrates the most widely used chat apps: WhatsApp via QR code, Facebook Messenger, Instagram, Telegram, livechat widgets and chatbots.'
      },
      'lista-de-tareas': {
        title: 'Todo list',
        summary: 'Demo web application.'
      },
      'para-ti': {
        title: 'For you',
        summary: 'Interactive demo web application.'
      },
      platcon: {
        title: 'Platcon',
        summary: 'A management system for bulk SMS campaigns for marketing.'
      },
      ticker: {
        title: 'Ticker',
        summary:
          'A real-time chat system that integrates the WhatsApp API via Twilio, Messenger and Instagram.'
      },
      'sumate-al-exito': {
        title: 'Súmate al Éxito',
        summary: 'A management system for booking COWORKING rooms.'
      },
      intellitec: {
        title: 'Intellitec',
        summary: 'Corporate website (landing page) for the technology solutions company Intellitec.'
      },
      'portafolio-personal': {
        title: 'Personal Portfolio',
        summary:
          'My personal portfolio: profile, projects, skills and contact, in Spanish and English, with dark mode.'
      },
      'api-en-postman': {
        title: 'API in Postman',
        summary: 'Example CRUD API exercise documented with Postman in public mode.'
      },
      'api-graphql-tasks-crm': {
        title: 'GraphQL API - Tasks CRM',
        summary: 'GraphQL microservice that connects Tasks CRM with third-party services.'
      },
      'api-principal-tasks-crm': {
        title: 'Main API - Tasks CRM',
        summary: 'Main REST service of Tasks CRM: users, conversations, channels and campaigns.'
      },
      'blog-personal': {
        title: 'Personal Blog',
        summary:
          'A server-side personal blog built with Laravel and Vue.js, deployed to the DigitalOcean cloud.'
      },
      'api-facturacion-tasks-crm': {
        title: 'Billing API - Tasks CRM',
        summary: 'Billing and payments microservice of the Tasks CRM platform.'
      },
      'api-socket-tasks-crm': {
        title: 'Socket API - Tasks CRM',
        summary: 'Socket microservice powering Tasks CRM real-time chat.'
      },
      'blog-cms-personal': {
        title: 'Personal CMS Blog',
        summary: 'Content management system (CMS) to publish and manage my personal blog posts.'
      },
      'examen-virtual-en-linea': {
        title: 'Online Virtual Exam',
        summary: 'A virtual survey management system to evaluate help desk customer service.'
      },
      'restaurante-sushi-delivery': {
        title: 'Sushi Delivery Restaurant',
        summary: 'Mobile app to order sushi delivery: menu, cart and order tracking.'
      }
    }
  },
  resume: {
    categories: [
      {
        id: 'education',
        title: 'Educational Training',
        items: [
          {
            title: 'Software Engineering',
            date: '2022 - 2026',
            status: 'Graduate',
            place: 'Universidad Tecnológica del Perú - UTP',
            link: 'https://www.utp.edu.pe/',
            bullets: [
              'Software architecture, databases and agile methodologies.',
              'Capstone projects in Java, a video game in Godot and cryptography labs.',
              'Backed by more than 8 years of professional experience in web and mobile development.'
            ]
          },
          {
            title: 'Certification in Advanced JavaScript',
            date: '2023 - 2024',
            status: 'Certified',
            place: 'Universidad Nacional Mayor de San Marcos - UNMSM',
            link: 'https://www.unmsm.edu.pe/',
            bullets: [
              'Asynchronous programming, design patterns and performance optimization.',
              'Clean, scalable code with functional and object-oriented programming.'
            ]
          },
          {
            title: 'Computing and Information Technology',
            date: '2012 - 2015',
            status: 'Graduate',
            place: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            bullets: [
              'Programming, databases, networks and cybersecurity.',
              'Technical foundation to design, implement and maintain software solutions.'
            ]
          }
        ]
      },
      {
        id: 'experience',
        title: 'Professional Experience',
        items: [
          {
            title: 'Tech Lead',
            date: '2025 - Present',
            place: 'LimaTours SAC',
            link: 'https://www.limatours.com.pe/',
            bullets: [
              'I lead a team of 3 people that develops and evolves the tourism management applications. (AWS + Serverless + TypeScript)',
              'We work with Spec Driven Development: the written specification is the source of truth and every change is reviewed against it.'
            ]
          },
          {
            title: 'Backend Developer',
            date: '04/2024 - 2025',
            place: 'LimaTours SAC',
            link: 'https://www.limatours.com.pe/',
            bullets: [
              'I built and evolved the HyperGuest reservations product: monthly sales grew 1,400%, progressively over a year and a half.',
              'Development and maintenance of backend services for tourism management applications, ensuring high availability and performance. (AWS + Serverless + Node.js / PHP / TypeScript)',
              'Implementation of solutions to optimize internal processes and improve the end-user experience. (DynamoDB + Lambda)'
            ]
          },
          {
            title: 'Backend Developer',
            date: '10/2023 - 03/2024',
            place: 'Softtek / Client: Rimac Seguros',
            link: 'https://www.softtek.com/es/',
            bullets: [
              'General maintenance of broker services (Policies, Renewals, Endorsements, Financing). (AWS + Serverless + Nodejs + Typescript)',
              'High-impact root solutions for bugs. (AWS + Serverless + DynamoDB + Unit Tests)'
            ]
          },
          {
            title: 'Backend Developer',
            date: '03/2022 - 09/2023',
            place:
              'Quality & Development Software SAC / Client: Empresas Jordan SA in Santiago - Chile',
            link: 'https://www.qdsgroup.com.pe/',
            bullets: [
              'Implementation of B2C channel orchestration services for Email and SMS campaigns. (AWS Api Gateway + Lambda Functions + AWS Step Functions + NodeJS + Typescript)',
              'Backend development to efficiently manage automated workflows (batch processes in Scaler). (AWS ECR + AWS EKS + Docker + NestJS + Typescript)',
              'Backend development and frontend support for the service and integration for URL shortening. (AWS Cloud Formation + AWS RDS + Nodejs + Vue 3 + Typescript)'
            ]
          },
          {
            title: 'Full Stack Web Developer',
            date: '10/2018 - 09/2021',
            place: 'Securitec Peru S.A.C',
            link: 'https://www.securitec.pe/',
            bullets: [
              'Maintenance of web application to manage campaigns to send massive SMS and improve delivery queues. (Laravel 5 + Nodejs + Vue 2 + MySQL).',
              'Development of an administrative web application and installable webphone client to manage VOIP call campaigns. (Laravel 6 + Nodejs + Vue 2 + MySQL)',
              'Web application development that integrates API WhatsApp with Twilio, Telegram, Instagram, Facebook Messenger, Chatbot, payment gateway with PayU and Paypal. (Nodejs + Vue 2 + MongoDB)'
            ]
          },
          {
            title: 'Analyst and Web Developer',
            date: '01/2018 - 09/2018',
            place: 'Corporación Sapia S.A',
            link: 'https://sapia.com.pe/',
            bullets: [
              'Analyze the requirements of the corresponding areas and provide correct maintenance to the call system. (Nodejs + Vue 2 + MySQL)',
              'Development of a virtual survey system. (Laravel 5 + Vue 2 + MySQL)'
            ]
          },
          {
            title: 'Web Developer',
            date: '07/2016 - 12/2017',
            place: 'Centros Virtuales del Peru E.I.R.L',
            link: 'https://www.centrosvirtuales.com/',
            bullets: [
              'As part of the maintenance of the booking web site, create a cineplanet-type COWORKING space reservation selection module. (Ionic 2 + BackboneJS + Bootstrap 3)',
              "Development of the modern web application 'JOIN SUCCESS' that integrates the new booking module. (Laravel 4 + Nodejs + Vue + MySQL)"
            ]
          },
          {
            title: 'Web Developer Intern',
            date: '01/2016 - 06/2016',
            place: 'Hacom S.A.C',
            link: 'http://www.hacom.com.pe/',
            bullets: ['Create automated python report scripts for satellite location statistics.']
          }
        ]
      }
    ]
  },
  contact: {
    intro:
      'If you want to get in touch with me, below you will find my basic information to send me a message, call me, or write me an email.'
  }
}
