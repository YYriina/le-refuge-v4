<template>
    <section class="staff-block">
        <div class="container">
            <div class="text-head">
                <h1>Notre équipe:</h1>
            </div>
            <div class="height-135"></div>
            <div data-ride="carousel" class="carousel slide" id="myCarousel6"> 
                <div class="carousel-inner">
                    <div class="item active"> 
                        <div class="row">
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <div class="staff-image">
                                    <img class="img" src="../assets/images/staff/papou.jpg">
                                    <div class="overlay">
                                        <a href="#" class="info">Georges HULMAN</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <div class="staff-image">
                                    <img class="img" src="../assets/images/staff/mamou.jpg">
                                    <div class="overlay">
                                        <a href="#" class="info">Juliette HULMAN</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name:'Staff'
}
</script>

<style>
.img{
    width: 100%;
    height: auto;
}
</style>
