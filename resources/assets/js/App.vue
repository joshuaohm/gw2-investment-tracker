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

        computed : {

            isLoading(){
                return this.$store.getters.isLoading;
            }
        },

        mounted() {
            console.log('App mounted.')

            var self = this;

            if(self.isLoading){

                setTimeout(function(){
                    self.$store.dispatch('stopLoading');
                    self.$store.dispatch('showIntro');
                },100, self);
                
            }
        }
    }
</script>
