<template>
  <div class="hello">
    <h1>CONTACT US</h1>
    <div class="container">
      <div class="row">
        <div><img class="rajagiri" src="https://www.rajagiritech.ac.in/Home/images/010.png" alt=""></div>
      </div>
      <div class="row rajagiritext">
        <div class="col-md-6">
          <h3>Rajagiri School of Engineering & Technology</h3>
          <p>Rajagiri Valley Rd, Rajagiri Valley, Chittethukara, Kakkanad, Kerala 682039</p>
          <p>Phone: 0484 266 0999</p>
        </div>
            <iframe frameborder="0" scrolling="no" class="ifram col-md-6" marginheight="0" marginwidth="0" align="Center" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=rajagiri+school+of+engineering+%26+Technology&amp;sll=9.993661,76.359251&amp;sspn=0.00858,0.021973&amp;ie=UTF8&amp;hq=rajagiri+school+of+engineering+%26+Technology&amp;hnear=&amp;ll=9.993661,76.359272&amp;spn=0.020287,0.027466&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
      </div>
    </div>
</div>
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
  margin-top: 5rem;
}
h3 {
  font-size: 1rem;
  margin-top: 2rem;
}

p {
  color: black;
  font-size: .7rem;
  text-align: left;
  margin-left: 1rem;
}
.container {
  margin-top:5rem;
}
.google-maps {
        position: relative;
        padding-bottom: 75%; 
        height: 0;
        overflow: hidden;
}

.rajagiri {
  width: 100%;
  box-shadow: 0 5px 5px -5px #333;
  z-index: 99;
}
.ifram {
  display: inline;
  z-index:1;
}
.rajagiritext {
  
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: white;
}
</style>
