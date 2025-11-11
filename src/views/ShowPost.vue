<template>
  <section>
    <p><router-link to="/">← Back</router-link></p>

    <div v-if="loading">Loading…</div>
    <div v-else>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <router-link :to="'/posts/' + post.id + '/edit'">Edit</router-link>
    </div>
  </section>
</template>

<script>
import { getPost } from "../api/posts";

export default {
  name: "ShowPost",
  data() {
    return {
      post: {},
      loading: true
    };
  },
  async created() {
    this.post = await getPost(this.$route.params.id);
    this.loading = false;
  }
};
</script>
