<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="container marketing">
      <h2>Рекомендуем вам</h2>
      <div class="row">
        <div class="col-lg-4" v-for="(item, index) in items" :key="index">
          <HitFilm v-bind:hitFilm="item"></HitFilm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import HitFilm from "@/components/HitFilm";
export default {
  name: 'Home',
  components: {
    Carousel, HitFilm
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$http.get('/v1/film')
        .then((response) => {
          console.log(response.data)
          this.items = [...response.data]
        })
  }
}
</script>