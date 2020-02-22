<template>
  <div>
    <img class="center" src="../assets/wordLogo.png"/>
    <button type="button" class="centerButton btn btn-primary" @click="routeLogin()">Login</button>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',
  methods: {
    routeLogin() {
      router.push({path: 'login'})
    }

}}

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

