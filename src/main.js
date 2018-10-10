import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDTo7Bi_n3hL5dqtV8ALQ7yfJm6JomB4Ec",
  authDomain: "le-refuge-124c8.firebaseapp.com",
  databaseURL: "https://le-refuge-124c8.firebaseio.com",
  projectId: "le-refuge-124c8",
  storageBucket: "le-refuge-124c8.appspot.com",
  messagingSenderId: "566866610926"
};

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
