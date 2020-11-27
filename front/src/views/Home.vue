<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="container marketing">
      <h2>Рекомендуем вам</h2>
      <div class="row">
        <div class="col-lg-4" v-for="item in items">
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
      items: [
        {
          name: 'Джокер',
          text: "История становления знаменитого злодея из Готэма. Неудачливый клоун Артур Флек однажды перестает бороться\n" +
              "  со своим безумием и жестоко смеется над всем ненавистным городом. Лауреат премии «Оскар» Хоакин Феникс\n" +
              "  исполнил одну из лучших ролей в своей карьере в долгожданном фильме-событии «Джокер» режиссера\n" +
              "  Тодда Филлипса.",
          url: 'Джокер',
          image: 'https://thumbs.dfs.ivi.ru/storage15/contents/7/d/726a60465521a979da1e41c3a01815.jpg',
        },
        {
          name: 'Пираты карибского моря: Мертвецы не рассказывают сказки',
          text: "Приключенческая комедия с элементами фэнтези про обаятельного капитана «Черной жемчужины» Джека Воробья.\n" +
              "  Продюсер всех частей «Пиратов» Джерри Брукхаймер просто не мог остановиться на четырех фильмах и дал всем\n" +
              "  фанатам нашумевшей франшизы возможность узнать о дальнейших похождениях Джека.",
          url: 'Пираты карибского моря',
          image: 'https://thumbs.dfs.ivi.ru/storage2/contents/d/c/f009bc121ec961e914dfb6ca2e094d.jpg',
        },
        {
          name: 'Основатель',
          text: "История основателя сети McDonald's Рэя Крока, прошедшего путь от коммивояжера, торгующего миксерами, до\n" +
              "  одного из самых успешных бизнесменов в мире, главы целой империи ресторанов быстрого питания.",
          url: 'Основатель',
          image: 'https://thumbs.dfs.ivi.ru/storage15/contents/0/9/1873d5a7e02390a8d273a7b54ef0fb.jpg',
        },
      ]
    }
  }
}
</script>