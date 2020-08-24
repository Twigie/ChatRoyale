<template>
  <div>
    <img class="center" src="../assets/wordLogo.png"/>
   <!-- <button type="button" class="centerButton btn btn-primary">Login</button> -->
    <img class="center btn" @click="routeLogin()" src="../assets/sprite.png"/>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',
  methods: {
    routeLogin() {
      router.push({path: 'login'})
    },

}
}

</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.centerButton {
  margin:auto;
  display:block;
}

</style>

