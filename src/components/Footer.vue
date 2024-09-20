<template>
    <!-- FOOTER -->
    <footer class="main-footer" :class="{'light-mode': store.isLightMode}">
        <nav class="nav-bar">
          <ul class="img-links d-flex gap-4 m-0">
            <li class="git-box">
              <a href="https://github.com/Davide-Morellato">
                <img :class="{'filter-off': store.isLightMode}" class="link-item git" src="/loghi/github_head.png" alt="github" />
              </a>
            </li>
            <li class="linkedin-box">
              <a href="https://www.linkedin.com/in/davide-m-4826ab177">
                <img
                  class="link-item linkedin"
                  src="/loghi/linkedin_colored.png"
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
          <div class="email-box">
            <a href="mailto:morellato.davide@yahoo.it">
              <img class="email" src="/loghi/cat.png" alt="cat_email" />
            </a>
          </div>
        </nav>
      </footer>
</template>

<script>
import { store } from '../store';

export default {
    data () {
      return {
        store,
      }
    },
    mounted() {
    this.store.isLightMode = JSON.parse(localStorage.getItem('isLightMode'));
  }
}
</script>

<style lang="scss">
@use '../style/partials/footer.scss';

/* Rimuovo il filtro in modalità light */
.filter-off {
  filter: none;
}
</style>