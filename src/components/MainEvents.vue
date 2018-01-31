<template>
  <div class="hello">
    <h1>EVENTS</h1>
     <div class="container">
      <div class="row">
        
        <router-link :to="'/event/'+ item.branch" :branch="item.branch"   v-for="(item,k) in events" :key="k" class="thumb" ref="item" :style="{ 'background-image': 'url(/static/images/branches/' + item.photoURL + '.svg)' }">
        </router-link>
     </div>
     
  </div>
  </div>
</template>

<script>
export default {
  name: 'MainEvents',
  data () {
    return {
      noele: null,
      events: [{
        branch: 'AEI',
        photoURL: 'AEI'
      }, {
        branch: 'CE',
        photoURL: 'Civil'
      }, {
        branch: 'CSE',
        photoURL: 'CSE'
      }, {
        branch: 'ECE',
        photoURL: 'ECE'
      }, {
        branch: 'EEE',
        photoURL: 'eee'
      }, {
        branch: 'IT',
        photoURL: 'IT'
      }, {
        branch: 'MECH',
        photoURL: 'Mech'
      }, {
        branch: 'NON',
        photoURL: 'NonTech'
      }]
    }
  },
  methods: {
  },
  mounted () {

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

.hello {
  margin-top: 5rem;
  @media screen  and (max-width: 420px ){
  margin-left: 1.3rem;
}
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
@media screen and (max-width: 1200px){
.container{
margin-left: 10rem;
}
}
</style>
