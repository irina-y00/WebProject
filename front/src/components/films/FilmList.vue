<template>
  <div class="row">
    <div class="col-md-3">
      <div class="filter">
        <h5>Категория</h5>
        <ul>
          <li v-for="(category, index) in filter.categories" :key="index">
            <label>
              <input type="checkbox"> {{ category.name }}
            </label>
          </li>
        </ul>
        <hr>
      </div>
    </div>
        <div class="col-md-9">
          <div class="row">
          <div class="col-md-4" v-for="(item,index) in items" :key="index">
            <Film v-bind:film="item"></Film>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import Film from "@/components/films/Film";

export default {
  name: "FilmList",
  components: {Film},
  data() {
    return {
      filter: {
        categories: [],
      },
      items: [],
      result: []
    }
  },
  created() {
    this.$http.get('/film')
        .then((response) => this.items = response.data)
    this.$http.get('/genre')
        .then((response) => this.filter.categories = response.data)
  },
}
</script>
