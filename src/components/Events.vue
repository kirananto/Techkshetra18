<template>
  <div class="hello">
    <h1>EVENTS</h1>
    <!-- modalbegins -->
    <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal">
      <registration v-if="registerEvent" :id="registerEvent"></registration>
    </sweet-modal>
    <!-- modal ends -->
     <div class="container">
      <div class="row"  ref="row">
      <!-- <div class="row offset-md-2 container" v-for="(event,key) in events" :key="key"> -->
        <div class="con" v-for="(item,k) in getEvents" :key="k">
        
        <div class="thumb overlay red" ref="item" :style="{ 'background-image': 'url(' + item.photoURL + ')' }"  @click="setSelected(item, k)">
        </div>
        <div class="detail col-md-12" v-if="shouldDisplay(k)" transition>
          <div class="row">
          <i class="material-icons offset-md-11 offset-sm-11" style="color:white;" v-on:click="closeSelected">close</i>
          </div>
          <div class="row bgcover">
          <div class="col-md-6">
            <img :src="selected.event.photoURL" class="photo">
          </div>
          <div class="col-md-6">
              <h2>{{selected.event.name}}</h2>
              <p class="desc" >{{selected.event.details}}</p>
              <div class="details-btn" @click="register(selected.event)">Register</div>
          </div>
          </div>
        </div>
        </div>
     </div>
     
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import Registration from './Registration'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
require('firebase/firestore')
export default {
  name: 'Events',
  components: {
    SweetModal,
		SweetModalTab,
    Registration
  },
  data () {
    return {
      events: [],
      selected: {
        event: null,
        value: null,
        key: null
      },
      noele: null,
      registerEvent: null
    }
  },
  methods: {
    setSelected: function (event, value) {
      console.log(value)
        this.selected.key = value 
        this.selected.event = event
        this.selected.value = parseInt(value / this.noele)
    },
    closeSelected: function () {
      this.selected = {
        event: null,
        value: null
      }
    },
    shouldDisplay: function (key) {
      if (this.selected.value === (key - this.noele + 1) / this.noele) {
        return true
      } else if ((this.selected.key > this.getEvents.length - (this.noele - 1)) && (key === this.getEvents.length - 1)) {
        return true
      } else {
        return false
      }
    },
    register: function (event) {
      if (firebase.auth().currentUser) {
        this.registerEvent = this.selected.event
        this.$refs.modal.open() 
        // this.$router.replace(`/registration/${this.selected.event.id}`)
      } else {
        var provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(provider)
          .then((result) => {
            this.$refs.modal.open() 
            // this.$router.replace(`/registration/${this.selected.event.id}`)
          }).catch((error) => {
            console.log(error.message)
          })
      }
    }
  },
  computed: {
    ...mapGetters(['getEvents'])
  },
  mounted () {
    console.log(this.getEvents.length - 1)
    this.noele = parseInt(this.$refs.row.clientWidth / 256)
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
    -webkit-transition: .5s ease;
    transition: .5s ease;
}

.overlay:hover:after  {
  opacity:1;
  -webkit-transition: .5s ease;
    transition: .5s ease;
}

.red:after, .red:before {
  background-color: red;
  opacity: 0;
  -webkit-transition: .5s ease;
    transition: .5s ease;
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
  padding-bottom: 2rem;
}

.details-btn{
   
    font-weight: 900;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 20px;
    border: 3px solid white;
    display: inline-block;
    margin: -25px 0 0 0;
    outline: none;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    &:hover {
    color: black !important;
    background-color: white !important;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    }
    @media screen and (max-width: 420px){
      margin-top: 10px !important;
    }
}
</style>
