<template>
  <div class="row">
    <div class="tab-content">
      <div class="card mb-3 border border-secondary">
        <div class="row ">
          <div class="col-md-4">
            <img class="film-img"
                 v-bind:src="film.uriImage"
                 width="332"
                 height="524">
          </div>
          <div class="col-md-6">
            <h2 class="card-title film-title">
              {{ film.name }}
            </h2>
            <hr>
            <hr>
            <br>
            <h3>О фильме</h3>
            <hr>
            <p class="card-text">
              <strong>Дата премьеры:</strong> {{ film.infoFilm.date }} <br>
              <strong>Жанр:</strong> {{ getGenre() }} <br>
              <strong>Режиссер:</strong> {{ getDirector() }} <br>
              <strong>Бюджет:</strong> {{ film.infoFilm.budget }} <br>
            </p>
            <hr>
          </div>
        </div>
      </div>
      <div class="card  info-product">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs ">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#description" @click="currentTab = 'disc'">Описание</a>
            </li>
          </ul>
        </div>
        <div class="tab-content card2">
          <div class="card2 tab-pane fade show active" v-if="currentTab === 'disc'" id="description">
            <li class="list-group-item">
              {{ film.description }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'films',
  props: ['hit'],
  data() {
    return {
      film: [],
      currentTab: 'disc',
    }
  },
  created() {
    let id = this.$route.params.id;
    this.$http.get(`/v1/film/${id}`)
        .then((response) => {
          console.log(response.data)
          this.film = response.data
        })
  },
  methods: {
    getGenre() {
      let arr = this.film.infoFilm.genre.map(function (item) {
        return item.name + ' '
      });
      arr = arr.join(', ')
      return arr
    },

    getDirector() {
      let arr = this.film.infoFilm.directors.map(function (item) {
        return item.name + ' '
      });
      arr = arr.join(', ')
      return arr
    },
  }
}
</script>