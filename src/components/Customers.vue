<template>
    <section class="service-block">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-11 ">
                    <div class="text-head">
                        <h1>Nos Services</h1>
                    </div>
                    <div class="height-135 "></div>
                    <div class="row">
                        <div class="card-service col-md-3 col-sm-6 col-xs-11">
                           <i class="fas fa-truck icons fa-7x"></i>
                           <h3>Traiteur</h3>
                           <br>
                           <p>Nous livrons nos bon plats traditionnel partout sur la guadeloupe ou a Marie-Galante.</p>
                       </div>
                        <div class="card-service col-md-3 col-sm-6 col-xs-11">
                            <i class="fas fa-building fa-7x"></i>
                            <h3>Hébergement</h3>
                            <br>
                            <p>Nous mettons a votre disposition des F2 tout équipé avec kitchenet, clim et piscine.</p>
                        </div>
                        <div class="card-service col-md-3 col-sm-6 col-xs-11">
                            <i class="fas fa-utensils fa-7x"></i>
                            <h3>Restauration</h3>
                            <br>
                            <p>Notre Restaurant au Bourg de Saint-Louis est ouvert tout les midi et le soir sur réservation.</p>
                        </div>
                        <div class="card-service col-md-3 col-sm-6 col-xs-12">
                            <i class="fas fa-birthday-cake fa-7x"></i>
                            <h3>Réception</h3>
                            <br>
                            <p>Notre espace privé a Saint-Charles avec piscine parfait pour vos fêtes et réceptions.</p>
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
        align-items: center;
    }
    .card-service{
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .card-service h3{
        font-size: 25px;
        font-weight: bold;
    }
    .card-service p{
        font-size: 18px;
        font-style: italic;
        text-align: center;
    }

</style>
