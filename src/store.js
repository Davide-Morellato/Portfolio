import { reactive } from "vue";

export const store = reactive({
  languages: [
    {
      lang: "html",
      path: "/loghi/html-5.png",
    },
    {
      lang: "css",
      path: "/loghi/css.png",
    },
    {
      lang: "bootstrap",
      path: "/loghi/bootstrap.png",
    },
    {
      lang: "javascript",
      path: "/loghi/js.png",
    },
    {
      lang: "vue",
      path: "/loghi/vue.png",
    },
    {
      lang: "vite",
      path: "/loghi/vite.png",
    },
    {
      lang: "sass",
      path: "/loghi/sass.png",
    },
    {
      lang: "php",
      path: "/loghi/php.png",
    },
    {
      lang: "mysql",
      path: "/loghi/mysql.png",
    },
    {
      lang: "laravel",
      path: "/loghi/laravel.png",
    },
  ],

  projects: [
    {
      repo: "FizzBuzz",
      path: "/screen/fizzbuzz.png",
      description: 'Project involving the implementation of the FizzBuzz algorithm in Vanilla JavaScript, with subsequent visualisation of the results in a multicoloured HTML grid.',
      link: 'https://github.com/Davide-Morellato/js-fizzbuzz',
      techs: ['HTML5', 'CSS', 'Javascript']
    },
    {
      repo: "Dropbox",
      path: "/screen/dropbox.jpg",
      description: 'The project consists of creating a replica of the Dropbox Business landing page, including all its main functionalities and intuitive design.',
      link: 'https://github.com/Davide-Morellato/htmlcss-dropbox',
      techs: ['HTML5', 'CSS']

    },
    {
      repo: "Campo Minato",
      path: "/screen/campo_minato.png",
      description: 'The project is a web application based on the classic Minefield game, in which the player must avoid mines and reveal all safe grid cells.',
      link: 'https://github.com/Davide-Morellato/js-campominato-dom',
      techs: ['HTML5', 'CSS3', 'Javascript']
    },
    {
      repo: "Slider",
      path: "/screen/slider.png",
      description: 'The project consists of the creation of an image slider, with both autoplay and arrow scrolling, and a button for changing the direction of automatic scrolling.',
      link: 'https://github.com/Davide-Morellato/vue-slider',
      techs: ['HTML5', 'CSS3', 'Javascript']
    },
    {
      repo: "Boolzapp",
      path: "/screen/boolzapp.png",
      description: 'The design is a replica of the popular messaging app WhatsApp, with a fully responsive design. The app allows users to browse through chats, search for specific conversations via a dedicated search bar, and also includes an automatic message reply feature.',
      link: 'https://github.com/Davide-Morellato/vue-boolzapp',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Vue']
    },
    {
      repo: "Boolando",
      path: "/screen/boolando.png",
      description: 'Project consisting of a replica of the Zalando site. The products shown on the page are obtained through the use of the Axios library.',
      link: 'https://github.com/Davide-Morellato/vite-boolando',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'SCSS']
    },
    {
      repo: "Portfolio Simulation",
      path: "/screen/portfolio.png",
      description: 'Project consisting in the design of a portfolio through which to show one\`s work, by making calls to Axios from the associated back-end project: laravel-api (github).',
      link: 'https://github.com/Davide-Morellato/vite-boolfolio',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'SCSS']
    },
    {
      repo: "Game Creator",
      path: "/screen/game_creator.png",
      description: 'First team project. The application, developed with Laravel, allows new characters to be created, their details to be changed, and all available weapons and character types to be displayed.',
      link: 'https://github.com/Davide-Morellato/game-creator',
      techs: ['PHP', 'Laravel', 'HTML5', 'SCSS']
    },
    {
      repo: "Deliveboo",
      subTitle: "Front-End",
      path: "/screen/deliveboo.png",
      description: 'Final Course Front-End Project. A food delivery web-app designed for ordering one\'s favourite dishes from the comfort of one\'s own home. Users can search for a restaurant, order, see the summary in their shopping cart and finally pay.',
      link: 'https://github.com/Davide-Morellato/deliveboo',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'SCSS']
    },
    {
      repo: "Deliveboo",
      subTitle: "Back-End",
      path: "/screen/deliveboo-api.jpg",
      description: 'Final Course Back End Project. An administrative web-app designed for restaurant partners of the Deliveboo site.Here users can manage their restaurant: including orders and menus.',
      link: 'https://github.com/Davide-Morellato/deliveboo-api',
      techs: ['PHP', 'Laravel', 'HTML5', 'CSS3']
    },
    {
      repo: "Kart Crash",
      path: "/screen/kart_crash.png",
      description: 'Self-made project in Vanilla Javascript, for the creation of a score-based karting game.But watch out for obstacles!',
      link: 'https://github.com/Davide-Morellato/Kart-game',
      techs: ['HTML5', 'CSS3', 'Javascript']
    },
    {
      repo: "Portfolio",
      path: "/screen/actual_portfolio.png",
      description: 'Personal Portfolio site where I talk about myself, present my projects and everything that has been my education and work.',
      link: 'https://github.com/Davide-Morellato/Portfolio',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'SCSS']
    },
  ],
});
