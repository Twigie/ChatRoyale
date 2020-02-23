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
       let {roomID} = this.$route.params
       console.log(roomID,"RoomID craeted")
       const data = {};
       data["roomID"] = roomID;
       const res = await axios.get("https://localhost:5000/api/games/list",data)
       console.log(res)
   },

},
mounted: function() {
    this.checkNameSpace()
}

}

</script>

<style scoped>
</style>

