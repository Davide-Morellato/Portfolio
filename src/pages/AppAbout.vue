<template>
   <!-- About box & Contact me -->
   <section class="about_section">
          <div
            class="container d-flex justify-content-center align-items-center flex-column"
          >
            <div class="bor-white about">
              <h1>ABOUT</h1>
            </div>
            <div class="bor-white download">
              <!-- <a href="#" download="CV_Davide_Morellato"> Download CV </a> -->
              <a href="#"> Download CV </a>
            </div>
          </div>
        </section>
        <!-- Content about me: picture, text, lang -->
        <section class="content_section">
          <div class="content">
            <div class="picture bor-white">
              <img class="fadeInLeft" src="./img/picture.jpg" alt="" />
            </div>
            <div class="text_about">
              <p>
                Hi!, I'm Davide Morellato, a neo Jr Full Stack Web-Developer,
                but before this I'm a simple guy that love listen to good music,
                read a thriller-book that leaves you breathless till the end,
                see a movie at the cinema or go out with friends.
                <br />
                When I can, I do some hiking in the mountains and in the summer
                I dabble in kitesurfing.
              </p>
              <p>
                In February 2017, I published my first book of poems 'A la Rosa
                non si parla', through to a local publishing house 'Innuendo
                Editore'. It was successful enough to present it at the
                International Book Fair in Turin in the same year.
              </p>
              <p>
                I consider myself an eclectic and empathic guy, which is, often,
                I ask myself a question:
                <br />
                "Is it better to be Smart or Curious?"
                <br />
                To be honest, most of the time I have not been able to give a
                concrete answer, because I consider them two sides of the same
                coin - albeit with different intrinsic weight.
              </p>
              <p>
                I always thought that an open mind was the best way to grow.
                And, to date, I have not found a reason to believe otherwise. So
                I have chosen to pique my curiosity trying to merge two aspects
                that I find indissoluble in their apparent diversity: creativity
                and analysis.
                <br />
                This allows me to find original and unconventional solutions,
                thanks to a balanced mix of problem solving, a lot of
                determination, an unfailing critical thinking, profitable time
                management, excellent teamwork and client focus.
              </p>
              <p>
                But this growth was the result of strong motivation and
                determination, which pushed me to undertake various work
                experiences both in Italy and abroad. By pushing myself first in
                Switzerland and then in England, I was able to broaden not only
                my linguistic but also my cultural background and open my mind
                considerably.
              </p>
              <p>
                During the <a href="#" class="boolean_anchor"> <span class="underline">Boolean Course</span></a> I've studied different technologies:
                <ul class="ps-0 list_tech">
                  <h5 class="title_techs bor-white p-2 text-center"><strong>Front-End Development:</strong></h5>
                  <li>
                    <p>
                      <span class="underline">HTML5 & CSS3:</span>Creation of responsive and optimised layouts for each device, also with the help of dedicated frameworks.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">JavaScript:</span>Development of interactive functionality through the management and manipulation of the DOM.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">Vue.Js, Vite & Bootstrap:</span>Creation of dynamic and modular user interfaces to ensure an optimal user-experience.
                    </p>
                  </li>
                </ul>
                <ul class="ps-0 list_tech pt-2">
                  <h5 class="title_techs bor-white p-2 text-center"><strong>Back-End Development:</strong></h5>
                  <li>
                    <p>
                      <span class="underline">PHP:</span>Development of dynamic server-side web applications.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">MySQL:</span>Concept and management of relational databases using Eloquent ORM. 
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">Laravel:</span>PHP framework for rapid application development, routing management, middleware and RESTful services.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">API Development:</span>Creation and management of RESTful APIs for client-side and server-side communication.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="underline">Authentication & Security:</span>Implementation of authentication and authorisation systems, protection of applications against common vulnerabilities.
                    </p>
                  </li>
                </ul>                
              </p>
            </div>
          </div>
        </section>
        <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
    components: {
      Footer,
    },
};
</script>

<style lang="scss" scoped>
main {
  flex-grow: 1;
  overflow: auto;
  scrollbar-width: none;
  --fade-start: 90%;
  mask-image: linear-gradient(
    to bottom,
    var(--color-white) var(--fade-start),
    transparent
  );
}
</style>
