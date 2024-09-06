<template>
      <li class="box-prog-lang">
        <img :src="`${language.path}`" :alt="`${language.lang}`" />
      </li>
      <!-- <li class="box-prog-lang">
              <img src="../../public/loghi/css.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/bootstrap.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/js.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/vue.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/vite.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/sass.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/php.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/mysql.png" alt="" />
            </li>
            <li class="box-prog-lang">
              <img src="../../public/loghi/laravel.png" alt="" />
            </li> -->
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
