<template>
  <div class="hello">
    <h1 v-if="id">{{id.name}} Registration</h1>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  props: ['id'],
  data () {
    return {

    }
  },
  computed: {
  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  font-size:3rem;
  color:#D6D0D0;
}
</style>
