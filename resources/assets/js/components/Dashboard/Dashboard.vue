<template>
    <div class="news-main">
    	<transition name="fade">
	    	<div v-if="showDashboard" class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    		<div class="pof-content">
		    		<div class="pof-header text">Hello, </div>
		    		<div class="pof-text text text-center"> </div>
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

            showDashboard : function (){
                return this.$store.getters.showDashboard;
            }
    	},

        mounted() {
            console.log('Dashboard mounted.')
        }


    }
</script>