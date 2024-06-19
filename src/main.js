import { createApp } from 'vue';
import App from './App.vue';
import Main from './Main.vue';
import router from './router'; // Pastikan Anda memiliki file router.js yang mengatur routing

createApp(Main).use(router).mount('#app');
