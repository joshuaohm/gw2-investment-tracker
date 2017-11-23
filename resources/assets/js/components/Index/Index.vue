<template>
    <div class="index-main">

    	<intro />
    	<loginForm />
    	<registerForm />
    	<forgotForm />
        <news />

    </div>
</template>

<script>

	import intro from './Intro.vue';
	import loginForm from './Login.vue';
	import registerForm from './Register.vue';
	import forgotForm from './Forgot.vue';
    import news from '../News/News.vue';

    export default {

    	components : { intro, loginForm, registerForm, forgotForm, news },

        computed : {

            isLoading : function(){
                return this.$store.isLoading;
            }
        },

        mounted() {
            console.log('Index mounted.')
        }
    }
</script>