<template>
  <div class="hello">
    <h1>ABOUT US</h1>
  <center> <div class="col sub"><img src="/static/images/temp/5.jpg"></div></center>
  <div class="col card">
      <p>Techkshetra, the one-day technical fest, features a variety of technical contests, designed to test technical knowledge and aptitude to the hilt. A crowd-puller with college students across the state, the fest is held every alternate year.</p>
      </div>
<br>
 

 <div class="col card">
      <p>Rajagiri School of Engineering & Technology</p>
<p>Rajagiri Valley, Kakkanad,</p>
<p>Kochi 682 039 Kerala INDIA</p>
<p>Tel: +91 484 2660999</p>
<p>Fax: +91 484 2426241</p>
</div></div>
</template>
<script>
export default {
  name: 'Aboutus',
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
.hello {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  width: 100%;
  height: 100%;
}
.card{
  padding: 1.2rem;
  background-color: black;
  color: white; 
}
 .sub{
    padding-bottom: 2.5rem;
  }
@media only screen and (max-width:420px){
 .sub{
    padding-left: 1.8rem;
    padding-bottom: 1.5rem;
  }
}
    .google-maps {
        position: relative;
        padding-bottom: 75%; // This is the aspect ratio
        height: 0;
        overflow: hidden;
    }
    .google-maps iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }

</style>
