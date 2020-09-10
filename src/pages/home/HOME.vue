<template>
	<div class="home">
		<HomeSearch></HomeSearch>
		<HomeHeader></HomeHeader>
		<HomeMain></HomeMain>
		<HomeContent></HomeContent>
	</div>
</template>

<script>
	import HomeSearch from './components/HomeSearch.vue'
	import HomeHeader from './components/HomeHeader.vue'
	import HomeMain from './components/HomeMain.vue'
	import HomeContent from './components/HomeContent.vue'
	export default{
		name:"HOME",
		components:{
			HomeSearch,
			HomeHeader,
			HomeMain,
			HomeContent
		}
	}
</script>

<style scoped>
	
</style>
