<template>
  <div class="back-page">
    <div class="container catalog">
      <h1 class="page-title">Каталог</h1>
      <FilmList></FilmList>
    </div>
  </div>
</template>

<script>
import FilmList from "@/components/films/FilmList";
export default {
  name: 'Catalog',
  components: {FilmList}
}
</script>