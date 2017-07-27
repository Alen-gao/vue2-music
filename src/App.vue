<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
import init from './plugins/init.js'
export default {
	
}
</script>
<style scoped>
  @import './style/global.css';
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
