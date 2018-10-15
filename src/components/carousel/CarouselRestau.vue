<template>
    <div>
         <carousel autoplay :perPage="slideNumber" c loop  scrollPerPage>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/chatrou.png" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/langouste.png" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/poissonG.png" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/image01.jpg" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/image02.jpg" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/image03.jpg" alt="">
                </slide>
                <slide>
                    <img class="img-restau" src="../../assets/images/restau/image04.jpg" alt="">
                </slide>
            </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name:'CarouselRestau',
  components:{
    Carousel,
    Slide
  },
  props: {
    slideNumber: Number,
  },
}
</script>

<style>

</style>
