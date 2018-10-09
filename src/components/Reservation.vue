<template>
    <section class="book-block">
        <div class="container">
            <div class="text-head">
                <h1>book your table</h1>
            </div>

        </div>
        <div class="book-block-full-image">
            <div class="container">
                <form id="contactForm" name="sentMessage">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" aria-invalid="false" required="" placeholder="Name" class="form-control" id="name">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" required="" placeholder="Contact Number" class="form-control" id="contact">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="email" required="" placeholder="Email id" class="form-control" id="email">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" required="" placeholder="Number of person" class="form-control" id="person">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" required="" placeholder="book date" class="form-control" id="bookdate">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <input type="text" required="" placeholder="your date" class="form-control" id="yourdate">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>


                    </div>
                    <div class="form-group">
                        <textarea aria-invalid="false" required="" placeholder="Message of request" rows="4" class="form-control" id="message" name="message"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div class="text-center">
                        <button class="btn btn-lg btn-button" type="submit">clear</button>
                        <button class="btn btn-lg btn-button" type="submit">send</button>
                    </div>
                </form>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    name:'Reservation'
}
</script>

<style>

</style>
