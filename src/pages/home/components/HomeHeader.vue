<template>
  <div class="HomeHeader">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
	  <van-swipe-item><img src="../store/images/ad01.jpg"></van-swipe-item>
	  <van-swipe-item><img src="../store/images/ad02.jpg"></van-swipe-item>
	  <van-swipe-item><img src="../store/images/ad03.jpg"></van-swipe-item>
	  <van-swipe-item><img src="../store/images/ad04.jpg"></van-swipe-item>
	</van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
  .my-swipe{
  	height: 8rem;
  	width:100%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  img{
  	width: 100%;
  	height: 100%;
  }
</style>
