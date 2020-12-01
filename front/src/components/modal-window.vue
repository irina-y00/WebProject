<template>

    <div v-if="show" class="modal-shadow" id="ModalTitle" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <slot name="title">
          <h3 class="modal-title">Авторизация</h3>
        </slot>
        <slot name="body">
          <div class="modal-content">

            <div class="modal-body">
              <form class="cd-form">
                <div class="form-group row">
                  <lable>
                    <svg width="1em"
                         height="1em"
                         viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0
                                                  4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2
                                                  14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16
                                                  11.801V4.697l-5.803 3.546z"/>
                    </svg>
                    Почта
                    <input type="email"
                           class="form-control"
                           placeholder="email@example.com">
                  </lable>
                </div>

                <div class="form-group row">
                  <lable>
                    <svg width="1em"
                         height="1em"
                         viewBox="0 0 16 16"
                         class="bi bi-key-fill"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1
                                               1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Пароль
                    <input type="password"
                           class="form-control"
                           placeholder="Пароль">
                  </lable>

                  <a href="#0"
                     class="hide-password">
                    <svg width="1em"
                         height="1em"
                         viewBox="0 0 16 16"
                         class="bi bi-eye"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134
                                                  13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168
                                                  5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0
                                                  0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168
                                                  2.457A13.133 13.133 0 0 0 1.172 8z"/>
                      <path fill-rule="evenodd"
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0
                                                  3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </slot>
        <slot name="footer">
          <div class="modal-footer">
            <button class="modal-footer__button" @click="closeModal">
              Ок
            </button>
            <lable>
              <a href=""
                 class="ref-registration">
                Регистрация
              </a>
            </lable>
            <button type="button"
                    class="btn"
                    data-dismiss="modal">
              Вход
            </button>
          </div>
        </slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    },
    openModal: function () {
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>