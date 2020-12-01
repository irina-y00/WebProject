<template>
  <div class="row">
    <div class="col-md-3">
      <div class="filter">
        <h5>Категория</h5>
        <ul>
          <li v-for="(category, index) in filter.categories" :key="index">
            <label>
              <input type="checkbox"> {{ category }}
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
        categories: ['Ужасы', 'Драмы', 'Мелодрамы', 'Комедии', 'Боевики', 'Триллеры'],
      },
      items: [
        {
          id: 1,
          name: 'Джокер',
          url: 'Джокер',
          image: 'https://thumbs.dfs.ivi.ru/storage15/contents/7/d/726a60465521a979da1e41c3a01815.jpg',
        },
        {
          id: 2,
          name: 'Пираты карибского моря',
          url: 'Пираты карибского моря',
          image: 'https://thumbs.dfs.ivi.ru/storage2/contents/d/c/f009bc121ec961e914dfb6ca2e094d.jpg',
        },
        {
          id: 3,
          name: 'Основатель',
          url: 'Основатель',
          image: 'https://thumbs.dfs.ivi.ru/storage15/contents/0/9/1873d5a7e02390a8d273a7b54ef0fb.jpg',
        },
      ]
    }
  }
}
</script>
