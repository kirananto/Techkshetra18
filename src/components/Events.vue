<template>
  <div class="hello">
    <h1>EVENTS</h1>
    <!-- modalbegins -->
    <sweet-modal modal-theme="dark" blocking enable-mobile-fullscreen overlay-theme="dark" ref="modal">
      <registration v-if="registerEvent" :id="registerEvent"></registration>
    </sweet-modal>
    <!-- modal ends -->
     <div class="container">
      <div class="row"  ref="row">
        <div class="con" v-for="(item,k) in events" :key="k">
        
        <div class="thumb overlay red" ref="item" :style="{ 'background-image': 'url(/static/images/Non_tech/' + item.photoURL}"  @click="setSelected(item, k)">
        </div>
        <div class="detail bgcover col-md-12" v-if="shouldDisplay(k)" transition>
          <div class="row">
          <i class="material-icons" style="margin-left: 100%;color: white;" v-on:click="closeSelected">close</i>
          </div>
          <div class="row">
          <div class="col-md-6">
            <img :src="'/static/images/Non_tech/'+selected.event.photoURL" class="photo">
          </div>
          <div class="col-md-6 fixedht">
            
              <h2>{{selected.event.name}}</h2>
            <ul class="nav nav-tabs col-md-12 col-sm-12">
              <li class=" col-md-4 active col-4" ><a data-toggle="tab" :href="'#'+selected.event.name+'about'">ABOUT</a></li>
              <li class="col-md-4 col-4"><a data-toggle="tab" :href="'#'+selected.event.name+'menu1'">RULES</a></li>
              <li class="col-md-4  col-4"><a data-toggle="tab" :href="'#'+selected.event.name+'menu2'">CONTACT</a></li>
            </ul>

            <div class="tab-content">
              <div :id="selected.event.name+'about'" class="tab-pane fade in active">
                <div class="bodydesc">
                <p class="desc" >{{selected.event.details}}</p>
                </div>
                <!-- <p class="desc" >Registration Fee: Rs.{{selected.event.registrationFee}}</p> -->
                <!-- <div class="details-btn" @click="register(selected.event)">Register</div> -->
              </div>
              <div :id="selected.event.name+'menu1'" class="tab-pane fade">
                <div class="bodydesc">
                <ul>
                <li class="rules" v-for="(item,key) in selected.event.eventRules" :key="key">{{item}}</li>
                </ul>
                </div>
              </div>
              <div  :id="selected.event.name+'menu2'" class="tab-pane fade">
                 <ul>
               <li class="rules" v-for="(item,key) in selected.event.contact" :key="key">{{item}}</li>
                 </ul>
              </div>
            </div>
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
  props: ['branch'],
  components: {
    SweetModal,
		SweetModalTab,
    Registration
  },
  data () {
    return {
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
        console.log(this.selected.key + '--' + key)
        return true
      } else if ((this.selected.key >= this.events.length - (this.noele - 1)) && (key === this.events.length - 1)) {
        return true
      } else {
        return false
      }
    },
    register: function (event) {
      if (firebase.auth().currentUser) {
        this.registerEvent = this.selected.event
        this.$refs.modal.open() 
      } else {
        var provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(provider)
          .then((result) => {
            this.$refs.modal.open() 
          }).catch((error) => {
            console.log(error.message)
          })
      }
    }
  },
  computed: {
    ...mapGetters(['getEvents']),
    events: function () {
      return this.getEvents.filter(event => event.branch === this.branch)
    }
  },
  mounted () {
    console.log(this.events.length - 1)
    this.noele = parseInt(this.$refs.row.clientWidth / 256)

    // =======================
     firebase.firestore().collection('events').where('photoURL', '==', 'https://path_to_image').get().then(querySnapshot => {
       querySnapshot.forEach(doc => {
         console.log(doc.data().id)
       })
     })
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

.rules {
  color: white;
  margin-top:1rem;
  text-align: left;
}

h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  font-size:5rem;
  color:#D6D0D0;
}

.sweet-modal.theme-dark {
  background: black !important;
}
.sweet-modal-overlay.theme-dark {
	background: rgba(19, 19, 19, 0.9);
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

.nav li {
   text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-text-fill-color: white;
    margin-bottom: 1rem;
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
  background-color: #c13a47;
  opacity: 0;
  -webkit-transition: .5s ease;
    transition: .5s ease;
}

.photo {
  margin: 1rem;
  width: 100%;
  height:auto;
  margin-bottom: 3rem;
  border-radius: 1rem;
  @media screen and (max-width: 500px) {
    display:none;
  }
}
.hello{
  height: auto;
}
.bodydesc {
  height: 20rem;
   overflow-y: auto;
}

#menu1 {
    height: 20rem;
    width: 100% !important;
    overflow-y: auto;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}

.hello {
  margin-top: 5rem;
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
.fixedht{
  height: 35rem;
  padding-bottom: 2rem;
}
@media screen and (max-width: 420px){
  .container{
    padding-left: 4.3rem;
  }
  .row{
    margin-left: -4rem;
  }
 
}
@media screen and (min-width: 1024px){
  .bgcover{
      width: 900px;
    }
  }
@media screen and (min-width: 1200px){
  .bgcover{
      width: 1100px;
    }
  }
</style>
