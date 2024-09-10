<template>
  <header class="main-header">
    <nav class="nav-bar">
      <!-- Buttons -->
      <ul class="links d-flex">
        <!-- HomePage -->
        <li class="logo"><RouterLink to="/">DM</RouterLink></li>
        <!-- About -->
        <!-- @click="topWindow" -->
        <li class="button left">
          <RouterLink to="/about" @click="store.topWindow">ABOUT</RouterLink>
        </li>
        <!-- Projects -->
        <!-- @click="topWindow" -->
        <li class="button left">
          <RouterLink to="/works" @click="store.topWindow">WORKS</RouterLink>
        </li>
      </ul>
      <!-- Dark/Light Mode -->
      <!-- <div class="toggle d-flex align-items-center">
        <img
          class="bulb"
          src="/loghi/bulb-off.png"
          alt=""
        />
      </div> -->
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
};
</script>

<style lang="scss">
@use "../style/partials/header.scss";
</style>
