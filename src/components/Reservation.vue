<template>
    <section class="book-block" id="reservation">
        <div class="container">
            <div class="text-head">
                <h1>Réservation:</h1>
            </div>

        </div>
        <div class="book-block-full-image">
            <div class="container">
                <form id="contactForm" name="sentMessage">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="nom" aria-invalid="false" required="" placeholder="Nom" class="form-control" id="name">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="tel" required="" placeholder="Téléphone" class="form-control">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="email" v-model="mail" required="" placeholder="E-mail" class="form-control" id="email">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="nbr" required="" placeholder="Nombre de personne" class="form-control" id="person">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="debut" required="" placeholder="date de début" class="form-control" id="bookdate">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="fin" required="" placeholder="date de fin" class="form-control" id="yourdate">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>


                    </div>
                    <div class="form-group">
                        <textarea aria-invalid="false" v-model="msg" required="" placeholder="Ajouter un message a votre réservation" rows="4" class="form-control"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div class="text-center">
                        <button class="btn btn-lg btn-button" @click="this.clearForm">Nettoyer</button>
                        <button class="btn btn-lg btn-button" @click="this.submitForm">Envoyer</button>
                    </div>
                </form>
            </div> 
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Reservation',
    data:()=>{
        return {
            nom:'',
            tel:'',
            mail:'',
            nbr:'',
            debut:'',
            fin:'',
            msg:''
        }
    }, 
    methods:{
        clearForm : function(){
            this.nom='',
            this.tel='',
            this.mail='',
            this.nbr='',
            this.debut='',
            this.fin='',
            this.msg=''
        },
        submitForm : function(){
            axios.get('http://mailer.refugehulman.com', {
                params: {
                name:`nom : ${this.nom}`,
                mail :this.mail,
                msg:`nom : ${this.nom} , tel : ${this.tel}, mail :${this.mail} 
                \n reservation du ${this.debut} au ${this.fin} pour ${this.nbr} de personne 
                \n message : ${this.msg} \n`,
                subject :`reservation pour un gite`
                }
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                location.reload();
            });  
        }
    }
}
</script>

<style>

</style>
