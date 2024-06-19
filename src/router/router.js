import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Komponen Home
import Post from './components/Post.vue'; // Komponen Post
import Todos from './components/Todos.vue'; // Komponen Todos

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/todos', component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
