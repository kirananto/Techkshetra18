<template>
  <div class="hello container">
    <img src="/static/techkshetra_logo.svg" alt="" class="logo img-responsive">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  font-size:2rem;
  color:#D6D0D0;
}

img {
  max-width: 50%;
  margin-top: 30%;
  z-index:100;
}

@media screen and (max-width:480px){
  img {
    max-width: 90%;
  }
}



</style>
