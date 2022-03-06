import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Post from '../views/post/Post';
import PostDetail from '../views/post/PostDetail';
import Error from '../views/Error';
// import { isTemplateNode } from '@vue/compiler-core';

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/post',
    component: Post,
    name: 'post',
  },
  {
    path: '/post/:id',
    component: PostDetail,
    name: 'post-detail',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: Error,
  },
];

const Router = createRouter({
  routes,
  history: createWebHistory(),
});

export default Router;
