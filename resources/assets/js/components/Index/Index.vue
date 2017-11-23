<template>
    <div class="index-main">

    	<intro />
    	<loginForm />
    	<registerForm />
    	<forgotForm />

    </div>
</template>

<script>

	import intro from './Intro.vue';
	import loginForm from './Login.vue';
	import registerForm from './Register.vue';
	import forgotForm from './Forgot.vue';

    export default {

    	components : { intro, loginForm, registerForm, forgotForm },

        mounted() {
            console.log('Index mounted.')
        }
    }
</script>