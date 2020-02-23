<template>

    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <div id="chat">
        
        <div class="container">
        <img src="../assets/logo.png" alt="Avatar">
        <p>Hello. How are you today?</p>
        </div>

        <div class="container darker">
        <img src="../assets/logo.png" alt="Avatar" class="right">
        <p>Hey! I'm fine. Thanks for asking!</p>
        </div>

        <div class="container">
        <img src="../assets/logo.png" alt="Avatar">
        <p>Sweet! So, what do you wanna do today?</p>
        </div>

        <div class="container darker">
        <img src="../assets/logo.png" alt="Avatar" class="right">
        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
        </div> 
    </div>
     <div class="container">
        <input v-model="message" @keydown.enter="sendMessage" type="text" id="chatInput" value="test" required >
        <button @click="sendMessage()" id="send" class="btn btn-primary">Send</button>
        </div>

</div>
    
</template>




<script>
let html = `
    '<div class="container darker">
    <img src="../assets/logo.png" alt="Avatar" class="right">
    <p>${message}</p>
    </div>
     `;

export default {
  name: 'chatComp',
  data() {
      message = ""
  },
  methods: {
      sendMessage(){
        alert(this.message);
        document.getElementById("chat").innerHTML = html;
      }
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