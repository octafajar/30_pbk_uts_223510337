<template>
    <div class="profile">
      <h1>POST</h1>
      <div>
        <label for="users">Pilih User Yang Diinginkan:</label>
        <select id="users" v-model="selectedUserId" @change="loadUserPosts" class="user-dropdown">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <div class="user-posts">
        <div v-if="loading">Loading...</div>
        <div v-else>
          <div v-for="post in userPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p v-if="!post.expanded">{{ post.body.substring(0, 100) }}... <a @click="expandPost(post)">Baca Selengkapnya</a></p>
            <p v-else>{{ post.body }} <a @click="collapsePost(post)">Sembunyikan</a></p>
          </div>
        </div>
      </div>
      <button class="back-button" @click="goBack">Kembali</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        selectedUserId: null,
        userPosts: [],
        loading: false
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      },
      loadUserPosts() {
        if (!this.selectedUserId) return;
        this.loading = true;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
          .then(response => response.json())
          .then(data => {
            this.userPosts = data.map(post => ({ ...post, expanded: false }));
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching user posts:', error);
            this.loading = false;
          });
      },
      goBack() {
        window.history.back();
      },
      expandPost(post) {
        post.expanded = true;
      },
      collapsePost(post) {
        post.expanded = false;
      }
    }
  };
  </script>
  
  <style>
  .profile {
    background-color: #908484; /* Ubah warna background ke putih */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile h1 {
    font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
    color: #100e0f; /* Ubah warna teks judul menjadi pink tua */
    text-align: center;
  }
  
  .user-posts {
    margin-top: 20px;
  }
  
  .user-posts h2 {
    color: #000000; /* Ubah warna teks postingan menjadi hitam */
    font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
  }
  
  .back-button {
    background-color: #8ebdf2;
    color: rgb(8, 8, 8);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }
  
  .back-button:hover {
    background-color: #9013fe;
  }
  
  /* Gaya untuk dropdown user */
  .user-dropdown {
    width: 100%; /* Atur lebar dropdown agar menyesuaikan */
    padding: 8px; /* Atur padding agar teks tidak terpotong */
    box-sizing: border-box; /* Agar padding tidak mempengaruhi lebar total */
  }
  </style>
  