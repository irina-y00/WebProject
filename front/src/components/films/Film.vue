<template>
  <div class="product mb-5">
    <div class="form-group text-center">
      <img class="img-fluid img-border" v-bind:src="film.image">
    </div>
    <h3>
      <router-link v-bind:to="{name: 'Film', params: {url: film.url}}">
        {{film.name}}
      </router-link>
    </h3>
  </div>
</template>

<script>
  export default {
    name: "Film",
    props: ['film'],
}
</script>