// Підключаємо технологію express для back-end сервера
const express = require('express');
// Створюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

// ================================================================




var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Харків вулиця Сумська 25'
};

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    Linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}


// ================================================================

// router.get створює нам один ендпоїнт

// Тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // Сюди вводимо назву файлу з контейнером
  res.render('index', {});
  // Сюди вводимо JSON дані
});

// ================================================================

// Тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  // Сюди вводимо назву файлу з контейнером
  res.render('summary', {

    page: {
      title: 'Resume |summary ',
    },

    header,

    main: {
      Summary: {
        title: 'Summary',
        text:
          'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text:
          'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  });
});

// ================================================================
// Тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // Сюди вводимо назву файлу з контейнером
  res.render('skills', {

    page: {
      title: 'Resume |skills',
    },

    header,

    main: {
      skills: [
        {name: 'HTML',
         point: 10,
         isTop: true,
       },
       {name: 'Handlebars',
         point: 8,
         isTop: true,
       },
       {name: 'VS Code & NPM',
         point: 9,
         isTop: false,
       },
       {name: 'Git & Terminal',
        point: 7,
       },
       {name: 'React.js',
        point: 0,
       },
       {name: 'PHP',
        point: null,
      },
      ],
      hobbies: [
        {name: 'Футбол',
         isMain: true
        },
        {name: 'Хокей',
        isMain: false
       },
       {name: 'Рибaлка',
        isMain: false
       },
      ],
    },

    footer,
  });
});

// Тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  // Сюди вводимо назву файлу з контейнером
  res.render('Education', {

    page: {
      title: 'Resume | Education ',
    },

    header,

    main: {
      education: [
        {name: 'ХАІ',
         isEnd: true,
       },
        {name: 'ХУРЕ',
         isEnd: true,
       },
        {name: 'ХДУХТ',
         isEnd: false,
       },
        {name: 'ХПУ',
         isEnd: true,
       },
       {name: 'ХАДУ',
        isEnd: false,
      },
      ],

      certificates: [

        {name:'Certificates 1',
         id:'000123',
      },
        {name:'Certificates 2',
         id:'000456',
      },
        {name:'Certificates 3',
         id:'000789',
      },
      ],
    },

    footer,
  });
});

// ================================================================
// Тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  // Сюди вводимо назву файлу з контейнером
  res.render('work', {

    layout:'big',

    page: {
      title: 'Resume | Work ',
    },

    header,

    main: {
      works: [
        {
        position: 'Junior Fullsrark Developer',
        company: {
          name:'It Brains',
          url: 'https://it-brains.com.ua/',
        },
        duration: {
          from: '10.10.2022',
          to: '22.03.2023'
        },
        projectAmount: 3,

        projects:[
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Airdnd competitor',
              stacks: [
                  {
                  name: 'React.js',
                  },
                  {
                    name: 'HTML / CSS',
                  },
                  {
                    name: 'Node.js',
                  },
              ],
              awards: [
                {
                  name: 'Background verification',
                },
                {
                  name: 'Preparing SEO',
                },
              ],
              stackAmount:'6',
              awardAmoGnt:'5',
            },
        ],
      },
    ],
    },

    footer,
  });
});

// Підключаємо роутер до бек-енду
module.exports = router;
