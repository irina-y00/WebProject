<!--<template>-->
<!--  <div class="comment">-->
<!--    <div class="author">{{ user.username }}</div>-->
<!--    <div class="comment-text">{{ comment.description }}</div>-->
<!--    <button-->
<!--        v-if="userData && comment.userId === userData.id"-->
<!--        class="btn btn-danger"-->
<!--        @click.prevent="deleteComment(comment.id)"-->
<!--    >-->
<!--      Delete-->
<!--    </button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Comment",-->
<!--  props: [-->
<!--    'comment',-->
<!--    'user',-->
<!--    'userData'-->
<!--  ],-->
<!--  methods: {-->
<!--    deleteComment(id) {-->
<!--      this.$emit('delete-comment', id)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--//@import "src/styles/components/Comment";-->
<!--</style>-->