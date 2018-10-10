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
import "./assets/css/animate.css";
import "./assets/css/scrolling-nav.css";
import "./assets/css/bxslider.css"; 
import "./assets/fonts/oswald/stylesheet.css";
import "./assets/font-awesome/css/font-awesome.min.css";

import firebase from 'firebase';

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
    console.log(firebase);
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
