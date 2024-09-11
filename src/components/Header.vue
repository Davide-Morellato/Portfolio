<template>
  <header class="main-header" :class="{'light-mode': store.isLightMode}">
    <nav class="nav-bar">
      <!-- Buttons -->
      <ul class="links d-flex">
        <!-- HomePage -->
        <li :class="{'light-mode': store.isLightMode}" class="logo">
          <RouterLink to="/">DM</RouterLink>
        </li>
        <!-- About -->
        <li class="button left" :class="{'light-mode': store.isLightMode}">
          <RouterLink to="/about" @click="store.topWindow">ABOUT</RouterLink>
        </li>
        <!-- Projects -->
        <li class="button left" :class="{'light-mode': store.isLightMode}">
          <RouterLink to="/works" @click="store.topWindow">WORKS</RouterLink>
        </li>
      </ul>
      <!-- Dark/Light Mode -->
      <div class="toggle d-flex align-items-center">
        <img
          :src="store.isLightMode ? '/loghi/bulb-on.png' : '/loghi/bulb-off.png'"
          @click="store.toggleDarkMode"
          class="bulb"
          :class="{ 'filter-off': store.isLightMode }"
          alt="bulb_image"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  mounted() {
    // Recupero lo stato della modalità dal localStorage
    const savedMode = localStorage.getItem('isLightMode');
    if (savedMode) {
      this.store.isLightMode = JSON.parse(savedMode);
      document.body.classList.toggle('light-mode', this.store.isLightMode);
    }
  }
};
</script>

<style lang="scss">
@use "../style/partials/header.scss";

/* Modifica dell'immagine senza il filtro in modalità light */
.filter-off {
  filter: none;
}

</style>
