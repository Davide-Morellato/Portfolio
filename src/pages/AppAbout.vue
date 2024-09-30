<template>
  <!-- About box & Contact me -->
  <section class="about_section">
          <div
            class="container d-flex justify-content-center align-items-center flex-column"
          >
            <div class="bor-white about" :class="{'light-mode': store.isLightMode }">
              <h1 :class="{'light-mode': store.isLightMode}">ABOUT</h1>
            </div>
            <div class="bor-white download" :class="{'light-mode': store.isLightMode}">
              <a href="/download/Davide_Morellato_CV_en.pdf" download> Download CV </a>
            </div>
          </div>
  </section>
  <!-- Content about me: picture, text, lang -->
  <section class="content_section">
    <div class="content">
      <div class="picture bor-white bor-white" :class="{'light-mode': store.isLightMode }">
        <img class="fadeInLeft" src="/img/picture.jpg" alt="me" />
      </div>
      <div class="text_about">
        <p :class="{'light-mode': store.isLightMode}">
          Hi,
          <br/>
          I am <span class="italic bolder">Davide Morellato</span>, a neo <span class="italic bolder">Jr. Full Stack Web-Developer</span>,
          but before that I'm a eclectic and empathic guy who loves kitesurfing, hiking with friends, a big music fan,
          a serial thriller-eater, a cinema lover and a fun friend (I hope) to fun people.
        </p>
        <p :class="{'light-mode': store.isLightMode}">
          In February 2017, I published my first poem's book <span class="italic">'A la Rosa
            non si parla'</span>, through to a local publishing house 'Innuendo
          Editore'. And it was successful enough to present it at the
          International Book Fair in Turin in the same year.
        </p>
        <p :class="{'light-mode': store.isLightMode}">
          I always thought that an open mind was the best way to grow in any field.
          And, to date, I have not found a reason to believe otherwise.
          For this reason, I often I ask myself a question:
          <br />
          <span class="italic bolder">"Is it better to be Smart or Curious?"</span>
          <br />
          To be honest, most of the time I have not been able to give a
          concrete answer, because I consider them two sides of the same
          coin - albeit with different intrinsic weight.
        </p>
        <p :class="{'light-mode': store.isLightMode}">
          So I have chosen to pique my curiosity trying to merge two aspects
          that I find indissoluble in their apparent diversity: <span class="italic bolder">creativity</span>
          and <span class="italic bolder">analysis</span>.
          <br />
          This allows me to find original and unconventional solutions,
          thanks to a balanced mix of <span class="italic bolder">problem solving</span>, a lot of
          <span class="italic bolder">determination</span>, an unfailing <span class="italic bolder">critical thinking</span>, profitable <span class="italic bolder">time management</span>
          , excellent <span class="italic bolder">teamwork</span> and <span class="italic bolder">client focus</span>.
        </p>
        <p :class="{'light-mode': store.isLightMode}">
          But this growth was the result of strong motivation and
          determination, which pushed me to undertake various work
          experiences both in Italy and abroad. By pushing myself first in
          <span class="italic bolder">Switzerland</span> and then in <span class="italic bolder">England</span>, I was able to broaden not only
          my linguistic but also my cultural background and open my mind
          considerably.
        </p>
        <p :class="{'light-mode': store.isLightMode}">
          <p :class="{'light-mode': store.isLightMode }">
            During the <a href="/download/Certificato_Full_Stack_Web_Development.pdf" class="boolean_anchor italic bolder" download="Boolean_Certificate"> <span class="underline">Boolean Course</span></a> I've studied different technologies:
          </p>
          <ul class="ps-0 list_tech">
            <h5 class="title_techs bor-white p-2 text-center" :class="{'light-mode': store.isLightMode}"><strong>Front-End Development:</strong></h5>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">HTML5 & CSS3:</span>Creation of responsive and optimised layouts for each device, also with the help of dedicated frameworks.
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">JavaScript:</span>Development of interactive functionality through the management and manipulation of the DOM.
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">Vue.Js, Vite & Bootstrap:</span>Creation of dynamic and modular user interfaces to ensure an optimal user-experience.
              </p>
            </li>
          </ul>
          <ul class="ps-0 list_tech pt-2">
            <h5 :class="{'light-mode': store.isLightMode}" class="title_techs bor-white p-2 text-center"><strong>Back-End Development:</strong></h5>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">PHP:</span>Development of dynamic server-side web applications.
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">MySQL:</span>Concept and management of relational databases using Eloquent ORM. 
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">Laravel:</span>PHP framework for rapid application development, routing management, middleware and RESTful services.
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">API Development:</span>Creation and management of RESTful APIs for client-side and server-side communication.
              </p>
            </li>
            <li>
              <p :class="{'light-mode': store.isLightMode}">
                <span class="underline">Authentication & Security:</span>Implementation of authentication and authorisation systems, protection of applications against common vulnerabilities.
              </p>
            </li>
          </ul>                
        </p>
      </div>
    </div>
  </section>

</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  created(){
    this.store.topWindow()
  },
  mounted() {
    // Recupero la modalità dal localStorage
    this.store.isLightMode = JSON.parse(localStorage.getItem('isLightMode'));
  }
};
</script>

<style lang="scss">

</style>
