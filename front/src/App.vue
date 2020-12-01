<template>
  <div id="app">
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
                           v-bind:to="{name: ''}">
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

            <li class="nav-item active">
              <router-link class="nav-link"
                           v-bind:to="{name: ''}">
                Мультфильмы
                <span class="sr-only">(current)</span>
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link class="nav-link"
                           v-bind:to="{name: ''}">
                Сериалы
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2"
                   type="search"
                   placeholder="Поиск по сайту">
            <button class="btn btn-nav"
                    type="submit">
              Поиск
            </button>

            <router-link class="btn btn-nav"
                         type="submit"
                         v-bind:to="{name: 'Registration'}">
              Регистрация
            </router-link>

            <div>
              <button class="btn btn-nav"
                      type="button"
                      @click.self="openModal"
                      data-toggle="modal"
                      data-target="ModalTitle">
                Вход
              </button>
            </div>
            <modal-window id="ModalTitle"></modal-window>


            <!-- Вход-->
            <!--            <div class="modal fade"-->
            <!--                 id="exampleModalCenter"-->
            <!--                 tabindex="-1"-->
            <!--                 role="dialog"-->
            <!--                 aria-labelledby="exampleModalCenterTitle"-->
            <!--                 aria-hidden="true">-->
            <!--              <div class="modal-dialog modal-dialog-centered"-->
            <!--                   role="document">-->
            <!--                <div class="modal-content">-->

            <!--                  <div class="modal-header">-->
            <!--                    <h5 class="modal-title"-->
            <!--                        id="exampleModalLongTitle">-->
            <!--                      Авторизация-->
            <!--                    </h5>-->

            <!--                    <button type="button"-->
            <!--                            class="close"-->
            <!--                            data-dismiss="modal"-->
            <!--                            aria-label="Close">-->
            <!--                      <span aria-hidden="true">&times;</span>-->
            <!--                    </button>-->
            <!--                  </div>-->

            <!--                  <div class="modal-body">-->
            <!--                    <form class="cd-form">-->
            <!--                      <div class="form-group row">-->
            <!--                        <lable>-->
            <!--                          <svg width="1em"-->
            <!--                               height="1em"-->
            <!--                               viewBox="0 0 16 16">-->
            <!--                            <path fill-rule="evenodd"-->
            <!--                                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0-->
            <!--                                                  4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2-->
            <!--                                                  14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16-->
            <!--                                                  11.801V4.697l-5.803 3.546z"/>-->
            <!--                          </svg>-->
            <!--                          Почта-->
            <!--                          <input type="email"-->
            <!--                                 class="form-control"-->
            <!--                                 placeholder="email@example.com">-->
            <!--                        </lable>-->
            <!--                      </div>-->

            <!--                      <div class="form-group row">-->
            <!--                        <lable>-->
            <!--                          <svg width="1em"-->
            <!--                               height="1em"-->
            <!--                               viewBox="0 0 16 16"-->
            <!--                               class="bi bi-key-fill"-->
            <!--                               fill="currentColor"-->
            <!--                               xmlns="http://www.w3.org/2000/svg">-->
            <!--                            <path fill-rule="evenodd"-->
            <!--                                  d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1-->
            <!--                                               1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>-->
            <!--                          </svg>-->
            <!--                          Пароль-->
            <!--                          <input type="password"-->
            <!--                                 class="form-control"-->
            <!--                                 placeholder="Пароль">-->
            <!--                        </lable>-->

            <!--                        <a href="#0"-->
            <!--                           class="hide-password">-->
            <!--                          <svg width="1em"-->
            <!--                               height="1em"-->
            <!--                               viewBox="0 0 16 16"-->
            <!--                               class="bi bi-eye"-->
            <!--                               fill="currentColor"-->
            <!--                               xmlns="http://www.w3.org/2000/svg">-->
            <!--                            <path fill-rule="evenodd"-->
            <!--                                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134-->
            <!--                                                  13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168-->
            <!--                                                  5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0-->
            <!--                                                  0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168-->
            <!--                                                  2.457A13.133 13.133 0 0 0 1.172 8z"/>-->
            <!--                            <path fill-rule="evenodd"-->
            <!--                                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0-->
            <!--                                                  3.5 3.5 0 0 1-7 0z"/>-->
            <!--                          </svg>-->
            <!--                        </a>-->
            <!--                      </div>-->
            <!--                    </form>-->
            <!--                  </div>-->

            <!--                  <div class="modal-footer">-->
            <!--                    <lable>-->
            <!--                      <a href="./registration.html"-->
            <!--                         class="ref-registration">-->
            <!--                        Регистрация-->
            <!--                      </a>-->
            <!--                    </lable>-->
            <!--                    <button type="button"-->
            <!--                            class="btn"-->
            <!--                            data-dismiss="modal">-->
            <!--                      Вход-->
            <!--                    </button>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </form>
        </div>
      </nav>
    </header>

    <main role="main">
      <router-view/>
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

  </div>
</template>
<script>
import ModalWindow from "@/components/modal-window";

export default {
  components: {
    ModalWindow

  }
}
</script>