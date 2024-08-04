<template>
  <div class="rooms-container">
    <h1>Available Rooms</h1>
    <div class="room-list">
      <div v-for="room in rooms" :key="room.id" class="room-item">
        <h2>{{ room.name }}</h2>
        <p>{{ room.description }}</p>
        <button @click="joinRoom(room.id)">Join</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const rooms = ref([]);

const fetchRooms = async () => {
  try {
    const response = await axios.get('/api/rooms', {
      "headers": {
        "Authorization": "X-CODE"
      }
    });
    console.log(response);
    // rooms.value = response.data;
  } catch (error) {
    console.error('Failed to fetch rooms:', error);
  }
};

const joinRoom = (roomId) => {
  console.log(`Joining room with ID: ${roomId}`);
  // Join room logic here
};

onMounted(fetchRooms);
</script>

<style scoped lang="scss">
.rooms-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  color: #007aff;

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #007aff;
  }

  .room-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
  }

  .room-item {
    background-color: #fff;
    color: #333;
    border: 1px solid #007aff;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    h2 {
      margin: 0 0 10px;
    }

    p {
      margin: 0 0 15px;
    }

    button {
      width: 100%;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007aff;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #005bb5;
      }
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 600px) {
    .room-item {
      padding: 10px;
    }

    button {
      width: 100%;
    }
  }
}
</style>
