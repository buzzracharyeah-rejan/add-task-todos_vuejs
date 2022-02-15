<template>
  <div class="container">
    <Header title="Task Tracker" @add-task-toggle='addTaskToggle' :show='showAddTask'/>
    <AddTask v-if='showAddTask' @add-task="addTask" />
    <Tasks @delete-task="handleDelete" @toggle-reminder="handleToggleReminder" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { tasks } from './constants/tasks';
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    };
  },
  created() {
    this.tasks = tasks;
  },
  methods: {
    handleDelete(id) {
      if (confirm('Are you sure?')) this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    handleToggleReminder(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      //? toggle reminder for tasks
      this.tasks[index].reminder = !this.tasks[index].reminder;
      // this.tasks[index] = {...this.tasks[index], reminder: !this.tasks[index].reminder};
    },
    addTask(task) {
      this.tasks.push(task)
    },
    addTaskToggle() {
      // console.log('add task visible')
      this.showAddTask = !this.showAddTask;
    } 
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
