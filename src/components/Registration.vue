<template>
  <div class="hello">
    <h1 v-if="id">{{id.name}} Registration</h1>
    <form v-on:submit.prevent="onSubmit">
<table class="table table-hover">
  <tr>
    <td class="userdetails_text">Name:</td>
    <td><input required type="text" v-model="displayName" class="form-control" name="fname" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Email:</td>
    <td><input required type="text" v-model="email" class="form-control" name="email" value="" ></td>
  </tr>

  <tr>
    <td required class="userdetails_text">Mobile No:</td><td><input type="number" required v-model="mobno" class="form-control" name="mobno"></td>
  </tr>
</table></form>
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

.table td {
  border-top: 0;
}

.form-control  {
  background: black;
  border-radius: 0;
  border: 2px solid #595b5d;
}

</style>
