import { createRouter, createWebHistory } from 'vue-router';

import Todos from '../views/Todos.vue';
import Post from '../views/Post.vue';
import Albums from '../views/Albums.vue';
import Photos from '../views/Photos.vue';

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/posts',
    name: 'Post',
    component: Post,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
  },
  {
    path: '/albums/:id',
    name: 'Photos',
    component: Photos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
