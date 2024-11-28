<template>
    <div class="background d-flex text-center align-items-center justify-content-center">
        <div class="border bg-danger-subtle text-danger-emphasis  d-flex flex-column w-50 h-50 text-center align-items-center justify-content-center">
    <h1> Error 404 </h1>
    <h2>Not Found Page, please go Home</h2>
    <router-link to="/">Ir al Home</router-link>
    </div>
    
    
</div>
</template>

<script>
export default {
    name: 'component-notFound404',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.background{
    height: 100vh;
    background: rgb(240,43,181);
    background: linear-gradient(164deg, rgba(240,43,181,1) 14%, rgba(199,0,57,1) 65%, rgba(255,87,51,1) 100%);
    color: #000000;
    font-size: larger;
    border: solid;
}
    
</style>