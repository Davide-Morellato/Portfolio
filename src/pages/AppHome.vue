<template>
  <div class="container main_page">
    <div class="image-wrapper">
      <img
        :class="{ 'light-mode': store.isLightMode }"
        class="wallpaper"
        src="/img/Screenshot 2024-09-10 145830.png"
        alt="icon_name"
      />
    </div>
    <div class="myworld-wrapper">
      <RouterLink to="/works">
        <img
        class="octopus"
          :src="
            store.isLightMode
              ? '/loghi/octopus_colored.png'
              : '/loghi/octopus_minimal.png'
          "
          :class="{ 'light-mode': store.isLightMode }"
          alt="octopus"
        />
      </RouterLink>
    </div>
    <div class="bubble">
      <p :class="{ 'light-mode': store.isLightMode }">
        Hi!,
        <br />
        Welcome to my world.
      </p>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  mounted() {
    // Verifico la modalità dal localStorage
    this.store.isLightMode = JSON.parse(localStorage.getItem("isLightMode"));
  },
};
</script>

<style lang="scss" scoped></style>
