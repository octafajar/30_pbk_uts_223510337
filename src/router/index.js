import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD

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
=======
import ActivityList from '../components/ActivityList.vue';
import Post from '../components/Post.vue';
import Todos from '../components/Todos.vue';

const routes = [
  { path: '/', component: ActivityList },
  { path: '/post', component: Post },
  { path: '/todos', component: Todos },
>>>>>>> ad865bc29a8a642256fc5eaa12fd29a254d131f6
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
