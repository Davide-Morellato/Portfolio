<template>
  <header class="main-header">
    <nav class="nav-bar">
      <!-- Buttons -->
      <ul class="links d-flex">
        <!-- HomePage -->
        <li class="logo"><RouterLink to="/">DM</RouterLink></li>
        <!-- About -->
        <li class="button left"><RouterLink to="/about">ABOUT</RouterLink></li>
        <!-- Projects -->
        <li class="button left"><RouterLink to="/works">WORKS</RouterLink></li>
      </ul>
      <!-- Dark/Light Mode -->
      <div class="toggle d-flex align-items-center">
        <img class="bulb" src="./loghi/bulb-off.png" alt="" />
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
