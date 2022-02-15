<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green" @add-task-toggle="$emit('add-task-toggle')"  v-bind:show = 'show'/>
  </header>
</template>

<script>
import Button from './Button';
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'say hi from the other wrold',
    },
    show: Boolean
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
