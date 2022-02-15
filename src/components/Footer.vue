<template>
  <footer>
    <h4>footer</h4>
    <p>{{ text }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    text: String,
  },
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  gap: 1rem;
}
</style>
