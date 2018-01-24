<template>
  <div class="hello">
    <h1>EVENTS</h1>
     <div class="container-fluid">
      <br>
      <div class="row offset-md-2 container" v-for="(event,key) in events" :key="key">
        <div class="col-md-3 thumb overlay red" :style="{ 'background-image': 'url(' + item.photoURL + ')' }"  v-for="(item,k) in event" :key="k" @click="setSelected(item, k)">
          <span class="center-text">{{item.name}}</span>
        </div>
        <div class="detail col-md-12" v-if="selected.event === event[selected.value]" transition>
          <div class="row col-md-1 offset-md-11">
          <i class="material-icons" v-on:click="closeSelected">close</i>
          </div>
          <div class="row">
          <div class="col-md-6">
            dFD
          </div>
          <div class="col-md-6">
              <h2>Item s {{selected.event.name}} details</h2>
          </div>
          </div>
        </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      events: [[
      {
        name: 'Amazing Race1',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race1',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }], [ {
        name: 'Amazing Race1',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race1',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/1.jpg',
        eventid: 1234
      }]],
      selected: {
        event: null,
        value: null
      }
    }
  },
  methods: {
    setSelected: function (event, value) {
        this.selected.event = event
        this.selected.value = value
    },
    closeSelected: function () {
      this.selected = {
        event: null,
        value: null
      }
    }
  },
  mounted () {
    // TODO code to fetch event details from firestore on mounting app
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

h2 {
  font-size: 2rem;
}

.hello {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  width: 100%;
  height: 100%;

} 
/* TEST */
.thumb {
  
  height:15rem;
  background-size: cover;
  filter: grayscale(100%);
}

.thumb:hover {
  filter: grayscale(0%);
  background-size: cover;
}

.col-md-3,thumb{

  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover{
  opacity: 1;
}

.detail {
  background: #666;
  padding-top: 1rem;
}

.v-transition {
  transition: all .9s ease;
  height: 500px;
  opacity: 1;
}

.v-enter, .v-leave {
  height: 0;
  opacity: 0;
}

/* OVERLAY */
.center-text 
{
   position: absolute;
   color:white;
   font-weight: 900;
   font-size: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.overlay {
  position: relative;
}

.overlay:after {
  position: absolute;
  content:"";
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
}

.overlay:hover:after  {
  opacity: .5;
}

.red:after {
  background-color: red;
}

.blue:after {
  background-color: blue;
}

.green:after {
  background-color: green;
}

.orange:after {
  background-color: orange;
}

</style>
