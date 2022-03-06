<template>
  <div id="nav">
    <router-link v-for="link in links" :to="link" :links="links" :key="link">
      {{ link }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: ['Home', 'About', 'Post'],
    };
  },
};
</script>

<style>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

#nav a {
  text-decoration: none;
}
</style>
