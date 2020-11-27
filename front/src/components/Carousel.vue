<template>
  <b-carousel
      :interval="4000"
      controls
      indicators>
    <b-carousel-slide>
      <template #img>
        <img width="891"
             height="525"
             src="https://thumbs.dfs.ivi.ru/storage26/contents/a/7/c4ce2b57ebeee7bcce70dc98a2e924.jpg">
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <img width="891"
             height="525"
             src="https://thumbs.dfs.ivi.ru/storage26/contents/e/2/c38ea08668995363acf24220ddb7f6.jpg">
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <img width="891"
             height="525"
             src="https://thumbs.dfs.ivi.ru/storage3/contents/7/2/29143d008b6c90b964810598a4a9ad.jpg">
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel"
}
</script>