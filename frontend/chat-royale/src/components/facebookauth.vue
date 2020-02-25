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
      data: function() {
        return {
          userID: ""
        }
      },
    methods: {
       logIn() {
          FB.login(function(response) {
            if (response.status === "connected"){
              //TODO return the user OBJ formatted instead of "success"
              axios.post("https://localhost:5000/api/users/oauth/facebook", {"access_token": response.authResponse.accessToken }, {
                withCredentials: true
              });
              router.push("/lobby");
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
      async getLoginState(){
        await FB.getLoginStatus(function(response) {
          if (response.status === "connected"){
              return true;
          } else
              return false;
        });
      },
      async getUserId(){
        await FB.getLoginStatus(function(response) {
          if (response.status === "connected") {
            this.userID = response.authResponse.userID;
          } else
              return false;
        });
      },
      async cookieCheck() {
        let cookieValue = document.cookie;
        cookieValue = cookieValue.split(";")
        let tokenCookie = "";
        cookieValue.forEach((cookie) => {
          if (cookie.includes("token")){
             tokenCookie = cookie;
          }
        });
        console.log("hehe")

        var userId = "";
        await FB.getLoginStatus((response) => {
          if (response.status === "connected") {
            axios.get("https://localhost:5000/api/users/details", { params: {
           "userId": response.authResponse.userId 
       }});
          } else
              return false;
        });


      //   const res = await axios.get("https://localhost:5000/api/users/details", { params: {
      //      userId
      //  }});
        // sessionStorage.setItem("userData", JSON.stringify(res));
        

        if (tokenCookie){
          router.push("/lobby");
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