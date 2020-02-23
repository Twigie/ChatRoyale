<template>
    <div>
    <div id="fb-root"></div>
      <script async defer type="application/javascript" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=3563200747086858&autoLogAppEvents=1"></script>
      <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false"></div>

      <button @click="checkLogin()"> CLICK EHRE FOR MORE AIDS </button>
    </div>
</template>

<script>

    export default {
      data: () => ({
      facebook: {
        FB: {},
        scope: {},
      }
    }),
    methods: {
    // getLoginStatus(){
    //   FB.getLoginStatus(function(response) {
    //     statusChangeCallback(response);
    //   });
    //},

    checkLogin() {
      FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        window.location = //redirect to page with logged user (you have the response token in response)
      } else {
      //Show the login popup
        FB.login(function(response) {
          if (response.authResponse) {
            window.location = //redirect to location after correct login
          }
        }, { scope: '<scopes>', state: '<state>' });
      }
    });
  }
    },
    onLoad: () => {
  //   window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '3563200747086858',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : 'v6.0'
  //   });
      
  //   FB.AppEvents.logPageView();   
      
  // };

  //   (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //    }(document, 'script', 'facebook-jssdk'));
    }   
  }
</script>

<style lang="css" scoped>

</style>