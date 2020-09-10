<template>
  <div class="HomeMain">
    <van-grid 
    	:gutter="5" 
    	v-for="(item,index) in items" 
    	:key="index"
    	:column-num="4"
	>
	  <van-grid-item>
	  	<van-icon :name="item.icon" />
	  	{{item.desc}}
	  </van-grid-item>
	</van-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);

export default {
  name: 'HomeMain',
  data(){
  	return{
  		items:[
  			{
  				icon:"location-o",
  				desc:"学习"
  			},
  			{
  				icon:"photo-o",
  				desc:"吃饭"
  			},
  			{
  				icon:"like-o",
  				desc:"睡觉"
  			},
  			{
  				icon:"star-o",
  				desc:"打豆豆"
  			},
  			{
  				icon:"phone-o",
  				desc:"吃饭"
  			},
  			{
  				icon:"fire-o",
  				desc:"睡觉"
  			},
  			{
  				icon:"cart-o",
  				desc:"打豆豆"
  			},
  			{
  				icon:"gem-o",
  				desc:"学习"
  			},
  		]
  	}
  }
}
</script>

<style scoped>
.HomeMain{
	text-align: center;
	padding: 10px 5px 0 5px;
	background-color: #eee;
}
.van-grid{
	display: inline-block;
	width: 23%;
	height:85px;
}
</style>
