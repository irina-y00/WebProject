<template>
  <div>
    <img class="img-film"
         v-bind:src="hitFilm.image"
         alt="image"
         width="172"
         height="264">
    <h4>{{ hitFilm.name }}</h4>
    <p> {{ hitFilm.text }}</p>
    <div>
        <router-link v-bind:to="{name: 'Film', params: {url: hitFilm.url}}" class="btn">
          Смотреть подробнее »
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HitFilm",
  props: ['hitFilm'],
}
</script>