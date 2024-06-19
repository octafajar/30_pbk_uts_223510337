import { createApp } from 'vue';
import App from './App.vue';
<<<<<<< HEAD
import router from './router/index';
import { createPinia } from 'pinia';
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css';
import { Quasar } from 'quasar';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Quasar, {
  config: {},
});

app.mount('#app');
=======
import Main from './Main.vue';
import router from './router'; // Pastikan Anda memiliki file router.js yang mengatur routing

createApp(Main).use(router).mount('#app');
>>>>>>> ad865bc29a8a642256fc5eaa12fd29a254d131f6
