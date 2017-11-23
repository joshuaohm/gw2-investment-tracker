<template>
    <div class="nav-main">
        <div class="logo text">
            Guild Wars 2<br>
            Investment Tracker
        </div>

        <div class="nav-items">
            <div class="item text"> DASHBOARD </div>
            <div class="item text" v-on:click="newsClick" > NEWS </div>
            <div class="item text"> LOGIN </div>
        </div> 

    </div>
</template>

<script>

    export default {

        computed : {

            showNews : function() {
                return this.$store.getters.showNews;
            },

            menuAnimationTimer : function() {
                return this.$store.getters.menuAnimationTimer;
            }

        },

        methods : {

            newsClick : function(){
                var self = this;

                if(!self.showNews){

                    self.$store.dispatch('hideAll');

                    setTimeout(function (){

                        self.$store.dispatch('showNews');
                    },self.menuAnimationTimer,self);
                }

            }
        },

        mounted() {
            console.log('Nav mounted.')
        }
    }
</script>