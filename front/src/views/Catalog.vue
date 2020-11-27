
<template>
  <div class="back-page">
    <div class="container catalog">
      <h1 class="page-title">Каталог фильмов</h1>
      <FilmList></FilmList>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/films/Film";
export default {
  name: "Catalog",
  components: {ProductList}
}
</script>