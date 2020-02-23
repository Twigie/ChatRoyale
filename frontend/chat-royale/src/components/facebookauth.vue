<template>
    <div>
    <button id="login" @click="logIn()" class="btn btn-primary d-none"> Login to Facebook</button>
    <button @click="getLoginState(123)"> bran </button>
    <button id="logout" class="btn btn-danger d-none" @click="logOut()"> GET UT </button>
    </div>
</template>

<script>
  import router from "../router";
  import axios from "axios";
  axios.defaults.withCredentials = true;

    export default {
    methods: {
       logIn() {
          FB.login(function(response) {
            if (response.status === "connected"){
              router.push("/");
              axios.post("http://localhost:5000/api/users/oauth/facebook", {"access_token": response.authResponse.accessToken }, {
                withCredentials: true
              });
            }
            else
              location.reload();
          }, {scope: 'public_profile, email'})
      },
      logOut() {
        FB.logout(function(response) {
          router.push("/home");
          this.loggedIn = false;
        });
      },
      async getLoginState(running){
        await FB.getLoginStatus(function(response) {
          console.log("Here", response, running)
          if (response.status === "connected"){
            console.log("ITS TRUE YOURE LOGGED IN", this.loggedIn);
            this.loggedIn = true;
          }
        });
      },
      cookieCheck() {
        let cookieValue = document.cookie;
        cookieValue = cookieValue.split(";")
        let tokenCookie = "";
        cookieValue.forEach((cookie) => {
          if (cookie.includes("token")){
             tokenCookie = cookie;
          }
        });

        if (tokenCookie){
          router.push("/game");
        } else {
          let logoutelement = document.getElementById("login");
          logoutelement.classList.remove("d-none");
        }
      } 
    },
    mounted: function() {
      this.cookieCheck()
    }      
}
</script>

<style lang="css" scoped>

</style>