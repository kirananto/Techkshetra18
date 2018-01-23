<template>
  <div class="hello">
    <h1>EVENTS</h1>
     <div class="container-fluid">
      <br>
      <div class="row" v-for="(event,key) in events" :key="key">
        <div class="item col-md-3" v-for="(item,k) in event" :key="k" @click="setSelected(item, k)">
          <div class="thumb"> {{item.name}}</div>
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
        photoURL: '',
        eventid: 1234
      }, {
        name: 'Amazing Race2',
        photoURL: '',
        eventid: 1234
      }, {
        name: 'Amazing Race3',
        photoURL: '',
        eventid: 1234
      }, {
        name: 'Amazing Race4',
        photoURL: '',
        eventid: 1234
      }], [ {
        name: 'Amazing Race',
        photoURL: '',
        eventid: 1234
      }, {
        name: 'Amazing Race',
        photoURL: '',
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
.card {
  background-color: white;
  border-radius: 1rem;
  height: 10rem;
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
.item {
  padding: 0.5rem;
}
.thumb {
  width: 100%;
  height: 20rem;
  border-radius: .5rem;
  background: #fff;
}

.thumb:hover {
  background: #9c0;
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
</style>
