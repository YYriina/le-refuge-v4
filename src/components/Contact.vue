<template>
    <section class="contact-block">
        <div class="container">
            <div class="text-head">
                <h1>Nous contacter</h1>
            </div>

        </div>
        <div class="contact-block-full-image">
            <div class="container">
                <form name="sentMessage" id="contactForm">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="nom" id="name1" class="form-control" placeholder="Nom" required="" aria-invalid="false">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="tel" id="contact1" class="form-control" placeholder="Téléphone" required="">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="email" v-model="mail" id="email1" class="form-control" placeholder="E-mail" required="">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" v-model="sujet" id="category1" class="form-control" placeholder="Sujet" required="">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea name="message" v-model="msg" id="message1" class="form-control" rows="4" placeholder="Message" required="" aria-invalid="false"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div class="text-center">
                        <button type="submit" @click="this.clearForm" class="btn btn-lg btn-button">Nettoyer</button>
                        <button type="submit" class="btn btn-lg btn-button">Envoyer</button>
                    </div>
                </form>
            </div> 
        </div>
        <div class="clearfix"></div>
    </section>
</template>

<script>
export default {
    name:'Contact',
    data:()=>{
        return {
            nom:'',
            tel:'',
            mail:'',
            sujet:'',
            msg:''
        }
    }, 
    methods:{
        clearForm : function(){
            this.nom='',
            this.tel='',
            this.mail='',
            this.sujet='',
            this.msg=''
        },
        submitForm : function(){

        }
    }
}
</script>

<style>

</style>
