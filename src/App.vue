<template>
<<<<<<< HEAD
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar>
        <q-btn-group flat class="rout-nav">
          <router-link to="/">
            <q-btn flat :outline="!isActive('/')" label="Todos" />
          </router-link>
          <router-link to="/posts">
            <q-btn flat :outline="!isActive('/posts')" label="Posts" />
          </router-link>
          <router-link to="/albums">
            <q-btn flat :outline="!isActive('/albums')" label="Albums" />
          </router-link>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return {
      isActive
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #f5f5f5;
  color: #00bfff !important;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center; 
}

.rout-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.rout-nav button {
  color: #00bfff;
  font-size: 16px;
  background-color: whitesmoke;
}

.rout-nav button :hover {
  background-color: transparent;
}

.rout-nav :hover {
  color: #00bfff;
  text-decoration: line-through;
  background-color: transparent;
}

.rout-nav a q-btn {
  color: #ffc0cb;
  font-size: 16px;
}

.rout-nav q-btn[flat][outline] {
  border-color: #ffc0cb;
  color: #ffc0cb;
=======
  <div id="app">
    <div class="wrapper">
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Octa👽</router-link></li>
          <li><router-link to="/post">Post</router-link></li>
          <li><router-link to="/todos">Todos</router-link></li>
        </ul>
      </nav>
      <slot name="navbar"></slot>
    </div>
    <router-view/>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;
  background-color: #000; /* Hitam */
  color: #fff; /* Putih untuk teks */
}

.wrapper {
  margin-bottom: 20px;
}

.navbar {
  background: linear-gradient(to right, #0f100f, #101110); /* Hijau Tosca */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  padding: 14px 20px;
}

.navbar li a {
  color: white;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px; /* Menambah border-radius untuk tombol */
  padding: 8px 16px; /* Menyesuaikan padding tombol */
}

.navbar li a:hover {
  background-color: rgba(242, 229, 110, 0.2);
  transform: scale(1.1);
}

body {
  background-color: #000; /* Hitam */
  color: #fff; /* Putih untuk teks */
  margin: 0;
  padding: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px;
  border: 1px solid #d76e6e;
  text-align: left;
}

th {
  background-color: #009688; /* Hijau Tosca */
  color: white;
}

td {
  background-color: white;
}

button {
  background-color: #88efe5; /* Hijau Tosca */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #98f89c; /* Hijau Tua */
>>>>>>> ad865bc29a8a642256fc5eaa12fd29a254d131f6
}
</style>
