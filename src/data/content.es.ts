import type { Content } from '@/types/content'
import type { ProjectId } from './projects.data'

/** Textos en español. Los datos invariantes viven en `projects.data.ts` y `profile.data.ts`. */
export const contentEs: Content<ProjectId> = {
  hero: {
    phrases: ['Ingeniero de Software', 'Desarrollador Full Stack', 'Líder Técnico con IA y SDD']
  },
  about: {
    paragraphs: [
      'Escribir código dejó de ser lo difícil. Los agentes de IA lo generan en segundos. Lo difícil es decidir qué construir, con qué límites y comprobar que quedó bien. Según Stack Overflow 2025, el 84 % de los desarrolladores ya usa IA y el 46 % desconfía de lo que produce. Eso favorece a quien tiene criterio para dirigir y revisar. Por eso trabajo con Spec Driven Development (SDD). Antes de programar escribo los requisitos, las decisiones de arquitectura (ADR) y una SPEC por funcionalidad. Esa especificación es la fuente de verdad para mí y para la IA. Si el código la contradice, hay un bug.',
      'Llevo más de 8 años en backend y full stack, en turismo y seguros entre otros sectores. Hoy soy Líder Técnico en LimaTours y dirijo un equipo de 3 personas que trabaja con SDD. Sobre esa base uso Kiro para pasar de requisitos a diseño y tareas, Claude Code con Skills, Hooks y subagentes, y servidores MCP que dan a los agentes acceso a código y datos. Todo con TypeScript, NestJS y AWS serverless. La IA ejecuta más rápido cuando la especificación es clara. La dirección y la revisión son mías, y nada se integra sin pasar lint, tipos, build y la spec. Así salen proyectos estables, escalables y rentables: cada decisión queda escrita, se puede revisar y no se rehace lo que nadie entendió. Este portafolio está hecho así.'
    ]
  },
  skills: {
    intro:
      'Esta es la base técnica que domino a fondo y las herramientas y prácticas con las que analizo, diseño y valido el software.',
    stackTitle: 'Stack principal',
    conceptsTitle: 'IA y metodologías',
    conceptsIntro:
      'No me quedo en usar las herramientas: defino qué problema resuelven y cómo verifico su resultado.',
    concepts: {
      sdd: 'La especificación escrita es el contrato: requisitos, ADR y criterios de aceptación. Si el código la contradice, es un bug.',
      claude:
        'Claude Code integrado al flujo: Hooks que corren lint y build, subagentes y modo headless en CI.',
      mcp: 'Protocolo abierto que conecta la IA con herramientas y datos. Integro servidores como CodeGraph, en solo lectura.',
      kiro: 'Specs en requisitos (EARS), diseño y tareas, con steering para fijar las convenciones del proyecto.',
      copilot:
        'Agente que abre PR desde una issue y revisa el diff; nada se integra sin pasar los checks del pipeline.',
      chatgpt: 'Contrasto alternativas y sus trade-offs antes de fijar una decisión en un ADR.',
      solid:
        'Cinco principios de diseño; los aplico con inyección de dependencias en NestJS para aislar la infraestructura.',
      tdd: 'Rojo, verde, refactor: la prueba define el comportamiento y el CI no despliega sin verde.'
    }
  },
  portfolio: {
    intro:
      'A lo largo de mi carrera como desarrollador profesional, he tenido la oportunidad de trabajar en numerosos proyectos laborales y personales. A continuación, te presento algunos de ellos.',
    projects: {
      'havitan-landing': {
        title: 'Havítan Landing',
        summary:
          'Sitio web de Havítan, la plataforma de gestión de condominios: reservas de áreas comunes, seguridad y control de acceso, comunicados y cobranzas. Vue 3 + Vite, 100 % estático y construido con Spec Driven Development.'
      },
      bicinav: {
        title: 'Bicinav',
        summary:
          'Aplicación Android para ciclistas con mapa, rutas y cuenta de usuario, hecha con Jetpack Compose y Material 3.'
      },
      'game-apps': {
        title: 'Game apps',
        summary:
          'Es una aplicación web interactiva de juegos clásicos. Aquellos juegos que tuvieron su época dorada en los años 95 al 2000. La app está diseñada para ejecutarse por la web de manera responsiva.',
        list: {
          label: 'Lista de juegos disponibles',
          items: ['Tres en linea']
        }
      },
      'api-de-whatsapp-b2b': {
        title: 'API de WhatsApp B2B',
        summary:
          'Es un sitio web landing page para ofrecer el servicio de integración de la API no oficial de WhatsApp.'
      },
      'clone-de-gmail': {
        title: 'Clone de Gmail',
        summary:
          'Es una aplicación móvil hibrida para enviar emails, bandeja de entrada y correos no leidos.'
      },
      iframe: {
        title: 'Iframe',
        summary:
          'Es una aplicación web que sirve para enmascarar otras aplicaciones y puedan visualizarse de manera responsiva.'
      },
      'tasks-crm': {
        title: 'Tasks CRM',
        summary:
          'Es una aplicación web diseñado como una plataforma SaaS (Software as a Service). Este CRM integra las aplicaciones de chat mas utilizadas como WhatsApp con codigo QR, Facebook Messenger, Instagram, Telegram, Widget livechats y Chatbots.'
      },
      'lista-de-tareas': {
        title: 'Lista de tareas',
        summary: 'Aplicación web demostrativa.'
      },
      'para-ti': {
        title: 'Para ti',
        summary: 'Aplicación web demostrativa interactiva.'
      },
      platcon: {
        title: 'Platcon',
        summary: 'Es un sistema gestor de envíos de SMS masivo para marketing.'
      },
      ticker: {
        title: 'Ticker',
        summary:
          'Es un sistema de chat en tiempo real que integra una API de Whatsapp API Twilio, Messenger, Instagram.'
      },
      'sumate-al-exito': {
        title: 'Súmate al Éxito',
        summary: 'Es un sistema gestor de administración de reservas de salas COWORKING.'
      },
      intellitec: {
        title: 'Intellitec',
        summary:
          'Sitio web institucional (landing page) de la empresa de soluciones tecnológicas Intellitec.'
      },
      'portafolio-personal': {
        title: 'Portafolio Personal',
        summary:
          'Mi portafolio personal: perfil, proyectos, habilidades y contacto, en español e inglés, con modo oscuro.'
      },
      'api-en-postman': {
        title: 'API en postman',
        summary: 'API crud ejercicio de ejemplo  con uso de postman en modo público.'
      },
      'api-graphql-tasks-crm': {
        title: 'API GraphQL - Tasks CRM',
        summary: 'Microservicio GraphQL que integra Tasks CRM con servicios de terceros.'
      },
      'api-principal-tasks-crm': {
        title: 'API Principal - Tasks CRM',
        summary:
          'Servicio principal REST de Tasks CRM: usuarios, conversaciones, canales y campañas.'
      },
      'blog-personal': {
        title: 'Blog Personal',
        summary:
          'Es un blog personal en el lado del servidor con laravel y vuejs para desplegarse en el cloud de digital ocean.'
      },
      'api-facturacion-tasks-crm': {
        title: 'API Facturación - Tasks CRM',
        summary: 'Microservicio de facturación y cobros de la plataforma Tasks CRM.'
      },
      'api-socket-tasks-crm': {
        title: 'API Socket - Tasks CRM',
        summary: 'Microservicio de sockets para el chat en tiempo real de Tasks CRM.'
      },
      'blog-cms-personal': {
        title: 'Blog CMS Personal',
        summary:
          'Gestor de contenidos (CMS) para publicar y administrar las entradas de mi blog personal.'
      },
      'examen-virtual-en-linea': {
        title: 'Exámen Virtual en Línea',
        summary:
          'Es un sistema gestor de encuesta virtual para evaluar la atención al cliente de mesa de ayuda.'
      },
      'restaurante-sushi-delivery': {
        title: 'Restaurante Sushi Delivery',
        summary:
          'Aplicación móvil para pedir sushi a domicilio: carta, carrito y seguimiento del pedido.'
      }
    }
  },
  resume: {
    categories: [
      {
        id: 'education',
        title: 'Formación Educativa',
        items: [
          {
            title: 'Ingeniería de Software',
            date: '2022 - 2026',
            status: 'Egresado',
            place: 'Universidad Tecnológica del Perú - UTP',
            link: 'https://www.utp.edu.pe/',
            bullets: [
              'Arquitectura de software, bases de datos y metodologías ágiles.',
              'Proyectos integradores en Java, un videojuego en Godot y prácticas de criptografía.',
              'Se suman más de 8 años de experiencia profesional en desarrollo web y móvil.'
            ]
          },
          {
            title: 'Certificación de JavaScript Avanzado',
            date: '2023 - 2024',
            status: 'Certificado',
            place: 'Universidad Nacional Mayor de San Marcos - UNMSM',
            link: 'https://www.unmsm.edu.pe/',
            bullets: [
              'Asincronía, patrones de diseño y optimización de rendimiento.',
              'Código limpio y escalable con programación funcional y orientada a objetos.'
            ]
          },
          {
            title: 'Computación e Informática',
            date: '2012 - 2015',
            status: 'Egresado',
            place: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            bullets: [
              'Programación, bases de datos, redes y seguridad informática.',
              'Base técnica para diseñar, implementar y mantener soluciones de software.'
            ]
          }
        ]
      },
      {
        id: 'experience',
        title: 'Experiencia Profesional',
        items: [
          {
            title: 'Líder Técnico',
            date: '01/2026 - Presente',
            place: 'LimaTours SAC',
            link: 'https://www.limatours.com.pe/',
            bullets: [
              'Lidero un equipo de 3 personas que desarrolla y evoluciona las aplicaciones de gestión turística. (AWS + Serverless + TypeScript)',
              'Trabajamos con Spec Driven Development: la especificación escrita es la fuente de verdad y cada cambio se revisa contra ella.'
            ]
          },
          {
            title: 'Backend Developer',
            date: '04/2024 - 12/2025',
            place: 'LimaTours SAC',
            link: 'https://www.limatours.com.pe/',
            bullets: [
              'Desarrollé y evolucioné el producto de reservas por HyperGuest: las ventas mensuales crecieron un 1.400 %, de forma progresiva en año y medio.',
              'Desarrollo y mantenimiento de servicios backend para aplicaciones de gestión turística, asegurando alta disponibilidad y rendimiento. (AWS + Serverless + Node.js / PHP / TypeScript)',
              'Implementación de soluciones para optimizar procesos internos y mejorar la experiencia del usuario final. (DynamoDB + Lambda)'
            ]
          },
          {
            title: 'Backend Developer',
            date: '10/2023 - 03/2024',
            place: 'Softtek / Cliente: Rimac Seguros',
            link: 'https://www.softtek.com/es/',
            bullets: [
              'Di mantenimiento a los servicios de corredores de Rimac Seguros: pólizas, renovaciones, endosos y financiamientos. (AWS + Serverless + Node.js + TypeScript)',
              'Resolví desde la causa raíz bugs de alto impacto y los cubrí con pruebas unitarias. (AWS + Serverless + DynamoDB)'
            ]
          },
          {
            title: 'Backend Developer',
            date: '03/2022 - 09/2023',
            place:
              'Quality & Development Software SAC / Cliente: Empresas Jordan SA en Santiago - Chile',
            link: 'https://www.qdsgroup.com.pe/',
            bullets: [
              'Como parte del equipo de desarrollo, construí servicios B2C que orquestan canales para campañas de Email y SMS. (AWS API Gateway + Lambda + Step Functions + Node.js + TypeScript)',
              'Desarrollé el backend que administra flujos de trabajo automatizados y procesos batch (Scaler), desplegado en contenedores. (AWS ECR + EKS + Docker + NestJS + TypeScript)',
              'Participé en el servicio y la integración de acortamiento de URL, con backend y apoyo en frontend. (AWS CloudFormation + RDS + Node.js + Vue 3 + TypeScript)'
            ]
          },
          {
            title: 'Desarrollador Web Full Stack',
            date: '10/2018 - 09/2021',
            place: 'Securitec Peru S.A.C',
            link: 'https://www.securitec.pe/',
            bullets: [
              'Di mantenimiento a la aplicación de campañas de SMS masivos y mejoré sus colas de envío. (Laravel 5 + Node.js + Vue 2 + MySQL)',
              'Desarrollé la aplicación administrativa y el webphone instalable para gestionar campañas de llamadas VoIP. (Laravel 6 + Node.js + Vue 2 + MySQL)',
              'Sumé un producto nuevo al portafolio de la empresa: una plataforma de mensajería omnicanal que integra WhatsApp (Twilio), Telegram, Instagram, Messenger y chatbot, con pasarelas de pago PayU y PayPal. (Node.js + Vue 2 + MongoDB)'
            ]
          },
          {
            title: 'Analista y Desarrollador Web',
            date: '01/2018 - 09/2018',
            place: 'Corporación Sapia S.A',
            link: 'https://sapia.com.pe/',
            bullets: [
              'Analicé los requerimientos de las áreas usuarias y di mantenimiento al sistema de llamadas. (Node.js + Vue 2 + MySQL)',
              'Desarrollé un sistema de encuesta virtual. (Laravel 5 + Vue 2 + MySQL)'
            ]
          },
          {
            title: 'Desarrollador Web',
            date: '07/2016 - 12/2017',
            place: 'Centros Virtuales del Peru E.I.R.L',
            link: 'https://www.centrosvirtuales.com/',
            bullets: [
              'Dentro del mantenimiento del sitio web de reservas, creé un módulo para elegir espacios de coworking con selección visual, al estilo de las butacas de un cine. (Ionic 2 + BackboneJS + Bootstrap 3)',
              'Desarrollé «Súmate al Éxito», una aplicación web moderna que integra el nuevo módulo de reservas. (Laravel 4 + Node.js + Vue + MySQL)'
            ]
          },
          {
            title: 'Practicante Desarrollador Web',
            date: '01/2016 - 06/2016',
            place: 'Hacom S.A.C',
            link: 'http://www.hacom.com.pe/',
            bullets: [
              'Automaticé con scripts en Python la generación de reportes de estadísticas de localización satelital.'
            ]
          }
        ]
      }
    ]
  },
  contact: {
    intro:
      'Si deseas ponerte en contacto conmigo, a continuación encontrarás mi información básica para enviarme un mensaje, llamarme o escribirme un correo electrónico.'
  }
}
