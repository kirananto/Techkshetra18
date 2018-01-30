<template>
  <div class="hello">
    <h1 v-if="id">{{id.name}} Registration</h1>
    <form v-on:submit.prevent="onSubmit">
  <table class="table table-hover" v-for="(item,key) in participants" :key="key">
    <h3 v-if="key !== 0">Participant {{key}} Details</h3>
    <tr>
      <td class="userdetails_text">Name:</td>
      <td><input required type="text" v-model="participants[key].displayName" class="form-control"  name="fname" value=""></td>
    </tr>

    <tr>
      <td class="userdetails_text">Email:</td>
      <td><input required type="text" v-model="participants[key].email" class="form-control" name="email"  value="" ></td>
    </tr>

    <tr>
      <td required class="userdetails_text">Mobile No:</td><td><input type="number" required v-model="participants[key].mobno" class="form-control" name="mobno"></td>
    </tr>

        <tr>
      <td class="userdetails_text">College:</td>
      <td><input required type="text" v-model="participants[key].college" class="form-control" name="email"  value="" ></td>
    </tr>
  </table>
  <table class="table table-hover bottom_circle">
  <tr>
    <td></td><td v-on:click="addElement">
 <i class="material-icons offset-md-11 offset-11" >add_circle_outline</i>
  </td>
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
import QRCode from 'qrcode'
require('firebase/firestore')
export default {
  name: 'Registration',
  props: ['id', 'event'],
  data () {
    return {
      currentUser: null,
      participants: [{
        displayName: null,
        mobno: null,
        college: null,
        email: null
      }],
      qrcode: null
    }
  },
  methods: {
    onSubmit: function () {
      firebase.firestore().doc(`registration/${this.currentUser.uid}/registered/${this.id.id}`).set({
        uid: this.currentUser.uid,
        participants: this.participants
      }).then(success => {
        swal({
          title: 'Success',
          icon: this.qrcode,
          text: 'Please screenshot this qrcode for registration'
        }).then(success => {
          this.$router.replace('/events')
        })
      })
    },
    addElement: function () {
      if (this.participants.length < 4) {
        this.participants.push({
        displayName: null,
        mobno: null,
        college: null,
        email: null
      })
      }
    }
  },
  mounted () {
    this.currentUser = firebase.auth().currentUser
    QRCode.toDataURL(firebase.auth().currentUser.uid, { errorCorrectionLevel: 'H' })
            .then(url => {
                this.qrcode = url
            })
            .catch(err => {
                console.error(err)
            })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
    background: black;
    margin: 30px 0 0; 
    z-index: 1; 
    -webkit-text-fill-color: #D6D0D0;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 5px 5px;
    &:hover {
      -webkit-text-fill-color: black;
      background-color: white !important;
      -webkit-transition: .5s ease;
      transition: .5s ease;
    }
}

.bottom_circle {
  margin-top: 0rem;
}

.hello {
  margin-top: 5rem;
}

</style>
