<template>
<div>
  <chatComp></chatComp>

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


}

}

</script>

<style scoped>
</style>

