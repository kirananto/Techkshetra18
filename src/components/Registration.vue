<template>
  <div class="hello">
    <h1 v-if="id">{{id.name}} Registration</h1>
    <form v-on:submit.prevent="onSubmit">
<table class="table table-hover">
  <tr>
    <td class="userdetails_text">Name:</td>
    <td><input required type="text" v-model="currentUser.displayName" class="form-control" readonly name="fname" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Email:</td>
    <td><input required type="text" v-model="currentUser.email" class="form-control" name="email" readonly value="" ></td>
  </tr>

  <tr>
    <td required class="userdetails_text">Mobile No:</td><td><input type="number" required v-model="mobno" class="form-control" name="mobno"></td>
  </tr>

      <tr>
    <td class="userdetails_text">College:</td>
    <td><input required type="text" v-model="college" class="form-control" name="email"  value="" ></td>
  </tr>
    <tr>
    <td></td>
    <td><input type="submit" name="submit" value="Submit" class="col-md-12 button-submit"></td>
  </tr>
</table></form>
  </div>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert'
require('firebase/firestore')
export default {
  name: 'Registration',
  props: ['id'],
  data () {
    return {
      mobno: null,
      college: null,
      currentUser: {
        displayName: null,
        email: null
      }
    }
  },
  methods: {
    onSubmit: function () {
      firebase.firestore().doc(`registration/${this.currentUser.uid}/registered/${this.id.id}`).set({
        uid: this.currentUser.uid,
        displayName: this.currentUser.displayName,
        email: this.currentUser.email,
        college: this.college,
        mobno: this.mobno
      }).then(success => {
        swal('success', 'Registered', 'success').then(success => {
          this.$router.replace('/events')
        })
      })
    }
  },
  mounted () {
    this.currentUser = firebase.auth().currentUser
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
.table {
  margin-top: 5rem;  
}

.table td {
  border-top: 0;
}

.form-control  {
  background: black;
  border-radius: 0;
  border: 2px solid #595b5d;
}

.button-submit {
    border: 3px solid #D6D0D0;
    background: none;
    margin: 30px 0 0; 
    z-index: 1; 
    -webkit-text-fill-color: #D6D0D0;
     text-transform: uppercase;
    letter-spacing: 2px;
    padding: 5px 5px;
}


</style>
