<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <router-view/>
  </div>
</template>
<script>
window.fbAsyncInit = function() {
    FB.init({
      appId            : '3563200747086858',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v6.0'
    });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
export default {
}
</script>>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
