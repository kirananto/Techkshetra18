<template>
  <div class="hello">
    <h1>ABOUT US</h1>
  <center> <div class="col sub"><img src="/static/images/temp/5.jpg"></div></center>
  <div class="col card">
    
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  
    
</div>


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
</style>
