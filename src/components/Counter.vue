<template>
    <section class="counter-block">
        <div class="counter-full-image">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <div class="counter" data-slno="1" data-min="0" data-max="300" data-delay=".5" data-increment="2">300</div>
                        <p>Clients satisfaits</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <div class="counter" data-slno="1" data-min="0" data-max="225" data-delay="8" data-increment="1">225</div>
                        <p>Prix gagnés</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <div class="counter" data-slno="1" data-min="0" data-max="35" data-delay=".5" data-increment="11">35</div>
                        <p>Gîtes disponibles</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <div class="counter" data-slno="1" data-min="0" data-max="400" data-delay="8" data-increment="1">400</div>
                        <p>Réservation de ce mois</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </section>

</template>

<script>
export default {
    name:'Counter'
}
</script>

<style>

</style>
