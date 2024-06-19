<template>
  <div class="albums-container">
    <div class="albums">
      <div class="album-grid">
        <div v-for="album in albums" :key="album.id" class="album-item">
          <router-link :to="'/albums/' + album.id" class="album-link">{{ album.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useAlbumsStore } from '../store/album';

export default defineComponent({
  setup() {
    const albums = ref([]);
    const albumsStore = useAlbumsStore();

    onMounted(async () => {
      await albumsStore.fetchAlbums();
      albums.value = albumsStore.albums;
    });

    return {
      albums,
    };
  },
});
</script>

<style scoped>
.albums-container {
  max-width: 80%;
  margin: 0 auto;
}

.albums {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
}

.album-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.album-item {
  background-color: #f0f8ff;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.album-item:hover {
  background-color: #00bfff;
  transform: translateY(-2px);
}

.album-link {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}
</style>
