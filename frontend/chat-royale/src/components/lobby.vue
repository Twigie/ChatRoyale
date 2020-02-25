<template>
  <div>
      <input v-model="roomName" type="text">
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
  data: function() {
      return {
          roomName: ""
      }
  },
  methods: {
      createRoom() {
          // Figure out if we want to make rooms on the backend to mange/check?
            router.push({path: 'game/'+ this.roomName})
      },
      joinRoom() {
          router.push({path: 'game/'+ this.roomName})
      }
}}

</script>

<style scoped>
</style>
