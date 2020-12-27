<template>
  <div class="col-md-5 catalog-title">
    <div class="form-group text-center">
      <img class="film-img"
           v-bind:src="film.uriImage"
           width="172"
           height="264">
    </div>
    <h5>
      {{film.name}}
      <router-link class="btn catalog-title" v-bind:to="{name: 'Film', params: {id: film.id}}">
        Смотреть подробнее »
      </router-link>
    </h5>
  </div>
</template>

<script>
  export default {
    name: "Film",
    props: ['film'],
}
</script>