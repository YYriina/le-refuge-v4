<template>
    <section class="food-block" id="restaurant">
        <div class="container">
            <div class="text-head">
                <h1>Restaurant</h1>
            </div>
            <div class="height-135 "></div>
            <div class="col-md-12">
               <CarouselRestau :slideNumber="getScreenSize"/>
            </div>
        </div>
        
        <div class="clearfix"></div>
    </section>
</template>

<script>
import CarouselRestau from './carousel/CarouselRestau';
export default {
    name:'Restaurant',
    components: {
        CarouselRestau
    },
    computed:{
      getScreenSize:()=>{
        if (screen.width<400){
          return parseInt(2)
        }else if(screen.width < 800 && screen.width>400){
          return parseInt(3)
        }else if(screen.width>800){
          return parseInt(4)
        }
      }
    },
}
</script>

<style>
#restaurant{
    background-image: url("../assets/Background.jpg");
    background-size: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.carousel-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
}
.img-restau{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
