<template>

    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <div id="chat">
        <div v-for="(msg, index) in messages" :key="index">
            <div class="container">
            <img src="../assets/logo.png" alt="Avatar">
            <p>{{msg.user}}:  {{msg.message}} </p>
            </div>
        </div>
    </div>
     <div class="container">
        <input v-model="message" @keydown.enter="sendMessage" type="text" id="chatInput" value="test" required >
        <button @click="sendMessage()" id="send" class="btn btn-primary">Send</button>
        </div>

</div>
    
</template>




<script>

import io from 'socket.io-client';

export default {
  name: 'chatComp',
  data() {
      return {
          user: '',
          message: '',
          messages: [],
          socket : io('https://localhost:5000',{secure: true})

      }
  },  
   methods: {
      sendMessage(){
          console.log(this.socket)
          this.socket.emit('SEND_MESSAGE', {
              user: this.user,
              message: this.message,
              roomID: this.$route.params.roomID
          });
          this.message = ''
    
      },
  },
  mounted() {
      this.socket.emit("JOIN_ROOM", {
        "text": this.$route.params.roomID
      })

      this.socket.on('MESSAGE', (data) =>{
          this.messages.push(data)
      });
  }
}
</script>

<style> 

#chat { 
    overflow: scroll;
    height: 800px;
    width:1000px;
    margin: 0 auto;
    
}
#chatInput {
    width: 90%;
}
#send {
    float: right;
}
 /* Chat containers */
.container {
  border: 2px solid #dedede;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

/* Style time text */
.time-right {
  float: right;
  color: #aaa;
}

/* Style time text */
.time-left {
  float: left;
  color: #999;
} 



</style>