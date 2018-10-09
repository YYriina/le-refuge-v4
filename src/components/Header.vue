<template>
    <header>
        <div class="container">
            <div class="header-top">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                        <p>Routes des sources Section Saint-Charles</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                        <p>Heure d'ouverture: 11:00 - 16:00</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="div-logo">
            <img src="../assets/logo.png" alt="">
        </div>

        <Slide>
            <div id="home"> 
                <div class="menu">
                    <div class="item-menu"> <a href="#"><i class="fas fa-home"></i> Acceuil</a></div>
                    <div class="item-menu"><a href="#"><i class="fas fa-hotel"></i> Gites</a></div>
                    <div class="item-menu"><a href="#"><i class="fas fa-utensils"></i> Restaurant</a></div>
                    <div class="item-menu"><a href="#"><i class="fas fa-book-open"></i> Reservation</a></div>
                    <div class="item-menu"><a href="#"><i class="fas fa-calendar-alt"></i> Êvènements</a></div>
                    <div class="item-menu"><a href="#"><i class="far fa-handshake"></i> Equipe</a></div>
                    <div class="item-menu"><a href="#"><i class="fas fa-at"></i> Contact</a></div>
                </div>
            </div>
        </Slide>
        <div class="clearfix"></div>
    </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    name:'Header',
    components: {
        Slide,
    }    
}
</script>

<style>
    .div-logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    #home{
        display: flex;
    }
    .item-menu{
        padding: 15px;
    }
    .item-menu a{
        color :green;
    }
    .item-menu a:hover{
        color :yellow;
    }
</style>
