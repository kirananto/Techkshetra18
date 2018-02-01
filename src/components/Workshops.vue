<template>
  <div class="hello" ref="prev">
    <h1>WORKSHOPS</h1>
    <!-- modalbegins -->
    <sweet-modal modal-theme="dark" blocking enable-mobile-fullscreen overlay-theme="dark" ref="modal">
      <registration v-if="registerEvent" :maxparticipants="selected.event.max_participants" :id="registerEvent"></registration>
    </sweet-modal>
    <!-- modal ends -->
     <div class="container"> 
   <!-- hello -->
    <div v-for="(item,k) in chunkedEvents" :key="k">
      <div class="row rose"> 
 <div class="thumb overlay red" v-for="(i,key) in item" :key="key" v-on:click="setSelected(i, k)" :style="{ 'background-image': 'url(/static/images/Non_tech/' + i.photoURL}" >
      </div>
        </div>
      <div v-if="selected.value === k"> 
        <!-- insert old code here -->
        <div class="detail bgcover col-md-12" transition>
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
              <li class="col-md-4 col-4"><a data-toggle="tab" :href="'#'+selected.event.name+'menu1'">DETAILS</a></li>
              <li class="col-md-4  col-4"><a data-toggle="tab" :href="'#'+selected.event.name+'menu2'">CONTACT</a></li>
            </ul>

            <div class="tab-content">
              <div :id="selected.event.name+'about'" class="tab-pane fade in active">
                <div class="bodydesc">
                <ul>
                <li style="color:white; text-align:left;" v-for="(detail,key) in selected.event.details" :key="key">{{detail}}</li></ul>
                <p class="desc"> Date: {{selected.event.date}}</p>
                </div>
              
              </div>
              <div :id="selected.event.name+'menu1'" class="tab-pane fade">
                <div class="bodydesc">
                <h4 class="title">Venues</h4>
                <ul>
                <li class="rules" v-for="(item,key) in selected.event.eventVenue" :key="key">{{item}}</li>
                </ul>
                <h4 class="title">DURATION : {{selected.event.duration}}</h4> 
                </div>
              </div>
              <div  :id="selected.event.name+'menu2'" class="tab-pane fade">
                 <ul>
               <li class="rules" v-for="(item,key) in selected.event.contact" :key="key">{{item}}</li>
                 </ul>
              </div>

              <p class="desc" >Registration Fee: Rs.{{selected.event.registrationFee}}</p>
                <div class="details-btn" @click="register(selected.event)">Register</div>
            </div>
            </div>
          </div>
        </div>
      </div>
   <!-- ends -->
      </div>
      </div></div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import Registration from './Registration'
import chunk from 'chunk'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
require('firebase/firestore')
export default {
  name: 'Workshops',
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
      this.selected.value = value
        this.selected.event = event
    },
    closeSelected: function () {
      this.selected = {
        event: null,
        value: null
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
    ...mapGetters(['getWorkshops']),
    chunkedEvents: function () {
      return chunk(this.getWorkshops, this.noele)
    }
  },
  mounted () {
    // console.log(this.events.length - 1)
    this.noele = parseInt(this.$refs.prev.clientWidth / 240) - 1
    if (this.noele > 4) {
      this.noele = 4
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$content: 'VIEW DETAILS';
.container {
  margin-top:3rem;
}

.tab-content>.active {
    display: block;
    height: 15.5rem;
}
.con {
	width: 10rem;
}

.rules {
  color: white;
  margin-top:1rem;
  text-align: left;
}

.title {
   text-transform: uppercase;
   color: white;
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
  height: 16.5rem;
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
    padding: 1rem 1rem 1rem 1rem;
    font-weight: 900;
  }

}
.bgcover{
  background-color:#080808;
  padding-bottom: 2rem;
  margin-left: -5%;
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
.bgcover{
  background-color:#080808;
  padding-bottom: 2rem;
  margin-left: 5%;
  margin-bottom: 4rem;
}

 .rose {
   @media screen and (max-width: 340px){
     margin-left: 5%;
   }
   @media screen and (max-width: 425px) and (min-width: 341px) {
     margin-left: 15%;
   }
   @media screen and (max-width: 959px) and (min-width: 426px) {
     padding-left: 12%;
   }

  @media screen and (max-width: 1200px) and (min-width: 960px) {
   padding-left: 8%;
  }
  @media screen and (min-width: 1201px) {
    padding-left: 2%;
 }
 }
// @media screen and (max-width: 420px){
//   .container{
//     padding-left: 32%;
//   }
//   .row{
//     margin-left: -4rem;
//   }
 
// }
// @media screen and (min-width: 1024px){
//   .bgcover{
//       width: 900px;
//     }
//   }
// @media screen and (min-width: 1200px){
//   .bgcover{
//       width: 1100px;
//     }
//   }
// @media screen and  (max-width: 1024px) and (min-width: 767px){
//   .container {
//    padding-left: 13%!important;
//   }
// }
// @media screen and  (max-width: 430px) and (min-width: 320px){
//   .container {
//     padding-left: 22%;
//   }
// }
</style>
