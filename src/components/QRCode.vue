<template>
  <div class="hello">
    <h1>QR CODE</h1>
    <div class="container" style="margin-top: 4rem;">
    <img :src="url" class="col-md-6" alt="">
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
        uid: null,
        url: null
    }
  },
  mounted () {
      if (firebase.auth().currentUser) {
        this.uid = firebase.auth().currentUser.uid
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
 

</style>
