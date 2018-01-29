<template>
  <div class="hello">
    <h1>QR CODE</h1>
    <div class="container" style="margin-top: 4rem;">
        <div class="row">
            <img :src="url" class="col-md-6" alt="">
            <div class="col-md-6">
                    <img src="/static/techkshetra_logo.svg" class="col-md-5 heading" alt="">
                 <h3 v-if="currentUser" class="heading">{{currentUser.displayName}}</h3>
                 <h6 v-if="currentUser" >{{currentUser.email}}</h6>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import firebase from 'firebase'
export default {
  name: 'QRCode',
  data () {
    return {
        currentUser: null,
        url: null
    }
  },
  mounted () {
      if (firebase.auth().currentUser) {
        this.currentUser = firebase.auth().currentUser
        QRCode.toDataURL(firebase.auth().currentUser.uid, { errorCorrectionLevel: 'H' })
            .then(url => {
                this.url = url
            })
            .catch(err => {
                console.error(err)
            })
      } else {
          var provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(provider).then(result => {
            QRCode.toDataURL(firebase.auth().currentUser.uid, { errorCorrectionLevel: 'H' })
            .then(url => {
                this.url = url
            })
            .catch(err => {
                console.error(err)
            })
          }).catch(err => {
              console.log('error' + err)
          })
      }
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

h3 {
     text-transform: uppercase;
    letter-spacing: 2px;
}
 
.row {
    background-color: white;
}

.heading {
    margin-top: 4rem;
}

.col-md-5.heading {
    margin-top: 10rem;
}
</style>
