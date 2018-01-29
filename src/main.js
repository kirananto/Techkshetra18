// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import { sync } from 'vuex-router-sync'
import store from './store'
import AppView from './App.vue'
import VueParticles from 'vue-particles'
import firebase from 'firebase'
require('firebase/firestore')
Vue.config.productionTip = false

let app
Vue.use(VueParticles)
Vue.use(VueRouter)

firebase.initializeApp(store.getters.getConfig)

var router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (store.getters.getEvents[0] === undefined) {
    firebase.firestore().collection('events').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        store.commit('PUSH_EVENT', doc.data())
      })
    })
    if (store.getters.getWorkshops[0] === undefined) {
      firebase.firestore().collection('workshops').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          store.commit('PUSH_WORKSHOP', doc.data())
        })
      })
      next()
    } else {
      next()
    }
  } else {
    if (store.getters.getWorkshops[0] === undefined) {
      firebase.firestore().collection('workshops').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          store.commit('PUSH_WORKSHOP', doc.data())
        })
      })
      next()
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
firebase.auth().onAuthStateChanged(
  function (user) {
    if (!app) {
      app = new Vue({
        el: '#root',
        router,
        store,
        render: h => h(AppView)
      })
    }
  })
