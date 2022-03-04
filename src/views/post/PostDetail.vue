<template class='post-card'>
<h3><strong>Username: </strong>{{this.user.username}}</h3>
<p><strong>Body: </strong>{{this.post.body}}</p>
<p><strong>Email: </strong>{{this.user.email}}</p>
</template>

<script>
export default {
  name: 'PostDetail',  
  inject: ['posts', 'users'], 
  data() {
    return {
      post: '', 
      user: ''
    }
  }, 
  created() {
    const {id: postId} = this.$route.params; 
    const matchedPost = this.posts.find(post => post.id === postId); 
    const matchedUser = this.users.find(user => user.id === matchedPost.ownerId); 
    this.post = matchedPost; 
    this.user = matchedUser; 
  }
};
</script>

<style>
.post-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: 20rem;
  height: 5rem;
  border: 1px solid #363636;
  border-radius: 1rem;
  margin: 1rem;
  cursor: pointer;
}

.post a {
  text-decoration: none;
  color: #000;
}
</style>
