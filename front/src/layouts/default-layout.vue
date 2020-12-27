<template>
  <section class="default-layout">
    <header>
      <nav class="navbar navbar-default navbar-expand-lg navbar-fixed-top">
        <router-link class="navbar-brand"
                     v-bind:to="{name: 'Home'}">
          <svg width="1em"
               height="1em"
               viewBox="0 0 16 16"
               class="bi bi-film"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1
                  1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2
                  3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"/>
          </svg>
          КиноПолка
        </router-link>


        <div class="collapse navbar-collapse"
             id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link"
                           v-bind:to="{name: 'Profile'}">
                Профиль
                <span class="sr-only">(current)</span>
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link class="nav-link"
                           v-bind:to="{name: 'Catalog'}">
                Фильмы
              </router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">

            <div>
              <router-link class="btn btn-nav"
                      type="button"
                      v-bind:to="{name: 'SignIn'}">
                Вход
              </router-link>
            </div>

            <router-link class="btn btn-nav"
                         type="submit"
                         v-bind:to="{name: 'Registration'}">
              Регистрация
            </router-link>

          </form>
        </div>
      </nav>
    </header>


    <main role="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <span class="text-muted text-center">
                Поддержка:<br>
                support_kinopolka@gmail.com<br>
                8 800 900-00-00
        </span>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "default-layout",
  components: {
  }
}
</script>

<style scoped>

</style>