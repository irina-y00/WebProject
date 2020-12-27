<!--<template>-->
<!--  <div class="comment-list">-->
<!--    <comment-->
<!--        v-bind:key="comment.id"-->
<!--        v-bind:comment="comment"-->
<!--        v-bind:userData="userData"-->
<!--        v-bind:user="users.find(user => user.id === comment.userId)"-->
<!--        @delete-comment="deleteComment"-->
<!--        v-for="comment in comments"-->
<!--    />-->
<!--    <hr v-if="comments.length > 0">-->
<!--    <div class="reply">-->
<!--      <input-->
<!--          type="text"-->
<!--          v-model.trim="commentValue"-->
<!--          class="reply-text form-control"-->
<!--          placeholder="Leave a comment..."-->
<!--          maxlength="250"-->
<!--          required-->
<!--          @keyup.enter="submitComment"-->
<!--      />-->
<!--      <button-->
<!--          class="btn btn-outline-primary reply-button"-->
<!--          @click.prevent="submitComment">-->
<!--        Send-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Comment from "./Comment";-->
<!--export default {-->
<!--  name: "Comments",-->
<!--  props: [-->
<!--    'comments',-->
<!--    'users',-->
<!--  ],-->
<!--  components: {Comment},-->
<!--  data() {-->
<!--    return {-->
<!--      commentValue: '',-->
<!--      userData: null-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    if (localStorage.getItem('userData') === null) {-->
<!--      return-->
<!--    }-->
<!--    const userData = JSON.parse(localStorage.getItem('userData'));-->
<!--    this.userData = { ...userData }-->
<!--  },-->
<!--  methods: {-->
<!--    submitComment() {-->
<!--      if (this.commentValue !== '') {-->
<!--        this.$emit('submit-comment', this.commentValue);-->
<!--        this.commentValue = '';-->
<!--      }-->
<!--    },-->
<!--    deleteComment(id) {-->
<!--      this.$emit('delete-comment', id)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--//@import "src/styles/components/Comments";-->
<!--</style>-->