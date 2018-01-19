<template>
  <div class="hello container">
    <div class="offset-md-4 col-md-5 col-11 offset-1">
   <div class="row offset-md-2 offset-2">
    <img src="/static/techkshetra_logo.svg" alt="" class="logo"> 
    </div>
  <br>
  <div class="row col-md-4">
    <h1>TECKSHETRA</h1>
  </div>
   <div class="row col-md-10 offset-4">
    <h2>Coming Soon...</h2>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  color:#D6D0D0;
}

h1 {
   font-size:5rem;
}
@media (max-width: 991px) {
  h1 {
    font-size: 3.5rem;
  }
}

img {
  width:12rem;


}
.hello {
  position: absolute;
  top: 70%;
  right: 50%;
  max-width: 100%;
  transform: translate(50%,-50%);


}
</style>
