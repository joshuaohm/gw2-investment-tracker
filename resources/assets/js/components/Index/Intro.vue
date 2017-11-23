<template>
    <div class="intro-main">
    	<transition name="fade">
	    	<div class="pof-content-wrapper content-wrapper flex-full">
	    		<div class="pof-mask"></div>
	    	</div>
	    </transition>
    </div>
</template>

<script>

    export default {

        mounted() {
            console.log('Intro mounted.')
        }
    }
</script>