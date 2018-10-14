<template>
    <section class="food-block" id="restaurant">
        <div class="container">
            <div class="text-head">
                <h1>Restaurant</h1>
            </div>
            <div class="height-135 "></div>
            <div class="row carousel-container">
                <carousel :per-page="3">
                    <slide>
                        Slide 1 Content
                    </slide>
                    <slide>
                        Slide 2 Content
                    </slide>
                    <slide>
                        Slide 3 Content
                    </slide>
                    <slide>
                        Slide 4 Content
                    </slide>
                    <slide>
                        Slide 5 Content
                    </slide>
                </carousel>
            </div>
        </div>
        
        <div class="clearfix"></div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name:'Restaurant',
    components: {
        Carousel,
        Slide
    }
}
</script>

<style>
#restaurant{
    background-image: url("../assets/Background.jpg");
    background-size: 30%;
}
.carousel-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
