export default {
  fullName: 'Alex Christian',
  Header: {
    menu: ['Inicio', 'Perfil', 'Hechos', 'Habilidades', 'Resumen', 'Portafolio', 'Servicios', 'Testimonios', 'Contacto', 'Curriculum Vitae'],
  },
  SectionMe: {
    h1: 'Alex Christian Quispe Roque',
    p: 'Soy',
    span: ['apasionado', 'lógico', 'desarrollador'],
  },
  SectionAbout: {
    p: 'Soy un Desarrollador de Aplicaciones apasionado por resolver problemas y crear soluciones innovadoras. Cuento con más de 5 años de experiencia en el desarrollo de software. Me destaco por mi capacidad para trabajar en equipo, comunicarme efectivamente y entregar soluciones de alta calidad dentro de los plazos establecidos. Estoy comprometido con mi carrera, los desafíos super retadores y dispuesto siempre a enseñar y aprender.',
    p2: 'Sin darte cuenta los años en tecnología pasan muy rápido por eso es importante mantenerte actualizado y revisando las contantes actualizaciones.',
    h3: 'Desarrollador Web Full Stack',
    li: [
      {
        text: 'Web',
        value: 'https://alexchristianqr.github.io/portfolio/',
      },
      {
        text: 'Cumpleaños',
        value: '22 de Setiembre',
      },
      {
        text: 'Ubicación',
        value: 'Peru',
      },
      {
        text: 'Email',
        value: 'alexchristianqr@gmail.com',
      },
      {
        text: 'Freelancer',
        value: 'Disponible',
      },
      {
        text: 'Asesoria',
        value: 'Disponible',
      },
    ],
  },
  SectionSkills: {
    p: 'A lo largo de todos estos años, he utilizado muchas tecnologías y vivido muchas experiencias. Estas han sido de gran utilidad en el desarrollo de software funcional, seguro y escalable.',
  },
  SectionResume: {
    p: null,
    categories: [
      {
        title: 'Formación Educativa',
        data: [
          {
            title: 'Ingenieria de Software',
            date: '2022 - presente',
            local: 'Universidad Tecnológica del Peru - UTP',
            link: 'https://www.utp.edu.pe/',
            description: [
              'Un ingeniero de software es un profesional con conocimientos técnicos en programación, sistemas operativos, bases de datos, redes y seguridad informática, capaz de resolver problemas complejos y adaptarse a los cambios tecnológicos y a las necesidades cambiantes del mercado. Tiene habilidades blandas, como la creatividad, trabajo en equipo, gestión de proyectos y orientación al cliente, para diseñar, desarrollar, probar y mantener software de calidad que satisfaga las necesidades de los usuarios finales.',
            ],
          },
          {
            title: 'Computación e Informática',
            date: '2012 - 2015',
            local: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            description: [
              'Un desarrollador de software es un profesional con habilidades técnicas en programación, bases de datos, redes y seguridad informática, y habilidades blandas como pensamiento crítico, resolución de problemas y trabajo en equipo, dedicado al diseño, codificación, implementación, pruebas y mantenimiento de programas informáticos que cumplan con las necesidades del usuario. Comprometido con la mejora continua y adaptarse a los cambios en la tecnología y el mercado.',
            ],
          },
        ],
      },
      {
        title: 'Experiencia Profesional',
        data: [
          {
            title: 'Backend Developer',
            date: '10/2023 - Presente',
            local: 'Softtek / Cliente: Rimac Seguros',
            link: 'https://www.softtek.com/es/',
            description: [
              'Mantenimiento general de los servicios de corredores (Pólizas, Renovaciones, Endosos, Financiamientos). (AWS + Serverless + Nodejs + Typescript)',
              'Soluciones raíz de bugs de alto impacto. (AWS + Serverless + DynamoDB + Unit Tests)',
            ],
          },
          {
            title: 'Backend Developer',
            date: '03/2022 - 09/2023',
            local: 'Quality & Development Software SAC / Cliente: Empresas Jordan SA en Santiago - Chile',
            link: 'https://www.qdsgroup.com.pe/',
            description: [
              'Implementación de servicios B2C de orquestación de canales para campañas de Email y SMS. (AWS Api Gateway + Lambda Functions + AWS Step Functions + NodeJS + Typescript)',
              'Desarrollo en backend para administrar eficientemente los flujos de trabajo automatizado (procesos batch en Scaler). (AWS ECR + AWS EKS + Docker + NestJS + Typescript)',
              'Desarrollo en backend y apoyo en frontend el servicio e integración para el acortamiento de URL. (AWS Cloud Formation + AWS RDS + Nodejs + Vue 3 + Typescript)',
            ],
          },
          /*{
                    "title": "Desarrollador Web Full Stack",
                    "date": "09/2021 - actualidad",
                    "local": "Intellitec",
                    "link": "https://intellitec.pe/",
                    "description": [
                      "Crear un chatbot",
                      "Crear un widget chat instalable",
                      "Integrar API’s de Telegram, Instagram, WhatsApp con puppeteer, Messenger",
                      "Desarrollar en frontend con vuejs, vuex y nuxtjs",
                      "Desarrollar en backend con nodejs, express, mongoose, mongodb",
                      "Documentación en postman",
                      "Creación de servicios API con Rest",
                      "Creación de microservicio API con GraphQL y SOA"
                    ]
                  },*/
          {
            title: 'Desarrollador Web Full Stack',
            date: '10/2018 - 09/2021',
            local: 'Securitec Peru S.A.C',
            link: 'https://www.securitec.pe/',
            description: [
              'Mantenimiento de aplicación web para gestionar campañas de envío de SMS masivos y mejorar las colas de envío. (Laravel 5 + Nodejs + Vue 2 + MySQL).',
              'Desarrollo de aplicación web administrativa y webphone cliente instalable para gestionar campañas de llamadas VOIP. (Laravel 6 + Nodejs + Vue 2 + MySQL)',
              'Desarrollo de aplicación web que integra API WhatsApp con Twilio, Telegram, Instagram, Facebook Messenger, Chatbot, pasarela de pagos con PayU y Paypal. (Nodejs + Vue 2 + MongoDB)',
            ],
          },
          {
            title: 'Analista y Desarrollador Web',
            date: '01/2018 - 09/2018',
            local: 'Corporación Sapia S.A',
            link: 'https://sapia.com.pe/',
            description: [
              'Analizar los requerimientos de las áreas correspondientes y brindar el mantenimiento correcto al sistema de llamadas. (Nodejs + Vue 2 + MySQL)',
              'Desarrollo de un sistema de encuesta virtual. (Laravel 5 + Vue 2 + MySQL)',
            ],
          },
          {
            title: 'Desarrollador Web',
            date: '07/2016 - 12/2017',
            local: 'Centros Virtuales del Peru E.I.R.L',
            link: 'https://www.centrosvirtuales.com/',
            description: [
              'Como parte del mantenimiento del sitema web de reservas, crear un modulo de selección de reserva de espacios COWORKING tipo cineplanet. (Ionic 2 + BackboneJS + Bootstrap 3)',
              "Desarrollo de la aplicación web moderna 'SUMATE AL ÉXITO' que integra el nuevo modulo de reservas. (Laravel 4 + Nodejs + Vue + MySQL)",
            ],
          },
          {
            title: 'Practicante Desarrollador Web',
            date: '01/2016 - 06/2016',
            local: 'Hacom S.A.C',
            link: 'http://www.hacom.com.pe/',
            description: ['Crear scripts automatizados de reportes con python para las estadísticas de localización satelital.'],
          },
        ],
      },
    ],
  },
  SectionPortfolio: {
    p: 'A lo largo de mi carrera como desarrollador profesional, he tenido la oportunidad de trabajar en numerosos proyectos laborales y personales. A continuación, te presento algunos de ellos.',
    data: [
      {
        type: 'mobile',
        title: 'Game apps',
        description: `<div class="content-text">Es una aplicación web interactiva de juegos clásicos. Aquellos juegos que tuvieron su época dorada en los años 95 al 2000. La app está diseñada para ejecutarse por la web de manera responsiva.</div><div class="content-list"><div>Lista de juegos disponibles:</div><ul><li><b>Tres en linea</b></li></ul></div><div class="content-text"><div><a href="https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/game-apps/#/" target="_blank">Link del sitio web</a></div><div><a href="https://github.com/alexchristianqr/game-apps" target="_blank">Link del repositorio en github</a></div></div><div class="content-icons"><div class="row"><div class="col-3"><div class="icon-angular"></div></div><div class="col-3"><div class="icon-firebase"></div></div><div class="col-3"><div class="icon-typescript"></div></div><div class="col-3"><div class="icon-material-design"></div></div><div class="col-3"><div class="icon-git"></div></div></div></div>`,
        image: 'assets/img/portfolio/gameapps.jpg',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/game-apps/#/',
        repository: 'https://github.com/alexchristianqr/game-apps',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
      {
        type: 'landing',
        title: 'API de WhatsApp B2B',
        description: `<div class='content-text'>Es un sitio web landing page para ofrecer el servicio de integración de la API no oficial de WhatsApp.</div><div class="content-text"><div><a href="https://sharedapis.com/" target="_blank">Link del sitio web</a></div><div><a href="https://wa.link/r28uwd" target="_blank">Link del repositorio en github</a></div></div><div class="content-icons"><div class="row"><div class="col-3"><div class="icon-nuxtjs"></div></div><div class="col-3"><div class="icon-vue"></div></div><div class="col-3"><div class="icon-javascript"></div></div><div class="col-3"><div class="icon-git"></div></div></div></div>`,
        image: 'assets/img/portfolio/sharedapis.png',
        link: 'https://sharedapis.com/',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'mobile',
        title: 'Clone de Gmail',
        description: `<div class="content-text">Es una aplicación móvil hibrida para enviar emails, bandeja de entrada y correos no leidos.</div><div class="content-text"><div><a href="https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/gmail/" target="_blank">Link del sitio web</a></div><div><a href="https://github.com/alexchristianqr/gmail" target="_blank">Link del repositorio en github</a></div></div><div class="content-icons"><div class="row"><div class="col-3"><div class="icon-ionic"></div></div><div class="col-3"><div class="icon-angular"></div></div><div class="col-3"><div class="icon-typescript"></div></div><div class="col-3"><div class="icon-git"></div></div></div></div>`,
        image: 'assets/img/portfolio/gmailclone.jpg',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/gmail-ghpages/',
        repository: 'https://github.com/alexchristianqr/gmail-ghpages',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
      {
        type: 'mobile',
        title: 'Iframe',
        description: `<div class="content-text">Es una aplicación web que sirve para enmascarar otras aplicaciones y puedan visualizarse de manera responsiva.</div><div class="content-text"><div><a href="https://alexchristianqr.github.io/iframephone/?src=" target="_blank">Link del sitio web</a></div><div><a href="https://github.com/alexchristianqr/iframephone" target="_blank">Link del repositorio en github</a></div></div><div class="content-icons"><div class="row"><div class="col-3"><div class="icon-javascript"></div></div><div class="col-3"><div class="icon-html5"></div></div><div class="col-3"><div class="icon-css"></div></div><div class="col-3"><div class="icon-git"></div></div></div></div>`,
        image: 'assets/img/portfolio/iframephone.png',
        link: 'https://alexchristianqr.github.io/iframephone/?src=',
        repository: 'https://github.com/alexchristianqr/iframephone',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },

      {
        type: 'app',
        title: 'Tasks CRM',
        description: `<div class="content-text">Es una aplicación web diseñado como una plataforma SaaS (Software as a Service). Este CRM integra las aplicaciones de chat mas utilizadas como WhatsApp con codigo QR, Facebook Messenger, Instagram, Telegram, Widget livechats y Chatbots.</div><div class="content-text"><div><a href="https://wa.link/r28uwd" target="_blank">Link del sitio web</a></div><div><a href="https://wa.link/r28uwd" target="_blank">Link del repositorio en github</a></div></div><div class="content-icons"><div class="row"><div class="col-3"><div class="icon-vue"></div></div><div class="col-3"><div class="icon-javascript"></div></div><div class="col-3"><div class="icon-html5"></div></div><div class="col-3"><div class="icon-git"></div></div><div class="col-3"><div class="icon-bootstrap"></div></div></div></div>`,
        image: 'assets/img/portfolio/taskscrm.jpg',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Lista de tareas',
        description: 'Aplicación web demostrativa.',
        image: 'assets/img/portfolio/todolist.png',
        link: 'https://alexchristianqr.github.io/todolist/',
        repository: 'https://github.com/alexchristianqr/todolist',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
      {
        type: 'app',
        title: 'Para ti',
        description: 'Aplicación web demostrativa interactiva.',
        image: 'assets/img/portfolio/foryou.png',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/foryou',
        repository: 'https://github.com/alexchristianqr/foryou',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },

      {
        type: 'app',
        title: 'Platcon',
        description: 'Es un sistema gestor de envíos de SMS masivo para marketing.',
        image: 'assets/img/portfolio/platcon.png',
        link: 'https://platcon.securitec.pe/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Ticker',
        description: 'Es un sistema de chat en tiempo real que integra una API de Whatsapp API Twilio, Messenger, Instagram.',
        image: 'assets/img/portfolio/ticker.png',
        link: 'https://app.ticker.pe/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Súmate al Éxito',
        description: 'Es un sistema gestor de administración de reservas de salas COWORKING.',
        image: 'assets/img/portfolio/sumatealexito.png',
        link: 'https://app.sumatealexito.com/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },

      {
        type: 'landing',
        title: 'Intellitec',
        image: 'assets/img/portfolio/intellitec.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'landing',
        title: 'Portafolio Personal',
        image: 'assets/img/portfolio/portfolio.png',
        link: 'https://alexchristianqr.github.io/portfolio/',
        repository: 'https://github.com/alexchristianqr/portfolio',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
      {
        type: 'microservice',
        title: 'API en postman',
        description: 'API crud ejercicio de ejemplo  con uso de postman en modo público.',
        image: 'assets/img/portfolio/api-colors-postman.png',
        link: 'https://documenter.getpostman.com/view/3683906/UVXonZoV',
        repository: 'https://github.com/alexchristianqr/api-colors',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },

      {
        type: 'microservice',
        title: 'API GraphQL - Tasks CRM',
        image: 'assets/img/portfolio/graphqlapi.png',
        link: 'https://documenter.getpostman.com/view/3683906/UVCCfisV',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'microservice',
        title: 'API Principal - Tasks CRM',
        image: 'assets/img/portfolio/microservicio01.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Blog Personal',
        description: 'Es un blog personal en el lado del servidor con laravel y vuejs para desplegarse en el cloud de digital ocean.',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/blog',
        repository: 'https://github.com/alexchristianqr/blog',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },

      {
        type: 'microservice',
        title: 'API Facturación - Tasks CRM',
        image: 'assets/img/portfolio/microservicio02.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'microservice',
        title: 'API Socket - Tasks CRM',
        image: 'assets/img/portfolio/microservicio03.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Este repositorio es privado',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Blog CMS Personal',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/cms-blog',
        repository: 'https://github.com/alexchristianqr/cms-blog',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },

      {
        type: 'app',
        title: 'Exámen Virtual en Línea',
        description: 'Es un sistema gestor de encuesta virtual para evaluar la atención al cliente de mesa de ayuda.',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/virtual-exam',
        repository: 'https://github.com/alexchristianqr/virtual-exam',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
      {
        type: 'mobile',
        title: 'Restaurante Sushi Delivery',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/rollyroll-app',
        repository: 'https://github.com/alexchristianqr/rollyroll-app',
        granted: {
          label: 'Ver repositorio público',
          permission: true,
        },
      },
    ],
  },
  SectionContact: {
    p: 'Si deseas ponerte en contacto conmigo, a continuación encontrarás mi información básica para enviarme un mensaje, llamarme o escribirme un correo electrónico.',
    contact: {
      text: 'Medios Activos',
      value: 'Estoy activo por estos medios de comunicación, puedes contactarme en cualquier momento y contestaré.',
      telegram: {
        text: 'Telegram',
        value: '1',
      },
      whatsapp: {
        text: 'WhatsApp',
        value: '1',
      },
      messenger: {
        text: 'Messenger',
        value: '1',
      },
      location: {
        text: 'Ubicación',
        value: 'Peru',
      },
      email: {
        text: 'Email',
        value: 'alexchristianqr@gmail.com',
      },
      phone: {
        text: 'WhatsApp',
        value: '(+51) 955588297',
      },
      socialnetwork: {
        text: 'Redes Sociales',
        value: 'Contáctame enviando un mensaje en cualquier momento y conversemos como buenos amigos.',
        networks: [
          {
            text: 'bx bxl-linkedin',
            value: 'https://linkedin.com/in/alexchristianqr/',
          },
          {
            text: 'bx bxl-github',
            value: 'https://github.com/alexchristianqr',
          },
          {
            text: 'bx bxl-facebook',
            value: 'https://facebook.com/alexchristianqr/',
          },
          {
            text: 'bx bxl-twitter',
            value: 'https://twitter.com/alexchristianqr/',
          },
        ],
      },
    },
    maps: null,
    sendMessage: {
      name: {
        text: 'Nombre',
        value: null,
      },
      phone: {
        text: 'Teléfono',
        value: null,
      },
      email: {
        text: 'Email',
        value: null,
      },
      subject: {
        text: 'Asunto',
        value: null,
      },
      message: {
        text: 'Mensaje',
        value: null,
      },
      action: {
        text: 'Enviar mensaje',
        value: null,
      },
    },
  },
}
