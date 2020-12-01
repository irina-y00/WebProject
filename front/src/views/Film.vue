<template>
  <div class="row">
    <div class="tab-content">
      <div class="card mb-3 border border-secondary">
        <div class="row ">
          <div class="col-md-4">
            <img class="film-img"
                 v-bind:src="film.image"
                 width="332"
                 height="524">
          </div>
          <div class="col-md-6">
            <h2 class="card-title film-title">
              {{film.name}}
            </h2>
            <hr>
            <p class="card-text">
              Как неудачливый комик стал самым опасным человеком в Готэме. Бенефис Хоакина Феникса и
              «Оскар» за саундтрек
            </p>
            <hr>
            <br>
            <h3>О фильме</h3>
            <hr>
            <p class="card-text">
              <strong>Год производства:</strong> 2019 <br>
              <strong>Страна:</strong> США, Канада <br>
              <strong>Жанр:</strong> триллер, драма, криминал <br>
              <strong>Режиссер:</strong> Тодд Филлипс <br>
              <strong>Бюджет:</strong> $55 000 000 <br>
              <strong>Время:</strong> 122 мин.
            </p>
            <hr>
          </div>
        </div>
      </div>
      <div class="card  info-product">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item"> <a class="nav-link active" href="#">Обзор</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#">Награды</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#">Рецензии</a> </li>
          </ul>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Готэм, начало 1980-х годов. Неудачливый клоун Артур Флек однажды перестает бороться со своим
            безумием и жестоко смеется над всем ненавистным городом. Лауреат премии «Оскар» Хоакин Феникс
            исполнил одну из лучших ролей в своей карьере в долгожданном фильме-событии «Джокер» режиссера
            Тодда Филлипса. На Венецианском фестивале-2019 фильм получил главный приз «Золотой лев».
            <br>
            Артур Флек – один из миллионов жителей мрачных трущоб Готэм-сити. Он работает уличным клоуном,
            наблюдается у врача-психиатра и, сколько себя помнит, заботится о своей болезненной матери.
            Несмотря на нестабильную психику и негативные мысли, у него самая безобидная мечта – стать
            известным стендап-комиком. Мама уверяла Артура, будто он рожден нести радость людям. По вечерам
            они вместе сморят веселую передачу Мюррея Франклина и привычно спорят из-за кандидата в мэры
            Томаса Уэйна. Артур – один из миллионов. Его никто не замечает, и поэтому никто не может
            предположить, что он – спящий вулкан Готэма. Стоит ему дать волю своим демонам, и весь город
            вспыхнет, как спичка. Тогда нервный неконтролируемый смех клоуна-неудачника Артура Флека
            сменится искренним, пробирающим хохотом злодея Джокера.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'films',
    data() {
  return {
    film: {}
  }
},
created() {
  // const url = this.$route.params.url
  this.film = {
    id: 1,
    name: 'Фильм Джокер',
    url: 'Джокер',
    image: 'https://thumbs.dfs.ivi.ru/storage15/contents/7/d/726a60465521a979da1e41c3a01815.jpg',
  }
},
}
</script>