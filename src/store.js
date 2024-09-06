import { reactive } from "vue";

export const store = reactive({
  fonts: [
    //'
    {
      family: "MouldyCheese-Regular",
      path: "../../../public/fonts/mouldy_cheese/MouldyCheese-Regular.woff",
    },
    {
      family: "WorkforceCombinePERSONALUSE-Regular",
      path: "../../../public/fonts/workforceCombine_font_ready/WorkforceCombinePERSONALUSE-Regular.ttf",
    },
    {
      family: "TiltPrism-Regular",
      path: "../../../public/fonts/tiltPrism_font_ready/TiltPrism-Regular.ttf",
    },
    {
      family: "Gluten-Thin",
      path: "../../../public/fonts/gluten_font_ready/Gluten-Thin.ttf",
    },
    {
      family: "Pleasewritemeasong",
      path: "../../../public/fonts/handwrite/Pleasewritemeasong.woff",
    },
    {
      family: "Danfo-Regular",
      path: "../../../public/fonts/danfo_font_ready/Danfo-Regular.ttf",
    },
    {
      family: "SeductiveHeightBold-Bold",
      path: "../../../public/fonts/seductiveHeight_font_ready/SeductiveHeightBold-Bold.woff",
    },
  ],

  icons: [
    {
      name: "octopus_minimal",
      path: "../../public/loghi/octopus_minimal.png",
    },
    {
      name: "octopus_colored",
      path: "../../public/loghi/octopus_colored.png",
    },
    {
      name: "bulb-off",
      path: "../../public/loghi/bulb-off.png",
    },
    {
      name: "bulb-on",
      path: "../../public/loghi/bulb-on.png",
    },
    {
      name: "cat",
      path: "../../public/loghi/cat.png",
    },
    {
      name: "github_head",
      path: "../../public/loghi/github_head.png",
    },
    {
      name: "linkedin",
      path: "../../public/loghi/linkedin_colored.png",
    },
    {
      name: "html",
      path: "../../public/loghi/html-5.png",
    },
    {
      name: "css",
      path: "../../public/loghi/css.png",
    },
    {
      name: "bootstrap",
      path: "../../public/loghi/bootstrap.png",
    },
    {
      name: "javascript",
      path: "../../public/loghi/js.png",
    },
    {
      name: "vue",
      path: "../../public/loghi/vue.png",
    },
    {
      name: "vite",
      path: "../../public/loghi/vite.png",
    },
    {
      name: "sass",
      path: "../../public/loghi/sass.png",
    },
    {
      name: "php",
      path: "../../public/loghi/php.png",
    },
    {
      name: "mysql",
      path: "../../public/loghi/mysql.png",
    },
    {
      name: "laravel",
      path: "../../public/loghi/laravel.png",
    },
  ],

  picture: [
    {
      name: "me",
      path: "../../public/img/picture.jpg",
    },
  ],

  screen: [
    {
      name: "fizzbuzz",
      path: "../../public/screen/fizzbuzz.png",
    },
    {
      name: "dropbox",
      path: "../../public/screen/dropbox.jpg",
    },
    {
      name: "campo_minato",
      path: "../../public/screen/campo_minato.png",
    },
    {
      name: "slider",
      path: "../../public/screen/slider.png",
    },
    {
      name: "boolzapp",
      path: "../../public/screen/boolzapp.png",
    },
    {
      name: "boolando",
      path: "../../public/screen/boolando.png",
    },
    {
      name: "portfolio",
      path: "../../public/screen/portfolio.png",
    },
    {
      name: "game_creator",
      path: "../../public/screen/game_creator.png",
    },
    {
      name: "deliveboo",
      path: "../../public/screen/deliveboo.png",
    },
    {
      name: "deliveboo-api",
      path: "../../public/screen/deliveboo-api.jpg",
    },
    {
      name: "kart_crash",
      path: "../../public/screen/kart_crash.png",
    },
    {
      name: "actual_portfolio",
      path: "../../public/screen/actual_portfolio.png",
    },
  ],
  
  // windowScroll(){
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // },
});
