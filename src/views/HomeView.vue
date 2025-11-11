<template>
  <section>
    <h2>All Posts</h2>
    <p v-if="loading">Loading…</p>
    <p v-else-if="error" style="color:red">{{ error }}</p>

    <router-link v-else to="/create">Create New Post</router-link>

    <ul v-if="!loading && !error">
      <li v-for="p in posts" :key="p.id">
        <strong>{{ p.title }}</strong><br>
        <router-link :to="'/posts/' + p.id">View</router-link> |
        <router-link :to="'/posts/' + p.id + '/edit'">Edit</router-link> |
        <button @click="remove(p.id)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { getPosts, deletePost } from "../api/posts";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
      loading: true,
      error: ""
    };
  },
  async created() {
    try {
      this.posts = await getPosts();
    } catch (e) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async remove(id) {
      const old = this.posts;
      this.posts = this.posts.filter(p => p.id !== id);
      try {
        await deletePost(id);
      } catch (e) {
        alert("Delete failed");
        this.posts = old;
      }
    }
  }
};
</script>
