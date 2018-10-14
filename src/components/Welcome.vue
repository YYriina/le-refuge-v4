<template>
            <section class="welcome-block">
            <div v-show="modalVis">
                <div class="modal-container"> 
                    <a class="close-modal-button" @click="this.clickModal"><i class="fas fa-times fa-2x red close-modal"></i></a>   
                    <div class="modal-area">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="title-name">
                                    <h1>Marie-Galante</h1>
                                    <h5>Un REFUGE paradisiaque</h5>
                                </div>
                                <div class="single-blog-image">
                                    <img src="../assets/images/excursion/banner1.jpg" class="banner-responsive">
                                </div>
                                <div class="single-blog-desc">
                                    <p>
                                        Marie-Galante, île de l'archipel de la Guadeloupe dans la mer des Antilles s'étend sur une superficie
                                        de 158 km². Sa forme ronde et aplatie lui doit le surnom de la Grande Galette. En la découvrant dans
                                        toute sa splendeur, le 03 novembre 1493 Christophe Colomb lui donne le nom de sa caravelle MARIA GALANDA.
                                    </p>
                                    <p>
                                        A vocation agricole, avec une usine sucrière, trois distilleries, des cultures vivrières et la pêche, Marie-Galante la rurale s'ouvre au Tourisme. 
                                        Ses trois localités principales, Capesterre, Saint-Louis et son chef lieu Grand-bourg se déploient en bordure de mer.arie-Galante est aussi appelée l'île aux cent moulins. 
                                        En réalité, on dénombre les vestiges d'un peu plus d'une centaine de moulins à vent autrefois destinés à broyer la canne à sucre qui demeure la principale richesse de l'île.
                                    </p>
                                    <blockquote class="p_bq margin-t20">Avec une usine sucrière, trois distilleries, des cultures vivrières et la pêche, Marie-Galante la rurale s'ouvre au Tourisme. Ses trois localités principales, Capesterre, Saint-Louis et son chef lieu Grand-bourg se déploient en bordure de mer.</blockquote>
                                    <p>
                                        Ainsi, sur le territoire de la plus ancienne bourgade de l'île, là où les cinquante premiers colons ont tenté de s'établir en 1648, Saint-Louis se prélasse en bordure d'une superbe baie qui porte son nom. 
                                    </p>
                                    <p>
                                        Ici, on dirait que le temps s'est arrété, riche de ses rebondissements historiques, paisible et accueillante, la vie est à peine perturbée par l'arrivée des navettes qui la relient en une heure de Pointe-à-Pitre ou Saint-François.
                                    </p>
                                    <p>
                                        Pour arriver jusqu'à nous, à cinq minutes de l'embarcadère de Saint-Louis, à 10 mn de Grand-bourg, prenez la nationale 9 jusqu'à la section Saint-Charles, route des sources.
                                        Dans un cadre magnifique, entre cocotiers, flamboyants et arbres fruitiers entre miroitement de la mer et plumets argentés de cannes à sucre.
                                    </p>
                                    <br><br>
                                    <h2 class="text-center">Georges et Fortuna vous accueillent au REFUGE.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="text-head">
                    <h1>PASSEZ VOS VACANCES LÀ OÚ HABITENT LES AUTRES !</h1>
                </div>

                <div class="welcome-block-full-image">
                    <div>
                        <p>Voilà le mot d'ordre de Georges et Fortuna, vos dévoués hôtes. Car chez eux, vous ètes chez vous. 
                        Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse,
                        une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>
                        <a class="read-more" @click="this.clickModal">Voir plus</a>
                    </div>
                </div>
            </div>
            <div class="height-135 "></div>
            <div class="clearfix"></div>        

        </section>
</template>

<script>
export default {
    name:'Welcome',
    data:()=>{
        return {
            modalVis:false
        }
    },  
    methods:{
        clickModal:function(){this.modalVis = !this.modalVis}
    }
}
</script>

<style>


.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0,0,0,0.45);
  z-index: 99999999;
}

.close-modal{
    color: red;
    cursor : pointer; 
}

.close-modal-button{
    position: absolute;
    top: 5%;
    left: 95%;
}

.banner-responsive{
    width: auto;
    height: 390px;
}
.single-blog-image{
    display: flex;
    justify-content: center;
}

    @media screen and (max-width: 624px) {
    .modal-area {
        background-color: white;
        width: 620px;
        height: 100%;
        padding: 15px;
        overflow: scroll;
        overflow-x : hidden;
    }
    .banner-responsive{
        width: 100%;
        height: 50%;
    }
    }
     @media screen and (min-width: 625px) {
    .modal-area {
        margin: 15%;
        background-color: white;
        width: 100%;
        height: 90%;
        border-radius: 4%;
        padding: 15px;
        overflow: scroll;
        overflow-x : hidden;
    }
}
</style>
