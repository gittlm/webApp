<template>
  <div class="HomeSearch">
    <div class="logo">
      <h4>webApp</h4>
    </div>
    <div class="search">
      <van-search
        v-model="value"
        show-action
        shape="round"
        background="#ddd"
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

export default {
  name: 'HomeSearch',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch() {
      Toast('搜索');
    }
  }
}
</script>

<style scoped>
.logo{
  float: left;
  width: 20%;
}
.search{
  width: 80%;
  float: right;
}
h4{
  line-height: 50px;
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounceInDown;
  animation-duration: 2s;
}
</style>
