import Vue from 'vue'
import Router from 'vue-router'
// import HOME from '@/pages/home/HOME.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home'
    },
    {
		path: '/buyShop',
		name: 'main'
    },
    {
    	path: '/myself',
    	name: 'myself'
    }
  ]
})
