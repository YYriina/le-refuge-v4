<template>
  <div>
        <Header/>
        <Welcome/>
        <Gites/>
        <Restaurant/>
        <Customers/>
        <Reservation/>
        <Event/>        
        <Counter/>        
        <Staff/>        
        <Contact/>
        <Footer/>
  </div>
</template>

<script>
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/fonts/oswald/stylesheet.css";
import "./assets/font-awesome/css/font-awesome.min.css";

// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

import Header from './components/Header';
import Welcome from './components/Welcome';
import Gites from './components/Gites';
import Restaurant from "./components/Restaurant";
import Customers from "./components/Customers";
import Reservation from "./components/Reservation";
import Event from "./components/Event";
import Counter from './components/Counter';
import Staff from './components/Staff';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default {
  name: 'app',
  components:{
    Header,
    Welcome,
    Gites,
    Restaurant,
    Customers,
    Reservation,
    Event,
    Counter,
    Staff,
    Contact,
    Footer
  },
  created:()=>{
    var event = firebase.database().ref('events');
    event.on('value', function(snapshot) {
      event = snapshot;
    });
    console.log(event.value)
  }
  
}
</script>

<style>

</style>
