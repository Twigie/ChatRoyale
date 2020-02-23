<template>
    <div style="text-align: center">
        <div id="textBig">Login</div>
        <facebookauth/>
    </div>
</template>

<script>
import facebookauth from "../components/facebookauth";

import router from '../router'
export default {
  name: 'loginPage',
  components: {
      facebookauth
  }
} 
</script>


<style scope>
#textBig {
    font-size: 100px;
}
</style>
