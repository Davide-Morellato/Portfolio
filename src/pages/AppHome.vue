<template>
  <div class="container main_page d-flex flex-wrap">
    <div class="row">
      <p class="col-12 mb-0">DAVIDE</p>
      <p class="col-12 mb-0 line_height">MORELLATO</p>
    </div>
    <RouterLink to="/works">
      <img class="octopus" src="./loghi/octopus_minimal.png" alt="" />
      <div class="bubble">
        <p>
          Hi!,
          <br />
          Welcome to my world.
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  }
};
</script>

<style lang="scss" scoped></style>
