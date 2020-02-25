<template>
<div>
  <chatComp></chatComp>
  <button @click="connectSocket">Test</button>
</div>
</template>

<script>
import axios from "axios";
import chatComp from '../components/chat';
import router from '../router';
import io from 'socket.io-client'
axios.defaults.withCredentials = true;
export default {
  name: 'game',
  data() {
      return{
          socket : io('https://localhost:5000',{secure: true})

      }
      
  },
  props: [],
  components: {
      chatComp
  },
  methods: {
   connectSocket(){
       this.socket.on('connection',function() {
           console.log('connected')
        //    socket.emit('room', room);
       })


    //    console.log(this.$route.params)
    //    this.socket = io({rejectUnauthorized: false});  
    //    this.socket.on((message) => {
    //        this.$broadcast("increaseMessage",message)
    //    })

   },
   sendEmit(){
       this.socket
   },
   async checkNameSpace(){
       let room = this.$route.params.roomID
       const res = await axios.get("https://localhost:5000/api/games/list", { params: {
           room
       }},  {
                withCredentials: true
              });
        console.log(res)
        if (res.status !== 200) {
            router.push({path: 'lobby'});
        }
       console.log(res.data);
   },

},
mounted: function() {
    this.checkNameSpace()
    this.connectSocket()


}

}

</script>

<style scoped>
</style>

