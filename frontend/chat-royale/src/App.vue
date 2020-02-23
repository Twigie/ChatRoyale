<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
     window.fbAsyncInit = function() {
    FB.init({
      appId            : '3563200747086858',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v6.0'
    });
    };
  }
}
</script>>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
