<template>
  <div class="hello">
    <h1>{{event.name}} Registration</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Registration',
  props: ['id'],
  data () {
    return {
      event: null
    }
  },
  computed: {
      ...mapGetters(['getEvents'])
  },
  mounted () {
    this.event = this.getEvents.filter(element => {
        return element.id === this.id
    })[0]
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
</style>
