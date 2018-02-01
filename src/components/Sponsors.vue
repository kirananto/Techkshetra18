<template>
  <div class="mobmargin">
    <h1 class="hmain">SPONSORS</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3 class="hmain headerfont">Diamond Sponsors</h3>
          <img src="/static/images/sponsors/BALCO.png" class="col-md-9 sponmargin">
        </div>
        <div class="col-md-6">
          <h3 class="hmain headerfont">Platinum Sponsors</h3>
          <img src="/static/images/sponsors/vguard.png" class="col-md-6 sponmargin">
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

  .hello {
  margin-top: 5rem;
}
.mobmargin{     
      margin-left:-60px;
    }
 .sponmargin
  {
     margin-left: 67px;
  }   

}

.headerfont{
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
    line-height: 2.5rem;
    font-weight: 400;
    padding-top: 2rem;
}
</style>
