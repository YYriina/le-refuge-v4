<template>
    <div>
    <header>
        <div class="container">
            <div class="header-top">
                <div class="row">
                    <div class="col-md-5 col-sm-5 col-xs-5">
                        <p>Routes des sources Section Saint-Charles</p>
                    </div>
                    <div class=" offset-md-1 offset-sm-1 col-md-5 col-sm-5 col-xs-6 text-right">
                        <p>Heure d'ouverture: 11:00 - 16:00</p>
                    </div>
                </div>
            </div>
            <br><br>
        </div>


        <div class="div-logo">
            <a href="http://refugehulman.com/"><img src="../assets/logo.png" class="logo" alt="logo entreprise"></a>
        </div>

        <Slide noOverlay>
            <div id="main"> 
                <div class="menu">
                    <div class="item-menu"><a href="#"><i class="fas fa-home"></i> Acceuil</a></div>
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



    </div>    
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    name:'Header',
    components: {
        Slide,
    },
      
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
    @media(min-width: 701px){
        .logo{
            width: 450px;
        }
    }
    @media(max-width: 700px){
        .logo{
            width: 400px;
        }
    }@media(max-width: 500px){
        .logo{
            width: 350px;
        }
    }


</style>
