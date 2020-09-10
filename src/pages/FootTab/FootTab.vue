<template>
	<div class="FootTab">
		<van-tabbar 
			v-model="active"
			active-color="#f00" 
			inactive-color="#111"
		>
		  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
		  <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Tabbar, TabbarItem } from 'vant'

	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default{
		name:"FootTab",
		data() {
		    return {
		      active: 0,
		    }
		}
	}
</script>

<style scoped>
	
</style>
