<template>
    <!-- FOOTER -->
    <footer class="main-footer">
        <nav class="nav-bar">
          <ul class="img-links d-flex gap-4 m-0">
            <li class="git-box">
              <a href="https://github.com/Davide-Morellato">
                <img class="link-item git" src="/loghi/github_head.png" alt="" />
              </a>
            </li>
            <li class="linkedin-box">
              <a href="https://www.linkedin.com/in/davide-m-4826ab177">
                <img
                  class="link-item linkedin"
                  src="/loghi/linkedin_colored.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <div class="email-box">
            <a href="mailto:morellato.davide@yahoo.it">
              <img class="email" src="/loghi/cat.png" alt="" />
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
    }
}
</script>

<style lang="scss">
@use '../style/partials/footer.scss';

</style>