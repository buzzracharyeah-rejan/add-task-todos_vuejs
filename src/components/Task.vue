<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>

    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: {
    handleDelete(id) {
      this.$emit('delete-task', id);
    },
  },
  emits: ['delete-task', 'toggle-reminder'],
};
</script>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 1rem 1.5rem;
}

.task.reminder {
  border-left: 5px solid greenyellow;
}

h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fas {
  color: crimson;
  cursor: pointer;
}

div {
  cursor: pointer;
}
</style>
