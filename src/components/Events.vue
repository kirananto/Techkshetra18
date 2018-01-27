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
          <div class="row">
          <i class="material-icons offset-md-11 offset-sm-11" style="color:white;" v-on:click="closeSelected">close</i>
          </div>
          <div class="row bgcover">
          <div class="col-md-6">
            <img :src="selected.event.photoURL" class="photo">
          </div>
          <div class="col-md-6">
              <h2>{{selected.event.name}}</h2>
              <p class="desc" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          </div>
        </div>
        </div>
     </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/firestore')
export default {
  name: 'Events',
  data () {
    return {
      events: [],
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
    var eventRef = firebase.database().ref('events/')
    eventRef.once('value').then(snapShot => {
      snapShot.forEach(element => {
        this.events.push(element.val())
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$content: 'VIEW DETAILS';
.container {
  margin-top:3rem;
  
  @media screen  and (max-width: 420px ){
    margin-right: 20%;
  margin-left: 3.2rem !important;
  }
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
  width: 15rem;
  height: 15rem;
  border-radius: 1rem;
  margin:1rem;
  background-size: cover;
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
  padding-right: 5rem;
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
  width: 100%;
  heigth:auto;
  margin-bottom: 3rem;
  border-radius: 1rem;

  @media screen and (max-width: 500px) {
    display:none;
  }
}
.hello{

  height: auto;
  @media screen and (max-width: 420px) {
    margin-left: 2rem;
  }

}
.desc
{
  color: white;
  @media screen and (min-width: 421px) {
    padding: 3rem 3rem 3rem 3rem;
  }

}
.bgcover{
  background-color:#080808;
}


</style>
