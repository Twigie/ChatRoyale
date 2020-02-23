<template>
    <div>
    <div id="fb-root"></div>
    <button v-if="loggedIn" @click="logIn()" class="btn btn-primary"> Login to Facebook</button>
    <button @click="getLoginStatus(123)"> bran </button>
    <button v-if="this.loggedIn" class="btn btn-danger" @click="logOut()"> GET UT </button>
    </div>
</template>

<script>
  import router from "../router"
    export default {
        data(){
          return{
            loggedIn: false
          }
        },
    methods: {
      logIn() {
        if(!loggedIn){
          console.log("Enter here")
          FB.login(function(response) {
            if (response.status === "connected")
              router.push("home");
            else
              location.reload();
          }, {scope: 'public_profile,email'})
        } 
      },
      logOut() {
        FB.logout(function(response) {
          router.push("/home");
          this.loggedIn = false;
        });
      },
      async getLoginStatus(running){
        await FB.getLoginStatus(function(response) {
          console.log("Here", response, running)
          if (response.status === "connected"){
            console.log("ITS TRUE YOURE LOGGED IN", this.loggedIn);
            this.loggedIn = true;
          }
        });
      }
    }
}
</script>

<style lang="css" scoped>

</style>