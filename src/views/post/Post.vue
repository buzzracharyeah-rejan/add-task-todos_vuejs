<template>
  <div class="post">
    <router-link :to="`/post/${post.id}`" v-for="post in posts" :posts="posts" :key="post.id">
      <div class="post-card">
        {{ `${post.id} - ${post.title}` }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Post',
  inject: ['posts'],
  data() {
    return {
      posts: this.posts,
    };
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.post-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: 20rem;
  height: 5rem;
  border: 1px solid #363636;
  border-radius: 1rem;
  margin: 1rem;
  cursor: pointer;
}

.post a {
  text-decoration: none;
  color: #000; 
}
</style>
