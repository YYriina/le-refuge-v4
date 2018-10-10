<template>
    <section class="service-block">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 ">
                    <div class="text-head">
                        <h1>Nos Services</h1>
                    </div>
                    <div class="height-135 "></div>
                    <div class="line-service">
                        <div class="card-service">
                           <i class="fas fa-truck icons fa-7x"></i>
                           <p>Traiteur</p>
                       </div>
                        <div class="card-service">
                            <i class="fas fa-hotel fa-7x"></i>
                            <p>Hébergement</p>
                        </div>
                        <div class="card-service">
                            <i class="fas fa-utensils fa-7x"></i>
                            <p>Restauration</p>
                        </div>
                        <div class="card-service">
                            <i class="fas fa-gift fa-7x"></i>
                            <p>Réception</p>
                        </div>
                    </div>
                      
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="text-head add-top-space">
                        <h1>Avis des utilisateurs</h1>
                    </div>
                    <div class="height-135"></div>
                    <div class="set-border-left">
                        <div data-ride="carousel" class="carousel slide" id="myCarousel4"> 
                            <div class="carousel-inner">
                                <div class="item active"> 
                                    <div class="feedback-content">
                                        <div class="feedback-box">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa loremi psum dolor sitamet, consectetuer adipiscing elit aenean commodo ligula eget do an massa consectetuer adipiscing elit</p>
                                        </div>
                                        <div class="feedback-title"><a><i class="fa fa-user"></i></a><span>DAVID WARNER</span></div>
                                    </div>
                                </div>
                                <div class="item"> 
                                    <div class="feedback-content">
                                        <div class="feedback-box">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa loremi psum dolor sitamet, consectetuer adipiscing elit aenean commodo ligula eget do an massa consectetuer adipiscing elit</p>
                                        </div>
                                        <div class="feedback-title"><a><i class="fa fa-user"></i></a><span>DAVID WARNER</span></div>
                                    </div>
                                </div>

                            </div>
                            <a data-slide="prev" href="#myCarousel4" class="left carousel-control"> <img alt="left" onmouseout="this.src = 'images/icons/left.png'" onmouseover="this.src = 'images/icons/left-hover.png'" src="images/icons/left.png"></a>
                            <a data-slide="next" href="#myCarousel4" class="right carousel-control"><img alt="left" onmouseout="this.src = 'images/icons/right.png'" onmouseover="this.src = 'images/icons/right-hover.png'" src="images/icons/right.png"></a>
                        </div>
                        <div class="black-line"><hr/></div>
                        <div data-ride="carousel" class="carousel slide" id="myCarousel5"> 
                            <div class="carousel-inner">
                                <div class="item active"> 
                                    <div class="feedback-content">
                                        <div class="feedback-box">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa loremi psum dolor sitamet, consectetuer adipiscing elit aenean commodo ligula eget do an massa consectetuer adipiscing elit</p>
                                        </div>
                                        <div class="feedback-title"><a><i class="fa fa-user"></i></a><span>DAVID WARNER</span></div>
                                    </div>
                                </div>
                                <div class="item"> 
                                    <div class="feedback-content">
                                        <div class="feedback-box">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa loremi psum dolor sitamet, consectetuer adipiscing elit aenean commodo ligula eget do an massa consectetuer adipiscing elit</p>
                                        </div>
                                        <div class="feedback-title"><a><i class="fa fa-user"></i></a><span>DAVID WARNER</span></div>
                                    </div>
                                </div>
                                <a data-slide="prev" href="#myCarousel5" class="left carousel-control"> <img alt="left" onmouseout="this.src = 'images/icons/left.png'" onmouseover="this.src = 'images/icons/left-hover.png'" src="images/icons/left.png"></a>
                                <a data-slide="next" href="#myCarousel5" class="right carousel-control"><img alt="left" onmouseout="this.src = 'images/icons/right.png'" onmouseover="this.src = 'images/icons/right-hover.png'" src="images/icons/right.png"></a>
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
    name:'Customers'
}
</script>

<style>
    .line-service{
        text-align: center;
        display: flex;
        justify-content: space-between;
    }
    .card-service{
        margin: 25px;
        border: 1px solid grey;
        border-radius: 50%;
        height: 200px;
        width: 200px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .card-service p{
        font-size: 25px;
        font-weight: bold;
    }
</style>
