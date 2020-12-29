<template>
  <div>
    <div class="container profile profile-text" v-if="userStore.isAuth() === true">
      <h1>{{ user.username }}</h1>
      <h4>{{ user.firstName }}</h4>
      <hr>
      <button class="btn btn-danger" v-on:click="exit">Выйти</button>
    </div>

    <div class="jumbotron jumbotron-in" v-if="userStore.isAuth() === false">
      <h2 v-if="!user">К сожалению, вы еще не зашли.</h2>
      <hr class="my-4">
      <p class="lead" v-if="!user">Вы можете зайти в свой профиль или зарегестрироваться прямо сейчас.</p>
      <p class="lead btn-lead">
        <button v-if="user" class="btn btn-secondary btn-buy btn-out" v-on:click="exit">Выйти</button>
        <button v-if="!user" class="btn btn-secondary btn-buy btn-in btn-pr" v-on:click="routeToSignIn">Войти</button>
        <button v-if="!user" class="btn btn-secondary btn-buy btn-pr" v-on:click="routeToSignUp">Зарегестрироваться
        </button>
      </p>
    </div>
  </div>

</template>

<script>
import router from "@/router";
import User from "@/components/user/user";

export default {
  name: "Profile",
  data() {
    return {
      userStore : User,
      user: null
    }
  },
  methods: {
    routeToSignIn() {
      router.push({name: 'SignIn'})
    },
    routeToSignUp() {
      router.push({name: 'Registration'})
    },
    exit(){
      this.userStore.logout()
      location.reload()
    }
  },
  created() {
    let userId = this.userStore.getUserId()
    console.log(userId)
    this.$http.get(`/v1/user/${userId}`)
        .then((response) => {
          console.log(response.data)
          this.user = {...response.data}
        })
  }

}
</script>