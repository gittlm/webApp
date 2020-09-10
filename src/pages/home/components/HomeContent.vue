<template>
  <div class="HomeContent">
    
	<div class="goods" v-for="(goods,index) in goodses" :key="index">
		<van-card
		  :price="goods.price"
		  :desc="goods.desc"
		  :title="goods.name"
		  :thumb="goods.url"
		/>
	</div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';
Vue.use(Card);

export default {
  name: 'HomeContent',
  data(){
  	return{
  		goodses:[
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			},
  			{
  				name:"手机",
  				desc:"红米",
  				price:"2.00",
  				url:"https://img.yzcdn.cn/vant/ipad.jpeg"
  			}
  		]
  	}
  }
}
</script>

<style scoped>
.goods{
	width: 47%;
	padding: 5px;
	display: inline-block;
}
.van-card{
	width: 100%;
}
</style>
