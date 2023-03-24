export default {
  fullName: 'Alex Christian',
  Header: {
    menu: ['Home', 'About', 'Facts', 'Skills', 'Summary', 'Portfolio', 'Services', 'Testimonials', 'Contact', 'Curriculum Vitae'],
  },
  SectionMe: {
    h1: 'Alex Christian Quispe Roque',
    p: 'I am',
    span: ['passionate ❤️', 'logical 🔢', 'developer ‍💻'],
  },
  SectionAbout: {
    p: 'With over 7 years of experience in web development, I specialize in both Frontend and Backend technologies, making me a Full Stack developer. I have had the privilege of working with market-leading companies as well as startups in full growth mode, which has allowed me to face challenges and constantly learn. Furthermore, my experience as a digital entrepreneur has provided me with a more comprehensive and global perspective of technology businesses.',
    p2: 'Without realizing it, the years in technology go by very quickly so it is important to keep up to date and review the constant updates.',
    h3: 'Web Developer Full Stack',
    li: [
      {
        text: 'Web',
        value: 'https://alexchristianqr.github.io/portfolio/',
      },
      {
        text: 'Birthday',
        value: '22 of September',
      },
      {
        text: 'Location',
        value: 'Peru',
      },
      {
        text: 'Email',
        value: 'alexchristianqr@gmail.com',
      },
      {
        text: 'Freelancer',
        value: 'Available',
      },
      {
        text: 'Consulting',
        value: 'Available',
      },
    ],
  },
  SectionSkills: {
    p: 'Throughout all these years, I have used many technologies and lived many experiences. These have been very useful in developing functional, secure, and scalable software.',
  },
  SectionResume: {
    p: null,
    categories: [
      {
        title: 'Profile and Education',
        data: [
          {
            title: 'Profile',
            date: null,
            local: 'Full Stack Web Developer',
            link: 'https://alexchristianqr.github.io/portfolio/',
            description: [
              'As a self-taught professional with higher education, I have more than 7 years of experience in development, having created various applications that use frontend, backend, virtualization and cloud computing technologies. My profile combines academic training with a proactive attitude towards continuous learning, which allows me to always be up-to-date in the field of technology.',
            ],
          },
          {
            title: 'Computing and Information',
            date: '2012 - 2015',
            local: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            description: [
              'A software developer is a professional with technical skills in programming, databases, networking, and computer security, and soft skills such as critical thinking, problem solving, and teamwork, dedicated to program design, coding, implementation, testing, and maintenance. computers that meet the needs of the user. Committed to continuous improvement and adapt to changes in technology and the market.',
            ],
          },
          {
            title: 'Software Engineering',
            date: '2022 - present',
            local: 'Universidad Tecnológica del Peru - UTP',
            link: 'https://www.utp.edu.pe/',
            description: [
              'A software engineer is a professional with technical knowledge in programming, operating systems, databases, networks and computer security, capable of solving complex problems and adapting to technological changes and changing market needs. You have soft skills, such as creativity, teamwork, project management and customer orientation, to design, develop, test and maintain quality software that meets the needs of end users.',
            ],
          },
        ],
      },
      {
        title: 'Professional Experience',
        data: [
          {
            title: 'Backend Developer',
            date: '01/2022 - present',
            local: 'Software of quality and development',
            link: 'https://www.qdsgroup.com.pe/',
            description: [
              'Analyze data lake information to optimize reporting and statistical performance in applications.',
              'Deploy new microservices for business process automation with Serverless AWS, Lambda Functions, API Gateway, S3, Docker, Kubernetes.',
            ],
          },
          /*{
                      title: 'Desarrollador Web Full Stack',
                      date: '09/2021 - present',
                      local: 'Intellitec',
                      link: 'https://intellitec.pe/',
                      description: [
                        'Create a chatbot',
                        'Create an installable chat widget',
                        'Integrate APIs of Telegram, Instagram, WhatsApp with puppeteer, Messenger',
                        'Develop in frontend with vuejs, vuex and nuxtjs',
                        'Develop in backend with nodejs, express, mongoose, mongodb',
                        'Documentation in postman',
                        'Creating API services with Rest',
                        'API microservice creation with GraphQL and SOA',
                      ],
                    },*/
          {
            title: 'Full Stack Web Developer',
            date: '10/2018 - 09/2021',
            local: 'Securitec Peru S.A.C',
            link: 'https://www.securitec.pe/',
            description: [
              'Create a web application to manage mass SMS sending campaigns.',
              'Create an administrator web application and an installable client web application to manage VOIP call campaigns.',
              'Create a web application that integrates WhatsApp with Twilio, Telegram, Instagram, Facebook Messenger, Chatbot, payment gateway with PayU and Paypal.',
            ],
          },
          {
            title: 'Analyst and Web Developer',
            date: '01/2018 - 09/2018',
            local: 'Corporación Sapia S.A',
            link: 'https://sapia.com.pe/',
            description: [
              'Take the requirements of each project manager in their areas and give functionality to the customer service system.',
              'Develop a virtual survey system with laravel and vuejs to evaluate online customer service.',
            ],
          },
          {
            title: 'Web Developer',
            date: '07/2016 - 12/2017',
            local: 'Centros Virtuales del Peru E.I.R.L',
            link: 'https://www.centrosvirtuales.com/',
            description: [
              'Take the requirements for updates to the administrative system on the web and mobile reservations.',
              'Develop a CINEPLANET type COWORKING space reservation selection module for the web-based administrative system.',
              "Develop in frontend with angularjs in the development of the project 'SUMATE AL ÉXITO' an integrated reservation system.",
            ],
          },
          {
            title: 'Web Developer Intern',
            date: '01/2016 - 06/2016',
            local: 'Hacom S.A.C',
            link: 'http://www.hacom.com.pe/',
            description: ['Create automated python report scripts for satellite location statistics.'],
          },
        ],
      },
    ],
  },
  SectionPortfolio: {
    p: 'Throughout my career as a professional developer, I have had the opportunity to work on numerous personal and professional projects. Below are some of them.',
    data: [
      {
        type: 'mobile',
        title: 'Game apps',
        image: 'assets/img/portfolio/gameapps.jpg',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/game-apps/#/',
        repository: 'https://github.com/alexchristianqr/game-apps',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'landing',
        title: 'API No Oficial de WhatsApp',
        image: 'assets/img/portfolio/sharedapis.png',
        link: 'https://sharedapis.com/',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'mobile',
        title: 'Gmail clone is a hybrid mobile application to send emails, inbox and unread emails.',
        description: 'Demo web application.',
        image: 'assets/img/portfolio/clonegmail.png',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/gmail/',
        repository: 'https://github.com/alexchristianqr/gmail',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'mobile',
        title: 'Iframe template for mobile apps',
        description: 'Demo web application.',
        image: 'assets/img/portfolio/iframephone.png',
        link: 'https://alexchristianqr.github.io/iframephone/?src=',
        repository: 'https://github.com/alexchristianqr/iframephone',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },

      {
        type: 'app',
        title: 'Todo-list',
        description: 'Demo web application.',
        image: 'assets/img/portfolio/todolist.png',
        link: 'https://alexchristianqr.github.io/todolist/',
        repository: 'https://github.com/alexchristianqr/todolist',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'app',
        title: 'For you',
        description: 'Interactive demo web application.',
        image: 'assets/img/portfolio/foryou.png',
        link: 'https://alexchristianqr.github.io/iframephone/?src=https://alexchristianqr.github.io/foryou',
        repository: 'https://github.com/alexchristianqr/foryou',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'app',
        title: 'Platcon',
        description: 'It is a management system for bulk SMS shipments for marketing.',
        image: 'assets/img/portfolio/platcon.png',
        link: 'https://platcon.securitec.pe/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
          permission: false,
        },
      },

      {
        type: 'app',
        title: 'Ticker',
        description: 'It is a real-time chat system that integrates a WhatsApp API Twilio, Messenger, Instagram API.',
        image: 'assets/img/portfolio/ticker.png',
        link: 'https://app.ticker.pe/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Súmate al Éxito',
        description: 'It is a COWORKING room reservation management system.',
        image: 'assets/img/portfolio/sumatealexito.png',
        link: 'https://app.sumatealexito.com/login',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
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
          label: 'This repository is private',
          permission: false,
        },
      },

      {
        type: 'landing',
        title: 'Personal Portfolio',
        image: 'assets/img/portfolio/portfolio.png',
        link: 'https://alexchristianqr.github.io/portfolio/',
        repository: 'https://github.com/alexchristianqr/portfolio',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'app',
        title: 'Tasks CRM',
        description: 'It is a CRM that integrates the most used chat applications such as WhatsApp with QR, Telegram, Widget livechats.',
        image: 'assets/img/portfolio/taskscrm.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'microservice',
        title: 'API in postman',
        description: 'Crud API example exercise with use of postman in public mode.',
        image: 'assets/img/portfolio/api-colors-postman.png',
        link: 'https://documenter.getpostman.com/view/3683906/UVXonZoV',
        repository: 'https://github.com/alexchristianqr/api-colors',
        granted: {
          label: 'See public repository',
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
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'microservice',
        title: 'Main API - Tasks CRM',
        image: 'assets/img/portfolio/microservicio01.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Personal Blog',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/blog',
        repository: 'https://github.com/alexchristianqr/blog',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },

      {
        type: 'microservice',
        title: 'Billing API - Tasks CRM',
        image: 'assets/img/portfolio/microservicio02.png',
        link: 'https://wa.link/r28uwd',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'This repository is private',
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
          label: 'This repository is private',
          permission: false,
        },
      },
      {
        type: 'app',
        title: 'Personal CMS Blog',
        description: 'It is a personal blog on the server side with laravel and vuejs to be deployed in the digital ocean cloud.',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/cms-blog',
        repository: 'https://github.com/alexchristianqr/cms-blog',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },

      {
        type: 'app',
        title: 'Online Virtual Exam',
        description: 'It is a virtual survey manager system to evaluate help desk customer service.',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/virtual-exam',
        repository: 'https://github.com/alexchristianqr/virtual-exam',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'mobile',
        title: 'Sushi Delivery Restaurant',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/rollyroll-app',
        repository: 'https://github.com/alexchristianqr/rollyroll-app',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
    ],
  },
  SectionContact: {
    p: 'If you want to get in touch with me, below you will find my basic information to send me a message, call me, or write me an email.',
    contact: {
      text: 'Active Media',
      value: 'I am active by these means of communication, you can contact me at any time and I will answer.',
      location: {
        text: 'Location',
        value: 'Lima / Peru',
      },
      email: {
        text: 'Email',
        value: 'alexchristianqr@gmail.com',
      },
      phone: {
        text: 'Phone',
        value: '(+51) 955588297',
      },
      socialnetwork: {
        text: 'Social Networks',
        value: "Contact me by sending a message at any time and let's talk like good friends.",
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
        text: 'Full Name',
        value: null,
      },
      phone: {
        text: 'Phone',
        value: null,
      },
      email: {
        text: 'Email',
        value: null,
      },
      subject: {
        text: 'Subject',
        value: null,
      },
      message: {
        text: 'Message',
        value: null,
      },
      action: {
        text: 'Send Message',
        value: null,
      },
    },
  },
}
