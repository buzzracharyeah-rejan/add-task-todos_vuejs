<template>
  <button v-on:click="handleClick" :style='{background: color}' class="btn">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    show: Boolean,
  },
  methods: {
    handleClick() {
      // console.log('button clicked')
      this.$emit('btn-click');
    },
  },
  emits: ['btn-click'],
};
</script>
