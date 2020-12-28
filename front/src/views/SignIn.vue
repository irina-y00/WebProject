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

        <form @submit.prevent="signIn">
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

import querystring from "querystring";

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
    signIn() {
      const formData = {
        username: this.email,
        password: this.password,
        grant_type: 'password'
      };
      this.$http.post('/oauth/token', querystring.stringify(formData), {
        headers: {
          'authorization': 'Basic dWk6bXJJVG1ndnpSWE9a',
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded',
          "cache-control": "no-cache"
          // 'Accept-Encoding': 'br'
        }, baseURL: 'http://localhost:8080/',
      })
          .then((response) =>
          {console.log(response.data)
            localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
            localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
            this.$router.push({ name: 'Profile' })
          })
          .catch((error) => console.log(error))
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
  width: 500px;
  height: 500px;
  margin-top: 2%;
  margin-bottom: 11%;
  margin-left: 7%;
}

.card-body{
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin-bottom: 3%;
  margin-top: 3%;
  margin-left: 33%;
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