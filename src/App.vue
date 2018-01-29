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
      <fab 
      :actions="fabActions"
      :position="position"
      :bg-color="bgColor"
      :main-icon="mainIcon"
       @sponsors="sponsors"
       @autoshow="autoshow"
       @workshops="workshops"
       @events="events"
       @about="about"
       @contact="contact"
       @qrcode="qrcode"
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
      mainIcon: 'dehaze',
      fabActions: [
              {
                  name: 'sponsors',
                  icon: 'business_center',
                  tooltip: 'Sponsors'
              },
              {
                  name: 'workshops',
                  icon: 'build',
                  tooltip: 'Workshops'
              },
              {
                  name: 'events',
                  icon: 'event',
                  tooltip: 'Events'
              },
              {
                  name: 'autoshow',
                  icon: 'directions_car',
                  tooltip: 'AutoShow'
              },
              {
                  name: 'contact',
                  icon: 'contacts',
                  tooltip: 'Contact Us'
              },
              {
                  name: 'qrcode',
                  icon: 'code',
                  tooltip: 'QRCode'
              }
          ]
    }
  },
  methods: {
      sponsors () {
          this.$router.replace('/sponsors')
      },
      qrcode () {
          this.$router.replace('/qrcode')
      },
      autoshow () {
        this.$router.replace('/autoshow')
      },
      workshops () {
        this.$router.replace('/workshops')
      },
      events () {
        this.$router.replace('/events')
      },
      contact () {
        this.$router.replace('/contact')
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

#particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
}

</style>
