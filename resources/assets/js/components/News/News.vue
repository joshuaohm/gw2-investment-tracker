<template>
    <div class="news-main">
    	<transition name="fade">
	    	<div v-if="showNews" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">News</div>
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

            showNews : function (){
                return this.$store.getters.showNews;
            }
    	},

        mounted() {
            console.log('Intro mounted.')
        }


    }
</script>