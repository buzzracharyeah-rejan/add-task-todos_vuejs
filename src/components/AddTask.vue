<template>
  <form @submit="handleSubmit" class="add-form">
    <div class="form-control">
      <label for="text">Task</label>
      <input type="text" v-model="text" placeholder="Add task" id="text" />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input type="text" v-model="day" placeholder="Add Day & Time" id="day" />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Reminder</label>
      <input type="checkbox" v-model="reminder" id="reminder" />
    </div>
    <button class="btn btn-block">Save task</button>
  </form>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const task = {
        id: uuidv4(), 
        text: this.text, 
        day: this.day, 
        reminder: this.reminder
        }
        this.$emit('add-task', task);
    },
  },
  emits: ['add-task']
};
</script>

<style scoped>
.add-form {
  margin-bottom: 3rem;
}

.form-control {
  margin: 2rem 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 3.5rem;
  margin: 5px;
  padding: 3px 7px;
  font-size: 1rem;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 1.5rem;
}
</style>
