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
axios.defaults.withCredentials = true;
export default {
  name: 'game',
  components: {
      chatComp
  },
  methods: {
   connectSocket(){
       console.log(this.$route.params)
   },
   async checkNameSpace(){
       let room = this.$route.params.roomID
       const res = await axios.get("https://localhost:5000/api/games/list", { params: {
           "room": room
       }},  {
                withCredentials: true
              });
        if (!res.status === 200) {
            router.push("/lobby")
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

