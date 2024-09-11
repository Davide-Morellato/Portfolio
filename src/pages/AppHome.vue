<template>
  <div class="container main_page">
    <!-- <p class="col-12 mb-0">DAVIDE</p>
      <p class="col-12 mb-0 line_height">MORELLATO</p> -->
    <img
      :class="{ 'light-mode': store.isLightMode }"
      class="wallpaper"
      src="/public/img/Screenshot 2024-09-10 145830.png"
      alt=""
    />
    <RouterLink to="/works">
      <!-- <img
        class="octopus"
        src="/loghi/octopus_colored.png"
        alt=""
      /> -->
      <img
        class="octopus"
        :src="
          store.isLightMode
            ? '/loghi/octopus_colored.png'
            : '/loghi/octopus_minimal.png'
        "
        :class="{ 'light-mode': store.isLightMode }"
        alt="Octopus"
      />
      <div class="bubble">
        <p :class="{ 'light-mode': store.isLightMode }">
          Hi!,
          <br />
          Welcome to my world.
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      // isLightMode: false,
    };
  },
  mounted() {
    // Verifica la modalità dal localStorage o dallo store.js
    this.store.isLightMode = JSON.parse(localStorage.getItem("isLightMode"));
  },
};
</script>

<style lang="scss" scoped>
// /* Rimuovi il filtro per l'immagine in modalità light */
// .filter-off {
//   filter: none;
// }
</style>
