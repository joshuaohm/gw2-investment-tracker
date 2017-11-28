<template>
    <div class="index-main">

    	<intro />
    	<loginForm />
    	<registerForm />
    	<forgotForm />
        <news />
        <dashboard />

    </div>
</template>

<script>

	import intro from './Intro.vue';
	import loginForm from './Login.vue';
	import registerForm from './Register.vue';
	import forgotForm from './Forgot.vue';
    import news from '../News/News.vue';
    import dashboard from '../Dashboard/Dashboard.vue';

    export default {

    	components : { intro, loginForm, registerForm, forgotForm, news, dashboard },

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