import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	}
]

const router = new VueRouter({
	mode: 'history',
	base: '/front-vue-2/',
	routes
})

router.beforeEach((to, from, next) => {
	const token = Vue.$cookies.get('token')
	if (!token) window.location.replace('/front-symfo-1')
	next()
})

export default router
