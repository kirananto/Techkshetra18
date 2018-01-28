<template>
  <div class="">
    <h1 class="hmain">SPONSORS</h1>

  <div class="row">
  <div class="col"></div>
  <div class="col">
    
    <h2 class="hmain">Title Sponsor</h2>
   
     <div class="col-4 "><div class="main"><img src="/static/images/temp/1.jpg"></div></div>
  </div>
  <div class="col"></div>
</div>

<br>
   <h2 class="hmain">Level 1 Sponsor</h2>
   <br>
  <div class="row">
 
  <div class="col sub"><img src="/static/images/temp/1.jpg"></div>
  <div class="col sub"><div class="main"><img src="/static/images/temp/2.jpg"></div>
  </div>
  <div class="col sub"><img src="/static/images/temp/3.jpg"></div>
</div>

<br>
   <h2 class="hmain">Level 1 Sponsor</h2>
   <br>
  <div class="row">
 
  <div class="col sub"><img src="/static/images/temp/1.jpg"></div>
  <div class="col sub"><div class="main"><img src="/static/images/temp/2.jpg"></div>
  </div>
  <div class="col sub"><img src="/static/images/temp/3.jpg"></div>
</div><br>
   <h2 class="hmain">Level 1 Sponsor</h2>
   <br>
  <div class="row">
 
  <div class="col sub"><img src="/static/images/temp/1.jpg"></div>
  <div class="col sub"><div class="main"><img src="/static/images/temp/2.jpg"></div>
  </div>
  <div class="col sub"><img src="/static/images/temp/3.jpg"></div>
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
.hello {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  width: 100%;
  height: 100%;

}
.main{
   display: block;
    margin: 0 auto;
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
}
  
</style>
