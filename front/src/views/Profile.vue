<template>
<!--  <div class="container profile profile-text">-->
<!--    <h1>{{user.name}}</h1>-->
<!--    <h4>{{user.email}}</h4>-->
<!--    <hr>-->
<!--    <button class="btn btn-danger" v-on:click="logout">Выйти</button>-->
<!--  </div>-->

  <div class="jumbotron jumbotron-in">
    <h2 v-if="user">Вы зашли как {{ user.name }}</h2>
    <h2 v-if="!user">К сожалению, вы еще не зашли.</h2>
    <hr class="my-4">
    <p class="lead" v-if="!user">Вы можете зайти в свой профиль или зарегестрироваться прямо сейчас.</p>
    <p class="lead btn-lead">
      <button v-if="user" class="btn btn-secondary btn-buy btn-out"  v-on:click="signOut">Выйти</button>
      <button v-if="!user" class="btn btn-secondary btn-buy btn-in btn-pr" v-on:click="routeToSignIn">Войти</button>
      <button v-if="!user" class="btn btn-secondary btn-buy btn-pr" v-on:click="routeToSignUp">Зарегестрироваться</button>
    </p>
  </div>

</template>

<script>
import User from '@/components/user/user'
import router from "@/router";
export default {
  name: "Profile",
  data() {
    return {
      user: User
    }
  },
  methods: {
    routeToSignIn() {
      router.push({ name: 'SignIn' })
    },
    routeToSignUp() {
      router.push({ name: 'Registration' })
    },
    signOut() {
      localStorage.removeItem('userData')
      this.user = null
    }
  }
}
</script>