import { createRouter, createWebHistory } from 'vue-router';
import ActivityList from '../components/ActivityList.vue';
import Post from '../components/Post.vue';
import Todos from '../components/Todos.vue';

const routes = [
  { path: '/', component: ActivityList },
  { path: '/post', component: Post },
  { path: '/todos', component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
