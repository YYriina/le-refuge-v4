<template>
    <section class="special-block" id="gites">
        <div class="text-head">
            <h1>Gîtes</h1>
        </div>
        <div class="container">
            <slick ref="slick" :options="slickOptions">
                <div class="img-container">
                    <h3 class="title-name text-center">Emeraude</h3>
                    <img class="img-carousel" src='../assets/images/gites/emeraude/chambre.jpg' />
                </div>
                <div class="img-container">
                    <h3 class="title-name text-center">Opale</h3>
                    <img class="img-carousel" src='../assets/images/gites/opale/chambre.jpg' />
                </div>
                <div class="img-container">
                    <h3 class="title-name text-center">Topaze</h3>
                    <img class="img-carousel" src='../assets/images/gites/topaze/chambre.jpg' />
                </div>
                <div class="img-container">
                    <h3 class="title-name text-center">Turquoise</h3>
                    <img class="img-carousel" src='../assets/images/gites/turquoise/chambre.jpg' />
                </div> 
            </slick>
        </div>
        <div class="clearfix"></div>
    </section>
</template>

<script>
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';

const ambre = require('../assets/images/gites/ambre/DSCN0945.jpg');
export default {
    name:'Gites',
    components: {
        Slick
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                accessibility:false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                // Any other options that can be got from plugin documentation
            },
        };
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },

}
</script>

<style scoped>
#gites{
    background-image: url("../assets/Background.jpg");
    background-size: 30%;

}
.container{
    opacity: 1;
}
.img-carousel{
    height: 500px;
    width: 65%;
    margin: auto;
    margin-bottom: 15px;

}
.img-container{
    background-color: bisque;
}
.text-center{
    text-align: center;
    padding: 20px;
}
</style>

