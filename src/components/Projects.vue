<template>
  <div>
    <div class="project">
      <h2>{{ project.repo }}</h2>
      <p>
        {{ project.description }}
      </p>
      <p>Techs:
      <ul class="d-flex flex-wrap gap-2 align-center ps-0">
        <li class="techs" v-for="tech in project.techs">{{ tech }}</li>
      </ul>
    </p>
      <div class="btn-slice" >
        <a :href="`${project.link}`">
          <div class="top"><span>STRIP ME</span></div>
          <div class="bottom"><span>STRIP ME</span></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.techs{
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 2px 5px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
