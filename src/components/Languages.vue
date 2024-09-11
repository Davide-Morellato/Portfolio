<template>
      <li class="box-prog-lang">
        <img :src="`${language.path}`" :alt="`${language.lang}`" />
      </li>
</template>

<script>
export default {
  props: {
    language: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
