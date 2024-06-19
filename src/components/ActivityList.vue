

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
  color: #333;
}

.completed {
  text-decoration: line-through;
  color: #121111;
}

.datetime-container {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #040404;
  border-radius: 5px;
}

.datetime-container label {
  display: block;
  margin-bottom: 5px;
  color: #131212;
}

button {
  background-color: #4a90e2;
  color: rgb(15, 14, 14);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f5f4f6;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px;
  border: 1px solid #111111;
  text-align: left;
}

th {
  background-color: #d3dae1;
  color: rgb(1, 1, 1);
}

td {
  background-color: white;
}
</style>
