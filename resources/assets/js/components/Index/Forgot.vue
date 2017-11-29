<template>
    <div class="forgot-main">
		<transition name="fade">
	    	<div v-if="showForgot" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">Forgot Password</div>
		    		<div class="pof-error flex-half" v-model="errors" v-html="errors"></div>
		    		<form id="forgotForm" v-on:submit.prevent="submitForm">
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="email">Email:</label>
			    			<input type="email" id="email" class="pof-input pof-font-2" v-model="email">
                            <input type="submit">
			    		</div>
			    		<div class="pof-links">
			    			<div class="pof-link" v-on:click="loginClick" >Log In</div>
			    			<div class="pof-link" v-on:click="registerClick" >Register New Account</div>
			    		</div>
		    		</form>
		    	</div>
	    	</div>
	    </transition>
    </div>
</template>
<script>

    export default {

    	computed : {

            menuAnimationTimer : function (){
                return  this.$store.getters.menuAnimationTimer;
            },

    		showForgot : function (){
    			return this.$store.getters.showForgot;
    		},

            showLogin : function (){
                return this.$store.getters.showLogin;
            },

            showRegister : function (){
                return this.$store.getters.showRegister;
            }
    	},

    	data : function (){

    		return {
    			email : '',
    			errors : ''
    		}
    	},

    	methods : {

            displayErrors : function(newErrors){
                var self = this;

                self.errors = '';

                console.log(newErrors);

                switch(newErrors){

                    case "passwords.user":
                        self.errors = "This email has no account associated with it in our system.";
                        break;

                    case "passwords.sent":
                        self.errors = "An email has sent with instructions to reset your password.";
                        break;

                    default:
                        self.errors = "Something went wrong, please try again later";
                        break;
                }
            },

            loginClick : function (){
                var self = this;

                if(!self.showLogin){

                    self.$store.dispatch('hideAll');

                    setTimeout( function(){
                        self.$store.dispatch('showLogin');
                    }, self.menuAnimationTimer, self);
                }
            },

            registerClick : function (){
                var self = this;

                if(!self.showRegister){

                    self.$store.dispatch('hideAll');

                    setTimeout(function(){
                        self.$store.dispatch('showRegister');
                    }, self.menuAnimationTimer, self);
                }
            },

        	submitForm : function (){
                var self = this;

                axios.post('/password/email', {
                    email: this.email
                })
                .then(function (response) {
                    console.log(response);
                    self.displayErrors(response.data);
                })
                .catch(function (error) {
                    console.log('error');
                    self.displayErrors(error.response.data.errors);
                });
        	},

            submitSuccessful : function (response){
                console.log(response);
            }
    	},

        mounted (){
            console.log('Forgot Password Form mounted.')
        }
    }
</script>