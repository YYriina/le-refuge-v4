<template>
    <div>
    <header>
        <div class="container">
            <div class="header-top" id="home">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <p>Le Refuge Hulman : Routes des sources Section Saint-Charles</p>
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
                    <div class="item-menu"><a href="#home"><i class="fas fa-home"></i> Acceuil</a></div>
                    <div class="item-menu"><a href="#gites"><i class="fas fa-hotel"></i> Gites</a></div>
                    <div class="item-menu"><a href="#restaurant"><i class="fas fa-utensils"></i> Restaurant</a></div>
                    <div class="item-menu"><a href="#reservation"><i class="fas fa-book-open"></i> Reservation</a></div>
                    <div class="item-menu"><a href="#team"><i class="far fa-handshake"></i> Equipe</a></div>
                    <div class="item-menu"><a href="#contact"><i class="fas fa-at"></i> Contact</a></div>
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
    .main{
        height: 100vh;
    }
    .menu{
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .text-left{
        text-align: left
    }
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
    }@media(max-width: 550px){
        .logo{
            width: 250px;
        }
    }

</style>
