<template>
    <div class="card-gites row">
        <div class="col-md-3">

        </div>
        <div class="first-photo col-md-5">
            <p>holla</p>
        </div>

        <div class="card-column col-md-4">
            <div class="second-photo"><p>salut</p></div>
            <div class="third-photo"><p>hello</p></div>
        </div>

    </div>
</template>

<script>
export default {
    name:'CardGites',
    props:{

    }
}
</script>

<style>
    .card-gites{
        padding: 5px;
        display: flex;
        height: 450px;
        background-color: beige;
    }
    .card-column{
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .third-photo{
        height: 100%;
        background-color: green;
    }
    .second-photo{
        height: 100%;
        background-color: red;
    }
    .first-photo{
        height: 100%;
        
        background-color: blue;
    }
</style>
