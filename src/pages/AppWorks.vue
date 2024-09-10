<template>
  <section class="work_section">
    <WorkSection/>
  </section>
  <section class="project_section">
    <div class="text-content text-center">
      <p>A chronological preview of some of my work</p>
      <p>during the Boolean course (+2).</p>
    </div>
    <div class="lang container">
      <div class="program-lang row">
        <ul
          class="slide d-flex flex-wrap gap-3 justify-content-center align-items-center"
        >
          <Languages v-for="language in store.languages" :language="language" />
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="project_container pb-2">
          <Projects v-for="(project, i) in store.projects" :project="project" :key="i"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store.js";
import WorkSection from "../components/WorkSection.vue";
import Languages from "../components/Languages.vue";
import Projects from "../components/Projects.vue";

export default {
  components: {
    WorkSection,
    Languages,
    Projects,
  },

  data() {
    return {
      store,
    };
  },
  created(){
    this.store.topWindow()
  }
};
</script>

<style lang="scss">
</style>
