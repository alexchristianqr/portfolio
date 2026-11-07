import type { Content } from '@/types/content'
import type { ProjectId } from './projects.data'

/** Textos en inglés. Los datos invariantes viven en `projects.data.ts` y `profile.data.ts`. */
export const contentEn: Content<ProjectId> = {
  hero: {
    intro: "I'm",
    phrases: ['passionate', 'logical', 'developer']
  },
  about: {
    paragraphs: [
      "Software Engineer and Full Stack Developer with over 5 years of experience creating efficient, well-structured solutions focused on solving real problems. I'm passionate about technology when it serves a purpose: improving processes, connecting systems, and generating tangible value.",
      'I have worked in the tourism and hospitality, administration, and finance sectors, where I designed and developed architectures capable of scaling and adapting to changes without sacrificing quality. I\'m interested in both the "how" and "why" of each solution, always seeking a balance between performance, maintainability, and business objectives.',
      'I excel at being proactive, communicating clearly, working well in teams, and maintaining an open mindset toward constant learning. I enjoy writing great lines of code as much as I enjoy sharing knowledge, collaborating on solutions, or supporting the growth of others through mentoring.',
      '💻 Technologies I frequently use: TypeScript, Laravel, NestJS, Express.js, MySQL, MongoDB, Redis, Serverless, Docker, and AWS.'
    ]
  },
  skills: {
    intro:
      'Throughout all these years, I have used many technologies and lived many experiences. These have been very useful in the development of functional, secure and scalable software.'
  },
  portfolio: {
    intro:
      'Throughout my career as a professional developer, I have had the opportunity to work on numerous personal and professional projects. Below are some of them.',
    projects: {
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
        title: 'Intellitec'
      },
      'portafolio-personal': {
        title: 'Personal Portfolio'
      },
      'api-en-postman': {
        title: 'API in Postman',
        summary: 'Example CRUD API exercise documented with Postman in public mode.'
      },
      'api-graphql-tasks-crm': {
        title: 'GraphQL API - Tasks CRM'
      },
      'api-principal-tasks-crm': {
        title: 'Main API - Tasks CRM'
      },
      'blog-personal': {
        title: 'Personal Blog',
        summary:
          'A server-side personal blog built with Laravel and Vue.js, deployed to the DigitalOcean cloud.'
      },
      'api-facturacion-tasks-crm': {
        title: 'Billing API - Tasks CRM'
      },
      'api-socket-tasks-crm': {
        title: 'Socket API - Tasks CRM'
      },
      'blog-cms-personal': {
        title: 'Personal CMS Blog'
      },
      'examen-virtual-en-linea': {
        title: 'Online Virtual Exam',
        summary: 'A virtual survey management system to evaluate help desk customer service.'
      },
      'restaurante-sushi-delivery': {
        title: 'Sushi Delivery Restaurant'
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
            date: '2022 - present',
            place: 'Universidad Tecnológica del Peru - UTP',
            link: 'https://www.utp.edu.pe/',
            bullets: [
              'I am currently in the eighth semester of my Software Engineering degree, complementing a solid academic background with more than 5 years of practical experience in web and mobile development. My career has allowed me to master modern technologies and adapt to the constant changes in the tech industry. Throughout this time, I have acquired advanced technical skills in programming, software architecture, databases, and agile methodologies, as well as key soft skills such as problem-solving, teamwork, and project management. I am committed to continuous learning to stay at the forefront of technology and deliver innovative solutions that add value to the projects I work on.'
            ]
          },
          {
            title: 'Certification in Advanced JavaScript',
            date: '2023 - 2024',
            place: 'Universidad Nacional Mayor de San Marcos',
            link: 'https://www.unmsm.edu.pe/',
            bullets: [
              'Certification in Advanced JavaScript, where I deepened advanced concepts of the language.',
              'This training allowed me to master topics such as asynchronous handling, design patterns, performance optimization, and best practices in development.',
              'Through practical projects, I acquired skills to write clean, efficient, and scalable code, applying principles of functional and object-oriented programming.',
              'This certification complements my professional experience and equips me to tackle complex challenges in modern web application development.'
            ]
          },
          {
            title: 'Computing and Information',
            date: '2012 - 2015',
            place: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            bullets: [
              'I am a graduate of a technical degree in Software Development, where I received comprehensive training in programming, databases, networks, and cybersecurity. Throughout this process, I developed key skills such as critical thinking, problem-solving, and teamwork. My academic experience prepared me to design, implement, and maintain software solutions that meet end-user requirements, always focusing on quality and continuous improvement. As a committed professional, I constantly adapt to technological advances and new market demands to stay up to date and add value to every project I work on.'
            ]
          }
        ]
      },
      {
        id: 'experience',
        title: 'Professional Experience',
        items: [
          {
            title: 'Backend Developer',
            date: '04/2024 - Present',
            place: 'LimaTours SAC',
            link: 'https://www.limatours.com.pe/',
            bullets: [
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
