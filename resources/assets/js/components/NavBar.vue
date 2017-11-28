<template>
    <div class="nav-main">
        <div class="logo pof-font-1">
            Guild Wars 2<br>
            Investment Tracker
        </div>

        <div class="nav-items" v-if="!isLogged">
            <div class="item pof-font-1" v-on:click="newsClick" > NEWS </div>
            <div class="item pof-font-1" v-on:click="loginClick"> LOGIN </div>
        </div>
        <div class="nav-items" v-else>
            <div class="item pof-font-1" v-on:click="dashboardClick"> DASHBOARD </div>
            <div class="item pof-font-1" v-on:click="newsClick" > NEWS </div>
            <div class="item pof-font-1" v-on:click="logoutClick"> LOGOUT </div>
        </div> 

    </div>
</template>

<script>

    export default {

        computed : {

            isLogged : function (){
                return this.$store.getters.isLogged;
            },

            showDashboard : function (){
                return this.$store.getters.showDashboard;
            },

            showIntro : function (){
                return this.$store.getters.showIntro;
            },

            showLogin : function (){
                return this.$store.getters.showLogin;
            },

            showNews : function (){
                return this.$store.getters.showNews;
            },

            menuAnimationTimer : function (){
                return this.$store.getters.menuAnimationTimer;
            }

        },

        methods : {

            dashboardClick : function() {
                var self = this; 

                if(!self.showDashboard){

                    self.$store.dispatch('hideAll');

                    setTimeout(function (){

                        self.$store.dispatch('showDashboard');
                    },self.menuAnimationTimer,self);
                }

            },

            loginClick : function(){
                var self = this;

                if(!self.showLogin){

                    self.$store.dispatch('hideAll');

                    setTimeout(function (){

                        self.$store.dispatch('showLogin');
                    },self.menuAnimationTimer,self);
                }

            },

            logoutClick : function (){

                var self = this;
                
                axios.get('/logout').then(function(response){
                    self.logoutSuccessful();
                })
                .catch(function(error){

                });
                
            },

            logoutSuccessful : function (){

                window.location.replace('/');
            },

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