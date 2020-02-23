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
            console.log(data);
            axios.post("https://localhost:5000/api/games/create", data);
            alert("Room Name: " + this.roomName);

      },
      joinRoom() {
          router.push({path: 'game/'+ this.roomName})
      }
}}

</script>

<style scoped>
</style>
