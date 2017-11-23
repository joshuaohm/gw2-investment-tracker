<template>
    <div class="app-main">
        <navBar />
        <index />
        <foot />
    </div>
</template>

<script>
    
    import navBar from './components/NavBar.vue';
    import index from './components/Index/Index.vue';
    import foot from './components/Footer.vue';

    export default {

        components : { navBar, index, foot },
        mounted() {
            console.log('App mounted.')
        }
    }
</script>
