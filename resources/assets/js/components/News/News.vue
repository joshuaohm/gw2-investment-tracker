<template>
    <div class="news-main">
    	<transition name="fade">
	    	<div v-if="showNews" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">News</div>
		    		<div class="pof-text text text-center"> If you're reading this, I appreciate your interest in the project very much.</div>
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
            console.log('News mounted.')
        }


    }
</script>