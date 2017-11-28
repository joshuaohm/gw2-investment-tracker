<template>
    <div class="register-main">
    	<transition name="fade">
	    	<div v-if="showRegister" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">Register a New Account</div>
		    		<div class="pof-error flex-half" v-model="errors" v-html="errors"></div>
		    		<form id="registerForm" v-on:submit.prevent="submitForm">
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="name">Name:</label>
			    			<input type="text" id="name" class="pof-input pof-font-2" v-model="name">
			    		</div>
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="email">Email:</label>
			    			<input type="email" id="email" class="pof-input pof-font-2" v-model="email">
			    		</div>
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="pass1">Password:</label>
			    			<input type="password" id="pass1" class="pof-input pof-font-2" v-model="pass1">
			    		</div>
			    		<div class="pof-input-wrapper flex-three-quarters">
			    			<label class="pof-font-1" for="pass2">Retype Password:</label>
			    			<input type="password" id="pass2" class="pof-input pof-font-2" v-model="pass2">
			    			<input type="submit">
			    		</div>
			    		<div class="pof-links">
			    			<div class="pof-link" v-on:click="loginClick">Log In</div>
			    			<div class="pof-link">Forgot Password?</div>
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

    		showDashboard : function (){
    			return this.$store.getters.showDashboard;
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
    			name : '',
    			email : '',
    			pass1 : '',
    			pass2 : '',
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

    		loginClick : function (){
    			var self = this;

    			if(!self.showLogin){

    				self.$store.dispatch('hideAll');

    				setTimeout( function(){
    					self.$store.dispatch('showLogin');
    				}, self.menuAnimationTimer, self);
    			}
    		},

    		submitForm : function (){
    			var self = this;

    			axios.post('/register', {
    				name: this.name,
    				email: this.email,
    				password: this.pass1,
    				'password_confirmation': this.pass2
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
            console.log('Registration Form mounted.')
        }
    }
</script>