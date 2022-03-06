<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  provide: {
    posts: [
      {id: '1', title: 'post 1', body: 'test post 1', ownerId: '1'},
      {id: '2', title: 'post 2', body: 'test post 2', ownerId: '2'},
      {id: '3', title: 'post 3', body: 'test post 3', ownerId: '3'},
      {id: '4', title: 'post 1', body: 'test post 1', ownerId: '1'},
    ], 
    users: [
      {id: '1', username: 'test', email: 'test@test.com'},
      {id: '2', username: 'test', email: 'test@test.com'},
      {id: '3', username: 'test', email: 'test@test.com'},
    ]
  }, 
  components: {
    Navbar 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
