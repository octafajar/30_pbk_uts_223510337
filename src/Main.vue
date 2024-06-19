<template>
    <App>
      <template v-slot:navbar>
        <div class="additional-navbar-content">
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer">
          <p>😎😎</p>
        </div>
      </template>
    </App>
  </template>
  
  <script>
  import App from './App.vue';
  
  export default {
    components: {
      App
    }
  };
  </script>
  
  <style>
  .additional-navbar-content {
    color: rgb(14, 14, 14);
    text-align: center;
    background: linear-gradient(to right, #dadcdf, #8fdbea);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .footer {
    background: linear-gradient(to right, #f4f1f6, #92b8e4);
    color: rgb(21, 20, 20);
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-size: 1.2em;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  
  #app {
    font-family: 'Arial', sans-serif;
    margin: 0 auto;
    padding: 20px;
    max-width: 600px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #0a0b0b;
  }
  
  .completed {
    text-decoration: line-through;
    color: #141212;
  }
  
  .datetime-container {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #1a1919;
    border-radius: 5px;
  }
  
  .datetime-container label {
    display: block;
    margin-bottom: 5px;
    color: #0b0b0b;
  }
  
  button {
    background-color: #4a90e2;
    color: rgb(5, 4, 4);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #f3f7f8;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    padding: 12px;
    border: 1px solid #0e0d0d;
    text-align: left;
  }
  
  th {
    background-color: #a7c8ef;
    color: rgb(10, 10, 10);
  }
  
  td {
    background-color: white;
  }
  </style>
  