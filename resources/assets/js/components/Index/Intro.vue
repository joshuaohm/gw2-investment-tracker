<template>
    <div class="intro-main">
    	<transition name="fade">
	    	<div v-if="showIntro" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text"> Lorem Ipsum Dolyak Zhaitan</div>
		    		<div class="pof-text text text-center"> Lorem Ipsum Dolyak Zhaitan</div>
		    	</div>
	    	</div>
	    </transition>
    </div>
</template>

<script>

    export default {

    	computed : {

    		isLoading : function (){
    			return this.$store.getters.isLoading;
    		},

    		showIntro : function(){
    			return this.$store.getters.showIntro;
    		}
    	},

        mounted() {
            console.log('Intro mounted.')
        }


    }
</script>