<template>
  <div class="container">
    <div class="card card-auto">

      <div class="card-header text-center">
        <h4>
          Авторизация
        </h4>
      </div>

      <div class="card-body">
        <h5 class="card-title text-center">
          Добро пожаловать
        </h5>

        <p class="card-text text-center text-muted">
          Введите ваш логин и пароль.
        </p>

        <form @submit="signIn">
          <div class="form-group">
            <label for="email">Адрес электронной почты</label>
            <input type="email" class="form-control " id="email" v-model="email" aria-describedby="emailHelp">

            <small id="emailHelp" class="form-text text-muted">
              Мы не расскажем ваш email-адрес кому-либо еще.
            </small>

            <div class="error">
              {{ errors.email }}
            </div>
          </div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>

          <div class="error">
            {{ errors.password }}
          </div>

          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Запомнить</label>
          </div>

          <button type="submit" class="btn btn-signin btn-primary btn-in">Войти</button>

        </form>
        <router-link class="btn btn-sign text-center" v-bind:to="{name: 'Registration'}">Зарегестрироваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import User from '@/components/user/user'

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
      errors: {}
    }
  },
  methods: {
    signIn(e) {
      if (this.validate()) {
        const result = {
          name: 'Иван Иванов',
          email: 'ivan@ya.ru',
          accessToken: 'jsdlf732649823709!ew98r#$432'
        }
        User.login(result)
      }
      e.preventDefault()
    },
    validate() {
      this.errors = {}
      if (this.email.trim().length === 0) {
        this.errors.email = 'Заполните Email.'
      }
      if (this.password.trim().length === 0) {
        this.errors.password = 'Заполните Пароль.'
      }
      return Object.keys(this.errors).length === 0
    }
  }
}
</script>

<style scoped>

.container{
  width: 800px;
  height: 500px;
  margin-top: 2%;
  margin-bottom: 11%;
}

.card-body{
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin-bottom: 3%;
  margin-top: 3%;
  margin-left: 24%;
  background-color: #f5f5f5;
  border-radius: 15px;
  top: 50%;
  left: 50%;
}

.form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.btn-sign{
  margin-left: 24%;
  margin-top: 1%;
}

.btn-signin{
  margin-left: 38%;
}

</style>