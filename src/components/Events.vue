<template>
  <div class="hello">
    <h1>EVENTS</h1>
     <div class="container">
      <div class="row"  ref="row">
      <!-- <div class="row offset-md-2 container" v-for="(event,key) in events" :key="key"> -->
        <div class="con" v-for="(item,k) in events" :key="k">
        
        <div class="thumb overlay red" ref="item" :style="{ 'background-image': 'url(' + item.photoURL + ')' }"  @click="setSelected(item, k)">
        </div>
        <div class="detail col-md-12" v-if="selected.value === (k-noele+1)/noele" transition>
          <div class="row col-md-1 offset-md-11">
          <i class="material-icons" v-on:click="closeSelected">close</i>
          </div>
          <div class="row">
          <div class="col-md-6">
            <img :src="selected.event.photoURL" class="photo">
          </div>
          <div class="col-md-6">
              <h2>{{selected.event.name}}</h2>
          </div>
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
      events: [
      {
        name: '3\'s Football',
        photoURL: '/static/images/Non_tech/3sFootball.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/Non_tech/22B.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race1',
        photoURL: '/static/images/Non_tech/AmazingRace.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/Non_tech/Basketball.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race1',
        photoURL: '/static/images/Non_tech/CollegeRadio.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/Non_tech/AmazingRace.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race1',
        photoURL: '/static/images/Non_tech/AmazingRace.svg',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '/static/images/Non_tech/AmazingRace.svg',
        eventid: 1234
      }],
      selected: {
        event: null,
        value: null
      },
      noele: null
    }
  },
  methods: {
    setSelected: function (event, value) {
      console.log(value)
        this.selected.event = event
        this.selected.value = parseInt(value / this.noele)
    },
    closeSelected: function () {
      this.selected = {
        event: null,
        value: null
      }
    }
  },
  mounted () {
    this.noele = parseInt(this.$refs.row.clientWidth / 256)
    // TODO code to fetch event details from firestore on mounting app
   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$content: 'VIEW DETAILS';
.container {
  margin-top:3rem;
}
.con {
	display: contents;
}

h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  font-size:5rem;
  color:#D6D0D0;
}

h2 {
  font-size: 4rem;
}

.thumb {
  height:16rem;
  width: 16rem;
  background-size: 101%;
  filter: grayscale(100%);
}

.thumb:hover {
  filter: grayscale(0%);
}

.col-md-3, .thumb {
  transition: .5s ease;
}

.container:hover{
  opacity: 1;
}

.detail {
  padding-top: 1rem;
  display: block;
  margin-left: 4rem;
}

.v-transition {
  transition: all .9s ease;
  height: 500px;
  opacity: 1;
}

    
.center-text:hover + .overlay {
    display: block;
    z-index: 100;
}

.overlay {
  position: relative;
}

.overlay:after {
  position: absolute;
  content:$content;
  color:white;
   font-weight: 900;
   font-size: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 5px 5px;
    border: 3px solid #c13a47;
    display: inline-block;
    margin: 30px 0 0;
    outline: none;
    z-index: 1; 
    opacity:0;
}

.overlay:hover:after  {
  opacity:1;
}

.red:after, .red:before {
  background-color: red;
  opacity: 0;
}

.photo {
  margin: 1rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
}
</style>
