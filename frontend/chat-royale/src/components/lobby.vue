<template>
  <div>
      <input v-model="roomName" type="text" value="test" >
      <button class="btn btn-primary" @click="createRoom">Create Room</button>
      <button class="btn btn-danger" @click="joinRoom">Join Room</button>
  </div>
</template>

<script>
import router from '../router'
import io from 'socket.io-client';
import axios from 'axios';
export default {
  name: 'lobby',
  data() {
      roomName = ""
  },
  methods: {
      createRoom() {
            let data = {};
            data["roomID"] = this.roomName;
            axios.post("https://localhost:5000/api/games/create", data);
            router.push({path: 'game/'+ this.roomName})

      },
      joinRoom() {
          router.push({path: 'game/'+ this.roomName})
      }
}}

</script>

<style scoped>
</style>
