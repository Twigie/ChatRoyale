<template>
<div>
</div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'lobbyComp',
  data() {
      return {
          lobby: [],
          scoket: io('https://localhost:5000',{secure: true})
          
      }
  },
  methods: {
   
},
mounted() {
    this.socket.on("LOBBY_LIST_UPDATE")
     this.lobbyList.push(data)
}}

</script>

<style scoped>
</style>
