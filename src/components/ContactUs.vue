<template>
  <div class="hello">
    <h1>CONTACT US</h1>
<div class="row">

     <div class="col-md-6 mcard card">
      <div class="google-maps">
        <iframe width="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" align="Center" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=rajagiri+school+of+engineering+%26+Technology&amp;sll=9.993661,76.359251&amp;sspn=0.00858,0.021973&amp;ie=UTF8&amp;hq=rajagiri+school+of+engineering+%26+Technology&amp;hnear=&amp;ll=9.993661,76.359272&amp;spn=0.020287,0.027466&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
    </div>
</div>
<br>

 <div class="col-md-6 card">
   <br>
   <p>Rajagiri School of Engineering & Technology</p><p>Rajagiri School of Engineering & Technology</p><p>Rajagiri School of Engineering & Technology</p><p>Rajagiri School of Engineering & Technology</p>
  <p>Rajagiri School of Engineering & Technology</p>
<p>Rajagiri Valley, Kakkanad,</p>
<p>Kochi 682 039 Kerala INDIA</p>
<p>Tel: +91 484 2660999</p>
<p>Fax: +91 484 2426241</p>
</div></div>
  </div></div>
</template>

<script>
export default {
  name: 'Contactus',
  data () {
    return {
      msg: ''
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
@media only screen and (min-width:421px)

{
  .mcard{
    /* padding: 50px; */
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
