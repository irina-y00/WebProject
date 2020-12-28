<template>
  <div class="row">
    <div class="col-md-3">
      <div class="filter">
        <h5>Категория</h5>
        <ul>
          <li v-for="(category, index) in filter.categories" :key="index">
            <label>
              <input type="checkbox" :id="category.name"> {{ category.name }}
            </label>
          </li>
        </ul>
        <div>
          <button class="btn" v-on:click="checkCategory">Искать</button>
        </div>
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
    this.$http.get('v1/film')
        .then((response) => this.items = response.data)
    this.$http.get('v1/genre')
        .then((response) => this.filter.categories = response.data)
  },

  methods: {
    checkCategory() {
      let category = [];
      this.filter.categories.forEach(function (item) {
        let x = document.getElementById(item.name);
        if (x.checked) {
          category.push(item.id);
        }
      });
      console.log(category)
      this.$http.get(`/v1/film/filter/${category}`)
          .then((response) => {
            console.log(response.data)
            this.items = [...response.data]
          })
    }
  }
}
</script>
