<template>
  <div>
    <img class="img-film"
         v-bind:src="hitFilm.uriImage"
         alt="image"
         width="172"
         height="264">
    <h4>{{ hitFilm.name }}</h4>
    <p> {{ hitFilm.description }}</p>
    <div>
        <router-link v-bind:to="{name: 'Film', params: {id: hitFilm.id}}" class="btn">
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