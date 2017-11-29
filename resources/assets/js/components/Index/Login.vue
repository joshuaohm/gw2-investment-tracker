<template>
    <div class="login-main">
    	<transition name="fade">
	    	<div v-if="showLogin" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">Login</div>
		    		<div class="pof-error flex-half" v-model="errors" v-html="errors"></div>
		    		<form id="loginForm" v-on:submit.prevent="submitForm">
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="email">Email:</label>
			    			<input type="email" id="email" class="pof-input pof-font-2" v-model="email">
			    		</div>
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="pass">Password:</label>
			    			<input type="password" id="pass" class="pof-input pof-font-2" v-model="pass">
			    			<input type="submit">
			    		</div>
			    		<div class="pof-links">
			    			<div class="pof-link" v-on:click="registerClick" >Register New Account</div>
			    			<div class="pof-link" v-on:click="forgotClick" >Forgot Password?</div>
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
    			return this.$store.getters.menuAnimationTimer;
    		},

    		showLogin : function (){
    			return this.$store.getters.showLogin;
    		},

    		showForgot(){
    			return this.$store.getters.showForgot;
    		},

    		showRegister : function (){
    			return this.$store.getters.showRegister;
    		}
    	},

    	data : function (){
    		return {
    			email : '',
    			pass : '',
    			errors : ''
    		}
    	},

    	methods : {

    		displayErrors : function(newErrors){
    			var self = this;

    			self.errors = '';

				for(var key in newErrors){

    				self.errors = self.errors + ' ' + newErrors[key];
    			};
    		},

    		forgotClick : function (){
    			var self = this;

                if(!self.showForgot){

                    self.$store.dispatch('hideAll');

                    setTimeout(function (){
                        self.$store.dispatch('showForgot');
                    },self.menuAnimationTimer, self);
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

    			axios.post('/login', {
    				email: this.email,
    				password: this.pass
    			})
    			.then(function (response) {
    				self.submitSuccessful(response);
				})
				.catch(function (error) {
					self.displayErrors(error.response.data.errors);
				});
    		},

    		submitSuccessful : function(response){
    			window.location.replace('/');
    		}
    	},

        mounted() {
            console.log('Login Form mounted.')
        }
    }
</script>