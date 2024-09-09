<template>
  <div>
    <div class="project">
      <h2>{{ project.repo }}</h2>
      <p>
        {{ project.description }}
      </p>
      <p>Techs:
      <ul class="d-flex flex-wrap gap-2 align-center ps-0">
        <li class="techs" v-for="tech in project.techs">{{ tech }}</li>
      </ul>
    </p>
      <div class="btn-slice" >
        <a :href="`${project.link}`">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </a>
      </div>
    </div>
  </div>
  <!-- <div>
    <div class="project">
      <h2>Dropbox</h2>
      <p>
        The project consists of creating a replica of the Dropbox Business
        landing page, including all its main functionalities and intuitive
        design.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Campo Minato</h2>
      <p>
        The project is a web application based on the classic Minefield game, in
        which the player must avoid mines and reveal all safe grid cells.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Slider</h2>
      <p>
        The project consists of the creation of an image slider, with both
        autoplay and arrow scrolling, and a button for changing the direction of
        automatic scrolling.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Boolzapp</h2>
      <p>
        The design is a replica of the popular messaging app WhatsApp, with a
        fully responsive design. The app allows users to browse through chats,
        search for specific conversations via a dedicated search bar, and also
        includes an automatic message reply feature.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Boolando</h2>
      <p>
        Project consisting of a replica of the Zalando site. The products shown
        on the page are obtained through the use of the Axios library.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Portfolio Simulation</h2>
      <p>
        Project consisting in the design of a portfolio through which to show
        one's work, by making calls to Axios from the associated
        <a href="#">back-end project</a>.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Game Creator</h2>
      <p>
        First team project. The application, developed with Laravel, allows new
        characters to be created, their details to be changed, and all available
        weapons and character types to be displayed.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2 class="mb-0">Deliveboo</h2>
      <h6 class="mb-0">Front-End Part</h6>
      <p>
        Final Course Front-End Project. A food delivery web-app designed for
        ordering one's favourite dishes from the comfort of one's own home.
        Users can search for a restaurant, order, see the summary in their
        shopping cart and finally pay.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2 class="mb-0">Deliveboo-API</h2>
      <h6 class="mb-0">Back-End Part</h6>
      <p>
        Final Course Back End Project. An administrative web-app designed for
        restaurant partners of the Deliveboo site.Here users can manage their
        restaurant: including orders and menus.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Kart Crash</h2>
      <p>
        Self-made project in Vanilla Javascript, for the creation of a
        score-based karting game.But watch out for obstacles!
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="project">
      <h2>Portfolio</h2>
      <p>
        Personal Portfolio site where I talk about myself, present my projects
        and everything that has been my education and work.
      </p>
      <div>
        <button class="btn-slice mt-2">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
import { store } from '../store';

export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.techs{
  border: 1px solid var(--color-white);
  border-radius: 10px;
  padding: 2px 5px;
  background-color: var(--bg-mice);
}
</style>
