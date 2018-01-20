<template>
  <div class="hello">
    <h1>EVENTS</h1>
    <div class="container-fluid">
      <br>
        <div v-for="(event,index) in events" :key='index' class="col-md-3 offset-md-1 card">
            <h3>{{event.name}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      events: [
      {
        name: 'Amazing Race',
        photoURL: '',
        eventid: 1234
      }]
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
.card {
  background-color: white;
  border-radius: 1rem;
  height: 10rem;
}
.hello {
  position: absolute;
  top: 60%;
  right: 50%;
  transform: translate(50%,-50%);
  width: 100%;
  height: 100%;

}
</style>
