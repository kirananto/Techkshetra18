<template>
  <div id="app">
     <vue-particles
        color="#c13a48"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#c13a48"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" >
      </vue-particles>
      <fab :actions="fabActions"
      :position="position"
      :bg-color="bgColor"
       @cache="cache"
       @alertMe="alert"
  ></fab>
    <router-view/>
  </div>
</template>

<script>
import fab from 'vue-fab'
export default {
  name: 'App',
  components: {
    fab
  },
  data () {
    return {
      bgColor: '#c13a48',
      position: 'bottom-right',
      fabActions: [
              {
                  name: 'cache',
                  icon: 'cached',
                  tooltip: 'cache'
              },
              {
                  name: 'alertMe',
                  icon: 'add_alert'
              }
          ]
    }
  },
  methods: {
      cache () {
          console.log('Cache Cleared')
      },
      alert () {
          alert('Clicked on alert icon')
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
