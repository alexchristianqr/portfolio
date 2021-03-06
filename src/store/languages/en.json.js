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
    p: 'I am full stack web developer with more than 4 years of experience using frontend and backend technologies. I have worked in high growth startup companies where challenges and day-to-day life are variable and high learning. I am also a digital entrepreneur for learn more about the technology entrepreneurial businesses.',
    p2: 'Without realizing it, the years in technology go by very quickly so it is important to keep up to date and review the constant updates.',
    h3: 'Web Developer Full Stack',
    li: [
      {
        text: 'Web',
        value: 'https://alexchristianqr.github.io/portfolio/',
      },
      {
        text: 'Birthday',
        value: '22 de Setiembre de 1993',
      },
      {
        text: 'Phone',
        value: '(+51) 955588297',
      },
      {
        text: 'Location',
        value: 'Lima / Peru',
      },
      {
        text: 'Age',
        value: '28',
      },
      {
        text: 'Email',
        value: 'alexchristianqr@gmail.com',
      },
      {
        text: 'Freelance',
        value: 'Unavailable',
      },
    ],
  },
  SectionSkills: {
    p: 'Throughout all these years there are many technologies that I have tried and many experiences that I have lived. But very useful to develop functional, secure and scalable software.',
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
              "Professional with studies and self-taught in my free time I am a web developer with more than 4 years of experience developing applications for frontend, backend, API's and microservices.",
              'https://www.youtube.com/c/IdatOficial',
              'https://www.youtube.com/c/Platzi',
              'https://www.youtube.com/c/EDteam',
            ],
          },
          {
            title: 'Computing and Information',
            date: '2012 - 2015',
            local: 'Instituto Privado Superior Tecnológico - IDAT',
            link: 'https://www.idat.edu.pe/',
            description: [
              'A very recognized private technology institution belonging to the Intercorp group.',
              'Programming, Android, Networking, Operating Systems, English 3, Mathematics 3, Accounting and Statistics are some of the most outstanding courses.',
            ],
          },
          {
            title: 'Software Engineering',
            date: '2022',
            local: 'Universidad Tecnológica del Peru - UTP',
            link: 'https://www.utp.edu.pe/',
            description: [
              'We are international comprehensive programs and scholarships in the best universities in the world.',
              'Mathematics, English, Web programming, Interactive game development, Computer security, Networks, Cryptography, Business intelligence, Artificial intelligence.',
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
    p: 'These are just some of the personal and work projects that I have developed throughout my years as a professional developer.',
    data: [
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
        link: 'https://alexchristianqr.github.io/foryou/',
        repository: 'https://github.com/alexchristianqr/foryou',
        granted: {
          label: 'See public repository',
          permission: true,
        },
      },
      {
        type: 'app',
        title: 'Orbidata',
        image: 'assets/img/portfolio/orbidata.png',
        description: 'It is a system to consult information of a person data for contact center.',
        link: 'https://orbidata.pe/',
        repository: 'https://wa.link/r28uwd',
        granted: {
          label: 'Request permission to view private repository',
          permission: false,
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
          label: 'Request permission to view private repository',
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
        title: 'GMAIL clone',
        image: 'assets/img/portfolio/github.png',
        link: 'https://github.com/alexchristianqr/gmail-clone-app',
        repository: 'https://github.com/alexchristianqr/gmail-clone-app',
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
    p: 'Here you have all my basic information to be able to write me a message, call me or send me an email.',
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
            text: 'bx bxl-whatsapp',
            value: 'https://wa.link/r28uwd',
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
