<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { store } from "./store";

export default {
  components: {
    Header,
    Footer,
  },

  data(){
    return{
      store,
    }
  },
  mounted() {
    // Inizializzo la modalità dark/light quando l'app è montata
    store.initializeMode();
  }
};
</script>

<template>
  <!-- controllo sull'header per evitare che compaia nel Not Found -->
  <Header v-if="this.$route.name !== 'not-found'"></Header>

  <main>
    <RouterView/>
  </main>

  <!-- controllo sul footer per evitare che compaia nella Home Page & nel Not Found -->
  <Footer
    v-if="this.$route.name !== 'home-page' && this.$route.name !== 'not-found'"
  ></Footer>
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
