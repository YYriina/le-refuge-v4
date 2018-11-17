<template>
  <div>
        <Header/>
        <Welcome/>
        <Gites/>
        <Restaurant/>
        <Customers/>
        <Reservation/>
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


import Header from './components/Header';
import Welcome from './components/Welcome';
import Gites from './components/Gites';
import Restaurant from "./components/Restaurant";
import Customers from "./components/Customers";
import Reservation from "./components/Reservation";
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
    Counter,
    Staff,
    Contact,
    Footer
  },

  
}
</script>

<style>

</style>
