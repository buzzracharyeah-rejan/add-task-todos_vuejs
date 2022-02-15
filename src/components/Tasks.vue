<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from './Task.vue';
export default {
  name: 'Tasks',
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
  emits: ['delete-task', 'toggle-reminder'],
};
</script>
