<template>
  <div class="kegiatan-container">
    <h1>Daftar Barang</h1>
    <input type="text" v-model="newActivity.name" placeholder="Tambahkan barang baru">
    <div class="datetime-container">
      <label for="datetime">Tanggal & Jam:</label>
      <input id="datetime" type="datetime-local" v-model="newActivity.dateTime">
    </div>
    <button @click="addActivity">Tambah</button>
    <table>
      <thead>
        <tr>
          <th>Barang</th>
          <th>Tanggal & Jam</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(activity, index) in activities" :key="index">
          <td>{{ activity.name }}</td>
          <td>{{ formatDate(activity.dateTime) }}</td>
          <td>
            <input type="checkbox" v-model="activity.completed">
            <span :class="{ 'completed': activity.completed }">{{ activity.completed ? 'Selesai' : 'Belum Selesai' }}</span>
          </td>
          <td><button @click="removeActivity(index)">Hapus</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: {
        name: '',
        dateTime: ''
      },
      activities: []
    };
  },
  methods: {
    addActivity() {
      if (this.newActivity.name.trim() !== '' && this.newActivity.dateTime.trim() !== '') {
        this.activities.push({ 
          name: this.newActivity.name, 
          dateTime: this.newActivity.dateTime, 
          completed: false 
        });
        this.newActivity.name = '';
        this.newActivity.dateTime = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    },
    formatDate(dateTime) {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(dateTime).toLocaleDateString('en-US', options);
    }
  }
};
</script>

<style>
.kegiatan-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px dotted wheat;
  color: #333;
  margin-top: 50px;
}

h1 {
  text-align: center;
  color: #00bfff;
  font-size: 32px !important;
  font-weight: bold !important;
  margin-bottom: -10px;
}

.completed {
  text-decoration: line-through;
  color: #00bfff;
}

input[type="text"], input[type="datetime-local"] {
  width: calc(100% - 0px);
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #00bfff;
  border-radius: 5px;
  background-color: #f0f8ff;
  color: #333;
}

.datetime-container {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f8ff;
  border: 1px solid #00bfff;
  border-radius: 5px;
  margin-bottom: 15px;
}

.datetime-container label {
  display: block;
  margin-bottom: 5px;
  color: #00bfff;
}

button {
  background-color: #00bfff;
  color: whitesmoke;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #009acd;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #333;
}

th, td {
  padding: 12px;
  border: 1px solid #00bfff;
  text-align: left;
}

th {
  background-color: #f0f8ff; /* AliceBlue */
  color: #00bfff;
}

td {
  background-color: whitesmoke;
}
</style>
