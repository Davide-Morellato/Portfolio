<template>
  <div class="container main_page">
      <p class="col-12 mb-0">DAVIDE</p>
      <p class="col-12 mb-0 line_height">MORELLATO</p>
    <RouterLink to="/works">
      <img
        class="octopus"
        src="/loghi/octopus_colored.png"
        alt=""
      />
      <div class="bubble">
        <p>
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
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
