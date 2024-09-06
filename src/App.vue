<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  // mounted() {
  //   console.log(this.$route.name)
  // },
};
</script>

<template>
  <Header v-if="this.$route.name !== 'not-found'"></Header>

  <main>
    <RouterView />
  </main>
  
  <!-- controllo sul footer per evitare che compaia nella Home Page -->
  <Footer v-if="this.$route.name !== 'home-page' && this.$route.name !== 'not-found' "></Footer>
  
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
