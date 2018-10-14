<template>
    <section class="special-block" id="gites">
        <div class="text-head">
            <h1>Gîtes</h1>
        </div>
        <div class="container">
            <slick ref="slick" :options="slickOptions">
                <div><CardGites/></div>
                <div><CardGites/></div>
                <div><CardGites/></div>
                <div><CardGites/></div>
                <div><CardGites/></div> 
                <div><CardGites/></div>
            </slick>
        </div>
        <div class="clearfix"></div>
    </section>
</template>

<script>
import CardGites from './CardGites';
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
export default {
    name:'Gites',
    components: {
        CardGites,
        Slick
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                accessibility:false,
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

</style>

