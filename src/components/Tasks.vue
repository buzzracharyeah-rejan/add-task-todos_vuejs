<template>
  <div :key="task.id" v-for="task in tasks"><Task @delete-task="handleDelete" :task="task" /></div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  methods: {
    handleDelete(id) {
      // console.log(`delete task ${id}`)
      this.$emit('delete-task', id);
    },
  },
};
</script>
