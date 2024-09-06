<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
    <Header></Header>

    <main>
      <RouterView />
    </main>
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
