<template>
  <header>
    <h1>{{ title }}</h1>
    <Button 
    @btn-click="$emit('add-task-toggle')"
    :color="show ? 'red' : 'green'"
    :text="show ? 'Hide' : 'Add Task'"
     />
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
    show: Boolean,
  },
  components: {
    Button,
  },
  emits: ['add-task-toggle'],
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
