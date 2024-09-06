import { reactive } from "vue";

export const store = reactive({
  languages: [
    {
      lang: "html",
      path: "/loghi/html-5.png",
    },
    {
      lang: "css",
      path: "../../public/loghi/css.png",
    },
    {
      lang: "bootstrap",
      path: "../../public/loghi/bootstrap.png",
    },
    {
      lang: "javascript",
      path: "../../public/loghi/js.png",
    },
    {
      lang: "vue",
      path: "../../public/loghi/vue.png",
    },
    {
      lang: "vite",
      path: "../../public/loghi/vite.png",
    },
    {
      lang: "sass",
      path: "../../public/loghi/sass.png",
    },
    {
      lang: "php",
      path: "../../public/loghi/php.png",
    },
    {
      lang: "mysql",
      path: "../../public/loghi/mysql.png",
    },
    {
      lang: "laravel",
      path: "../../public/loghi/laravel.png",
    },
  ],

  projects: [
    {
      repo: "FizzBuzz",
      path: "../../public/screen/fizzbuzz.png",
      description: 'Project involving the implementation of the FizzBuzz algorithm in Vanilla JavaScript, with subsequent visualisation of the results in a multicoloured HTML grid.',
      link: 'https://github.com/Davide-Morellato/js-fizzbuzz'
    },
    {
      repo: "Dropbox",
      path: "../../public/screen/dropbox.jpg",
      description: 'The project consists of creating a replica of the Dropbox Business landing page, including all its main functionalities and intuitive design.',
      link: 'https://github.com/Davide-Morellato/htmlcss-dropbox'
    },
    {
      repo: "Campo Minato",
      path: "../../public/screen/campo_minato.png",
      description: 'The project is a web application based on the classic Minefield game, in which the player must avoid mines and reveal all safe grid cells.',
      link: 'https://github.com/Davide-Morellato/js-campominato-dom'
    },
    {
      repo: "Slider",
      path: "../../public/screen/slider.png",
      description: 'The project consists of the creation of an image slider, with both autoplay and arrow scrolling, and a button for changing the direction of automatic scrolling.',
      link: 'https://github.com/Davide-Morellato/vue-slider'
    },
    {
      repo: "Boolzapp",
      path: "../../public/screen/boolzapp.png",
      description: 'The design is a replica of the popular messaging app WhatsApp, with a fully responsive design. The app allows users to browse through chats, search for specific conversations via a dedicated search bar, and also includes an automatic message reply feature.',
      link: 'https://github.com/Davide-Morellato/vue-boolzapp'
    },
    {
      repo: "Boolando",
      path: "../../public/screen/boolando.png",
      description: 'Project consisting of a replica of the Zalando site. The products shown on the page are obtained through the use of the Axios library.',
      link: 'https://github.com/Davide-Morellato/vite-boolando'
    },
    {
      repo: "Portfolio Simulation",
      path: "../../public/screen/portfolio.png",
      description: 'Project consisting in the design of a portfolio through which to show one\`s work, by making calls to Axios from the associated <a href="https://github.com/Davide-Morellato/laravel-api">back-end project</a>.',
      link: 'https://github.com/Davide-Morellato/vite-boolfolio'
    },
    {
      repo: "Game Creator",
      path: "../../public/screen/game_creator.png",
      description: 'First team project. The application, developed with Laravel, allows new characters to be created, their details to be changed, and all available weapons and character types to be displayed.',
      link: 'https://github.com/Davide-Morellato/'
    },
    {
      repo: "Deliveboo",
      subTitle: "Front-End",
      path: "../../public/screen/deliveboo.png",
      description: 'Final Course Front-End Project. A food delivery web-app designed for ordering one\'s favourite dishes from the comfort of one\'s own home. Users can search for a restaurant, order, see the summary in their shopping cart and finally pay.',
      link: 'https://github.com/Davide-Morellato/'
    },
    {
      repo: "Deliveboo",
      subTitle: "Back-End",
      path: "../../public/screen/deliveboo-api.jpg",
      description: 'Final Course Back End Project. An administrative web-app designed for restaurant partners of the Deliveboo site.Here users can manage their restaurant: including orders and menus.',
      link: 'https://github.com/Davide-Morellato/'
    },
    {
      repo: "Kart Crash",
      path: "../../public/screen/kart_crash.png",
      description: 'Self-made project in Vanilla Javascript, for the creation of a score-based karting game.But watch out for obstacles!',
      link: 'https://github.com/Davide-Morellato/Kart-game'
    },
    {
      repo: "Portfolio",
      path: "../../public/screen/actual_portfolio.png",
      description: 'Personal Portfolio site where I talk about myself, present my projects and everything that has been my education and work.',
      link: 'https://github.com/Davide-Morellato/Portfolio'
    },
  ],
  
  // fonts: [
  //   //'
  //   {
  //     family: "MouldyCheese-Regular",
  //     path: "../../../public/fonts/mouldy_cheese/MouldyCheese-Regular.woff",
  //   },
  //   {
  //     family: "WorkforceCombinePERSONALUSE-Regular",
  //     path: "../../../public/fonts/workforceCombine_font_ready/WorkforceCombinePERSONALUSE-Regular.ttf",
  //   },
  //   {
  //     family: "TiltPrism-Regular",
  //     path: "../../../public/fonts/tiltPrism_font_ready/TiltPrism-Regular.ttf",
  //   },
  //   {
  //     family: "Gluten-Thin",
  //     path: "../../../public/fonts/gluten_font_ready/Gluten-Thin.ttf",
  //   },
  //   {
  //     family: "Pleasewritemeasong",
  //     path: "../../../public/fonts/handwrite/Pleasewritemeasong.woff",
  //   },
  //   {
  //     family: "Danfo-Regular",
  //     path: "../../../public/fonts/danfo_font_ready/Danfo-Regular.ttf",
  //   },
  //   {
  //     family: "SeductiveHeightBold-Bold",
  //     path: "../../../public/fonts/seductiveHeight_font_ready/SeductiveHeightBold-Bold.woff",
  //   },
  // ],

  // icons: [
  //   {
  //     icon: "octopus_minimal",
  //     path: "../../public/loghi/octopus_minimal.png",
  //   },
  //   {
  //     icon: "octopus_colored",
  //     path: "../../public/loghi/octopus_colored.png",
  //   },
  //   {
  //     icon: "bulb-off",
  //     path: "../../public/loghi/bulb-off.png",
  //   },
  //   {
  //     icon: "bulb-on",
  //     path: "../../public/loghi/bulb-on.png",
  //   },
  //   {
  //     icon: "cat",
  //     path: "../../public/loghi/cat.png",
  //   },
  //   {
  //     icon: "github_head",
  //     path: "../../public/loghi/github_head.png",
  //   },
  //   {
  //     icon: "linkedin",
  //     path: "../../public/loghi/linkedin_colored.png",
  //   },
  // ], 
  // picture: [
  //   {
  //     image: "me",
  //     path: "../../public/img/picture.jpg",
  //   },
  // ],
  // links: [
  //   {
  //     github: 'https://github.com/Davide-Morellato',
  //     linkedin: 'https://www.linkedin.com/in/davide-m-4826ab177',
  //     email:'mailto:morellato.davide@yahoo.it',
  //     cv: '../../../public/download/Davide Morellato_CV_en.pdf',
  //     certificate: '../../../public/download/Certificato_Full_Stack_Web_Development.pdf'
  //   }
  // ],
});
