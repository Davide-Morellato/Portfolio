<template>
  <div class="not-found">
    <div class="container_message">
        <div class="box-message">
          <h1>404</h1>
          <h3>Planet Not Found</h3>
          <p>Nothing this way.</p>
          <p>Turn your spaceship back home...</p>
          <p>...or stay and look at this pretty wallpaper.</p>
          <div class="back mt-3">
            <RouterLink to="/" class="a-link">Back to the Future</RouterLink>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
