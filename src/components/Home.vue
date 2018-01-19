<template>
  <div class="hello">
    <img src="/static/techkshetra_logo.svg" alt="" class="logo"> 
    <h1>TECKSHETRA</h1>
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
  font-size:5rem;
  color:#D6D0D0;
}
img {
  width:12rem;


}
.hello {
  position: absolute;
  top: 70%;
  right: 50%;
  transform: translate(50%,-50%);


}
</style>
