<template>
  <div class="">
    <h1 class="hmain">SPONSORS</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3 class="hmain">Diamond Sponsors</h3>
          <img src="/static/images/sponsors/BALCO.png" class="col-md-9 ">
        </div>
        <div class="col-md-6">
          <h3 class="hmain">Platinum Sponsors</h3>
          <img src="/static/images/sponsors/vguard.png" class="col-md-6 ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
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
h3 {
  font-size: 3rem;
  color:#D6D0D0;
  font-weight: normal;
  font-family:'Samarkan Normal';
}


 .sub{

    padding-bottom: 2.5rem;
  }


@media only screen and (max-width:420px){
  .main{
       padding-right: 32rem;
     } 
     .mob-title{
     display: block;
    margin: 0 auto;
  }  
    .sub{
    padding-left: 1.8rem;
    padding-bottom: 1.5rem;
  }
  .hmain{
    padding-left: 8rem;
  }
  /* .card{
    width: 400px;
    height: auto;
  }
}
 @media only screen and (max-width:620px){
    .card{
    width: 600px;
    height: auto;
  } */
  }
</style>
