<template>
  <button v-on:click="handleClick" :style="{ backgroundColor: color }" class="btn">{{ !show ? 'Add Task' : 'Hide Form' }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    show: Boolean
  },
  methods: {
    handleClick() {
      // console.log('button clicked')
      this.$emit('add-task-toggle');
    },
  },
  emits: ['add-task-toggle']
};
</script>
